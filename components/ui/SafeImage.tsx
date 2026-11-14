'use client';

import { useMemo, useState } from 'react';

type SafeImageProps = {
  src: string;
  alt: string;
  className?: string;
  fallbackClassName?: string;
};

const fallbackStyles = [
  'from-slate-100 via-white to-indigo-100 text-slate-900',
  'from-emerald-50 via-white to-slate-100 text-emerald-950',
  'from-amber-50 via-white to-slate-100 text-amber-950',
  'from-sky-50 via-white to-slate-100 text-sky-950',
  'from-rose-50 via-white to-slate-100 text-rose-950',
  'from-violet-50 via-white to-slate-100 text-violet-950',
];

function styleIndex(label: string) {
  let total = 0;
  for (let index = 0; index < label.length; index += 1) {
    total += label.charCodeAt(index);
  }
  return total % fallbackStyles.length;
}

export function SafeImage({ src, alt, className = '', fallbackClassName = '' }: SafeImageProps) {
  const [failed, setFailed] = useState(!src);
  const fallbackStyle = useMemo(() => fallbackStyles[styleIndex(alt)], [alt]);

  if (failed) {
    return (
      <div
        className={`flex h-full w-full items-center justify-center bg-gradient-to-br p-4 text-center ${fallbackStyle} ${fallbackClassName}`}
        role="img"
        aria-label={alt}
      >
        <span className="max-w-full text-sm font-extrabold leading-tight sm:text-base">{alt}</span>
      </div>
    );
  }

  return <img src={src} alt={alt} className={className} onError={() => setFailed(true)} />;
}
