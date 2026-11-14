const siteName = 'ComparateurPro';

type ImageWatermarkProps = {
  keyword: string;
  compact?: boolean;
};

export function ImageWatermark({ keyword, compact = false }: ImageWatermarkProps) {
  return (
    <>
      <span
        className={
          compact
            ? 'absolute left-1 top-1 rounded bg-slate-950/85 px-1 py-0.5 text-[6px] font-extrabold uppercase leading-none text-white shadow-sm'
            : 'absolute left-3 top-3 rounded-lg bg-slate-950/85 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wide text-white shadow-sm'
        }
      >
        {siteName}
      </span>
      <span
        className={
          compact
            ? 'absolute inset-x-1 bottom-1 rounded bg-white/95 px-1 py-0.5 text-center text-[6px] font-bold leading-none text-slate-900 shadow-sm'
            : 'absolute inset-x-3 bottom-3 rounded-lg bg-white/90 px-3 py-1.5 text-center text-[11px] font-bold leading-tight text-slate-900 shadow-sm backdrop-blur-sm'
        }
      >
        {keyword}
      </span>
    </>
  );
}
