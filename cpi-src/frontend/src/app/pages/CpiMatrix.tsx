import { useI18n } from '../i18n';

// CPI Matrix 3x3: Profitability (Hi/Med/Lo) × Churn (Lo/Med/Hi)
const MATRIX: Record<string, { code: string; name: string; strategy: string; count: number; pct: number; hot?: boolean }> = {
  '2_0': { code: 'C9', name: 'Crown Jewel', strategy: 'VIP + Wealth Mgmt', count: 412, pct: 5 },
  '2_1': { code: 'C6', name: 'Restless Star', strategy: 'Proactive RM + Up-sell', count: 387, pct: 4 },
  '2_2': { code: 'C3', name: 'Burning Bridge', strategy: 'Emergency RM + Bespoke', count: 298, pct: 3, hot: true },
  '1_0': { code: 'C8', name: 'Steady Earner', strategy: 'Cross-sell Journey', count: 1240, pct: 14 },
  '1_1': { code: 'C5', name: 'Swing Voter', strategy: 'CX + Cross-sell', count: 1890, pct: 22 },
  '1_2': { code: 'C2', name: 'Fading Signal', strategy: 'Selective Retention', count: 920, pct: 11 },
  '0_0': { code: 'C7', name: 'Sleeping Giant', strategy: 'Long-term CLV', count: 1650, pct: 19 },
  '0_1': { code: 'C4', name: 'Casual Visitor', strategy: 'Light digital', count: 1380, pct: 16 },
  '0_2': { code: 'C1', name: 'Ghost', strategy: 'Allow natural churn', count: 591, pct: 7 },
};

const PROFIT_TIERS = ['Hi', 'Med', 'Lo'];
const CHURN_TIERS = ['Lo', 'Med', 'Hi'];

function CellCard({ profitIdx, churnIdx }: { profitIdx: number; churnIdx: number }) {
  const key = `${2 - profitIdx}_${churnIdx}`;
  const cell = MATRIX[key];
  if (!cell) return <div />;

  const isHot = cell.hot;
  const bg = isHot
    ? 'bg-[#B4522E] text-white border-[#B4522E]'
    : 'bg-white text-slate-800 border-slate-200 hover:shadow-md';

  return (
    <div className={`rounded-xl border p-4 transition cursor-pointer ${bg}`}>
      <div className="flex items-center justify-between mb-1">
        <span className={`text-[10px] font-mono font-bold ${isHot ? 'text-white/80' : 'text-slate-400'}`}>{cell.code}</span>
        {isHot && <span className="text-[9px] font-bold bg-white text-[#B4522E] px-1.5 py-0.5 rounded-full">HOT TARGET</span>}
      </div>
      <p className={`text-sm font-semibold ${isHot ? 'text-white' : 'text-slate-800'}`}>{cell.name}</p>
      <p className={`text-[11px] mt-0.5 ${isHot ? 'text-white/80' : 'text-slate-500'}`}>{cell.strategy}</p>
      <p className={`text-xl font-bold mt-2 ${isHot ? 'text-white' : 'text-slate-900'}`}>
        {cell.count.toLocaleString('id-ID')}
      </p>
      <p className={`text-[11px] ${isHot ? 'text-white/70' : 'text-slate-400'}`}>{cell.pct}% portofolio</p>
    </div>
  );
}

export function CpiMatrix() {
  const { lang } = useI18n();

  return (
    <div className="p-6 space-y-5">
      {/* Header */}
      <div>
        <p className="text-xs text-slate-400 font-mono mb-1">CPI-01</p>
        <h1 className="text-2xl font-bold text-slate-900">
          {lang === 'id' ? 'Matriks CPI — Ringkasan' : 'CPI Matrix — Overview'}
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          {lang === 'id'
            ? 'Peta 9 cluster (Profitability × Churn). Kuadran HOT TARGET (Profit Hi × Churn Hi) disorot.'
            : 'Map of 9 clusters (Profitability × Churn). HOT TARGET quadrant (High Profit × High Churn) is highlighted.'}
        </p>
      </div>

      {/* Matrix grid */}
      <div className="bg-white border border-slate-200 rounded-xl p-6">
        {/* Column headers (Churn) */}
        <div className="grid grid-cols-[70px_1fr_1fr_1fr] gap-3 mb-2">
          <div />
          {CHURN_TIERS.map((t) => (
            <div key={t} className="text-center">
              <p className="text-[10px] font-semibold text-slate-400 uppercase">Churn</p>
              <p className="text-xs font-bold text-slate-600">{t}</p>
            </div>
          ))}
        </div>

        {/* Rows (Profitability) */}
        {PROFIT_TIERS.map((pt, pi) => (
          <div key={pt} className="grid grid-cols-[70px_1fr_1fr_1fr] gap-3 mb-3">
            {/* Row label */}
            <div className="flex flex-col items-center justify-center">
              <p className="text-[10px] font-semibold text-slate-400 uppercase">Profit</p>
              <p className="text-xs font-bold text-slate-600">{pt}</p>
            </div>
            {/* Cells */}
            {CHURN_TIERS.map((_, ci) => (
              <CellCard key={`${pi}_${ci}`} profitIdx={pi} churnIdx={ci} />
            ))}
          </div>
        ))}

        {/* Legend */}
        <div className="flex items-center gap-4 mt-4 pt-4 border-t border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-[#B4522E]" />
            <span className="text-xs text-slate-500">HOT TARGET — {lang === 'id' ? 'prioritas tertinggi' : 'highest priority'}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-white border border-slate-200" />
            <span className="text-xs text-slate-500">{lang === 'id' ? 'Cluster lainnya' : 'Other clusters'}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
