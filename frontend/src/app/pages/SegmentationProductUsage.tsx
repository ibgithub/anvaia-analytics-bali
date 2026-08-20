import { useState } from 'react';
import { useI18n } from '../i18n';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const CLUSTERS = ['Young Professional', 'Mass Affluent', 'Active Borrower', 'Pre-Retirement', 'Others'];
const PRODUCTS = ['Tabungan Reguler', 'Deposito', 'KPR', 'Kartu Kredit', 'Mobile Banking', 'QRIS', 'Reksadana', 'Giro'];

// Usage data: product × cluster (percentage)
const USAGE_DATA: Record<string, number[]> = {
  'Tabungan Reguler': [88, 95, 82, 91, 65],
  'Deposito': [15, 72, 28, 85, 10],
  'KPR': [12, 45, 78, 35, 8],
  'Kartu Kredit': [62, 55, 42, 18, 22],
  'Mobile Banking': [95, 68, 55, 28, 42],
  'QRIS': [78, 35, 22, 8, 18],
  'Reksadana': [8, 48, 5, 42, 3],
  'Giro': [5, 38, 15, 22, 8],
};

const BAR_COLORS = ['#1F3864', '#B4522E', '#1D9E75', '#BA7517', '#5B8FC7'];

export function SegmentationProductUsage() {
  const { lang } = useI18n();
  const [viewMode, setViewMode] = useState<'product' | 'cluster'>('product');
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0]);
  const [selectedCluster, setSelectedCluster] = useState(0);

  // View A: Select product → distribution across all clusters
  const productViewData = CLUSTERS.map((c, i) => ({
    cluster: c,
    usage: USAGE_DATA[selectedProduct]?.[i] || 0,
  }));

  // View B: Select cluster → usage of all products in that cluster
  const clusterViewData = PRODUCTS.map((p) => ({
    product: p,
    usage: USAGE_DATA[p]?.[selectedCluster] || 0,
  }));

  return (
    <div className="p-6 space-y-5">
      {/* Header */}
      <div>
        <p className="text-xs text-slate-400 font-mono mb-1">CS-03</p>
        <h1 className="text-2xl font-bold text-slate-900">
          {lang === 'id' ? 'Analisis Penggunaan Produk' : 'Product Usage Analysis'}
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          {lang === 'id'
            ? 'Dua tampilan: pilih produk atau pilih cluster.'
            : 'Two views: select a product or select a cluster.'}
        </p>
      </div>

      {/* Toggle */}
      <div className="flex items-center gap-1 bg-slate-100 rounded-lg p-1 w-fit">
        <button
          onClick={() => setViewMode('product')}
          className={`px-4 py-1.5 text-xs font-medium rounded-md transition ${viewMode === 'product' ? 'bg-white shadow text-slate-800' : 'text-slate-500'}`}
        >
          {lang === 'id' ? 'Per Produk' : 'By Product'}
        </button>
        <button
          onClick={() => setViewMode('cluster')}
          className={`px-4 py-1.5 text-xs font-medium rounded-md transition ${viewMode === 'cluster' ? 'bg-white shadow text-slate-800' : 'text-slate-500'}`}
        >
          {lang === 'id' ? 'Per Cluster' : 'By Cluster'}
        </button>
      </div>

      {viewMode === 'product' ? (
        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <div className="flex items-center gap-3 mb-4">
            <label className="text-xs text-slate-500 font-medium">{lang === 'id' ? 'Produk' : 'Product'}</label>
            <select
              value={selectedProduct}
              onChange={(e) => setSelectedProduct(e.target.value)}
              className="px-3 py-1.5 text-sm border border-slate-200 rounded-lg bg-white"
            >
              {PRODUCTS.map((p) => <option key={p}>{p}</option>)}
            </select>
          </div>
          <h3 className="text-sm font-semibold text-slate-800 mb-1">
            {lang === 'id' ? `Distribusi penggunaan "${selectedProduct}" di semua cluster` : `"${selectedProduct}" usage distribution across all clusters`}
          </h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={productViewData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="cluster" fontSize={10} />
              <YAxis tickFormatter={(v) => `${v}%`} fontSize={11} />
              <Tooltip formatter={(v: number) => `${v}%`} />
              <Bar dataKey="usage" radius={[4, 4, 0, 0]} barSize={40}>
                {productViewData.map((_, i) => (
                  <Cell key={i} fill={BAR_COLORS[i % BAR_COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <div className="flex items-center gap-3 mb-4">
            <label className="text-xs text-slate-500 font-medium">Cluster</label>
            <select
              value={selectedCluster}
              onChange={(e) => setSelectedCluster(Number(e.target.value))}
              className="px-3 py-1.5 text-sm border border-slate-200 rounded-lg bg-white"
            >
              {CLUSTERS.map((c, i) => <option key={i} value={i}>{c}</option>)}
            </select>
          </div>
          <h3 className="text-sm font-semibold text-slate-800 mb-1">
            {lang === 'id' ? `Penggunaan semua produk di cluster "${CLUSTERS[selectedCluster]}"` : `All product usage in "${CLUSTERS[selectedCluster]}" cluster`}
          </h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={clusterViewData} layout="vertical" margin={{ left: 30 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <XAxis type="number" tickFormatter={(v) => `${v}%`} fontSize={11} />
              <YAxis type="category" dataKey="product" width={120} fontSize={11} />
              <Tooltip formatter={(v: number) => `${v}%`} />
              <Bar dataKey="usage" fill="#1F3864" radius={[0, 4, 4, 0]} barSize={20} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}
