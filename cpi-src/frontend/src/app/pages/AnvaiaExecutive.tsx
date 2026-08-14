import { 
  DollarSign, 
  Repeat, 
  TrendingUp, 
  ShoppingCart,
  ArrowUpRight,
  Calendar
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend,
  PieChart,
  Pie,
  Cell,
  ComposedChart
} from 'recharts';
import { AdvancedSankeyDiagram } from '../components/AdvancedSankeyDiagram';
import { SimpleSankeyDiagram } from '../components/SimpleSankeyDiagram';

// Mock data
const revenueData = [
  { month: 'Jan', revenue: 420000000, recurring: 280000000, transactions: 12400 },
  { month: 'Feb', revenue: 485000000, recurring: 310000000, transactions: 14200 },
  { month: 'Mar', revenue: 520000000, recurring: 345000000, transactions: 15800 },
  { month: 'Apr', revenue: 590000000, recurring: 385000000, transactions: 17500 },
  { month: 'May', revenue: 635000000, recurring: 420000000, transactions: 19200 },
  { month: 'Jun', revenue: 720000000, recurring: 465000000, transactions: 21800 },
];

const conversionData = [
  { module: 'Auto-Debit', rate: 41.2, color: '#00A63E' },
  { module: 'Hyperpersonalized', rate: 34.5, color: '#155DFC' },
  { module: 'Auto Reminder', rate: 28.3, color: '#8B5CF6' },
  { module: 'Geo Merchant', rate: 25.6, color: '#FDC700' },
  { module: 'Upselling', rate: 22.7, color: '#C10007' },
  { module: 'Cross-Selling', rate: 19.8, color: '#FB923C' },
];

const performanceData = [
  { name: 'Hyperpersonalized', value: 28 },
  { name: 'Auto Reminder', value: 15 },
  { name: 'Upselling', value: 18 },
  { name: 'Cross-Selling', value: 12 },
  { name: 'Auto-Debit', value: 17 },
  { name: 'Geo Merchant', value: 10 },
];

const COLORS = ['#155DFC', '#8B5CF6', '#00A63E', '#FDC700', '#C10007', '#FB923C'];

// Advanced 5-Layer Sankey data for Complete Mobile Banking User Journey
const advancedSankeyNodes = [
  // STAGE 1 - ENTRY (Layer 0)
  { name: 'Login', color: '#155DFC', layer: 0, value: 100 },
  
  // STAGE 2 - EARLY SPLIT (Layer 1)
  { name: 'Drop-off', color: '#94a3b8', layer: 1, value: 15 },
  { name: 'Active Users', color: '#00A63E', layer: 1, value: 85 },
  
  // STAGE 3 - BANKING ACTIVITIES (Layer 2)
  { name: 'Transfer', color: '#64748b', layer: 2, value: 28.5 },
  { name: 'Payment', color: '#64748b', layer: 2, value: 22.3 },
  { name: 'Check Balance', color: '#64748b', layer: 2, value: 18.7 },
  { name: 'Investment', color: '#64748b', layer: 2, value: 8.5 },
  { name: 'AI: Hyperpersonalized', color: '#155DFC', layer: 2, value: 3.2 },
  { name: 'AI: Auto Reminder', color: '#8B5CF6', layer: 2, value: 1.8 },
  { name: 'AI: Upselling', color: '#C10007', layer: 2, value: 1.2 },
  { name: 'AI: Cross-Selling', color: '#FB923C', layer: 2, value: 0.8 },
  
  // STAGE 4 - USER INTERACTION (Layer 3)
  // Regular Banking
  { name: 'Transfer: Completed', color: '#64748b', layer: 3, value: 26.8 },
  { name: 'Payment: Completed', color: '#64748b', layer: 3, value: 20.5 },
  { name: 'Balance: Viewed', color: '#64748b', layer: 3, value: 18.7 },
  { name: 'Investment: Completed', color: '#64748b', layer: 3, value: 7.2 },
  
  // AI Module Interactions (Sequential: Viewed → Clicked → Filled)
  { name: 'HP: Viewed', color: '#155DFC', layer: 3, value: 2.9 },
  { name: 'HP: Clicked', color: '#155DFC', layer: 3, value: 2.1 },
  { name: 'HP: Filled', color: '#155DFC', layer: 3, value: 1.5 },
  
  { name: 'AR: Viewed', color: '#8B5CF6', layer: 3, value: 1.6 },
  { name: 'AR: Clicked', color: '#8B5CF6', layer: 3, value: 1.2 },
  { name: 'AR: Filled', color: '#8B5CF6', layer: 3, value: 0.8 },
  
  { name: 'Up: Viewed', color: '#C10007', layer: 3, value: 1.0 },
  { name: 'Up: Clicked', color: '#C10007', layer: 3, value: 0.7 },
  { name: 'Up: Filled', color: '#C10007', layer: 3, value: 0.5 },
  
  { name: 'CS: Viewed', color: '#FB923C', layer: 3, value: 0.7 },
  { name: 'CS: Clicked', color: '#FB923C', layer: 3, value: 0.5 },
  { name: 'CS: Filled', color: '#FB923C', layer: 3, value: 0.3 },
  
  // STAGE 5 - FINAL OUTCOME (Layer 4)
  { name: 'Transaction Success', color: '#00A63E', layer: 4, value: 71.2 },
  { name: 'Transaction Failed', color: '#cbd5e1', layer: 4, value: 2.8 },
];

