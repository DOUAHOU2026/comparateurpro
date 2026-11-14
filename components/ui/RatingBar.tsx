export default function RatingBar({ value }: { value: number }) {
  // value is out of 10. We convert it to a percentage.
  const percent = Math.max(0, Math.min(100, (value / 10) * 100));
  const starsCount = Math.round(value / 2);
  return (
    <div>
      <div className="mb-1 flex items-center gap-2">
        <span className="font-black text-amber-500">{'★'.repeat(starsCount)}</span>
        <span className="text-sm font-bold">{value.toFixed(1)}/10</span>
      </div>
      <div className="h-2 rounded-full bg-slate-200">
        <div className="h-2 rounded-full bg-amber-500" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
