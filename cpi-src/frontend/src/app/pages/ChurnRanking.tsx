import { useI18n } from '../i18n';
import { Download } from 'lucide-react';

// Generate 50 dummy customers sorted by churn index desc
const BRANCHES = ['Jakarta Pusat', 'Bandung', 'Surabaya', 'Medan', 'Denpasar'];
const FIRST = ['Andi', 'Bagus', 'Citra', 'Dewi', 'Eka', 'Fajar', 'Gita', 'Hadi', 'Indah', 'Joko', 'Kartika', 'Lina', 'Maya', 'Nanda', 'Oki', 'Putri', 'Rian', 'Sari', 'Tono', 'Wulan', 'Yusuf', 'Zahra'];
const LAST = ['Pratama', 'Wijaya', 'Santoso', 'Kusuma', 'Halim', 'Nugroho', 'Saputra', 'Anggraini', 'Hidayat', 'Permana'];
const CLUSTERS = ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9'];

function seededRandom(seed: number) {
  let s = seed;
  return () => { s = (s * 1103515245 + 12345) & 0x7fffffff; return s / 0x7fffffff; };
}

const rng = seededRandom(42);
const CUSTOMERS = Array.from({ length: 50 }, (_, i) => ({
  rank: i + 1,
  id: `CUS${10230 + i}`,
  name: `${FIRST[Math.floor(rng() * FIRST.length)]} ${LAST[Math.floor(rng() * LAST.length)]}`,
  branch: BRANCHES[Math.floor(rng() * BRANCHES.length)],
  churnIndex: 99 - Math.floor(i * 0.6 + rng() * 3),
  tier: i < 15 ? 'Hi' : i < 35 ? 'Med' : 'Lo',
  cluster: CLUSTERS[Math.floor(rng() * CLUSTERS.length)],
}));

function TierBadge({ tier }: { tier: string }) {
  const cls = tier === 'Hi' ? 'bg-red-50 text-red-700' : tier === 'Med' ? 'bg-amber-50 text-amber-700' : 'bg-green-50 text-green-700';
  return <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${cls}`}>{tier}</span>;
}

export function ChurnRanking() {
  const { lang } = useI18n();

  return (
    <div className="p-6 space-y-5">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs text-slate-400 font-mono mb-1">CH-02</p>
          <h1 className="text-2xl font-bold text-slate-900">
            {lang === 'id' ? 'Peringkat Churn — Top 50' : 'Churn Ranking — Top 50'}
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            {lang === 'id'
              ? 'Daftar nasabah paling berisiko di satu cabang.'
              : 'List of highest-risk customers in a branch.'}
          </p>
        </div>
        <button className="flex items-center gap-2 px-3 py-2 text-xs font-medium border border-slate-200 rounded-lg hover:bg-slate-50 transition">
          <Download className="w-3.5 h-3.5" />
          PDF
        </button>
      </div>

      {/* Branch selector */}
      <div className="flex items-center gap-3">
        <label className="text-xs text-slate-500 font-medium">{lang === 'id' ? 'Cabang' : 'Branch'}</label>
        <select className="px-3 py-1.5 text-sm border border-slate-200 rounded-lg bg-white">
          <option>Semua Cabang</option>
          {BRANCHES.map(b => <option key={b}>{b}</option>)}
        </select>
      </div>

      {/* Table */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="text-left py-2.5 px-4 text-xs font-semibold text-slate-500 uppercase w-10">#</th>
              <th className="text-left py-2.5 px-4 text-xs font-semibold text-slate-500 uppercase">{lang === 'id' ? 'Nasabah' : 'Customer'}</th>
              <th className="text-left py-2.5 px-4 text-xs font-semibold text-slate-500 uppercase">{lang === 'id' ? 'Cabang' : 'Branch'}</th>
              <th className="text-left py-2.5 px-4 text-xs font-semibold text-slate-500 uppercase">Churn Index</th>
              <th className="text-left py-2.5 px-4 text-xs font-semibold text-slate-500 uppercase">Tier</th>
              <th className="text-left py-2.5 px-4 text-xs font-semibold text-slate-500 uppercase">Cluster</th>
            </tr>
          </thead>
          <tbody>
            {CUSTOMERS.map((c) => (
              <tr key={c.id} className="border-b border-slate-50 hover:bg-blue-50/30 cursor-pointer">
                <td className="py-2 px-4 text-slate-400 text-xs">{c.rank}</td>
                <td className="py-2 px-4 font-medium text-slate-800">{c.name}</td>
                <td className="py-2 px-4 text-slate-600">{c.branch}</td>
                <td className="py-2 px-4 font-bold text-slate-900">{c.churnIndex}</td>
                <td className="py-2 px-4"><TierBadge tier={c.tier} /></td>
                <td className="py-2 px-4"><span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-slate-100 text-slate-600">{c.cluster}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
