import { useState } from 'react';
import { useI18n } from '../i18n';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const CLUSTERS = [
  { id: 0, name: 'Young Professional', strategy: 'Reward & Cashback Digital · Mobile-first engagement · Gamification loyalty' },
  { id: 1, name: 'Mass Affluent', strategy: 'Dedicated RM · Private banking access · Wealth management advisory' },
  { id: 2, name: 'Active Borrower', strategy: 'Preferential rate · Restrukturisasi fasilitas · Cross-sell asuransi kredit' },
  { id: 3, name: 'Pre-Retirement', strategy: 'Deposito & obligasi campaign · Retirement planning seminar · Safe investment' },
  { id: 4, name: 'Others', strategy: 'Light digital engagement · Basic product education · Monitor & re-evaluate' },
];

const CHARACTERISTICS = [
  { label: 'Avg Age', values: [28, 45, 38, 56, 34] },
  { label: 'Avg Education (yr)', values: [16, 18, 14, 16, 13] },
  { label: 'Avg Profitability (jt)', values: [45, 156, 82, 98, 22] },
  { label: 'Avg Tenure (yr)', values: [2, 12, 6, 18, 3] },
  { label: 'Digital Usage (%)', values: [92, 65, 58, 32, 45] },
];

const AGE_EDUCATION_PROFIT = [
  { cluster: 'Young Prof', age: 28, education: 16, profit: 45 },
  { cluster: 'Mass Affluent', age: 45, education: 18, profit: 156 },
  { cluster: 'Active Borrower', age: 38, education: 14, profit: 82 },
  { cluster: 'Pre-Retirement', age: 56, education: 16, profit: 98 },
  { cluster: 'Others', age: 34, education: 13, profit: 22 },
];

export function SegmentationCharacteristics() {
  const { lang } = useI18n();
  const [selected, setSelected] = useState(0);

  const cluster = CLUSTERS[selected];

  return (
    <div className="p-6 space-y-5">
      {/* Header */}
      <div>
        <p className="text-xs text-slate-400 font-mono mb-1">CS-02</p>
        <h1 className="text-2xl font-bold text-slate-900">
          {lang === 'id' ? 'Karakteristik & Strategi Cluster' : 'Cluster Characteristics & Strategy'}
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          {lang === 'id'
            ? 'Profil & aksi per cluster. Pilih cluster untuk melihat detail.'
            : 'Profile & actions per cluster. Select a cluster to view details.'}
        </p>
      </div>

      {/* Cluster selector */}
      <div className="flex items-center gap-3">
        <label className="text-xs text-slate-500 font-medium">Cluster</label>
        <select
          value={selected}
          onChange={(e) => setSelected(Number(e.target.value))}
          className="px-3 py-1.5 text-sm border border-slate-200 rounded-lg bg-white"
        >
          {CLUSTERS.map((c, i) => (
            <option key={i} value={i}>{c.name}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Characteristics table */}
        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <h3 className="text-sm font-semibold text-slate-800 mb-1">
            {lang === 'id' ? 'Karakteristik Cluster' : 'Cluster Characteristics'}
          </h3>
          <p className="text-xs text-slate-400 mb-4">{cluster.name}</p>
          <table className="w-full text-sm">
            <tbody>
              {CHARACTERISTICS.map((ch) => (
                <tr key={ch.label} className="border-b border-slate-50">
                  <td className="py-2 text-slate-500">{ch.label}</td>
                  <td className="py-2 text-right font-semibold text-slate-800">{ch.values[selected]}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-4 pt-4 border-t border-slate-100">
            <p className="text-xs font-semibold text-slate-600 mb-1">
              {lang === 'id' ? 'Strategi Bisnis' : 'Business Strategy'}
            </p>
            <p className="text-xs text-slate-500 leading-relaxed">{cluster.strategy}</p>
          </div>
        </div>

        {/* Line chart: Age / Education / Profitability per cluster */}
        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <h3 className="text-sm font-semibold text-slate-800 mb-1">
            Age / Education / Profitability
          </h3>
          <p className="text-xs text-slate-400 mb-4">
            {lang === 'id' ? 'Perbandingan antar cluster' : 'Comparison across clusters'}
          </p>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={AGE_EDUCATION_PROFIT}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="cluster" fontSize={10} />
              <YAxis fontSize={11} />
              <Tooltip />
              <Legend verticalAlign="bottom" height={36} />
              <Line type="monotone" dataKey="age" name="Age" stroke="#1F3864" strokeWidth={2} />
              <Line type="monotone" dataKey="education" name="Education (yr)" stroke="#1D9E75" strokeWidth={2} />
              <Line type="monotone" dataKey="profit" name="Profit (jt)" stroke="#B4522E" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
