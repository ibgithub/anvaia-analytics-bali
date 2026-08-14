import { useState } from 'react';
import {
  CreditCard,
  Repeat,
  CheckCircle,
  TrendingUp,
  Users,
  DollarSign,
  Calendar,
  Target,
  ArrowUpRight,
  ArrowDownRight,
  Percent,
  Bell,
  Zap,
  Activity,
  BarChart3,
  Clock
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
  ComposedChart,
  PieChart,
  Pie,
  Cell
} from 'recharts';

// Mock Data
const timeToAdoptionData = [
  { time: '< 1 day', count: 5200 },
  { time: '1-3 days', count: 6800 },
  { time: '3-7 days', count: 4200 },
  { time: '7-14 days', count: 2800 },
  { time: '> 14 days', count: 1200 },
];

const segmentationByProductsData = [
  { segment: '1 Product', adoption: 28.5, revenue: 180 },
  { segment: '2 Products', adoption: 45.2, revenue: 420 },
  { segment: '3 Products', adoption: 58.7, revenue: 680 },
  { segment: '4+ Products', adoption: 72.3, revenue: 920 },
];

const segmentationByCategoryData = [
  { segment: 'Utility Bills', adoption: 65.3, revenue: 850 },
  { segment: 'Insurance', adoption: 52.8, revenue: 680 },
  { segment: 'Subscription', adoption: 48.5, revenue: 420 },
  { segment: 'Loan Payment', adoption: 38.2, revenue: 1200 },
];

const segmentationByFrequencyData = [
  { segment: 'Weekly', adoption: 35.2, revenue: 280 },
  { segment: 'Bi-weekly', adoption: 42.5, revenue: 380 },
  { segment: 'Monthly', adoption: 72.8, revenue: 920 },
  { segment: 'Quarterly', adoption: 28.5, revenue: 480 },
];

const activationFunnelData = [
  { stage: 'Offer Shown', value: 100 },
  { stage: 'Offer Viewed', value: 82 },
  { stage: 'Setup Started', value: 68 },
  { stage: 'Info Completed', value: 58 },
  { stage: 'Verification Done', value: 52 },
  { stage: 'Activated', value: 48 },
];

const timeToActivationData = [
  { time: '< 5 min', count: 6200 },
  { time: '5-15 min', count: 8400 },
  { time: '15-30 min', count: 4800 },
  { time: '30-60 min', count: 2200 },
  { time: '> 60 min', count: 1400 },
];

const firstTransactionTimeData = [
  { time: '< 1 hour', count: 3200 },
  { time: '1-6 hours', count: 5600 },
  { time: '6-24 hours', count: 6800 },
  { time: '1-3 days', count: 4200 },
  { time: '> 3 days', count: 3200 },
];

const dauWauMauTrendData = [
  { month: 'Jan', dau: 12.5, wau: 38.2, mau: 85.3 },
  { month: 'Feb', dau: 13.8, wau: 41.5, mau: 88.7 },
  { month: 'Mar', dau: 14.2, wau: 43.8, mau: 91.2 },
  { month: 'Apr', dau: 15.5, wau: 46.2, mau: 94.5 },
  { month: 'May', dau: 16.8, wau: 48.5, mau: 97.8 },
  { month: 'Jun', dau: 18.2, wau: 51.3, mau: 102.5 },
];

const transactionFrequencyData = [
  { frequency: 'Daily', users: 3200 },
  { frequency: 'Weekly', users: 6800 },
  { frequency: 'Bi-weekly', users: 4200 },
  { frequency: 'Monthly', users: 8500 },
  { frequency: 'Quarterly', users: 2300 },
];

const activeVsInactiveData = [
  { name: 'Active Auto Debit', value: 18562, color: '#00A63E' },
  { name: 'Inactive Auto Debit', value: 6423, color: '#94a3b8' },
];

const mrrTrendData = [
  { month: 'Jan', mrr: 320 },
  { month: 'Feb', mrr: 358 },
  { month: 'Mar', mrr: 385 },
  { month: 'Apr', mrr: 412 },
  { month: 'May', mrr: 438 },
  { month: 'Jun', mrr: 465 },
];

const growthData = [
  { month: 'Jan', mom: 8.5, yoy: 28.3 },
  { month: 'Feb', mom: 11.9, yoy: 32.5 },
  { month: 'Mar', mom: 7.5, yoy: 35.8 },
  { month: 'Apr', mom: 7.0, yoy: 38.2 },
  { month: 'May', mom: 6.3, yoy: 40.5 },
  { month: 'Jun', mom: 6.2, yoy: 42.8 },
];

