import { useEffect, useState } from 'react';
import { detectPlatform, storeUrlFor } from '../utils/appStore';

/*
 * Download CTA that resolves to the visitor's own store.
 *
 * Renders as a real anchor rather than a click handler so it stays
 * right-clickable, middle-clickable and keyboard-operable, and so it still
 * works with JS disabled — in which case the href remains "#download" and the
 * visitor lands on the section showing both stores.
 *
 * The store URL is resolved after mount rather than during render: detection
 * reads navigator, and doing that at module scope would break if this is ever
 * pre-rendered.
 */
export default function DownloadButton({
  className = 'btn btn-brand px-6',
  children = 'حمل التطبيق',
  onClick,
}: {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}) {
  const [href, setHref] = useState('#download');

  useEffect(() => {
    const url = storeUrlFor(detectPlatform());
    if (url) setHref(url);
  }, []);

  // Same tab on purpose: on a phone this hands off to the native store app,
  // and a new tab would leave an orphaned blank page behind in the browser.
  return (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  );
}
