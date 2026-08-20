import { useI18n } from '../i18n';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const SCORE_DISTRIBUTION = [
  { range: '0-20', count: 1820 },
  { range: '20-40', count: 940 },
  { range: '40-60', count: 610 },
  { range: '60-80', count: 380 },
  { range: '80-100', count: 240 },
];

const BAR_COLORS = ['#1D9E75', '#1D9E75', '#BA7517', '#BA7517', '#C0392B'];

export function ChurnModelPerformance() {
  const { lang } = useI18n();

  return (
    <div className="p-6 space-y-5">
      {/* Header */}
      <div>
        <p className="text-xs text-slate-400 font-mono mb-1">CH-03</p>
        <h1 className="text-2xl font-bold text-slate-900">
          {lang === 'id' ? 'Performa Model — Churn' : 'Model Performance — Churn'}
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          {lang === 'id'
            ? 'Indikator kepercayaan bisnis atas model — bukan konsol teknis.'
            : 'Business confidence indicator for the model — not a technical console.'}
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard label={lang === 'id' ? 'Akurasi validasi' : 'Validation accuracy'} value="87%" accent="good" />
        <KpiCard label={lang === 'id' ? 'Presisi (Hi churn)' : 'Precision (Hi churn)'} value="0.81" />
        <KpiCard label={lang === 'id' ? 'Recall (Hi churn)' : 'Recall (Hi churn)'} value="0.74" />
        <KpiCard label={lang === 'id' ? 'Prediksi meleset' : 'Missed predictions'} value="13%" accent="warn" />
      </div>

      {/* Chart + Info */}
      <div className="bg-white border border-slate-200 rounded-xl p-5">
        <h3 className="text-sm font-semibold text-slate-800 mb-1">
          {lang === 'id' ? 'Distribusi skor churn' : 'Churn score distribution'}
        </h3>
        <p className="text-xs text-slate-400 mb-4">
          {lang === 'id'
            ? 'Dilatih terakhir: 28 Jul 2026 · jendela data: 12 bulan'
            : 'Last trained: 28 Jul 2026 · data window: 12 months'}
        </p>
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={SCORE_DISTRIBUTION}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="range" fontSize={11} />
            <YAxis fontSize={11} />
            <Tooltip />
            <Bar dataKey="count" radius={[4, 4, 0, 0]} barSize={48}>
              {SCORE_DISTRIBUTION.map((_, i) => (
                <Cell key={i} fill={BAR_COLORS[i]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>

        {/* Legend */}
        <div className="flex items-center gap-5 mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
          <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded bg-[#1D9E75]" /> Lo risk (0-40)</div>
          <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded bg-[#BA7517]" /> Med risk (40-80)</div>
          <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded bg-[#C0392B]" /> Hi risk (80-100)</div>
        </div>
      </div>
    </div>
  );
}

function KpiCard({ label, value, accent }: { label: string; value: string; accent?: 'good' | 'warn' }) {
  const valueColor = accent === 'good' ? 'text-emerald-600' : accent === 'warn' ? 'text-amber-600' : 'text-slate-900';
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4">
      <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-1">{label}</p>
      <p className={`text-2xl font-bold ${valueColor}`}>{value}</p>
    </div>
  );
}

