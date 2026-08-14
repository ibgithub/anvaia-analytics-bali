import { useState } from 'react';
import {
  ShoppingBag,
  MousePointerClick,
  UserPlus,
  TrendingUp,
  DollarSign,
  Users,
  Repeat,
  UserMinus,
  TrendingDown,
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  Target,
  Zap,
  Package,
  BarChart3,
  Award,
  Percent,
  CheckCircle,
  AlertTriangle,
  Activity,
  GitBranch,
  Layers,
  TrendingDown as TrendingDownIcon,
  ArrowRight
} from 'lucide-react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  ComposedChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts';

// Core Funnel Data
const crossSellData = [
  { month: 'Jan', shown: 125000, clicked: 42500, trial: 18750, adopted: 12500 },
  { month: 'Feb', shown: 135000, clicked: 47250, trial: 21600, adopted: 14850 },
  { month: 'Mar', shown: 142000, clicked: 51100, trial: 24080, adopted: 17480 },
  { month: 'Apr', shown: 155000, clicked: 57350, trial: 27900, adopted: 20465 },
  { month: 'May', shown: 168000, clicked: 63840, trial: 31920, adopted: 23936 },
  { month: 'Jun', shown: 182000, clicked: 72800, trial: 36400, adopted: 28210 },
];

const dauWauMauData = [
  { month: 'Jan', dau: 8200, wau: 28400, mau: 85000 },
  { month: 'Feb', dau: 9100, wau: 31200, mau: 92000 },
  { month: 'Mar', dau: 10200, wau: 34500, mau: 98000 },
  { month: 'Apr', dau: 11500, wau: 38200, mau: 105000 },
  { month: 'May', dau: 12800, wau: 42100, mau: 112000 },
  { month: 'Jun', dau: 14200, wau: 46800, mau: 120000 },
];

const growthData = [
  { month: 'Jan', mom: 9.2, yoy: 35.8 },
  { month: 'Feb', mom: 10.5, yoy: 39.2 },
  { month: 'Mar', mom: 11.8, yoy: 42.5 },
  { month: 'Apr', mom: 13.2, yoy: 46.8 },
  { month: 'May', mom: 14.1, yoy: 51.2 },
  { month: 'Jun', mom: 15.5, yoy: 54.7 },
];

const newAdoptersData = [
  { month: 'Jan', adopters: 12500 },
  { month: 'Feb', adopters: 14850 },
  { month: 'Mar', adopters: 17480 },
  { month: 'Apr', adopters: 20465 },
  { month: 'May', adopters: 23936 },
  { month: 'Jun', adopters: 28210 },
];

const crossSellRevenueData = [
  { month: 'Jan', revenue: 125000000 },
  { month: 'Feb', revenue: 148500000 },
  { month: 'Mar', revenue: 174800000 },
  { month: 'Apr', revenue: 204650000 },
  { month: 'May', revenue: 239360000 },
  { month: 'Jun', revenue: 282100000 },
];

// Product Affinity Matrix - Heat Map Style
const affinityMatrixData = {
  products: ['Payment', 'Transfer', 'Bill Pay', 'E-wallet', 'Loan', 'Investment'],
  crossProducts: ['Insurance', 'Investment', 'E-wallet', 'Loan', 'Subscription'],
  matrix: [
    [12, 8, 45, 5, 18],  // Payment
    [7, 15, 32, 3, 12],  // Transfer
    [15, 6, 28, 8, 25],  // Bill Pay
    [10, 12, 0, 6, 22],  // E-wallet
    [0, 0, 0, 0, 0],     // Loan
    [0, 0, 0, 0, 0],     // Investment
  ]
};

// Most Popular Product Combinations - Updated format for table
const popularCombinationsData = [
  { combo: 'Payment + E-wallet + Insurance', users: 18500, revenue: 2850000000, avgRevenue: 154 },
  { combo: 'Transfer + Investment + E-wallet', users: 12800, revenue: 3200000000, avgRevenue: 250 },
  { combo: 'Bill Pay + Subscription + E-wallet', users: 9800, revenue: 1850000000, avgRevenue: 189 },
  { combo: 'E-wallet + Insurance + Loan', users: 7200, revenue: 2190000000, avgRevenue: 304 },
  { combo: 'Payment + Investment + Insurance', users: 6500, revenue: 2650000000, avgRevenue: 408 },
];

// Product Sequence Analysis
const productSequenceData = [
  { stage: '1st Product', savings: 45, credit: 25, investment: 15, insurance: 10, loan: 5 },
  { stage: '2nd Product', savings: 20, credit: 30, investment: 25, insurance: 15, loan: 10 },
  { stage: '3rd Product', savings: 15, credit: 20, investment: 35, insurance: 20, loan: 10 },
  { stage: '4th+ Product', savings: 10, credit: 15, investment: 30, insurance: 30, loan: 15 },
];

// Product Cannibalization Data
const cannibalizationData = [
  { product: 'Basic Savings', before: 85, after: 72, impact: -15.3 },
  { product: 'Standard Transfer', before: 78, after: 68, impact: -12.8 },
  { product: 'Regular Payment', before: 92, after: 85, impact: -7.6 },
  { product: 'Basic E-wallet', before: 65, after: 58, impact: -10.8 },
  { product: 'Standard Bill Pay', before: 70, after: 65, impact: -7.1 },
];

// CLV Data - Updated for card-based display
const clvBeforeAfterData = [
  { segment: 'Bronze', before: 2500000, after: 4200000, uplift: 68 },
  { segment: 'Silver', before: 4800000, after: 8500000, uplift: 77 },
  { segment: 'Gold', before: 8200000, after: 15200000, uplift: 85 },
  { segment: 'Platinum', before: 15500000, after: 28900000, uplift: 86 },
];

