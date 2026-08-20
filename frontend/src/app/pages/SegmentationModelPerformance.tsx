import { useI18n } from '../i18n';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const DBI_DATA = [
  { k: 3, dbi: 1.42 },
  { k: 4, dbi: 1.18 },
  { k: 5, dbi: 0.89 },
  { k: 6, dbi: 0.95 },
  { k: 7, dbi: 1.05 },
  { k: 8, dbi: 1.12 },
];

const CLUSTER_SIZES = [
  { name: 'Young Professional', size: 2450, pct: 28 },
  { name: 'Mass Affluent', size: 1890, pct: 22 },
  { name: 'Active Borrower', size: 1720, pct: 20 },
  { name: 'Pre-Retirement', size: 1450, pct: 16 },
  { name: 'Others', size: 1258, pct: 14 },
];

export function SegmentationModelPerformance() {
  const { lang } = useI18n();

  return (
    <div className="p-6 space-y-5">
      {/* Header */}
      <div>
        <p className="text-xs text-slate-400 font-mono mb-1">CS-04</p>
        <h1 className="text-2xl font-bold text-slate-900">
          {lang === 'id' ? 'Performa Model — Segmentasi' : 'Model Performance — Segmentation'}
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          {lang === 'id'
            ? 'DBI per kandidat k, ukuran & keseimbangan cluster, jumlah outlier.'
            : 'DBI per candidate k, cluster size & balance, outlier count.'}
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard label="Davies-Bouldin Index" value="0.89" accent="good" />
        <KpiCard label="k optimal" value="5" />
        <KpiCard label={lang === 'id' ? 'Jumlah outlier' : 'Outlier count'} value="47" accent="warn" />
        <KpiCard label={lang === 'id' ? 'Tanggal training' : 'Training date'} value="28 Jul 2026" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* DBI per k chart */}
        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <h3 className="text-sm font-semibold text-slate-800 mb-1">DBI per kandidat k</h3>
          <p className="text-xs text-slate-400 mb-4">
            {lang === 'id' ? 'Semakin rendah semakin baik. k=5 terpilih.' : 'Lower is better. k=5 selected.'}
          </p>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={DBI_DATA}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="k" fontSize={11} label={{ value: 'k', position: 'insideBottomRight', offset: -5 }} />
              <YAxis fontSize={11} />
              <Tooltip />
              <Bar dataKey="dbi" radius={[4, 4, 0, 0]} barSize={36}>
                {DBI_DATA.map((entry, i) => (
                  <Cell key={i} fill={entry.k === 5 ? '#B4522E' : '#1F3864'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Cluster size & balance */}
        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <h3 className="text-sm font-semibold text-slate-800 mb-1">
            {lang === 'id' ? 'Ukuran & keseimbangan cluster' : 'Cluster size & balance'}
          </h3>
          <p className="text-xs text-slate-400 mb-4">
            {lang === 'id' ? 'Distribusi nasabah per cluster' : 'Customer distribution per cluster'}
          </p>
          <div className="space-y-3">
            {CLUSTER_SIZES.map((c) => (
              <div key={c.name}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium text-slate-700">{c.name}</span>
                  <span className="text-xs text-slate-500">{c.size.toLocaleString('id-ID')} ({c.pct}%)</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#1F3864] rounded-full" style={{ width: `${c.pct * 3}%` }} />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-500">{lang === 'id' ? 'Rasio terbesar/terkecil' : 'Largest/smallest ratio'}</span>
              <span className="font-semibold text-slate-800">1.95x</span>
            </div>
            <div className="flex items-center justify-between text-xs mt-1">
              <span className="text-slate-500">{lang === 'id' ? 'Std deviasi ukuran' : 'Size std deviation'}</span>
              <span className="font-semibold text-slate-800">452</span>
            </div>
          </div>
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
