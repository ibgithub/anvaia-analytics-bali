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

const PERSONAS = [
  { name: 'Young Professional', count: 2450, pct: 28, desc: 'Digital-savvy · transaksi aktif · sensitif fitur & reward' },
  { name: 'Mass Affluent', count: 1890, pct: 22, desc: 'Mengutamakan hubungan personal · portofolio beragam' },
  { name: 'Active Borrower', count: 1720, pct: 20, desc: 'Terikat produk pinjaman · sensitif suku bunga' },
  { name: 'Pre-Retirement', count: 1450, pct: 16, desc: 'Berorientasi keamanan · tujuan investasi jangka panjang' },
  { name: 'Others', count: 1258, pct: 14, desc: 'Memerlukan analisis lebih lanjut' },
];

const BAR_COLORS = ['#1F3864', '#B4522E', '#1D9E75', '#BA7517', '#5B8FC7'];

export function SegmentationOverview() {
  const { lang } = useI18n();

  return (
    <div className="p-6 space-y-5">
      {/* Header */}
      <div>
        <p className="text-xs text-slate-400 font-mono mb-1">CS-01</p>
        <h1 className="text-2xl font-bold text-slate-900">
          {lang === 'id' ? 'Ringkasan Segmentasi' : 'Segmentation Overview'}
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          {lang === 'id'
            ? 'Hasil pemilihan model & peta segmen. Model terpilih: K-Means (DBI terendah).'
            : 'Model selection result & segment map. Selected model: K-Means (lowest DBI).'}
        </p>
      </div>

      {/* DBI Chart + Model Info */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <h3 className="text-sm font-semibold text-slate-800 mb-1">Davies-Bouldin Index per k</h3>
          <p className="text-xs text-slate-400 mb-4">k optimal = 5 (DBI terendah)</p>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={DBI_DATA}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="k" fontSize={11} label={{ value: 'k', position: 'insideBottomRight', offset: -5 }} />
              <YAxis fontSize={11} />
              <Tooltip />
              <Bar dataKey="dbi" fill="#1F3864" radius={[4, 4, 0, 0]} barSize={32}>
                {DBI_DATA.map((entry, i) => (
                  <Cell key={i} fill={entry.k === 5 ? '#B4522E' : '#1F3864'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <h3 className="text-sm font-semibold text-slate-800 mb-3">
            {lang === 'id' ? 'Informasi Model' : 'Model Information'}
          </h3>
          <div className="space-y-3">
            <InfoRow label={lang === 'id' ? 'Model Terpilih' : 'Selected Model'} value="K-Means" />
            <InfoRow label="k optimal" value="5" />
            <InfoRow label="Davies-Bouldin Index" value="0.89" />
            <InfoRow label={lang === 'id' ? 'Total Nasabah' : 'Total Customers'} value="8,768" />
            <InfoRow label={lang === 'id' ? 'Tanggal Training' : 'Training Date'} value="28 Jul 2026" />
            <InfoRow label={lang === 'id' ? 'Jendela Data' : 'Data Window'} value="12 bulan" />
          </div>
        </div>
      </div>

      {/* Persona Cards */}
      <div>
        <h3 className="text-sm font-semibold text-slate-800 mb-3">
          {lang === 'id' ? 'Persona / Cluster' : 'Persona / Clusters'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PERSONAS.map((p, i) => (
            <div key={p.name} className="bg-white border border-slate-200 rounded-xl p-4 hover:shadow-md transition cursor-pointer">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: BAR_COLORS[i] }} />
                <h4 className="text-sm font-semibold text-slate-800">{p.name}</h4>
              </div>
              <p className="text-xs text-slate-500 mb-3">{p.desc}</p>
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-xl font-bold text-slate-900">{p.count.toLocaleString('id-ID')}</p>
                  <p className="text-[11px] text-slate-400">{lang === 'id' ? 'nasabah' : 'customers'}</p>
                </div>
                <span className="text-sm font-semibold text-slate-500">{p.pct}%</span>
              </div>
              {/* Progress bar */}
              <div className="mt-2 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${p.pct}%`, backgroundColor: BAR_COLORS[i] }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between py-1.5 border-b border-slate-50">
      <span className="text-xs text-slate-500">{label}</span>
      <span className="text-xs font-semibold text-slate-800">{value}</span>
    </div>
  );
}

