import { useI18n } from '../i18n';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Legend } from 'recharts';

const CHURN_DISTRIBUTION = [
  { branch: 'Jakarta Pusat', rate: 18 },
  { branch: 'Bandung', rate: 22 },
  { branch: 'Surabaya', rate: 15 },
  { branch: 'Medan', rate: 28 },
  { branch: 'Denpasar', rate: 12 },
];

const MONTHS = ['Ags', 'Sep', 'Okt', 'Nov', 'Des', 'Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul'];
const TIER_TREND = MONTHS.map((m, i) => ({
  month: m,
  Lo: 620 + Math.round(Math.sin(i / 2) * 40 + i * 2),
  Med: 310 + Math.round(Math.sin(i / 2) * 30 + i * 2),
  Hi: 120 + Math.round(Math.sin(i / 2) * 20 + i * 2),
}));

export function ChurnOverview() {
  const { lang } = useI18n();

  return (
    <div className="p-6 space-y-5">
      {/* Header */}
      <div>
        <p className="text-xs text-slate-400 font-mono mb-1">CH-01</p>
        <h1 className="text-2xl font-bold text-slate-900">
          {lang === 'id' ? 'Ringkasan Churn' : 'Churn Overview'}
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          {lang === 'id'
            ? 'Bandingkan risiko churn antar-cabang dan komposisinya.'
            : 'Compare churn risk across branches and its composition.'}
        </p>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Bar chart - Churn distribution per cabang */}
        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <h3 className="text-sm font-semibold text-slate-800 mb-1">
            {lang === 'id' ? 'Churn distribution per cabang' : 'Churn distribution per branch'}
          </h3>
          <p className="text-xs text-slate-400 mb-4">
            {lang === 'id'
              ? 'Rasio nasabah churn index ≥ 80% ÷ total nasabah'
              : 'Ratio of customers with churn index ≥ 80% ÷ total customers'}
          </p>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={CHURN_DISTRIBUTION}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="branch" fontSize={11} />
              <YAxis tickFormatter={(v) => `${v}%`} fontSize={11} />
              <Tooltip formatter={(v: number) => `${v}%`} />
              <Bar dataKey="rate" fill="#C0392B" radius={[4, 4, 0, 0]} barSize={36} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Line chart - Tier trend */}
        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <h3 className="text-sm font-semibold text-slate-800 mb-1">
            {lang === 'id' ? 'Jumlah nasabah per tier & tren' : 'Customer count per tier & trend'}
          </h3>
          <p className="text-xs text-slate-400 mb-4">
            {lang === 'id' ? 'Lo / Med / Hi selama 12 bulan' : 'Lo / Med / Hi over 12 months'}
          </p>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={TIER_TREND}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" fontSize={11} />
              <YAxis fontSize={11} />
              <Tooltip />
              <Legend verticalAlign="bottom" height={36} />
              <Line type="monotone" dataKey="Lo" stroke="#1D9E75" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="Med" stroke="#BA7517" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="Hi" stroke="#C0392B" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