const advancedSankeyLinks = [
  // STAGE 1 → STAGE 2
  { source: 0, target: 1, value: 15, color: '#94a3b8' },   // Login → Drop-off
  { source: 0, target: 2, value: 85, color: '#00A63E' },   // Login → Active Users
  
  // STAGE 2 → STAGE 3 (Active Users to All Banking Activities)
  { source: 2, target: 3, value: 28.5, color: '#64748b' },  // Active → Transfer
  { source: 2, target: 4, value: 22.3, color: '#64748b' },  // Active → Payment
  { source: 2, target: 5, value: 18.7, color: '#64748b' },  // Active → Check Balance
  { source: 2, target: 6, value: 8.5, color: '#64748b' },   // Active → Investment
  { source: 2, target: 7, value: 3.2, color: '#155DFC' },   // Active → AI Hyperpersonalized
  { source: 2, target: 8, value: 1.8, color: '#8B5CF6' },   // Active → AI Auto Reminder
  { source: 2, target: 9, value: 1.2, color: '#C10007' },   // Active → AI Upselling
  { source: 2, target: 10, value: 0.8, color: '#FB923C' },  // Active → AI Cross-Selling
  
  // STAGE 3 → STAGE 4 (Activities to Interactions)
  // Regular Banking (direct completion)
  { source: 3, target: 11, value: 26.8, color: '#64748b' },  // Transfer → Completed
  { source: 4, target: 12, value: 20.5, color: '#64748b' },  // Payment → Completed
  { source: 5, target: 13, value: 18.7, color: '#64748b' },  // Balance → Viewed
  { source: 6, target: 14, value: 7.2, color: '#64748b' },   // Investment → Completed
  
  // AI Modules (sequential interaction flow)
  // Hyperpersonalized: Module → Viewed → Clicked → Filled
  { source: 7, target: 15, value: 2.9, color: '#155DFC' },   // HP Module → Viewed
  { source: 15, target: 16, value: 2.1, color: '#155DFC' },  // HP Viewed → Clicked
  { source: 16, target: 17, value: 1.5, color: '#155DFC' },  // HP Clicked → Filled
  
  // Auto Reminder: Module → Viewed → Clicked → Filled
  { source: 8, target: 18, value: 1.6, color: '#8B5CF6' },   // AR Module → Viewed
  { source: 18, target: 19, value: 1.2, color: '#8B5CF6' },  // AR Viewed → Clicked
  { source: 19, target: 20, value: 0.8, color: '#8B5CF6' },  // AR Clicked → Filled
  
  // Upselling: Module → Viewed → Clicked → Filled
  { source: 9, target: 21, value: 1.0, color: '#C10007' },   // Up Module → Viewed
  { source: 21, target: 22, value: 0.7, color: '#C10007' },  // Up Viewed → Clicked
  { source: 22, target: 23, value: 0.5, color: '#C10007' },  // Up Clicked → Filled
  
  // Cross-Selling: Module → Viewed → Clicked → Filled
  { source: 10, target: 24, value: 0.7, color: '#FB923C' },  // CS Module → Viewed
  { source: 24, target: 25, value: 0.5, color: '#FB923C' },  // CS Viewed → Clicked
  { source: 25, target: 26, value: 0.3, color: '#FB923C' },  // CS Clicked → Filled
  
  // STAGE 4 → STAGE 5 (All interactions to final outcomes)
  // Regular Banking to Success
  { source: 11, target: 27, value: 26.5, color: '#00A63E' },  // Transfer Completed → Success
  { source: 11, target: 28, value: 0.3, color: '#cbd5e1' },   // Transfer Completed → Failed
  
  { source: 12, target: 27, value: 20.1, color: '#00A63E' },  // Payment Completed → Success
  { source: 12, target: 28, value: 0.4, color: '#cbd5e1' },   // Payment Completed → Failed
  
  { source: 13, target: 27, value: 18.7, color: '#00A63E' },  // Balance Viewed → Success
  
  { source: 14, target: 27, value: 7.0, color: '#00A63E' },   // Investment Completed → Success
  { source: 14, target: 28, value: 0.2, color: '#cbd5e1' },   // Investment Completed → Failed
  
  // AI Modules - Only from "Filled" to outcomes
  { source: 17, target: 27, value: 1.1, color: '#00A63E' },   // HP Filled → Success
  { source: 17, target: 28, value: 0.4, color: '#cbd5e1' },   // HP Filled → Failed
  
  { source: 20, target: 27, value: 0.6, color: '#00A63E' },   // AR Filled → Success
  { source: 20, target: 28, value: 0.2, color: '#cbd5e1' },   // AR Filled → Failed
  
  { source: 23, target: 27, value: 0.4, color: '#00A63E' },   // Up Filled → Success
  { source: 23, target: 28, value: 0.1, color: '#cbd5e1' },   // Up Filled → Failed
  
  { source: 26, target: 27, value: 0.2, color: '#00A63E' },   // CS Filled → Success
  { source: 26, target: 28, value: 0.1, color: '#cbd5e1' },   // CS Filled → Failed
];

