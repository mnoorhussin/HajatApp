import ReactMarkdown from 'react-markdown';

/**
 * react-markdown, isolated so it can be code-split away from first paint.
 *
 * ChatWidget used to import it at module scope. ChatWidget renders on every
 * landing-page visit, so the ~118KB markdown chunk was downloaded by everyone —
 * Lighthouse measured ~92KB of it as unused on the homepage. Nothing on the
 * page renders markdown until the chat panel is open AND a reply has come back,
 * so the import lives behind a React.lazy boundary here instead.
 */
export default function ChatMarkdown({ children }: { children: string }) {
  return <ReactMarkdown>{children}</ReactMarkdown>;
}