const revenueByBillTypeData = [
  { type: 'Utility Bills', revenue: 145, color: '#155DFC' },
  { type: 'Insurance', revenue: 125, color: '#00A63E' },
  { type: 'Subscription', revenue: 85, color: '#8B5CF6' },
  { type: 'Loan Payment', revenue: 110, color: '#FB923C' },
];

const avgTransactionByTypeData = [
  { type: 'Utility Bills', amount: 245 },
  { type: 'Insurance', amount: 580 },
  { type: 'Subscription', amount: 125 },
  { type: 'Loan Payment', amount: 1250 },
];

const adoptionByAgeData = [
  { segment: '18-25', rate: 28.5 },
  { segment: '26-35', rate: 48.7 },
  { segment: '36-45', rate: 52.3 },
  { segment: '46-55', rate: 38.2 },
  { segment: '56+', rate: 22.8 },
];

const adoptionByIncomeData = [
  { segment: '< 5M', rate: 18.5 },
  { segment: '5-10M', rate: 32.8 },
  { segment: '10-25M', rate: 48.5 },
  { segment: '> 25M', rate: 62.3 },
];

const adoptionByLocationData = [
  { segment: 'Jakarta', rate: 58.5 },
  { segment: 'Surabaya', rate: 42.3 },
  { segment: 'Bandung', rate: 38.7 },
  { segment: 'Medan', rate: 32.5 },
  { segment: 'Others', rate: 28.2 },
];

const adoptionByTierData = [
  { segment: 'Basic', rate: 25.3 },
  { segment: 'Silver', rate: 38.5 },
  { segment: 'Gold', rate: 52.8 },
  { segment: 'Platinum', rate: 68.2 },
];

const revenuePerUserBySegmentData = [
  { segment: 'Basic', revenue: 185 },
  { segment: 'Silver', revenue: 320 },
  { segment: 'Gold', revenue: 580 },
  { segment: 'Platinum', revenue: 920 },
];

const retentionCohortData = [
  { cohort: 'Jan', m0: 100, m1: 92, m2: 88, m3: 85, m4: 82, m5: 80, m6: 78 },
  { cohort: 'Feb', m0: 100, m1: 93, m2: 89, m3: 86, m4: 83, m5: 81, m6: 79 },
  { cohort: 'Mar', m0: 100, m1: 94, m2: 90, m3: 87, m4: 84, m5: 82, m6: 80 },
  { cohort: 'Apr', m0: 100, m1: 95, m2: 91, m3: 88, m4: 85, m5: 83, m6: null },
  { cohort: 'May', m0: 100, m1: 96, m2: 92, m3: 89, m4: 86, m5: null, m6: null },
  { cohort: 'Jun', m0: 100, m1: 97, m2: 93, m3: 90, m4: null, m5: null, m6: null },
];

const revenueCohortData = [
  { cohort: 'Jan', m0: 180, m1: 220, m2: 245, m3: 268, m4: 285, m5: 298, m6: 312 },
  { cohort: 'Feb', m0: 185, m1: 225, m2: 250, m3: 272, m4: 288, m5: 302, m6: 315 },
  { cohort: 'Mar', m0: 190, m1: 230, m2: 255, m3: 278, m4: 295, m5: 308, m6: 320 },
  { cohort: 'Apr', m0: 195, m1: 235, m2: 260, m3: 282, m4: 298, m5: null, m6: null },
  { cohort: 'May', m0: 200, m1: 240, m2: 265, m3: 285, m4: null, m5: null, m6: null },
  { cohort: 'Jun', m0: 205, m1: 245, m2: 270, m3: null, m4: null, m5: null, m6: null },
];

const retentionCurveData = [
  { month: 'M0', retention: 100 },
  { month: 'M1', retention: 95 },
  { month: 'M2', retention: 91 },
  { month: 'M3', retention: 88 },
  { month: 'M4', retention: 85 },
  { month: 'M5', retention: 82 },
  { month: 'M6', retention: 80 },
  { month: 'M9', retention: 75 },
  { month: 'M12', retention: 72 },
];

const transactionSuccessData = [
  { month: 'Jan', success: 94.5, failed: 5.5 },
  { month: 'Feb', success: 95.2, failed: 4.8 },
  { month: 'Mar', success: 95.8, failed: 4.2 },
  { month: 'Apr', success: 96.2, failed: 3.8 },
  { month: 'May', success: 96.5, failed: 3.5 },
  { month: 'Jun', success: 96.8, failed: 3.2 },
];

const comparisonData = [
  { metric: 'Avg Transaction/Month', withAutoDebit: 8.5, withoutAutoDebit: 3.2 },
  { metric: 'Payment Success Rate', withAutoDebit: 96.8, withoutAutoDebit: 78.5 },
  { metric: 'Customer Retention', withAutoDebit: 85.3, withoutAutoDebit: 62.8 },
  { metric: 'Revenue per User', withAutoDebit: 285, withoutAutoDebit: 120 },
];