const revenuePerProductData = [
  { product: 'Savings', revenue: 285000000, percentage: 28 },
  { product: 'Investment', revenue: 245000000, percentage: 24 },
  { product: 'Credit Card', revenue: 198000000, percentage: 19 },
  { product: 'Insurance', revenue: 156000000, percentage: 15 },
  { product: 'Loan', revenue: 142000000, percentage: 14 },
];

// Offer Analysis Data
const offerAcceptanceByProductData = [
  { product: 'Savings+', rate: 72.5 },
  { product: 'Investment Pro', rate: 65.8 },
  { product: 'Credit Premium', rate: 58.2 },
  { product: 'Insurance Plus', rate: 52.5 },
  { product: 'Loan Premium', rate: 45.8 },
];

const offerFatigueData = [
  { offers: '1 offer', acceptance: 42.5 },
  { offers: '2-3 offers', acceptance: 35.8 },
  { offers: '4-5 offers', acceptance: 28.2 },
  { offers: '6-8 offers', acceptance: 18.5 },
  { offers: '9+ offers', acceptance: 12.3 },
];

const reofferSuccessTrendData = [
  { attempt: '1st', rate: 42.5 },
  { attempt: '2nd', rate: 18.2 },
  { attempt: '3rd', rate: 8.5 },
  { attempt: '4th', rate: 3.8 },
  { attempt: '5th+', rate: 1.5 },
];

// Product Flow Data - Updated for card-style display
const productFlowData = [
  { from: 'Payment', to: 'E-wallet', users: 22500, revenue: 450000000 },
  { from: 'Payment', to: 'Insurance', users: 6000, revenue: 180000000 },
  { from: 'Payment', to: 'Investment', users: 4000, revenue: 320000000 },
  { from: 'Transfer', to: 'Investment', users: 7500, revenue: 600000000 },
  { from: 'Transfer', to: 'E-wallet', users: 16000, revenue: 320000000 },
  { from: 'Bill Pay', to: 'Subscription', users: 12500, revenue: 250000000 },
];

// Product Penetration by Category
const productPenetrationData = [
  { category: 'Banking', penetration: 85.2, target: 90 },
  { category: 'Investment', penetration: 42.5, target: 60 },
  { category: 'Insurance', penetration: 28.5, target: 45 },
  { category: 'Lending', penetration: 35.8, target: 50 },
  { category: 'Digital Wallet', penetration: 68.5, target: 80 },
];

// Bundle Performance
const bundlePerformanceData = [
  { bundle: 'Savings Suite', adoption: 72.5, revenue: 285000000, satisfaction: 4.6 },
  { bundle: 'Investment Plus', adoption: 68.2, revenue: 245000000, satisfaction: 4.5 },
  { bundle: 'Credit Package', adoption: 65.8, revenue: 198000000, satisfaction: 4.3 },
  { bundle: 'Protection Bundle', adoption: 58.5, revenue: 156000000, satisfaction: 4.2 },
  { bundle: 'Premium Suite', adoption: 52.8, revenue: 142000000, satisfaction: 4.4 },
];

// Product Lifecycle Data
const productStickinessData = [
  { month: 'Jan', duration: 6.2 },
  { month: 'Feb', duration: 6.8 },
  { month: 'Mar', duration: 7.3 },
  { month: 'Apr', duration: 7.8 },
  { month: 'May', duration: 8.1 },
  { month: 'Jun', duration: 8.5 },
];

const productAbandonmentData = [
  { month: 'Jan', rate: 12.8 },
  { month: 'Feb', rate: 11.5 },
  { month: 'Mar', rate: 10.8 },
  { month: 'Apr', rate: 9.8 },
  { month: 'May', rate: 9.2 },
  { month: 'Jun', rate: 8.5 },
];

const productActivationData = [
  { month: 'Jan', rate: 68.2 },
  { month: 'Feb', rate: 71.5 },
  { month: 'Mar', rate: 73.8 },
  { month: 'Apr', rate: 75.2 },
  { month: 'May', rate: 76.8 },
  { month: 'Jun', rate: 78.5 },
];

const firstTransactionData = [
  { month: 'Jan', days: 4.2 },
  { month: 'Feb', days: 3.9 },
  { month: 'Mar', days: 3.5 },
  { month: 'Apr', days: 3.2 },
  { month: 'May', days: 3.0 },
  { month: 'Jun', days: 2.8 },
];

const portfolioExpansionData = [
  { month: 'Jan', rate: 12.5 },
  { month: 'Feb', rate: 14.8 },
  { month: 'Mar', rate: 16.2 },
  { month: 'Apr', rate: 18.5 },
  { month: 'May', rate: 21.2 },
  { month: 'Jun', rate: 24.8 },
];

