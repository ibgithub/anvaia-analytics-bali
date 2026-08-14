import { useI18n } from '../i18n';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Download } from 'lucide-react';

// Dummy data sesuai mockup
const KPI = {
  nasabahAktif: 8768,
  cabangCakupan: 5,
  savedProfit: 1840.0,
  campaignCost: 420.0,
  roi: 338,
};

const BRANCH_PIE = [
  { name: 'Jakarta Pusat', value: 2450 },
  { name: 'Bandung', value: 1890 },
  { name: 'Surabaya', value: 1720 },
  { name: 'Medan', value: 1450 },
  { name: 'Denpasar', value: 1258 },
];

const BRANCH_PROFIT = [
  { name: 'Jakarta Pusat', value: 4200 },
  { name: 'Denpasar', value: 3800 },
  { name: 'Bandung', value: 3400 },
  { name: 'Medan', value: 2900 },
  { name: 'Surabaya', value: 2600 },
];

const TOP_PRODUCTS = [
  { rank: 1, name: 'Tabungan Reguler', users: 4521 },
  { rank: 2, name: 'Mobile Banking', users: 3892 },
  { rank: 3, name: 'Deposito Berjangka', users: 2714 },
];

const TOP_CUSTOMERS = [
  { id: 'CUS10230', name: 'PT Maju Bersama', type: 'Korporat', profit: 156.2 },
  { id: 'CUS10245', name: 'PT Karya Nusantara', type: 'Korporat', profit: 142.8 },
  { id: 'CUS10251', name: 'PT Sentosa Jaya', type: 'Korporat', profit: 128.5 },
  { id: 'CUS10233', name: 'CV Sinar Abadi', type: 'Korporat', profit: 115.3 },
  { id: 'CUS10260', name: 'Dewi Anggraini', type: 'Individu', profit: 98.7 },
  { id: 'CUS10241', name: 'PT Boga Rasa', type: 'Korporat', profit: 92.4 },
  { id: 'CUS10238', name: 'Bagus Pratama', type: 'Individu', profit: 87.1 },
  { id: 'CUS10270', name: 'PT Cahaya Timur', type: 'Korporat', profit: 81.6 },
  { id: 'CUS10255', name: 'Kartika Halim', type: 'Individu', profit: 76.3 },
  { id: 'CUS10248', name: 'Fajar Nugroho', type: 'Individu', profit: 71.9 },
];

const PIE_COLORS = ['#1F3864', '#B4522E', '#1D9E75', '#BA7517', '#5B8FC7'];