interface ComparisonMetricCardProps {
  title: string;
  allProductValue: number;
  allProductLabel: string;
  anvaiaValue: number;
  anvaiaLabel: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  unit?: string;
  growth?: number;
}

function ComparisonMetricCard({ 
  title, 
  allProductValue,
  allProductLabel,
  anvaiaValue,
  anvaiaLabel,
  icon: Icon, 
  iconBg, 
  iconColor,
  unit = '',
  growth = 0
}: ComparisonMetricCardProps) {
  // Calculate performance comparison
  const maxValue = Math.max(allProductValue, anvaiaValue);
  const anvaiaPercentage = (anvaiaValue / maxValue) * 100;
  const allProductPercentage = (allProductValue / maxValue) * 100;
  const performanceDiff = ((anvaiaValue - allProductValue) / allProductValue) * 100;
  
  return (
    <div className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <p className="text-sm text-slate-600 font-medium">{title}</p>
        <div className={`${iconBg} ${iconColor} p-2.5 rounded-lg`}>
          <Icon className="w-4 h-4" />
        </div>
      </div>
      
      <div className="space-y-4">
        {/* Values */}
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs text-[#155DFC] mb-0.5">AnvAIa</p>
            <h3 className="text-xl font-bold text-[#155DFC]">{anvaiaLabel}</h3>
          </div>
          <div className="text-right">
            <p className="text-xs text-slate-500 mb-0.5">All Product</p>
            <h4 className="text-lg font-bold text-slate-900">{allProductLabel}</h4>
          </div>
        </div>
        
        {/* Side-by-side Progress Bars */}
        <div className="space-y-3">
          {/* AnvAIa Progress Bar */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-[#155DFC] font-medium">AnvAIa</span>
              <span className="text-xs text-[#155DFC] font-semibold">{anvaiaPercentage.toFixed(1)}%</span>
            </div>
            <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#155DFC] rounded-full transition-all duration-700 ease-out"
                style={{ width: `${anvaiaPercentage}%` }}
              />
            </div>
          </div>
          
          {/* All Product Progress Bar */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-slate-600 font-medium">All Product</span>
              <span className="text-xs text-slate-600 font-semibold">{allProductPercentage.toFixed(1)}%</span>
            </div>
            <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-slate-400 rounded-full transition-all duration-700 ease-out"
                style={{ width: `${allProductPercentage}%` }}
              />
            </div>
          </div>
        </div>
        
        {/* Performance and Growth */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-500">Performance vs All Product</span>
            <span className={`font-semibold ${performanceDiff >= 0 ? 'text-[#00A63E]' : 'text-[#C10007]'}`}>
              {performanceDiff >= 0 ? '+' : ''}{performanceDiff.toFixed(1)}%
            </span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-500">Growth vs Last Month</span>
            <span className={`font-semibold flex items-center gap-1 ${growth >= 0 ? 'text-[#00A63E]' : 'text-[#C10007]'}`}>
              <ArrowUpRight className={`w-3 h-3 ${growth < 0 ? 'rotate-90' : ''}`} />
              {Math.abs(growth).toFixed(1)}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AnvaiaExecutive() {
  const formatCurrency = (value: number) => {
    return `Rp ${(value / 1000000).toFixed(0)}M`;
  };

  const formatNumber = (value: number) => {
    return value.toLocaleString('id-ID');
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Executive Dashboard</h1>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
            <Calendar className="w-4 h-4 text-slate-600" />
            <span className="text-sm text-slate-700">Jan - Jun 2026</span>
          </button>
        </div>
      </div>

      {/* Comparison Metric Cards */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        <ComparisonMetricCard
          title="Total Revenue"
          allProductValue={7900000000}
          allProductLabel="Rp 7.9T"
          anvaiaValue={3370000000}
          anvaiaLabel="Rp 3.37T"
          icon={DollarSign}
          iconBg="bg-emerald-50"
          iconColor="text-emerald-700"
          unit="Rp"
          growth={12.5}
        />
        <ComparisonMetricCard
          title="Total Recurring Revenue"
          allProductValue={4800000000}
          allProductLabel="Rp 4.8T"
          anvaiaValue={2200000000}
          anvaiaLabel="Rp 2.20T"
          icon={Repeat}
          iconBg="bg-blue-50"
          iconColor="text-[#155DFC]"
          unit="Rp"
          growth={15.3}
        />
        <ComparisonMetricCard
          title="Conversion Rate"
          allProductValue={23.4}
          allProductLabel="23.4%"
          anvaiaValue={31.5}
          anvaiaLabel="31.5%"
          icon={TrendingUp}
          iconBg="bg-blue-50"
          iconColor="text-[#155DFC]"
          unit="%"
          growth={8.7}
        />
        <ComparisonMetricCard
          title="Total Transaction"
          allProductValue={285000}
          allProductLabel="285K"
          anvaiaValue={132000}
          anvaiaLabel="132K"
          icon={ShoppingCart}
          iconBg="bg-blue-50"
          iconColor="text-[#155DFC]"
          unit="K"
          growth={10.2}
        />
      </div>

      {/* Top Performers & Needs Attention */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Top Performers */}
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <div className="flex items-center gap-2 mb-5">
            <span className="text-lg">⭐</span>
            <h3 className="text-lg font-bold text-slate-900">Top Performers</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#155DFC] text-white rounded-full flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <span className="text-sm font-medium text-slate-900">Auto-Debit</span>
              </div>
              <span className="text-base font-bold text-[#00A63E]">94.2%</span>
            </div>

            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#155DFC] text-white rounded-full flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <span className="text-sm font-medium text-slate-900">Hyperpersonalize</span>
              </div>
              <span className="text-base font-bold text-[#00A63E]">89.7%</span>
            </div>

            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#155DFC] text-white rounded-full flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <span className="text-sm font-medium text-slate-900">Upselling</span>
              </div>
              <span className="text-base font-bold text-[#00A63E]">85.3%</span>
            </div>
          </div>
        </div>

        {/* Needs Attention */}
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <div className="flex items-center gap-2 mb-5">
            <span className="text-lg">⚠️</span>
            <h3 className="text-lg font-bold text-slate-900">Needs Attention</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#155DFC] text-white rounded-full flex items-center justify-center font-bold text-sm">
                  6
                </div>
                <span className="text-sm font-medium text-slate-900">Auto Reminder</span>
              </div>
              <span className="text-base font-bold text-[#FDC700]">68.4%</span>
            </div>

            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#155DFC] text-white rounded-full flex items-center justify-center font-bold text-sm">
                  5
                </div>
                <span className="text-sm font-medium text-slate-900">Cross-selling</span>
              </div>
              <span className="text-base font-bold text-[#FDC700]">72.1%</span>
            </div>

            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#155DFC] text-white rounded-full flex items-center justify-center font-bold text-sm">
                  4
                </div>
                <span className="text-sm font-medium text-slate-900">Geo Merchant</span>
              </div>
              <span className="text-base font-bold text-[#FDC700]">78.9%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Revenue Trend */}
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Revenue & Recurring Revenue Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#155DFC" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#155DFC" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorRecurring" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00A63E" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#00A63E" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" stroke="#64748b" style={{ fontSize: '12px' }} />
              <YAxis stroke="#64748b" style={{ fontSize: '12px' }} tickFormatter={formatCurrency} />
              <Tooltip 
                formatter={(value: number) => formatCurrency(value)}
                contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }}
              />
              <Legend />
              <Area 
                type="monotone" 
                dataKey="revenue" 
                stroke="#3b82f6" 
                strokeWidth={2}
                fillOpacity={1} 
                fill="url(#colorRevenue)" 
                name="Total Revenue"
              />
              <Area 
                type="monotone" 
                dataKey="recurring" 
                stroke="#10b981" 
                strokeWidth={2}
                fillOpacity={1} 
                fill="url(#colorRecurring)" 
                name="Recurring Revenue"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Transaction Trend */}
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Total Transaction Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" stroke="#64748b" style={{ fontSize: '12px' }} />
              <YAxis stroke="#64748b" style={{ fontSize: '12px' }} tickFormatter={formatNumber} />
              <Tooltip 
                formatter={(value: number) => formatNumber(value)}
                contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }}
              />
              <Bar dataKey="transactions" fill="#7c3aed" radius={[8, 8, 0, 0]} name="Transactions" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Conversion Rate by Module */}
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Conversion Rate per Modul</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={conversionData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis type="number" stroke="#64748b" style={{ fontSize: '12px' }} unit="%" />
              <YAxis type="category" dataKey="module" stroke="#64748b" style={{ fontSize: '12px' }} width={120} />
              <Tooltip 
                formatter={(value: number) => `${value}%`}
                contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }}
              />
              <Bar dataKey="rate" radius={[0, 8, 8, 0]} name="Conversion Rate">
                {conversionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Module Performance Distribution */}
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Module Contribution Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={performanceData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {performanceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value: number) => `${value}%`}
                contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Module Performance Table */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 mt-6">
        <h3 className="text-lg font-bold text-slate-900 mb-4">Performance Summary per Modul</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">Modul</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-slate-700">Conversion Rate</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-slate-700">Kontribusi</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-slate-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {conversionData.map((item, index) => (
                <tr key={index} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="font-medium text-slate-900">{item.module}</span>
                    </div>
                  </td>
                  <td className="text-right py-3 px-4 text-slate-900 font-medium">{item.rate}%</td>
                  <td className="text-right py-3 px-4 text-slate-700">
                    {performanceData[index].value}%
                  </td>
                  <td className="text-right py-3 px-4">
                    <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                      item.rate > 30 ? 'bg-green-50 text-green-700' :
                      item.rate > 20 ? 'bg-blue-50 text-blue-700' :
                      'bg-orange-50 text-orange-700'
                    }`}>
                      {item.rate > 30 ? 'Excellent' : item.rate > 20 ? 'Good' : 'Need Improvement'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Sankey Diagram */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 mt-6">
        <div className="mb-6">
          <h3 className="text-lg font-bold text-slate-900 mb-1">AnvAIa AI Performance Dashboard</h3>
          <p className="text-sm text-slate-600">User Journey & Conversion Flow Analysis</p>
        </div>
        <SimpleSankeyDiagram />
      </div>
    </div>
  );
}