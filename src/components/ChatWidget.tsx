import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, SendHorizontal } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

/**
 * ChatWidget.tsx
 * ──────────────────────────────────────────────────────────────────────────
 * The visible chatbot: a floating button that opens a chat panel.
 *
 * THREE responsibilities:
 *   1. Hold the conversation in React state (`messages`).
 *   2. POST it to the backend `/chat` endpoint.
 *   3. Read the streamed reply and show it appearing token-by-token.
 *
 * The API key is NEVER here — the browser only talks to our own backend.
 */

// Where the backend lives. In dev, set VITE_CHAT_API_URL=http://localhost:3000
// in a .env file. In production it defaults to the real API domain.
const API_URL = import.meta.env.VITE_CHAT_API_URL || 'https://api.hajatapp.com';

type Msg = { role: 'user' | 'assistant'; content: string };

const WELCOME: Msg = {
  role: 'assistant',
  content: 'أهلًا بك في حاجات! 👋 كيف أقدر أساعدك اليوم؟',
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([WELCOME]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to the newest message whenever the conversation changes.
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, open]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;

    // Optimistically show the user's message + an empty assistant bubble that
    // we'll fill in as tokens stream in.
    const history = [...messages, { role: 'user', content: text } as Msg];
    setMessages([...history, { role: 'assistant', content: '' }]);
    setInput('');
    setLoading(true);

    // Client-side safety net: if the server never responds, abort after 50s so
    // the user isn't stuck on the typing dots forever (backend caps at 45s).
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 50_000);

    try {
      const res = await fetch(`${API_URL}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: controller.signal,
        // Drop the welcome message from what we send — it's UI-only.
        body: JSON.stringify({ messages: history.filter((m) => m !== WELCOME) }),
      });

      if (!res.ok || !res.body) {
        throw new Error(res.status === 429 ? 'rate' : 'http');
      }

      // ── Read the Server-Sent Events stream ──
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });

        // SSE frames are separated by a blank line; each line starts with "data: ".
        const frames = buffer.split('\n\n');
        buffer = frames.pop() || ''; // keep the incomplete last frame

        for (const frame of frames) {
          const line = frame.replace(/^data: /, '').trim();
          if (!line || line === '[DONE]') continue;
          try {
            const payload = JSON.parse(line);
            if (payload.text) {
              // Append the new token to the last (assistant) message.
              setMessages((prev) => {
                const next = [...prev];
                next[next.length - 1] = {
                  role: 'assistant',
                  content: next[next.length - 1].content + payload.text,
                };
                return next;
              });
            }
          } catch {
            /* ignore malformed frame */
          }
        }
      }
    } catch (err) {
      const e = err as Error;
      const msg =
        e.name === 'AbortError'
          ? 'استغرق الرد وقتًا طويلًا. حاول مرة أخرى.'
          : e.message === 'rate'
            ? 'الرجاء الانتظار قليلًا قبل إرسال المزيد من الرسائل.'
            : 'تعذّر الاتصال. حاول مرة أخرى بعد قليل.';
      setMessages((prev) => {
        const next = [...prev];
        next[next.length - 1] = { role: 'assistant', content: msg };
        return next;
      });
    } finally {
      clearTimeout(timeout);
      setLoading(false);
    }
  }

  return (
    <>
      {/* ── Floating button (bottom-left feels native in RTL) ── */}
      <motion.button
        onClick={() => setOpen((o) => !o)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="افتح المحادثة"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#6C5CE7] text-white shadow-lg shadow-[#6C5CE7]/30 flex items-center justify-center"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? 'x' : 'chat'}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            {open ? <X size={24} /> : <MessageCircle size={24} />}
          </motion.span>
        </AnimatePresence>
      </motion.button>

      {/* ── Chat panel ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            dir="rtl"
            className="fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] max-w-sm h-[70vh] max-h-[560px] flex flex-col rounded-3xl border border-[var(--border)] bg-[var(--surface)] shadow-2xl overflow-hidden font-ar"
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-5 py-4 bg-[#6C5CE7] text-white">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle size={18} />
              </div>
              <div className="leading-tight">
                <p className="font-bold text-sm">مساعد حاجات</p>
                <p className="text-[11px] text-white/80">يرد عادةً خلال لحظات</p>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 hide-scrollbar">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-start' : 'justify-end'}`}>
                  <div
                    className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed prose-p:my-0 ${
                      m.role === 'user'
                        ? 'bg-[#6C5CE7] text-white rounded-tr-md'
                        : 'bg-[var(--bg)] text-[var(--text)] border border-[var(--border)] rounded-tl-md'
                    }`}
                  >
                    {m.content ? (
                      <ReactMarkdown>{m.content}</ReactMarkdown>
                    ) : (
                      // Typing indicator while the first token is on its way.
                      <span className="inline-flex gap-1 py-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--text-muted)] animate-bounce" />
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--text-muted)] animate-bounce [animation-delay:0.15s]" />
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--text-muted)] animate-bounce [animation-delay:0.3s]" />
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="flex items-center gap-2 p-3 border-t border-[var(--border)] bg-[var(--surface)]">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && send()}
                disabled={loading}
                placeholder={loading ? 'جارٍ الرد...' : 'اكتب رسالتك...'}
                className="flex-1 bg-[var(--bg)] text-[var(--text)] placeholder:text-[var(--text-muted)] rounded-full px-4 py-2.5 text-sm outline-none border border-[var(--border)] focus:border-[#6C5CE7] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              />
              <button
                onClick={send}
                disabled={loading || !input.trim()}
                aria-label="إرسال"
                className="w-10 h-10 shrink-0 rounded-full bg-[#6C5CE7] text-white flex items-center justify-center disabled:opacity-40 transition-opacity"
              >
                <SendHorizontal size={16} className="scale-x-[-1]" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