export function CorporateInsight() {
  const { lang } = useI18n();

  return (
    <div className="p-6 space-y-5">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs text-slate-400 font-mono mb-1">CI-01</p>
          <h1 className="text-2xl font-bold text-slate-900">Corporate Insight</h1>
          <p className="text-sm text-slate-500 mt-1">
            {lang === 'id'
              ? 'Ringkasan portofolio & efektivitas kampanye. Menampilkan seluruh cabang.'
              : 'Portfolio summary & campaign effectiveness. Showing all branches.'}
          </p>
        </div>
        <button className="flex items-center gap-2 px-3 py-2 text-xs font-medium border border-slate-200 rounded-lg hover:bg-slate-50 transition">
          <Download className="w-3.5 h-3.5" />
          {lang === 'id' ? 'Export ringkasan' : 'Export summary'}
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard
          label={lang === 'id' ? 'NASABAH AKTIF' : 'ACTIVE CUSTOMERS'}
          value={KPI.nasabahAktif.toLocaleString('id-ID')}
          sub={`${KPI.cabangCakupan} ${lang === 'id' ? 'cabang dalam cakupan' : 'branches in scope'}`}
        />
        <KpiCard
          label="TOTAL SAVED PROFIT"
          value={`Rp ${KPI.savedProfit.toFixed(1)} jt`}
          sub={lang === 'id' ? 'dari kampanye retensi (matang)' : 'from retention campaigns (matured)'}
          valueColor="text-emerald-600"
        />
        <KpiCard
          label="TOTAL CAMPAIGN COST"
          value={`Rp ${KPI.campaignCost.toFixed(1)} jt`}
          sub={lang === 'id' ? 'biaya aktual + standar' : 'actual + standard cost'}
          valueColor="text-amber-600"
        />
        <KpiCard
          label="OVERALL ROI"
          value={`${KPI.roi}%`}
          sub={lang === 'id' ? 'observasional' : 'observational'}
        />
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Pie chart - Nasabah per cabang */}
        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <h3 className="text-sm font-semibold text-slate-800 mb-1">
            {lang === 'id' ? 'Nasabah aktif per cabang' : 'Active customers per branch'}
          </h3>
          <p className="text-xs text-slate-400 mb-4">
            {lang === 'id' ? 'Distribusi portofolio' : 'Portfolio distribution'}
          </p>
          <ResponsiveContainer width="100%" height={240}>
            <PieChart>
              <Pie data={BRANCH_PIE} cx="50%" cy="50%" outerRadius={90} dataKey="value" label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`} labelLine={false}>
                {BRANCH_PIE.map((_, i) => (
                  <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(v: number) => v.toLocaleString('id-ID')} />
              <Legend verticalAlign="bottom" height={36} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bar chart - Top cabang profitable */}
        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <h3 className="text-sm font-semibold text-slate-800 mb-1">
            {lang === 'id' ? 'Top cabang paling profitable' : 'Most profitable branches'}
          </h3>
          <p className="text-xs text-slate-400 mb-4">
            {lang === 'id' ? '12 bulan terakhir' : 'Last 12 months'}
          </p>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={BRANCH_PROFIT} layout="vertical" margin={{ left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <XAxis type="number" tickFormatter={(v) => `Rp ${v}jt`} fontSize={11} />
              <YAxis type="category" dataKey="name" width={100} fontSize={11} />
              <Tooltip formatter={(v: number) => `Rp ${v} jt`} />
              <Bar dataKey="value" fill="#B4522E" radius={[0, 4, 4, 0]} barSize={20} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom row: Top products & Top customers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Top 3 produk */}
        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <h3 className="text-sm font-semibold text-slate-800 mb-1">
            {lang === 'id' ? 'Top 3 produk terlaris' : 'Top 3 best-selling products'}
          </h3>
          <p className="text-xs text-slate-400 mb-4">
            {lang === 'id' ? '12 bulan · dengan jumlah pengguna' : '12 months · with user count'}
          </p>
          <table className="w-full text-sm">
            <tbody>
              {TOP_PRODUCTS.map((p) => (
                <tr key={p.rank} className="border-b border-slate-100 last:border-0">
                  <td className="py-2.5 pr-3 font-bold text-[#B4522E] w-6">{p.rank}</td>
                  <td className="py-2.5">{p.name}</td>
                  <td className="py-2.5 text-right font-semibold">{p.users.toLocaleString('id-ID')} <span className="text-slate-400 font-normal text-xs">{lang === 'id' ? 'pengguna' : 'users'}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Top 10 nasabah */}
        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-sm font-semibold text-slate-800">
              {lang === 'id' ? 'Top 10 nasabah paling profitable' : 'Top 10 most profitable customers'}
            </h3>
            <button className="text-xs text-slate-500 border border-slate-200 rounded px-2 py-1 hover:bg-slate-50">
              <Download className="w-3 h-3 inline mr-1" />PDF
            </button>
          </div>
          <p className="text-xs text-slate-400 mb-3">
            {lang === 'id' ? 'Klik baris untuk profil' : 'Click row for profile'}
          </p>
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-2 text-slate-500 font-semibold uppercase">{lang === 'id' ? 'Nasabah' : 'Customer'}</th>
                <th className="text-left py-2 text-slate-500 font-semibold uppercase">{lang === 'id' ? 'Tipe' : 'Type'}</th>
                <th className="text-right py-2 text-slate-500 font-semibold uppercase">Profitability</th>
              </tr>
            </thead>
            <tbody>
              {TOP_CUSTOMERS.map((c) => (
                <tr key={c.id} className="border-b border-slate-50 hover:bg-slate-50 cursor-pointer">
                  <td className="py-2">{c.name}</td>
                  <td className="py-2 text-slate-500">{c.type}</td>
                  <td className="py-2 text-right font-semibold">Rp {c.profit.toFixed(1)} jt</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function KpiCard({ label, value, sub, valueColor }: { label: string; value: string; sub: string; valueColor?: string }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-4 border-l-4 border-l-[#B4522E]">
      <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-1">{label}</p>
      <p className={`text-2xl font-bold ${valueColor || 'text-slate-900'}`}>{value}</p>
      <p className="text-xs text-slate-400 mt-1">{sub}</p>
    </div>
  );
}