export function CrossSelling() {
  const formatCurrency = (value: number) => {
    return `Rp ${(value / 1000000).toFixed(0)}M`;
  };

  const formatCurrencyK = (value: number) => {
    return `$${(value / 1000).toFixed(0)}K`;
  };

  const formatNumber = (value: number) => {
    return value.toLocaleString('id-ID');
  };

  const formatNumberK = (value: number) => {
    if (value >= 1000) {
      return `${(value / 1000).toFixed(1)}K`;
    }
    return value.toString();
  };

  const getAffinityColor = (value: number) => {
    if (value === 0) return '#f1f5f9';
    if (value >= 30) return '#00A63E';
    if (value >= 15) return '#155DFC';
    return '#94a3b8';
  };

  const getAffinityLabel = (value: number) => {
    if (value === 0) return '';
    if (value >= 30) return 'High';
    if (value >= 15) return 'Medium';
    return 'Low';
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Cross-Selling Analytics</h1>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
            <Calendar className="w-4 h-4 text-slate-600" />
            <span className="text-sm text-slate-700">Jan - Jun 2026</span>
          </button>
        </div>
      </div>

      {/* Key Metrics - Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <div className="bg-white rounded-xl p-5 border border-slate-200">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs text-slate-600 font-medium">Customer Shown Offers</p>
            <ShoppingBag className="w-4 h-4 text-[#155DFC]" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">182K</h3>
          <p className="text-xs text-[#00A63E] mt-1 flex items-center gap-1">
            <ArrowUpRight className="w-3 h-3" />
            +8.3%
          </p>
        </div>

        <div className="bg-white rounded-xl p-5 border border-slate-200">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs text-slate-600 font-medium">Clicked/Interested</p>
            <MousePointerClick className="w-4 h-4 text-[#8B5CF6]" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">72.8K</h3>
          <p className="text-xs text-[#00A63E] mt-1 flex items-center gap-1">
            <ArrowUpRight className="w-3 h-3" />
            +14.0%
          </p>
        </div>

        <div className="bg-white rounded-xl p-5 border border-slate-200">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs text-slate-600 font-medium">Trial Users</p>
            <UserPlus className="w-4 h-4 text-[#FDC700]" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">36.4K</h3>
          <p className="text-xs text-[#00A63E] mt-1 flex items-center gap-1">
            <ArrowUpRight className="w-3 h-3" />
            +14.0%
          </p>
        </div>

        <div className="bg-white rounded-xl p-5 border border-slate-200">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs text-slate-600 font-medium">Adoption Rate</p>
            <TrendingUp className="w-4 h-4 text-[#00A63E]" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">15.5%</h3>
          <p className="text-xs text-[#00A63E] mt-1 flex items-center gap-1">
            <ArrowUpRight className="w-3 h-3" />
            +17.8%
          </p>
        </div>
      </div>

      {/* Key Metrics - Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <div className="bg-white rounded-xl p-5 border border-slate-200">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs text-slate-600 font-medium">Revenue from New Products</p>
            <DollarSign className="w-4 h-4 text-[#00A63E]" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Rp 282M</h3>
          <p className="text-xs text-[#00A63E] mt-1 flex items-center gap-1">
            <ArrowUpRight className="w-3 h-3" />
            +17.9%
          </p>
        </div>

        <div className="bg-white rounded-xl p-5 border border-slate-200">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs text-slate-600 font-medium">Avg Revenue per Adoption</p>
            <DollarSign className="w-4 h-4 text-[#155DFC]" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Rp 10.0M</h3>
          <p className="text-xs text-[#00A63E] mt-1 flex items-center gap-1">
            <ArrowUpRight className="w-3 h-3" />
            +3.1%
          </p>
        </div>

        <div className="bg-white rounded-xl p-5 border border-slate-200">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs text-slate-600 font-medium">Daily Active Users</p>
            <Users className="w-4 h-4 text-[#8B5CF6]" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">14.2K</h3>
          <p className="text-xs text-[#00A63E] mt-1 flex items-center gap-1">
            <ArrowUpRight className="w-3 h-3" />
            +10.9%
          </p>
        </div>

        <div className="bg-white rounded-xl p-5 border border-slate-200">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs text-slate-600 font-medium">Weekly Active Users</p>
            <Users className="w-4 h-4 text-[#FDC700]" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">46.8K</h3>
          <p className="text-xs text-[#00A63E] mt-1 flex items-center gap-1">
            <ArrowUpRight className="w-3 h-3" />
            +11.2%
          </p>
        </div>
      </div>

      {/* Key Metrics - Row 3 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-xl p-5 border border-slate-200">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs text-slate-600 font-medium">Multi-Product Usage Rate</p>
            <Repeat className="w-4 h-4 text-[#155DFC]" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">42.8%</h3>
          <p className="text-xs text-[#00A63E] mt-1 flex items-center gap-1">
            <ArrowUpRight className="w-3 h-3" />
            +8.5%
          </p>
        </div>

        <div className="bg-white rounded-xl p-5 border border-slate-200">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs text-slate-600 font-medium">Product Abandonment Rate</p>
            <UserMinus className="w-4 h-4 text-[#C10007]" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">8.5%</h3>
          <p className="text-xs text-[#00A63E] mt-1 flex items-center gap-1">
            <ArrowDownRight className="w-3 h-3" />
            -12.4% (Better)
          </p>
        </div>

        <div className="bg-white rounded-xl p-5 border border-slate-200">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs text-slate-600 font-medium">CLV Uplift</p>
            <TrendingUp className="w-4 h-4 text-[#00A63E]" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">+67.2%</h3>
          <p className="text-xs text-[#00A63E] mt-1 flex items-center gap-1">
            <ArrowUpRight className="w-3 h-3" />
            +5.8%
          </p>
        </div>

        <div className="bg-white rounded-xl p-5 border border-slate-200">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs text-slate-600 font-medium">Offer Acceptance Rate</p>
            <TrendingUp className="w-4 h-4 text-[#FDC700]" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">40.0%</h3>
          <p className="text-xs text-[#00A63E] mt-1 flex items-center gap-1">
            <ArrowUpRight className="w-3 h-3" />
            +13.9%
          </p>
        </div>
      </div>

      {/* Performance Comparison */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 mb-6">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1 h-6 bg-gradient-to-b from-[#155DFC] to-[#8B5CF6] rounded-full"></div>
          <h3 className="text-lg font-bold text-slate-900">Performance Comparison: With vs Without Cross-selling</h3>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Products per Customer */}
          <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
            <p className="text-xs text-slate-600 font-medium mb-3">Products per Customer</p>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-slate-500 mb-1">Without Cross-selling</p>
                <p className="text-lg font-bold text-slate-900">1.8</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <p className="text-xs text-blue-700 mb-1">With Cross-selling</p>
                <p className="text-2xl font-bold text-[#155DFC]">3.2</p>
              </div>
              <div className="bg-green-50 rounded-lg p-2">
                <p className="text-xs text-green-700 font-medium flex items-center gap-1">
                  +77.8% increase 📈
                </p>
              </div>
            </div>
          </div>

          {/* Monthly Active Rate */}
          <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
            <p className="text-xs text-slate-600 font-medium mb-3">Monthly Active Rate</p>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-slate-500 mb-1">Without Cross-selling</p>
                <p className="text-lg font-bold text-slate-900">45%</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <p className="text-xs text-blue-700 mb-1">With Cross-selling</p>
                <p className="text-2xl font-bold text-[#155DFC]">68%</p>
              </div>
              <div className="bg-green-50 rounded-lg p-2">
                <p className="text-xs text-green-700 font-medium flex items-center gap-1">
                  +51.1% increase ⚡
                </p>
              </div>
            </div>
          </div>

          {/* Revenue per Customer */}
          <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
            <p className="text-xs text-slate-600 font-medium mb-3">Revenue per Customer</p>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-slate-500 mb-1">Without Cross-selling</p>
                <p className="text-lg font-bold text-slate-900">$85</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <p className="text-xs text-blue-700 mb-1">With Cross-selling</p>
                <p className="text-2xl font-bold text-[#155DFC]">$142</p>
              </div>
              <div className="bg-green-50 rounded-lg p-2">
                <p className="text-xs text-green-700 font-medium flex items-center gap-1">
                  +67.1% increase 💰
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conversion Funnel - Removed Overall Adoption Rate */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 mb-6">
        <h3 className="text-lg font-bold text-slate-900 mb-4">Conversion Funnel</h3>
        <div style={{ width: '100%', height: '320px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={crossSellData[5] ? [
              { name: 'Customers Shown', value: crossSellData[5].shown, fill: '#155DFC' },
              { name: 'Clicked', value: crossSellData[5].clicked, fill: '#8B5CF6' },
              { name: 'Trial Users', value: crossSellData[5].trial, fill: '#FDC700' },
              { name: 'Adopted', value: crossSellData[5].adopted, fill: '#00A63E' },
            ] : []} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis type="number" stroke="#64748b" style={{ fontSize: '12px' }} />
              <YAxis type="category" dataKey="name" stroke="#64748b" style={{ fontSize: '12px' }} width={150} />
              <Tooltip 
                formatter={(value: number) => formatNumber(value)}
                contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }}
              />
              <Bar dataKey="value" radius={[0, 8, 8, 0]}>
                {[
                  { fill: '#155DFC' },
                  { fill: '#8B5CF6' },
                  { fill: '#FDC700' },
                  { fill: '#00A63E' },
                ].map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Engagement & Retention Section - Moved here */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Repeat className="w-6 h-6 text-[#155DFC]" />
          <h2 className="text-xl font-bold text-slate-900">Engagement & Retention</h2>
        </div>
        
        <div className="grid grid-cols-1 gap-6">
          {/* DAU/WAU/MAU Trends */}
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">DAU/WAU/MAU Trends</h3>
            <div style={{ width: '100%', height: '350px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={dauWauMauData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="month" stroke="#64748b" style={{ fontSize: '12px' }} />
                  <YAxis stroke="#64748b" style={{ fontSize: '12px' }} tickFormatter={formatNumber} />
                  <Tooltip 
                    formatter={(value: number) => formatNumber(value)}
                    contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="dau" stroke="#8B5CF6" strokeWidth={3} name="DAU" dot={{ r: 5 }} />
                  <Line type="monotone" dataKey="wau" stroke="#FDC700" strokeWidth={3} name="WAU" dot={{ r: 5 }} />
                  <Line type="monotone" dataKey="mau" stroke="#00A63E" strokeWidth={3} name="MAU" dot={{ r: 5 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Engagement Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-5 border border-slate-200">
              <p className="text-xs text-slate-600 font-medium mb-2">Current MAU</p>
              <h3 className="text-2xl font-bold text-slate-900">120K</h3>
              <p className="text-xs text-[#00A63E] mt-1">+7.1% MoM</p>
            </div>

            <div className="bg-white rounded-xl p-5 border border-slate-200">
              <p className="text-xs text-slate-600 font-medium mb-2">Avg Products Used</p>
              <h3 className="text-2xl font-bold text-slate-900">3.2</h3>
              <p className="text-xs text-slate-600 mt-1">per user</p>
            </div>

            <div className="bg-white rounded-xl p-5 border border-slate-200">
              <p className="text-xs text-slate-600 font-medium mb-2">Active Adopter Rate</p>
              <h3 className="text-2xl font-bold text-slate-900">42.8%</h3>
              <p className="text-xs text-[#00A63E] mt-1">+5.2% MoM</p>
            </div>

            <div className="bg-white rounded-xl p-5 border border-slate-200">
              <p className="text-xs text-slate-600 font-medium mb-2">Stickiness Ratio (DAU/MAU)</p>
              <h3 className="text-2xl font-bold text-slate-900">11.8%</h3>
              <p className="text-xs text-[#00A63E] mt-1">+3.5% MoM</p>
            </div>
          </div>

          {/* Product Stickiness */}
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Product Stickiness (Avg Usage Duration)</h3>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={productStickinessData}>
                <defs>
                  <linearGradient id="colorStickiness" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#155DFC" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#155DFC" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" stroke="#64748b" style={{ fontSize: '11px' }} />
                <YAxis stroke="#64748b" style={{ fontSize: '11px' }} />
                <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                <Area 
                  type="monotone" 
                  dataKey="duration" 
                  stroke="#155DFC" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorStickiness)" 
                  name="Months"
                />
              </AreaChart>
            </ResponsiveContainer>
            <div className="mt-4 text-center">
              <p className="text-xs text-slate-600">Current Average</p>
              <p className="text-2xl font-bold text-[#155DFC]">8.5 months</p>
            </div>
          </div>

          {/* Product Abandonment Rate */}
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Product Abandonment Rate</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={productAbandonmentData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" stroke="#64748b" style={{ fontSize: '11px' }} />
                <YAxis stroke="#64748b" style={{ fontSize: '11px' }} unit="%" />
                <Tooltip 
                  formatter={(value: number) => `${value}%`}
                  contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="rate" 
                  stroke="#C10007" 
                  strokeWidth={3}
                  dot={{ fill: '#C10007', r: 4 }}
                  name="Abandonment %"
                />
              </LineChart>
            </ResponsiveContainer>
            <div className="mt-4 text-center">
              <p className="text-xs text-slate-600">Current Rate</p>
              <p className="text-2xl font-bold text-[#C10007]">8.5%</p>
            </div>
          </div>

          {/* Cross-Product Engagement Frequency */}
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Cross-Product Engagement Frequency</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={[
                { products: '1 Product', users: 69600 },
                { products: '2 Products', users: 38400 },
                { products: '3 Products', users: 21600 },
                { products: '4+ Products', users: 14400 },
              ]}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="products" stroke="#64748b" style={{ fontSize: '12px' }} />
                <YAxis stroke="#64748b" style={{ fontSize: '12px' }} />
                <Tooltip 
                  formatter={(value: number) => formatNumber(value)}
                  contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }}
                />
                <Bar dataKey="users" fill="#FB923C" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Growth & Trend Section - Moved here */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-6 h-6 text-[#155DFC]" />
          <h2 className="text-xl font-bold text-slate-900">Growth & Trend</h2>
        </div>
        
        {/* MoM & YoY Growth */}
        <div className="bg-white rounded-xl p-6 border border-slate-200 mb-6">
          <h3 className="text-lg font-bold text-slate-900 mb-4">MoM & YoY Growth Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={growthData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" stroke="#64748b" style={{ fontSize: '12px' }} />
              <YAxis stroke="#64748b" style={{ fontSize: '12px' }} unit="%" />
              <Tooltip 
                formatter={(value: number) => `${value}%`}
                contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }}
              />
              <Legend />
              <Bar dataKey="mom" fill="#155DFC" radius={[8, 8, 0, 0]} name="MoM Growth" />
              <Line type="monotone" dataKey="yoy" stroke="#00A63E" strokeWidth={3} name="YoY Growth" dot={{ r: 5 }} />
            </ComposedChart>
          </ResponsiveContainer>
          
          {/* Growth Summary */}
          <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-200">
            <div className="text-center">
              <p className="text-xs text-slate-600 mb-1">Current MoM Growth</p>
              <p className="text-2xl font-bold text-[#155DFC]">15.5%</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-slate-600 mb-1">Current YoY Growth</p>
              <p className="text-2xl font-bold text-[#00A63E]">54.7%</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-slate-600 mb-1">Avg MoM Growth</p>
              <p className="text-2xl font-bold text-[#8B5CF6]">12.4%</p>
            </div>
          </div>
        </div>

        {/* New Product Adopters & Revenue Trends */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* New Product Adopters Trend */}
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">New Product Adopters Trend</h3>
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={newAdoptersData}>
                <defs>
                  <linearGradient id="colorAdopters" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#155DFC" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#155DFC" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" stroke="#64748b" style={{ fontSize: '12px' }} />
                <YAxis stroke="#64748b" style={{ fontSize: '12px' }} />
                <Tooltip 
                  formatter={(value: number) => formatNumber(value)}
                  contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }}
                />
                <Area type="monotone" dataKey="adopters" stroke="#155DFC" strokeWidth={3} fillOpacity={1} fill="url(#colorAdopters)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Cross-Sell Revenue Growth */}
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Cross-Sell Revenue Growth</h3>
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={crossSellRevenueData}>
                <defs>
                  <linearGradient id="colorRevenueCross" x1="0" y1="0" x2="0" y2="1">
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
                <Area type="monotone" dataKey="revenue" stroke="#00A63E" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenueCross)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Product Portfolio Expansion Rate */}
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Product Portfolio Expansion Rate</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={portfolioExpansionData}>
              <defs>
                <linearGradient id="colorExpansion" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" stroke="#64748b" style={{ fontSize: '12px' }} />
              <YAxis stroke="#64748b" style={{ fontSize: '12px' }} unit="%" />
              <Tooltip 
                formatter={(value: number) => `${value}%`}
                contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }}
              />
              <Area 
                type="monotone" 
                dataKey="rate" 
                stroke="#8B5CF6" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorExpansion)" 
                name="Expansion Rate"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* ====== PRODUCT LIFECYCLE METRICS SECTION ====== */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Clock className="w-6 h-6 text-[#155DFC]" />
          <h2 className="text-xl font-bold text-slate-900">Product Lifecycle Metrics</h2>
        </div>

        {/* Lifecycle Charts - Grid of 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Product Activation Rate */}
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Product Activation Rate</h3>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={productActivationData}>
                <defs>
                  <linearGradient id="colorActivation" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00A63E" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#00A63E" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" stroke="#64748b" style={{ fontSize: '11px' }} />
                <YAxis stroke="#64748b" style={{ fontSize: '11px' }} unit="%" />
                <Tooltip 
                  formatter={(value: number) => `${value}%`}
                  contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} 
                />
                <Area 
                  type="monotone" 
                  dataKey="rate" 
                  stroke="#00A63E" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorActivation)" 
                  name="Activation %"
                />
              </AreaChart>
            </ResponsiveContainer>
            <div className="mt-4 text-center">
              <p className="text-xs text-slate-600">Current Rate</p>
              <p className="text-2xl font-bold text-[#00A63E]">78.5%</p>
            </div>
          </div>

          {/* First Transaction Time */}
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">First Transaction Time</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={firstTransactionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" stroke="#64748b" style={{ fontSize: '11px' }} />
                <YAxis stroke="#64748b" style={{ fontSize: '11px' }} />
                <Tooltip 
                  formatter={(value: number) => `${value} days`}
                  contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="days" 
                  stroke="#8B5CF6" 
                  strokeWidth={3}
                  dot={{ fill: '#8B5CF6', r: 4 }}
                  name="Days"
                />
              </LineChart>
            </ResponsiveContainer>
            <div className="mt-4 text-center">
              <p className="text-xs text-slate-600">Current Average</p>
              <p className="text-2xl font-bold text-[#8B5CF6]">2.8 days</p>
            </div>
          </div>
        </div>

        {/* Product Lifecycle Summary Cards */}
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-white rounded-lg p-4 border border-slate-200">
            <div className="text-sm text-slate-600 mb-2">Avg Activation Rate</div>
            <div className="text-2xl font-bold text-[#00A63E]">78.5%</div>
            <div className="text-xs text-slate-500 mt-1">Last 6 months</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-slate-200">
            <div className="text-sm text-slate-600 mb-2">Avg Time to First Transaction</div>
            <div className="text-2xl font-bold text-[#8B5CF6]">2.8 days</div>
            <div className="text-xs text-slate-500 mt-1">From adoption</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-slate-200">
            <div className="text-sm text-slate-600 mb-2">Trial to Regular User Rate</div>
            <div className="text-2xl font-bold text-[#155DFC]">65.2%</div>
            <div className="text-xs text-slate-500 mt-1">Conversion rate</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-slate-200">
            <div className="text-sm text-slate-600 mb-2">Avg Time to Regular Usage</div>
            <div className="text-2xl font-bold text-[#FDC700]">12.5 days</div>
            <div className="text-xs text-slate-500 mt-1">From first use</div>
          </div>
        </div>
      </div>

      {/* Product Affinity Matrix - Moved before Product Combination Analysis */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-slate-900">Product Affinity Matrix</h3>
          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded" style={{ backgroundColor: '#00A63E' }}></div>
              <span className="text-slate-600">High (&gt;30%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded" style={{ backgroundColor: '#155DFC' }}></div>
              <span className="text-slate-600">Medium (15-30%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded" style={{ backgroundColor: '#94a3b8' }}></div>
              <span className="text-slate-600">Low (&lt;15%)</span>
            </div>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700 bg-slate-50 border border-slate-200">
                  Current Product
                </th>
                {affinityMatrixData.crossProducts.map((product, index) => (
                  <th key={index} className="text-center py-3 px-4 text-sm font-semibold text-slate-700 bg-slate-50 border border-slate-200">
                    {product}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {affinityMatrixData.products.map((product, rowIndex) => (
                <tr key={rowIndex}>
                  <td className="py-3 px-4 font-semibold text-slate-900 bg-slate-50 border border-slate-200">
                    {product}
                  </td>
                  {affinityMatrixData.matrix[rowIndex].map((value, colIndex) => (
                    <td 
                      key={colIndex} 
                      className="text-center py-4 px-4 border border-slate-200 font-bold relative"
                      style={{ 
                        backgroundColor: getAffinityColor(value),
                        color: value >= 15 ? '#ffffff' : '#475569'
                      }}
                    >
                      {value > 0 ? `${value}%` : '-'}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ====== PRODUCT COMBINATION ANALYSIS SECTION ====== */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Package className="w-6 h-6 text-[#155DFC]" />
          <h2 className="text-xl font-bold text-slate-900">Product Combination Analysis</h2>
        </div>

        {/* Most Popular Product Combination - Table Format */}
        <div className="bg-white rounded-xl p-6 border border-slate-200 mb-6">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Most Popular Product Combinations</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#8B5CF6] text-white">
                  <th className="text-left py-3 px-4 text-sm font-semibold rounded-tl-lg">PRODUCT COMBINATION</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold">USERS</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold">REVENUE</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold rounded-tr-lg">AVG REVENUE/USER</th>
                </tr>
              </thead>
              <tbody>
                {popularCombinationsData.map((item, index) => (
                  <tr key={index} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-4 text-slate-900">{item.combo}</td>
                    <td className="text-right py-4 px-4 text-slate-900">{formatNumberK(item.users)}</td>
                    <td className="text-right py-4 px-4 text-slate-900">{formatCurrencyK(item.revenue)}</td>
                    <td className="text-right py-4 px-4 font-bold text-slate-900">${item.avgRevenue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Product Sequence Analysis - Moved here */}
        <div className="bg-white rounded-xl p-6 border border-slate-200 mb-6">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Product Sequence Analysis</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={productSequenceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="stage" stroke="#64748b" style={{ fontSize: '11px' }} />
              <YAxis stroke="#64748b" style={{ fontSize: '11px' }} unit="%" />
              <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
              <Legend />
              <Bar dataKey="savings" stackId="a" fill="#155DFC" name="Savings" />
              <Bar dataKey="credit" stackId="a" fill="#00A63E" name="Credit" />
              <Bar dataKey="investment" stackId="a" fill="#8B5CF6" name="Investment" />
              <Bar dataKey="insurance" stackId="a" fill="#FDC700" name="Insurance" />
              <Bar dataKey="loan" stackId="a" fill="#FB923C" name="Loan" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Product Cannibalization Analysis */}
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-[#FB923C]" />
            <h3 className="text-lg font-bold text-slate-900">Product Cannibalization Analysis</h3>
            <span className="text-xs text-slate-600 ml-2">(Impact of new product adoption on existing product usage)</span>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">Product</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-slate-700">Usage Before</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-slate-700">Usage After</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-slate-700">Impact</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-slate-700">Status</th>
                </tr>
              </thead>
              <tbody>
                {cannibalizationData.map((item, index) => (
                  <tr key={index} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-medium text-slate-900">{item.product}</td>
                    <td className="text-right py-3 px-4 text-slate-900">{item.before}%</td>
                    <td className="text-right py-3 px-4 text-slate-900">{item.after}%</td>
                    <td className="text-right py-3 px-4">
                      <span className={`font-bold ${Math.abs(item.impact) >= 10 ? 'text-[#C10007]' : 'text-[#FB923C]'}`}>
                        {item.impact}%
                      </span>
                    </td>
                    <td className="text-right py-3 px-4">
                      <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                        Math.abs(item.impact) >= 10 
                          ? 'bg-red-50 text-red-700' 
                          : 'bg-orange-50 text-orange-700'
                      }`}>
                        {Math.abs(item.impact) >= 10 ? 'High Risk' : 'Moderate'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ====== CLV & REVENUE IMPACT SECTION ====== */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <DollarSign className="w-6 h-6 text-[#00A63E]" />
          <h2 className="text-xl font-bold text-slate-900">CLV & Revenue Impact</h2>
        </div>

        {/* CLV Before vs After Cross-selling - Card Style */}
        <div className="bg-white rounded-xl p-6 border border-slate-200 mb-6">
          <div className="flex items-center gap-2 mb-6">
            <BarChart3 className="w-5 h-5 text-[#155DFC]" />
            <h3 className="text-lg font-bold text-slate-900">CLV Before vs After Cross-selling</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Average CLV */}
            <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
              <p className="text-sm text-slate-600 mb-4">Average CLV</p>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-slate-500 mb-1">Before Cross-selling</p>
                  <p className="text-xl font-bold text-slate-900">$6,200</p>
                </div>
                <div className="bg-blue-50 border border-blue-300 rounded-lg p-3">
                  <p className="text-xs text-blue-700 mb-1">After Cross-selling</p>
                  <p className="text-2xl font-bold text-[#155DFC]">$8,050</p>
                </div>
                <div className="bg-green-50 rounded-lg p-2 flex items-center justify-center">
                  <p className="text-xs text-green-700 font-medium">+29.8% increase 📈</p>
                </div>
              </div>
            </div>

            {/* Monthly Revenue per Customer */}
            <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
              <p className="text-sm text-slate-600 mb-4">Monthly Revenue per Customer</p>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-slate-500 mb-1">Before Cross-selling</p>
                  <p className="text-xl font-bold text-slate-900">$85</p>
                </div>
                <div className="bg-blue-50 border border-blue-300 rounded-lg p-3">
                  <p className="text-xs text-blue-700 mb-1">After Cross-selling</p>
                  <p className="text-2xl font-bold text-[#155DFC]">$142</p>
                </div>
                <div className="bg-green-50 rounded-lg p-2 flex items-center justify-center">
                  <p className="text-xs text-green-700 font-medium">+67.1% increase 🔥</p>
                </div>
              </div>
            </div>

            {/* Customer Retention Rate */}
            <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
              <p className="text-sm text-slate-600 mb-4">Customer Retention Rate</p>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-slate-500 mb-1">Before Cross-selling</p>
                  <p className="text-xl font-bold text-slate-900">68%</p>
                </div>
                <div className="bg-blue-50 border border-blue-300 rounded-lg p-3">
                  <p className="text-xs text-blue-700 mb-1">After Cross-selling</p>
                  <p className="text-2xl font-bold text-[#155DFC]">85%</p>
                </div>
                <div className="bg-green-50 rounded-lg p-2 flex items-center justify-center">
                  <p className="text-xs text-green-700 font-medium">+25% increase 🚀</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Revenue per Product Contribution */}
        <div className="bg-white rounded-xl p-6 border border-slate-200 mb-6">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Revenue per Product Contribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={revenuePerProductData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ product, percentage }) => `${product}: ${percentage}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="revenue"
              >
                <Cell fill="#155DFC" />
                <Cell fill="#00A63E" />
                <Cell fill="#8B5CF6" />
                <Cell fill="#FDC700" />
                <Cell fill="#FB923C" />
              </Pie>
              <Tooltip 
                formatter={(value: number) => formatCurrency(value)}
                contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* CLV Impact Metrics - Moved below Revenue per Product */}
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Cross-Selling Impact Metrics</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
              <p className="text-xs text-blue-700 font-medium mb-1">CLV Uplift</p>
              <p className="text-2xl font-bold text-blue-900">+79.0%</p>
              <p className="text-xs text-blue-700 mt-1">Average increase</p>
            </div>

            <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200">
              <p className="text-xs text-green-700 font-medium mb-1">Incremental Revenue</p>
              <p className="text-2xl font-bold text-green-900">Rp 8.5M</p>
              <p className="text-xs text-green-700 mt-1">Per product</p>
            </div>

            <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200">
              <p className="text-xs text-purple-700 font-medium mb-1">Cross-Sell ROI</p>
              <p className="text-2xl font-bold text-purple-900">385%</p>
              <p className="text-xs text-purple-700 mt-1">Return on investment</p>
            </div>

            <div className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg border border-orange-200">
              <p className="text-xs text-orange-700 font-medium mb-1">Payback Period</p>
              <p className="text-2xl font-bold text-orange-900">4.2 mo</p>
              <p className="text-xs text-orange-700 mt-1">Average time</p>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-200">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600">Total Cross-sell Revenue</span>
                <span className="font-bold text-slate-900">Rp 1.03T</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600">Avg Revenue per Customer</span>
                <span className="font-bold text-slate-900">Rp 12.8M</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600">Revenue Growth (YoY)</span>
                <span className="font-bold text-[#00A63E]">+58.5%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ====== OFFER & ACCEPTANCE ANALYSIS SECTION ====== */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Target className="w-6 h-6 text-[#8B5CF6]" />
          <h2 className="text-xl font-bold text-slate-900">Offer & Acceptance Analysis</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Offer Acceptance Rate by Product */}
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Offer Acceptance Rate by Product</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={offerAcceptanceByProductData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis type="number" stroke="#64748b" style={{ fontSize: '12px' }} unit="%" />
                <YAxis type="category" dataKey="product" stroke="#64748b" style={{ fontSize: '12px' }} width={120} />
                <Tooltip 
                  formatter={(value: number) => `${value}%`}
                  contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }}
                />
                <Bar dataKey="rate" radius={[0, 8, 8, 0]}>
                  {offerAcceptanceByProductData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry.rate > 60 ? '#00A63E' : entry.rate > 50 ? '#155DFC' : '#8B5CF6'} 
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Offer Fatigue Analysis */}
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Offer Fatigue Analysis</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={offerFatigueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="offers" stroke="#64748b" style={{ fontSize: '11px' }} />
                <YAxis stroke="#64748b" style={{ fontSize: '11px' }} unit="%" />
                <Tooltip 
                  formatter={(value: number) => `${value}%`}
                  contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="acceptance" 
                  stroke="#C10007" 
                  strokeWidth={3}
                  dot={{ fill: '#C10007', r: 5 }}
                  name="Acceptance Rate"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Re-offer Success Rate */}
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Re-offer Success Rate</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={reofferSuccessTrendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="attempt" stroke="#64748b" style={{ fontSize: '12px' }} />
              <YAxis stroke="#64748b" style={{ fontSize: '12px' }} unit="%" />
              <Tooltip 
                formatter={(value: number) => `${value}%`}
                contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }}
              />
              <Bar dataKey="rate" radius={[8, 8, 0, 0]}>
                {reofferSuccessTrendData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={index === 0 ? '#00A63E' : index === 1 ? '#155DFC' : '#8B5CF6'} 
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>

          {/* Re-offer Metrics */}
          <div className="grid grid-cols-4 gap-4 mt-6 pt-6 border-t border-slate-200">
            <div className="text-center">
              <p className="text-xs text-slate-600 mb-1">First Offer Acceptance</p>
              <p className="text-2xl font-bold text-[#00A63E]">42.5%</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-slate-600 mb-1">Avg Offers Before Acceptance</p>
              <p className="text-2xl font-bold text-[#155DFC]">2.3</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-slate-600 mb-1">Optimal Offer Frequency</p>
              <p className="text-2xl font-bold text-[#8B5CF6]">14 days</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-slate-600 mb-1">Re-offer Success Rate</p>
              <p className="text-2xl font-bold text-[#FDC700]">18.2%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Flow Analysis - Card Style Grid */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <GitBranch className="w-5 h-5 text-[#155DFC]" />
          <h3 className="text-lg font-bold text-slate-900">Product Flow Analysis</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {productFlowData.map((flow, index) => (
            <div key={index} className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="px-3 py-2 bg-white rounded-lg border-2 border-slate-300 text-center">
                  <span className="text-sm font-bold text-slate-900">{flow.from}</span>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400" />
                <div className="px-3 py-2 bg-[#155DFC] rounded-lg border-2 border-[#155DFC] text-center">
                  <span className="text-sm font-bold text-white">{flow.to}</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#8B5CF6]" />
                  <span className="text-sm text-slate-700">{formatNumberK(flow.users)} users</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-[#FB923C]" />
                  <span className="text-sm font-bold text-slate-900">{formatCurrencyK(flow.revenue)} revenue</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Penetration by Category */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Layers className="w-5 h-5 text-[#155DFC]" />
          <h3 className="text-lg font-bold text-slate-900">Product Penetration by Category</h3>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={productPenetrationData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="category" stroke="#64748b" style={{ fontSize: '11px' }} />
            <YAxis stroke="#64748b" style={{ fontSize: '11px' }} unit="%" />
            <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
            <Legend />
            <Bar dataKey="penetration" fill="#155DFC" radius={[8, 8, 0, 0]} name="Current Penetration" />
            <Bar dataKey="target" fill="#94a3b8" radius={[8, 8, 0, 0]} name="Target" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Bundle Performance - Moved here */}
      <div className="bg-white rounded-xl p-6 border border-slate-200">
        <div className="flex items-center gap-2 mb-4">
          <Award className="w-5 h-5 text-[#FDC700]" />
          <h3 className="text-lg font-bold text-slate-900">Bundle Performance</h3>
        </div>
        <div className="space-y-3">
          {bundlePerformanceData.map((bundle, index) => (
            <div key={index} className="p-3 bg-slate-50 rounded-lg border border-slate-200 hover:border-[#155DFC] transition-colors">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-slate-900 text-sm">{bundle.bundle}</h4>
                <div className="flex items-center gap-1">
                  <span className="text-xs text-[#FDC700]">★</span>
                  <span className="text-sm font-bold text-slate-900">{bundle.satisfaction}</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <p className="text-slate-600">Adoption Rate</p>
                  <p className="font-bold text-[#155DFC]">{bundle.adoption}%</p>
                </div>
                <div>
                  <p className="text-slate-600">Revenue</p>
                  <p className="font-bold text-slate-900">{formatCurrency(bundle.revenue)}</p>
                </div>
              </div>
              <div className="mt-2 w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#155DFC] to-[#00A63E]" 
                  style={{ width: `${bundle.adoption}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