interface MetricCardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: 'increase' | 'decrease';
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
}

function MetricCard({ title, value, change, changeType = 'increase', icon: Icon, iconBg, iconColor }: MetricCardProps) {
  return (
    <div className="bg-white rounded-xl p-5 border border-slate-200 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-2">
        <p className="text-xs text-slate-600 font-medium">{title}</p>
        <div className={`${iconBg} ${iconColor} p-2 rounded-lg`}>
          <Icon className="w-3.5 h-3.5" />
        </div>
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-0.5">{value}</h3>
      {change && (
        <p className={`text-xs flex items-center gap-1 ${changeType === 'increase' ? 'text-[#00A63E]' : 'text-[#C10007]'}`}>
          {changeType === 'increase' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
          {change}
        </p>
      )}
    </div>
  );
}

interface InfoCardProps {
  label: string;
  value: string;
  color?: string;
}

function InfoCard({ label, value, color = 'text-slate-900' }: InfoCardProps) {
  return (
    <div className="bg-slate-50 rounded-lg p-4">
      <p className="text-xs text-slate-600 mb-1">{label}</p>
      <p className={`text-lg font-bold ${color}`}>{value}</p>
    </div>
  );
}

export function AutoDebit() {
  const [segmentationType, setSegmentationType] = useState<'products' | 'category' | 'frequency'>('products');
  const [adoptionSegment, setAdoptionSegment] = useState<'age' | 'income' | 'location' | 'tier'>('age');

  const getSegmentationData = () => {
    switch (segmentationType) {
      case 'category':
        return segmentationByCategoryData;
      case 'frequency':
        return segmentationByFrequencyData;
      default:
        return segmentationByProductsData;
    }
  };

  const getAdoptionData = () => {
    switch (adoptionSegment) {
      case 'income':
        return adoptionByIncomeData;
      case 'location':
        return adoptionByLocationData;
      case 'tier':
        return adoptionByTierData;
      default:
        return adoptionByAgeData;
    }
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Auto-Debit Analytics</h1>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
            <Calendar className="w-4 h-4 text-slate-600" />
            <span className="text-sm text-slate-700">Jan - Jun 2026</span>
          </button>
        </div>
      </div>

      {/* Simplified Metric Cards - Grouped by Category */}
      <div className="grid grid-cols-1 gap-6 mb-6">
        {/* User Metrics */}
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h3 className="text-md font-bold text-slate-900 mb-4">User Metrics</h3>
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-4 h-4 text-[#155DFC]" />
                <p className="text-xs text-slate-600 font-medium">Total Auto Debit Users</p>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-1">24,985</h3>
              <p className="text-xs text-[#00A63E] flex items-center gap-1">
                <ArrowUpRight className="w-3 h-3" />
                +18.5% from last month
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-4 h-4 text-[#8B5CF6]" />
                <p className="text-xs text-slate-600 font-medium">Daily Active Users</p>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-1">18,234</h3>
              <p className="text-xs text-[#00A63E] flex items-center gap-1">
                <ArrowUpRight className="w-3 h-3" />
                +12.8% from last month
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-4 h-4 text-[#FDC700]" />
                <p className="text-xs text-slate-600 font-medium">Weekly Active Users</p>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-1">51,267</h3>
              <p className="text-xs text-[#00A63E] flex items-center gap-1">
                <ArrowUpRight className="w-3 h-3" />
                +14.5% from last month
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-4 h-4 text-[#00A63E]" />
                <p className="text-xs text-slate-600 font-medium">Activation Rate</p>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-1">48.3%</h3>
              <p className="text-xs text-[#00A63E] flex items-center gap-1">
                <ArrowUpRight className="w-3 h-3" />
                +5.2% from last month
              </p>
            </div>
          </div>
        </div>

        {/* Revenue Metrics */}
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h3 className="text-md font-bold text-slate-900 mb-4">Revenue Metrics</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="w-4 h-4 text-[#00A63E]" />
                <p className="text-xs text-slate-600 font-medium">Monthly Recurring Revenue</p>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-1">Rp 465M</h3>
              <p className="text-xs text-[#00A63E] flex items-center gap-1">
                <ArrowUpRight className="w-3 h-3" />
                +28.9% from last month
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="w-4 h-4 text-[#155DFC]" />
                <p className="text-xs text-slate-600 font-medium">Revenue Per User</p>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-1">Rp 18.6K</h3>
              <p className="text-xs text-[#00A63E] flex items-center gap-1">
                <ArrowUpRight className="w-3 h-3" />
                +8.7% from last month
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <div className="flex items-center gap-2 mb-2">
                <CreditCard className="w-4 h-4 text-[#8B5CF6]" />
                <p className="text-xs text-slate-600 font-medium">Avg Bill Amount</p>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-1">Rp 245K</h3>
              <p className="text-xs text-[#00A63E] flex items-center gap-1">
                <ArrowUpRight className="w-3 h-3" />
                +4.2% from last month
              </p>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h3 className="text-md font-bold text-slate-900 mb-4">Performance Metrics</h3>
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-4 h-4 text-[#00A63E]" />
                <p className="text-xs text-slate-600 font-medium">Success Rate</p>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-1">96.8%</h3>
              <p className="text-xs text-[#00A63E] flex items-center gap-1">
                <ArrowUpRight className="w-3 h-3" />
                +1.2% from last month
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <div className="flex items-center gap-2 mb-2">
                <Repeat className="w-4 h-4 text-[#FB923C]" />
                <p className="text-xs text-slate-600 font-medium">Multi Bill Auto Debit Rate</p>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-1">42.5%</h3>
              <p className="text-xs text-[#00A63E] flex items-center gap-1">
                <ArrowUpRight className="w-3 h-3" />
                +7.3% from last month
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <div className="flex items-center gap-2 mb-2">
                <CreditCard className="w-4 h-4 text-[#FDC700]" />
                <p className="text-xs text-slate-600 font-medium">Avg Auto Debit per User</p>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-1">2.8</h3>
              <p className="text-xs text-[#00A63E] flex items-center gap-1">
                <ArrowUpRight className="w-3 h-3" />
                +0.4 from last month
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <div className="flex items-center gap-2 mb-2">
                <Percent className="w-4 h-4 text-[#155DFC]" />
                <p className="text-xs text-slate-600 font-medium">Offer Acceptance Rate</p>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-1">51.2%</h3>
              <p className="text-xs text-[#00A63E] flex items-center gap-1">
                <ArrowUpRight className="w-3 h-3" />
                +6.8% from last month
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Comparison: With vs Without Auto-Debit */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 mb-6">
        <div className="flex items-center gap-2 mb-6">
          <BarChart3 className="w-5 h-5 text-[#155DFC]" />
          <h3 className="text-lg font-bold text-slate-900">Performance Comparison: With vs Without Auto-Debit</h3>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Late Payment Rate */}
          <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
            <p className="text-xs text-slate-600 font-medium mb-3">Late Payment Rate</p>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-slate-500 mb-1">Without Auto-Debit</p>
                <p className="text-lg font-bold text-slate-900">28%</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <p className="text-xs text-blue-700 mb-1">With Auto-Debit</p>
                <p className="text-2xl font-bold text-[#155DFC]">3%</p>
              </div>
              <div className="bg-green-50 rounded-lg p-2">
                <p className="text-xs text-green-700 font-medium flex items-center gap-1">
                  -89% late payments ✅
                </p>
              </div>
            </div>
          </div>

          {/* Time Saved per Month */}
          <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
            <p className="text-xs text-slate-600 font-medium mb-3">Time Saved per Month</p>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-slate-500 mb-1">Manual Payment</p>
                <p className="text-lg font-bold text-slate-900">45 min</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <p className="text-xs text-blue-700 mb-1">Auto-Debit</p>
                <p className="text-2xl font-bold text-[#155DFC]">0 min</p>
              </div>
              <div className="bg-green-50 rounded-lg p-2">
                <p className="text-xs text-green-700 font-medium flex items-center gap-1">
                  45 min saved monthly ⚡
                </p>
              </div>
            </div>
          </div>

          {/* Customer Lifetime Value */}
          <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
            <p className="text-xs text-slate-600 font-medium mb-3">Customer Lifetime Value</p>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-slate-500 mb-1">Without Auto-Debit</p>
                <p className="text-lg font-bold text-slate-900">$4,200</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <p className="text-xs text-blue-700 mb-1">With Auto-Debit</p>
                <p className="text-2xl font-bold text-[#155DFC]">$6,850</p>
              </div>
              <div className="bg-green-50 rounded-lg p-2">
                <p className="text-xs text-green-700 font-medium flex items-center gap-1">
                  +63% CLV increase 🔥
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Time to Adoption & Segmentation */}
      <div className="grid grid-cols-1 gap-6 mb-6">
        {/* Time to Adoption */}
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Time to Adoption</h3>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={timeToAdoptionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="time" stroke="#64748b" style={{ fontSize: '12px' }} />
              <YAxis stroke="#64748b" style={{ fontSize: '12px' }} />
              <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
              <Line type="monotone" dataKey="count" stroke="#155DFC" strokeWidth={3} dot={{ fill: '#155DFC', r: 5 }} name="Users" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Customer Segmentation */}
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-slate-900">Customer Segmentation Performance</h3>
            <select
              value={segmentationType}
              onChange={(e) => setSegmentationType(e.target.value as any)}
              className="px-3 py-1.5 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#155DFC]"
            >
              <option value="products">By Products Owned</option>
              <option value="category">By Primary Category</option>
              <option value="frequency">By Usage Frequency</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <ComposedChart data={getSegmentationData()}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="segment" stroke="#64748b" style={{ fontSize: '12px' }} />
              <YAxis yAxisId="left" stroke="#64748b" style={{ fontSize: '12px' }} unit="%" />
              <YAxis yAxisId="right" orientation="right" stroke="#64748b" style={{ fontSize: '12px' }} />
              <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
              <Legend />
              <Bar yAxisId="left" dataKey="adoption" fill="#155DFC" radius={[8, 8, 0, 0]} name="Adoption Rate %" />
              <Line yAxisId="right" type="monotone" dataKey="revenue" stroke="#00A63E" strokeWidth={3} dot={{ fill: '#00A63E', r: 4 }} name="Revenue (K)" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Section: Activation & Adoption */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Zap className="w-6 h-6 text-[#155DFC]" />
          <h2 className="text-xl font-bold text-slate-900">Activation & Adoption</h2>
        </div>
        
        {/* Activation Funnel - Full Width */}
        <div className="bg-white rounded-xl p-6 border border-slate-200 mb-6">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Activation Funnel</h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={activationFunnelData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis type="number" stroke="#64748b" style={{ fontSize: '12px' }} unit="%" />
              <YAxis type="category" dataKey="stage" stroke="#64748b" style={{ fontSize: '12px' }} width={120} />
              <Tooltip formatter={(value: number) => `${value}%`} contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
              <Bar dataKey="value" fill="#155DFC" radius={[0, 8, 8, 0]} name="Percentage" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Time Charts */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* Time to Activation */}
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Time to Activation Distribution</h3>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={timeToActivationData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="time" stroke="#64748b" style={{ fontSize: '12px' }} />
                <YAxis stroke="#64748b" style={{ fontSize: '12px' }} />
                <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                <Bar dataKey="count" fill="#8B5CF6" radius={[8, 8, 0, 0]} name="Users" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* First Transaction Time */}
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">First Auto-Debit Transaction Time</h3>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={firstTransactionTimeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="time" stroke="#64748b" style={{ fontSize: '12px' }} />
                <YAxis stroke="#64748b" style={{ fontSize: '12px' }} />
                <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                <Bar dataKey="count" fill="#FB923C" radius={[8, 8, 0, 0]} name="Users" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Activation Metrics - Below Time Charts */}
        <div className="grid grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <p className="text-sm text-slate-600 mb-2">Avg Time to Activation</p>
            <h3 className="text-2xl font-bold text-[#155DFC]">18.5 min</h3>
          </div>
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <p className="text-sm text-slate-600 mb-2">Avg Time to First Transaction</p>
            <h3 className="text-2xl font-bold text-[#8B5CF6]">8.2 hours</h3>
          </div>
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <p className="text-sm text-slate-600 mb-2">Offer Acceptance Rate</p>
            <h3 className="text-2xl font-bold text-[#00A63E]">51.2%</h3>
          </div>
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <p className="text-sm text-slate-600 mb-2">Setup Completion Rate</p>
            <h3 className="text-2xl font-bold text-[#00A63E]">85.3%</h3>
          </div>
        </div>
      </div>

      {/* Section: Engagement & Usage */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Activity className="w-6 h-6 text-[#155DFC]" />
          <h2 className="text-xl font-bold text-slate-900">Engagement & Usage</h2>
        </div>
        
        {/* DAU/WAU/MAU Trends - Full Width */}
        <div className="bg-white rounded-xl p-6 border border-slate-200 mb-6">
          <h3 className="text-lg font-bold text-slate-900 mb-4">DAU/WAU/MAU Trends</h3>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={dauWauMauTrendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" stroke="#64748b" style={{ fontSize: '12px' }} />
              <YAxis stroke="#64748b" style={{ fontSize: '12px' }} unit="K" />
              <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
              <Legend />
              <Line type="monotone" dataKey="dau" stroke="#155DFC" strokeWidth={2} dot={{ fill: '#155DFC', r: 4 }} name="DAU" />
              <Line type="monotone" dataKey="wau" stroke="#8B5CF6" strokeWidth={2} dot={{ fill: '#8B5CF6', r: 4 }} name="WAU" />
              <Line type="monotone" dataKey="mau" stroke="#00A63E" strokeWidth={2} dot={{ fill: '#00A63E', r: 4 }} name="MAU" />
            </LineChart>
          </ResponsiveContainer>
          
          {/* Engagement Metrics - Inside the same card, below the chart */}
          <div className="mt-6 pt-6 border-t border-slate-200">
            <h4 className="text-md font-bold text-slate-900 mb-4">Engagement Metrics</h4>
            <div className="grid grid-cols-4 gap-4">
              <InfoCard label="Current MAU" value="102.5K" color="text-[#00A63E]" />
              <InfoCard label="Avg Reminders Responded" value="85.3%" color="text-[#155DFC]" />
              <InfoCard label="Active Responder Rate" value="78.5%" color="text-[#8B5CF6]" />
              <InfoCard label="Stickiness Ratio (DAU/MAU)" value="17.8%" color="text-slate-900" />
            </div>
          </div>
        </div>

        {/* Transaction Charts */}
        <div className="grid grid-cols-2 gap-6">
          {/* Transaction Frequency */}
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Transaction Frequency</h3>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={transactionFrequencyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="frequency" stroke="#64748b" style={{ fontSize: '12px' }} />
                <YAxis stroke="#64748b" style={{ fontSize: '12px' }} />
                <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                <Bar dataKey="users" fill="#155DFC" radius={[8, 8, 0, 0]} name="Users" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Active vs Inactive */}
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Active vs Inactive Auto-Debit</h3>
            <ResponsiveContainer width="100%" height={260}>
              <PieChart>
                <Pie
                  data={activeVsInactiveData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {activeVsInactiveData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Section: Revenue & Business Impact */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <DollarSign className="w-6 h-6 text-[#155DFC]" />
          <h2 className="text-xl font-bold text-slate-900">Revenue & Business Impact</h2>
        </div>
        
        {/* MRR Trend */}
        <div className="bg-white rounded-xl p-6 border border-slate-200 mb-6">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Monthly Recurring Revenue (MRR) Trend</h3>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={mrrTrendData}>
              <defs>
                <linearGradient id="colorMRR" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00A63E" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#00A63E" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" stroke="#64748b" style={{ fontSize: '12px' }} />
              <YAxis stroke="#64748b" style={{ fontSize: '12px' }} tickFormatter={(value) => `${value}M`} />
              <Tooltip formatter={(value: number) => `Rp ${value}M`} contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
              <Area type="monotone" dataKey="mrr" stroke="#00A63E" strokeWidth={2} fillOpacity={1} fill="url(#colorMRR)" name="MRR" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Growth & Info */}
        <div className="bg-white rounded-xl p-6 border border-slate-200 mb-6">
          <h3 className="text-lg font-bold text-slate-900 mb-4">MoM & YoY Growth Trend</h3>
          <ResponsiveContainer width="100%" height={280}>
            <ComposedChart data={growthData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" stroke="#64748b" style={{ fontSize: '12px' }} />
              <YAxis stroke="#64748b" style={{ fontSize: '12px' }} unit="%" />
              <Tooltip formatter={(value: number) => `${value}%`} contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
              <Legend />
              <Bar dataKey="mom" fill="#155DFC" radius={[8, 8, 0, 0]} name="MoM Growth" />
              <Line type="monotone" dataKey="yoy" stroke="#00A63E" strokeWidth={3} dot={{ fill: '#00A63E', r: 4 }} name="YoY Growth" />
            </ComposedChart>
          </ResponsiveContainer>
          
          {/* Growth Metrics - Inside the same card, below the chart */}
          <div className="mt-6 pt-6 border-t border-slate-200">
            <h4 className="text-md font-bold text-slate-900 mb-4">Growth Metrics</h4>
            <div className="grid grid-cols-3 gap-4">
              <InfoCard label="Current MoM Growth" value="6.2%" color="text-[#155DFC]" />
              <InfoCard label="Current YoY Growth" value="42.8%" color="text-[#00A63E]" />
              <InfoCard label="Avg MoM Growth" value="7.9%" color="text-slate-900" />
            </div>
          </div>
        </div>

        {/* Revenue Charts */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* Revenue by Bill Type */}
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Revenue by Bill Type</h3>
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie
                  data={revenueByBillTypeData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ type, revenue }) => `${type}: Rp ${revenue}M`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="revenue"
                >
                  {revenueByBillTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: number) => `Rp ${value}M`} contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Avg Transaction by Type */}
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Avg Transaction Value by Type</h3>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={avgTransactionByTypeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="type" stroke="#64748b" style={{ fontSize: '11px' }} angle={-15} textAnchor="end" height={80} />
                <YAxis stroke="#64748b" style={{ fontSize: '12px' }} tickFormatter={(value) => `${value}K`} />
                <Tooltip formatter={(value: number) => `Rp ${value}K`} contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                <Bar dataKey="amount" fill="#00A63E" radius={[8, 8, 0, 0]} name="Avg Amount" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Revenue Info Cards */}
        <div className="grid grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <p className="text-sm text-slate-600 mb-2">Revenue Predictability</p>
            <h3 className="text-2xl font-bold text-[#00A63E]">94.5%</h3>
          </div>
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <p className="text-sm text-slate-600 mb-2">CLV Uplift</p>
            <h3 className="text-2xl font-bold text-[#155DFC]">72.8%</h3>
          </div>
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <p className="text-sm text-slate-600 mb-2">Avg Revenue per Auto-Debit</p>
            <h3 className="text-2xl font-bold text-slate-900">Rp 18.6K</h3>
          </div>
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <p className="text-sm text-slate-600 mb-2">Total MRR</p>
            <h3 className="text-2xl font-bold text-[#00A63E]">Rp 465M</h3>
          </div>
        </div>
      </div>

      {/* Section: Customer Segmentation */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Users className="w-6 h-6 text-[#155DFC]" />
          <h2 className="text-xl font-bold text-slate-900">Customer Segmentation</h2>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {/* Adoption Rate by Segment */}
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-slate-900">Adoption Rate by Segment</h3>
              <select
                value={adoptionSegment}
                onChange={(e) => setAdoptionSegment(e.target.value as any)}
                className="px-3 py-1.5 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#155DFC]"
              >
                <option value="age">By Age</option>
                <option value="income">By Income</option>
                <option value="location">By Location</option>
                <option value="tier">By Customer Tier</option>
              </select>
            </div>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={getAdoptionData()}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="segment" stroke="#64748b" style={{ fontSize: '12px' }} />
                <YAxis stroke="#64748b" style={{ fontSize: '12px' }} unit="%" />
                <Tooltip formatter={(value: number) => `${value}%`} contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                <Bar dataKey="rate" fill="#8B5CF6" radius={[8, 8, 0, 0]} name="Adoption Rate" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Revenue Per User by Segment */}
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Revenue Per User by Segment</h3>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={revenuePerUserBySegmentData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="segment" stroke="#64748b" style={{ fontSize: '12px' }} />
                <YAxis stroke="#64748b" style={{ fontSize: '12px' }} tickFormatter={(value) => `${value}K`} />
                <Tooltip formatter={(value: number) => `Rp ${value}K`} contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                <Bar dataKey="revenue" fill="#FDC700" radius={[8, 8, 0, 0]} name="Revenue" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Section: Cohort Analysis */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <BarChart3 className="w-6 h-6 text-[#155DFC]" />
          <h2 className="text-xl font-bold text-slate-900">Cohort Analysis</h2>
        </div>
        
        {/* Retention & Revenue Cohort */}
        {/* Retention Cohort - First Row */}
        <div className="bg-white rounded-xl p-6 border border-slate-200 mb-6">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Retention Cohort (Monthly)</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-2 px-2 text-slate-600">Cohort</th>
                  <th className="text-center py-2 px-2 text-slate-600">M0</th>
                  <th className="text-center py-2 px-2 text-slate-600">M1</th>
                  <th className="text-center py-2 px-2 text-slate-600">M2</th>
                  <th className="text-center py-2 px-2 text-slate-600">M3</th>
                  <th className="text-center py-2 px-2 text-slate-600">M4</th>
                  <th className="text-center py-2 px-2 text-slate-600">M5</th>
                  <th className="text-center py-2 px-2 text-slate-600">M6</th>
                </tr>
              </thead>
              <tbody>
                {retentionCohortData.map((row) => (
                  <tr key={row.cohort} className="border-b border-slate-100">
                    <td className="py-2 px-2 font-medium">{row.cohort}</td>
                    <td className="text-center py-2 px-2 bg-[#00A63E]/10 text-[#00A63E] font-semibold">{row.m0}%</td>
                    <td className="text-center py-2 px-2 bg-[#00A63E]/20 text-[#00A63E]">{row.m1}%</td>
                    <td className="text-center py-2 px-2 bg-[#00A63E]/30 text-[#00A63E]">{row.m2}%</td>
                    <td className="text-center py-2 px-2 bg-[#00A63E]/40 text-[#00A63E]">{row.m3}%</td>
                    <td className="text-center py-2 px-2 bg-[#00A63E]/50 text-[#00A63E]">{row.m4 ? `${row.m4}%` : '-'}</td>
                    <td className="text-center py-2 px-2 bg-[#00A63E]/60 text-[#00A63E]">{row.m5 ? `${row.m5}%` : '-'}</td>
                    <td className="text-center py-2 px-2 bg-[#00A63E]/70 text-[#00A63E]">{row.m6 ? `${row.m6}%` : '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs text-slate-500 mt-3">Percentage of users still active after N months</p>
          </div>
        </div>

        {/* Revenue Cohort - Second Row */}
        <div className="bg-white rounded-xl p-6 border border-slate-200 mb-6">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Revenue Cohort (Avg Monthly Revenue)</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-2 px-2 text-slate-600">Cohort</th>
                  <th className="text-center py-2 px-2 text-slate-600">M0</th>
                  <th className="text-center py-2 px-2 text-slate-600">M1</th>
                  <th className="text-center py-2 px-2 text-slate-600">M2</th>
                  <th className="text-center py-2 px-2 text-slate-600">M3</th>
                  <th className="text-center py-2 px-2 text-slate-600">M4</th>
                  <th className="text-center py-2 px-2 text-slate-600">M5</th>
                  <th className="text-center py-2 px-2 text-slate-600">M6</th>
                </tr>
              </thead>
              <tbody>
                {revenueCohortData.map((row) => (
                  <tr key={row.cohort} className="border-b border-slate-100">
                    <td className="py-2 px-2 font-medium">{row.cohort}</td>
                    <td className="text-center py-2 px-2 bg-[#155DFC]/10 text-[#155DFC] font-semibold">{row.m0}K</td>
                    <td className="text-center py-2 px-2 bg-[#155DFC]/20 text-[#155DFC]">{row.m1}K</td>
                    <td className="text-center py-2 px-2 bg-[#155DFC]/30 text-[#155DFC]">{row.m2}K</td>
                    <td className="text-center py-2 px-2 bg-[#155DFC]/40 text-[#155DFC]">{row.m3}K</td>
                    <td className="text-center py-2 px-2 bg-[#155DFC]/50 text-[#155DFC]">{row.m4 ? `${row.m4}K` : '-'}</td>
                    <td className="text-center py-2 px-2 bg-[#155DFC]/60 text-[#155DFC]">{row.m5 ? `${row.m5}K` : '-'}</td>
                    <td className="text-center py-2 px-2 bg-[#155DFC]/70 text-[#155DFC]">{row.m6 ? `${row.m6}K` : '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs text-slate-500 mt-3">Average revenue generated per user after time</p>
          </div>
        </div>

        {/* Cohort Info Cards */}
        <div className="grid grid-cols-4 gap-6 mb-6">
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <p className="text-sm text-slate-600 mb-2">Avg M12 Retention</p>
            <h3 className="text-2xl font-bold text-[#00A63E]">72.0%</h3>
          </div>
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <p className="text-sm text-slate-600 mb-2">Best Performing Cohort</p>
            <h3 className="text-2xl font-bold text-[#155DFC]">Jun 2026</h3>
          </div>
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <p className="text-sm text-slate-600 mb-2">Revenue Growth (M0-M12)</p>
            <h3 className="text-2xl font-bold text-[#FDC700]">+73.3%</h3>
          </div>
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <p className="text-sm text-slate-600 mb-2">Cohort Size Trend</p>
            <h3 className="text-2xl font-bold text-slate-900">↑ 18.5%</h3>
          </div>
        </div>

        {/* Retention & Transaction Success */}
        <div className="grid grid-cols-2 gap-6">
          {/* Retention Curve */}
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Retention Curve</h3>
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={retentionCurveData}>
                <defs>
                  <linearGradient id="colorRetention" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00A63E" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#00A63E" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" stroke="#64748b" style={{ fontSize: '12px' }} />
                <YAxis stroke="#64748b" style={{ fontSize: '12px' }} unit="%" />
                <Tooltip formatter={(value: number) => `${value}%`} contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                <Area type="monotone" dataKey="retention" stroke="#00A63E" strokeWidth={2} fillOpacity={1} fill="url(#colorRetention)" name="Retention Rate" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Transaction Success */}
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Transaction Success Rate Trend</h3>
            <ResponsiveContainer width="100%" height={280}>
              <ComposedChart data={transactionSuccessData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" stroke="#64748b" style={{ fontSize: '12px' }} />
                <YAxis stroke="#64748b" style={{ fontSize: '12px' }} unit="%" />
                <Tooltip formatter={(value: number) => `${value}%`} contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                <Legend />
                <Bar dataKey="success" stackId="a" fill="#00A63E" radius={[8, 8, 0, 0]} name="Success" />
                <Bar dataKey="failed" stackId="a" fill="#C10007" radius={[8, 8, 0, 0]} name="Failed" />
                <Line type="monotone" dataKey="success" stroke="#155DFC" strokeWidth={2} dot={{ fill: '#155DFC', r: 4 }} name="Success Trend" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}