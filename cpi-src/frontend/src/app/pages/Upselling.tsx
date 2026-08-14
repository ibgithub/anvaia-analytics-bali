import { useState } from 'react';
import { 
  TrendingUp, 
  DollarSign, 
  Users, 
  Target,
  Calendar,
  CheckCircle,
  XCircle,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
  Percent,
  MousePointerClick,
  FileCheck,
  RefreshCw,
  Award,
  Zap,
  AlertCircle,
  Activity,
  BarChart3,
  Diamond
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
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Cell
} from 'recharts';

// Mock Data
const conversionTrendData = [
  { month: 'Jan', rate: 18.5 },
  { month: 'Feb', rate: 19.8 },
  { month: 'Mar', rate: 20.2 },
  { month: 'Apr', rate: 21.5 },
  { month: 'May', rate: 21.8 },
  { month: 'Jun', rate: 22.7 },
];

const aumGrowthData = [
  { month: 'Jan', aum: 4200, target: 4000 },
  { month: 'Feb', aum: 4580, target: 4300 },
  { month: 'Mar', aum: 4890, target: 4600 },
  { month: 'Apr', aum: 5320, target: 4900 },
  { month: 'May', aum: 5680, target: 5200 },
  { month: 'Jun', aum: 6150, target: 5500 },
];

const newCustomersData = [
  { month: 'Week 1', customers: 4200 },
  { month: 'Week 2', customers: 4600 },
  { month: 'Week 3', customers: 4900 },
  { month: 'Week 4', customers: 5000 },
  { month: 'Week 5', customers: 5400 },
  { month: 'Week 6', customers: 5600 },
];

const growthData = [
  { month: 'Jan', mom: 8.5, yoy: 45.2 },
  { month: 'Feb', mom: 12.3, yoy: 48.6 },
  { month: 'Mar', mom: -2.8, yoy: 42.1 },
  { month: 'Apr', mom: 13.0, yoy: 52.3 },
  { month: 'May', mom: 10.9, yoy: 55.8 },
  { month: 'Jun', mom: 9.2, yoy: 58.4 },
];

const acceptanceByProductData = [
  { product: 'Savings+', acceptance: 85.0 },
  { product: 'Deposito', acceptance: 72.0 },
  { product: 'Investment', acceptance: 65.0 },
  { product: 'Credit Card', acceptance: 58.0 },
  { product: 'Insurance', acceptance: 52.0 },
];

const reofferSuccessData = [
  { attempt: '1st Offer', rate: 31.8 },
  { attempt: '2nd Offer', rate: 12.3 },
  { attempt: '3rd Offer', rate: 6.5 },
  { attempt: '4th+ Offer', rate: 2.8 },
];

const approvalFunnelData = [
  { stage: 'Applications', value: 100 },
  { stage: 'Documents', value: 85 },
  { stage: 'Verification', value: 72 },
  { stage: 'Approval', value: 65 },
  { stage: 'Activation', value: 58 },
];

const timeToApprovalData = [
  { hours: '0-6h', count: 2800 },
  { hours: '6-12h', count: 1950 },
  { hours: '12-24h', count: 1120 },
  { hours: '24-48h', count: 430 },
  { hours: '48h+', count: 200 },
];

const clvComparisonData = [
  { segment: 'Basic', before: 125, after: 185 },
  { segment: 'Silver', before: 285, after: 425 },
  { segment: 'Gold', before: 580, after: 920 },
  { segment: 'Platinum', before: 1250, after: 2100 },
];

const productFlowData = [
  { from: 'Basic → Silver', conversion: 24.5 },
  { from: 'Silver → Gold', conversion: 18.3 },
  { from: 'Gold → Platinum', conversion: 12.7 },
  { from: 'Savings → Deposito', conversion: 31.2 },
  { from: 'Deposito → Investment', conversion: 15.8 },
];

const timeToDecisionData = [
  { day: 'Day 1', decided: 3200 },
  { day: 'Day 2', decided: 1850 },
  { day: 'Day 3', decided: 980 },
  { day: 'Day 4', decided: 520 },
  { day: 'Day 5', decided: 310 },
  { day: 'Day 6-7', decided: 240 },
  { day: 'Day 8+', decided: 400 },
];

const segmentationData = {
  product: [
    { segment: 'Basic', performance: 65, revenue: 85, satisfaction: 70 },
    { segment: 'Silver', performance: 75, revenue: 78, satisfaction: 80 },
    { segment: 'Gold', performance: 88, revenue: 92, satisfaction: 90 },
    { segment: 'Platinum', performance: 95, revenue: 98, satisfaction: 95 },
  ],
  income: [
    { segment: '<5M', performance: 62, revenue: 68, satisfaction: 65 },
    { segment: '5-10M', performance: 72, revenue: 75, satisfaction: 75 },
    { segment: '10-25M', performance: 85, revenue: 88, satisfaction: 85 },
    { segment: '>25M', performance: 93, revenue: 95, satisfaction: 92 },
  ],
  tenure: [
    { segment: '<1 Year', performance: 58, revenue: 62, satisfaction: 60 },
    { segment: '1-2 Years', performance: 70, revenue: 72, satisfaction: 73 },
    { segment: '2-5 Years', performance: 82, revenue: 85, satisfaction: 83 },
    { segment: '>5 Years', performance: 91, revenue: 94, satisfaction: 92 },
  ],
};

const dauWauMauData = [
  { month: 'Jan', dau: 6800, wau: 28400, mau: 95200 },
  { month: 'Feb', dau: 7200, wau: 30100, mau: 101000 },
  { month: 'Mar', dau: 7650, wau: 32500, mau: 108000 },
  { month: 'Apr', dau: 8100, wau: 34800, mau: 115000 },
  { month: 'May', dau: 8620, wau: 37500, mau: 122500 },
  { month: 'Jun', dau: 9180, wau: 40200, mau: 131000 },
];

const funnelData = [
  { name: 'Customers Shown Offer', value: 45280, fill: '#155DFC' },
  { name: 'Clicked/Interested', value: 32156, fill: '#8B5CF6' },
  { name: 'Applied/Requested', value: 10245, fill: '#FDC700' },
  { name: 'Converted', value: 6850, fill: '#00A63E' },
];

export function Upselling() {
  const [segmentationType, setSegmentationType] = useState('product');

  const currentSegmentData = segmentationData[segmentationType as keyof typeof segmentationData];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Upselling Analytics</h1>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
            <Calendar className="w-4 h-4 text-slate-600" />
            <span className="text-sm text-slate-700">Jan - Jun 2026</span>
          </button>
        </div>
      </div>

      {/* Main Metrics Cards - Simplified & Grouped */}
      <div className="grid grid-cols-1 gap-6 mb-6">
        {/* Conversion Funnel Metrics */}
        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <Target className="w-5 h-5 text-[#155DFC]" />
            <h3 className="text-lg font-bold text-slate-900">Conversion Funnel Metrics</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <Users className="h-5 w-5 text-[#155DFC]" />
                <div className="px-2 py-1 bg-green-50 rounded-full">
                  <p className="text-xs text-[#00A63E] font-semibold flex items-center gap-1">
                    <ArrowUpRight className="w-3 h-3" />
                    +12.5%
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 font-medium mb-1">Customers Shown Offer</p>
              <h3 className="text-2xl font-bold text-slate-900">45,280</h3>
              <p className="text-xs text-slate-500 mt-1">from last month</p>
            </div>

            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <MousePointerClick className="h-5 w-5 text-[#8B5CF6]" />
                <div className="px-2 py-1 bg-blue-50 rounded-full">
                  <p className="text-xs text-[#155DFC] font-semibold">71.0%</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 font-medium mb-1">Clicked/Interested</p>
              <h3 className="text-2xl font-bold text-slate-900">32,156</h3>
              <p className="text-xs text-slate-500 mt-1">engagement rate</p>
            </div>

            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <FileCheck className="h-5 w-5 text-[#FDC700]" />
                <div className="px-2 py-1 bg-green-50 rounded-full">
                  <p className="text-xs text-[#00A63E] font-semibold flex items-center gap-1">
                    <ArrowUpRight className="w-3 h-3" />
                    +8.3%
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 font-medium mb-1">Applied/Requested</p>
              <h3 className="text-2xl font-bold text-slate-900">10,245</h3>
              <p className="text-xs text-slate-500 mt-1">from last month</p>
            </div>

            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <Target className="h-5 w-5 text-[#00A63E]" />
                <div className="px-2 py-1 bg-green-50 rounded-full">
                  <p className="text-xs text-[#00A63E] font-semibold flex items-center gap-1">
                    <ArrowUpRight className="w-3 h-3" />
                    +2.1%
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 font-medium mb-1">Conversion Rate</p>
              <h3 className="text-2xl font-bold text-slate-900">22.6%</h3>
              <p className="text-xs text-slate-500 mt-1">from last month</p>
            </div>
          </div>
        </div>

        {/* Revenue & AUM Metrics */}
        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <DollarSign className="w-5 h-5 text-[#00A63E]" />
            <h3 className="text-lg font-bold text-slate-900">Revenue & AUM Metrics</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <DollarSign className="h-5 w-5 text-[#00A63E]" />
                <div className="px-2 py-1 bg-green-50 rounded-full">
                  <p className="text-xs text-[#00A63E] font-semibold flex items-center gap-1">
                    <ArrowUpRight className="w-3 h-3" />
                    +15.3%
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 font-medium mb-1">Total AUM Increase</p>
              <h3 className="text-2xl font-bold text-slate-900">Rp 248M</h3>
              <p className="text-xs text-slate-500 mt-1">from last month</p>
            </div>

            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <TrendingUp className="h-5 w-5 text-[#155DFC]" />
                <div className="px-2 py-1 bg-blue-50 rounded-full">
                  <p className="text-xs text-[#155DFC] font-semibold">Per upsell</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 font-medium mb-1">Avg Uplift Per Customer</p>
              <h3 className="text-2xl font-bold text-slate-900">Rp 24.2M</h3>
              <p className="text-xs text-slate-500 mt-1">successful upsell</p>
            </div>

            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <Award className="h-5 w-5 text-[#FDC700]" />
                <div className="px-2 py-1 bg-green-50 rounded-full">
                  <p className="text-xs text-[#00A63E] font-semibold">+68.3%</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 font-medium mb-1">CLV Uplift</p>
              <h3 className="text-2xl font-bold text-slate-900">68.3%</h3>
              <p className="text-xs text-slate-500 mt-1">across all tiers</p>
            </div>

            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <Percent className="h-5 w-5 text-[#8B5CF6]" />
                <div className="px-2 py-1 bg-green-50 rounded-full">
                  <p className="text-xs text-[#00A63E] font-semibold flex items-center gap-1">
                    <ArrowUpRight className="w-3 h-3" />
                    +1.9%
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 font-medium mb-1">Offer Acceptance Rate</p>
              <h3 className="text-2xl font-bold text-slate-900">31.8%</h3>
              <p className="text-xs text-slate-500 mt-1">from last month</p>
            </div>
          </div>
        </div>
      </div>

      {/* User Engagement Metrics - Full Width */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm mb-6">
        <div className="flex items-center gap-2 mb-6">
          <Users className="w-5 h-5 text-[#8B5CF6]" />
          <h3 className="text-lg font-bold text-slate-900">User Engagement Metrics</h3>
        </div>
        <div className="grid grid-cols-4 gap-4">
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <Users className="h-5 w-5 text-[#FDC700]" />
                <div className="px-2 py-1 bg-green-50 rounded-full">
                  <p className="text-xs text-[#00A63E] font-semibold flex items-center gap-1">
                    <ArrowUpRight className="w-3 h-3" />
                    +5.8%
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 font-medium mb-1">Daily Active Users</p>
              <h3 className="text-2xl font-bold text-slate-900">8,420</h3>
              <p className="text-xs text-slate-500 mt-1">from yesterday</p>
            </div>

            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <Users className="h-5 w-5 text-[#8B5CF6]" />
                <div className="px-2 py-1 bg-green-50 rounded-full">
                  <p className="text-xs text-[#00A63E] font-semibold flex items-center gap-1">
                    <ArrowUpRight className="w-3 h-3" />
                    +7.2%
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 font-medium mb-1">Weekly Active Users</p>
              <h3 className="text-2xl font-bold text-slate-900">32,580</h3>
              <p className="text-xs text-slate-500 mt-1">from last week</p>
            </div>

            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <RefreshCw className="h-5 w-5 text-[#155DFC]" />
                <div className="px-2 py-1 bg-green-50 rounded-full">
                  <p className="text-xs text-[#00A63E] font-semibold flex items-center gap-1">
                    <ArrowUpRight className="w-3 h-3" />
                    +3.2%
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 font-medium mb-1">Repeat Upsell Rate</p>
              <h3 className="text-2xl font-bold text-slate-900">38.5%</h3>
              <p className="text-xs text-slate-500 mt-1">from last month</p>
            </div>

            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <CheckCircle className="h-5 w-5 text-[#00A63E]" />
                <div className="px-2 py-1 bg-green-50 rounded-full">
                  <p className="text-xs text-[#00A63E] font-semibold">Target: 85%</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 font-medium mb-1">Approval Rate</p>
              <h3 className="text-2xl font-bold text-slate-900">89.2%</h3>
              <p className="text-xs text-slate-500 mt-1">above target</p>
            </div>
          </div>
        </div>

      {/* Performance Comparison: With vs Without Upselling */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 mb-6">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1 h-6 bg-gradient-to-b from-[#155DFC] to-[#8B5CF6] rounded-full"></div>
          <h3 className="text-lg font-bold text-slate-900">Performance Comparison: With vs Without Upselling</h3>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Customer Retention Rate */}
          <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
            <p className="text-xs text-slate-600 font-medium mb-3">Customer Retention Rate</p>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-slate-500 mb-1">Without Upselling</p>
                <p className="text-lg font-bold text-slate-900">72%</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <p className="text-xs text-blue-700 mb-1">With Upselling</p>
                <p className="text-2xl font-bold text-[#155DFC]">89%</p>
              </div>
              <div className="bg-green-50 rounded-lg p-2">
                <p className="text-xs text-green-700 font-medium flex items-center gap-1">
                  +23.6% increase 🚀
                </p>
              </div>
            </div>
          </div>

          {/* Avg Account Balance */}
          <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
            <p className="text-xs text-slate-600 font-medium mb-3">Avg Account Balance</p>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-slate-500 mb-1">Without Upselling</p>
                <p className="text-lg font-bold text-slate-900">Rp 28.5M</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <p className="text-xs text-blue-700 mb-1">With Upselling</p>
                <p className="text-2xl font-bold text-[#155DFC]">Rp 43.2M</p>
              </div>
              <div className="bg-green-50 rounded-lg p-2">
                <p className="text-xs text-green-700 font-medium flex items-center gap-1">
                  +51.6% increase 🔥
                </p>
              </div>
            </div>
          </div>

          {/* Revenue per Customer */}
          <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
            <p className="text-xs text-slate-600 font-medium mb-3">Revenue per Customer</p>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-slate-500 mb-1">Without Upselling</p>
                <p className="text-lg font-bold text-slate-900">Rp 450K</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <p className="text-xs text-blue-700 mb-1">With Upselling</p>
                <p className="text-2xl font-bold text-[#155DFC]">Rp 780K</p>
              </div>
              <div className="bg-green-50 rounded-lg p-2">
                <p className="text-xs text-green-700 font-medium flex items-center gap-1">
                  +73.3% increase 📈
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conversion Funnel */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 mb-6">
        <h3 className="text-lg font-bold text-slate-900 mb-4">Conversion Funnel</h3>
        <div style={{ width: '100%', height: '320px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={funnelData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis type="number" stroke="#64748b" style={{ fontSize: '12px' }} />
              <YAxis type="category" dataKey="name" stroke="#64748b" style={{ fontSize: '12px' }} width={180} />
              <Tooltip 
                formatter={(value: number) => value.toLocaleString()}
                contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }}
              />
              <Bar dataKey="value" radius={[0, 8, 8, 0]}>
                {funnelData.map((entry, index) => (
                  <Cell key={`cell-funnel-${index}`} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Section: Engagement & Retention */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Activity className="w-6 h-6 text-[#155DFC]" />
          <h2 className="text-xl font-bold text-slate-900">Engagement & Retention</h2>
        </div>

        {/* DAU/WAU/MAU Trends - Full Width */}
        <div className="bg-white rounded-xl p-6 border border-slate-200 mb-4">
          <h3 className="text-lg font-bold text-slate-900 mb-4">DAU/WAU/MAU Trends</h3>
          <div style={{ width: '100%', height: '350px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dauWauMauData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" stroke="#64748b" style={{ fontSize: '12px' }} />
                <YAxis stroke="#64748b" style={{ fontSize: '12px' }} />
                <Tooltip 
                  formatter={(value: number) => value.toLocaleString()}
                  contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }}
                />
                <Legend />
                <Line type="monotone" dataKey="dau" stroke="#8B5CF6" strokeWidth={3} name="DAU" dot={{ r: 5 }} />
                <Line type="monotone" dataKey="wau" stroke="#FDC700" strokeWidth={3} name="WAU" dot={{ r: 5 }} />
                <Line type="monotone" dataKey="mau" stroke="#00A63E" strokeWidth={3} name="MAU" dot={{ r: 5 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Additional Engagement Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-slate-200">
            <div>
              <p className="text-xs text-slate-600 mb-1">Current MAU</p>
              <p className="text-xl font-bold text-[#00A63E]">131K</p>
              <p className="text-xs text-slate-500 mt-0.5">Monthly Active Users</p>
            </div>
            <div>
              <p className="text-xs text-slate-600 mb-1">Repeat Upsell Rate</p>
              <p className="text-xl font-bold text-[#155DFC]">38.5%</p>
              <p className="text-xs text-slate-500 mt-0.5">customers upgrade again</p>
            </div>
            <div>
              <p className="text-xs text-slate-600 mb-1">Avg Upgrade per User</p>
              <p className="text-xl font-bold text-[#8B5CF6]">1.8</p>
              <p className="text-xs text-slate-500 mt-0.5">product upgrades/year</p>
            </div>
            <div>
              <p className="text-xs text-slate-600 mb-1">Stickiness Ratio (DAU/MAU)</p>
              <p className="text-xl font-bold text-[#FDC700]">7.0%</p>
              <p className="text-xs text-slate-500 mt-0.5">daily engagement rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section: Growth & Trend */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-6 h-6 text-[#155DFC]" />
          <h2 className="text-xl font-bold text-slate-900">Growth & Trend</h2>
        </div>
        <div className="bg-white rounded-xl p-6 border border-slate-200 mb-4">
          <h3 className="text-lg font-bold text-slate-900 mb-4">MoM & YoY Growth</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={growthData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" stroke="#64748b" style={{ fontSize: '12px' }} />
              <YAxis stroke="#64748b" style={{ fontSize: '12px' }} />
              <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="mom" 
                stroke="#155DFC" 
                strokeWidth={2}
                dot={{ fill: '#155DFC', r: 4 }}
                name="MoM Growth %"
              />
              <Line 
                type="monotone" 
                dataKey="yoy" 
                stroke="#00A63E" 
                strokeWidth={2}
                dot={{ fill: '#00A63E', r: 4 }}
                name="YoY Growth %"
              />
            </LineChart>
          </ResponsiveContainer>
          
          {/* Growth Summary */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="text-sm text-slate-600 mb-1">Current MoM Growth</div>
              <div className="text-2xl font-bold text-[#155DFC]">+9.2%</div>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="text-sm text-slate-600 mb-1">Current YoY Growth</div>
              <div className="text-2xl font-bold text-[#00A63E]">+58.4%</div>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg">
              <div className="text-sm text-slate-600 mb-1">Avg MoM Growth</div>
              <div className="text-2xl font-bold text-slate-900">+8.5%</div>
            </div>
          </div>
        </div>

        {/* New Cards: Conversion Rate Trend, AUM Growth Trend */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          {/* Conversion Rate Trend */}
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Conversion Rate Trend</h3>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={conversionTrendData}>
                <defs>
                  <linearGradient id="colorConversion" x1="0" y1="0" x2="0" y2="1">
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
                  dataKey="rate" 
                  stroke="#155DFC" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorConversion)" 
                  name="Conversion Rate %"
                />
              </AreaChart>
            </ResponsiveContainer>
            <div className="mt-4 text-center">
              <p className="text-xs text-slate-600">Current Rate</p>
              <p className="text-2xl font-bold text-[#155DFC]">22.7%</p>
            </div>
          </div>

          {/* AUM Growth Trend */}
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">AUM Growth Trend</h3>
            <ResponsiveContainer width="100%" height={250}>
              <ComposedChart data={aumGrowthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" stroke="#64748b" style={{ fontSize: '11px' }} />
                <YAxis stroke="#64748b" style={{ fontSize: '11px' }} />
                <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                <Legend wrapperStyle={{ fontSize: '11px' }} />
                <Bar dataKey="target" fill="#cbd5e1" radius={[4, 4, 0, 0]} name="Target (M)" />
                <Line 
                  type="monotone" 
                  dataKey="aum" 
                  stroke="#00A63E" 
                  strokeWidth={3}
                  dot={{ fill: '#00A63E', r: 4 }}
                  name="Actual AUM (M)"
                />
              </ComposedChart>
            </ResponsiveContainer>
            <div className="mt-4 text-center">
              <p className="text-xs text-slate-600">Current AUM</p>
              <p className="text-2xl font-bold text-[#00A63E]">Rp 6.15B</p>
            </div>
          </div>
        </div>

        {/* New Upsell Customer Trend - Full Width */}
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-4">New Upsell Customers Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={newCustomersData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" stroke="#64748b" style={{ fontSize: '12px' }} />
              <YAxis stroke="#64748b" style={{ fontSize: '12px' }} />
              <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
              <Line 
                type="monotone" 
                dataKey="customers" 
                stroke="#8B5CF6" 
                strokeWidth={3} 
                dot={{ fill: '#8B5CF6', r: 5 }} 
                name="New Customers"
              />
            </LineChart>
          </ResponsiveContainer>
          <div className="mt-4 text-center">
            <p className="text-xs text-slate-600">This Week</p>
            <p className="text-2xl font-bold text-[#8B5CF6]\">5,600 New Customers</p>
          </div>
        </div>
      </div>

      {/* Section: Acceptance & Rejection Analysis */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Target className="w-6 h-6 text-[#155DFC]" />
          <h2 className="text-xl font-bold text-slate-900">Acceptance & Rejection Analysis</h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Offer Acceptance Rate by Product</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={acceptanceByProductData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis type="number" stroke="#64748b" style={{ fontSize: '12px' }} />
                <YAxis type="category" dataKey="product" stroke="#64748b" style={{ fontSize: '12px' }} width={100} />
                <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                <Bar dataKey="acceptance" radius={[0, 8, 8, 0]} name="Acceptance Rate %">
                  {acceptanceByProductData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={['#155DFC', '#00A63E', '#FDC700', '#8B5CF6', '#FB923C'][index % 5]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Re-offer Success Rate</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={reofferSuccessData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="attempt" stroke="#64748b" style={{ fontSize: '12px' }} />
                <YAxis stroke="#64748b" style={{ fontSize: '12px' }} />
                <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                <Bar dataKey="rate" fill="#155DFC" radius={[4, 4, 0, 0]} name="Success Rate %" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Acceptance Metrics Summary */}
        <div className="grid grid-cols-4 gap-4 mt-4">
          <div className="bg-white rounded-xl p-4 border border-slate-200">
            <div className="text-sm text-slate-600 mb-1">First Offer Acceptance</div>
            <div className="text-2xl font-bold text-[#00A63E]">31.8%</div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-slate-200">
            <div className="text-sm text-slate-600 mb-1">Rejection Rate</div>
            <div className="text-2xl font-bold text-[#C10007]">68.2%</div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-slate-200">
            <div className="text-sm text-slate-600 mb-1">Re-offer Conversion</div>
            <div className="text-2xl font-bold text-[#FDC700]">12.3%</div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-slate-200">
            <div className="text-sm text-slate-600 mb-1">Total Acceptance Rate</div>
            <div className="text-2xl font-bold text-[#155DFC]">44.1%</div>
          </div>
        </div>
      </div>

      {/* Section: Approval & Activation Process */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <FileCheck className="w-6 h-6 text-[#155DFC]" />
          <h2 className="text-xl font-bold text-slate-900">Approval & Activation Process</h2>
        </div>
        
        {/* Approval Process Funnel - Full Width */}
        <div className="bg-white rounded-xl p-6 border border-slate-200 mb-4">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Approval Process Funnel</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={approvalFunnelData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis type="number" stroke="#64748b" style={{ fontSize: '12px' }} />
              <YAxis type="category" dataKey="stage" stroke="#64748b" style={{ fontSize: '12px' }} width={100} />
              <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
              <Bar dataKey="value" radius={[0, 8, 8, 0]} name="Percentage">
                {approvalFunnelData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={['#155DFC', '#3b82f6', '#60a5fa', '#93c5fd', '#cbd5e1'][index % 5]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Approval Insights */}
        <div className="mt-6 py-4 px-6 bg-blue-50 rounded-lg border border-blue-200">
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <p className="text-sm text-blue-700 font-medium">45% approved within 1 hour</p>
          </div>
        </div>

        {/* Process Metrics */}
        <div className="grid grid-cols-4 gap-4 mt-4">
          <div className="bg-white rounded-xl p-4 border border-slate-200">
            <div className="text-sm text-slate-600 mb-1">Approval Rate</div>
            <div className="text-2xl font-bold text-[#00A63E]">89.2%</div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-slate-200">
            <div className="text-sm text-slate-600 mb-1">Activation Rate</div>
            <div className="text-2xl font-bold text-[#155DFC]">89.3%</div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-slate-200">
            <div className="text-sm text-slate-600 mb-1">Overall Success Rate</div>
            <div className="text-2xl font-bold text-[#8B5CF6]">79.6%</div>
          </div>
          <div className="bg-white rounded-xl p-4 border border-slate-200">
            <div className="text-sm text-slate-600 mb-1">Avg Time to Approval</div>
            <div className="text-2xl font-bold text-slate-900">8.5h</div>
          </div>
        </div>

      </div>

      {/* Time to Approval Distribution Card (NEW - Added before CLV section) */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Clock className="w-5 h-5 text-[#8B5CF6]" />
          <h3 className="text-lg font-bold text-slate-900">Time to Approval Distribution</h3>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={timeToApprovalData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="hours" stroke="#64748b" style={{ fontSize: '12px' }} />
            <YAxis stroke="#64748b" style={{ fontSize: '12px' }} />
            <Tooltip 
              formatter={(value: number) => `${value} applications`}
              contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} 
            />
            <Bar dataKey="count" radius={[4, 4, 0, 0]} name="Applications">
              {timeToApprovalData.map((entry, index) => (
                <Cell key={`cell-time-${index}`} fill="#155DFC" />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        
        {/* Approval Insights */}
        <div className="mt-6 py-4 px-6 bg-blue-50 rounded-lg border border-blue-200">
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <p className="text-sm text-blue-700 font-medium">45% approved within 1 hour</p>
          </div>
        </div>

        {/* Additional Approval Metrics */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="bg-green-50 rounded-lg p-4 border border-green-200">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <p className="text-xs text-green-700 font-medium">Fast Approval</p>
            </div>
            <p className="text-2xl font-bold text-green-900">43%</p>
            <p className="text-xs text-green-700 mt-1">Within 6 hours</p>
          </div>

          <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="w-4 h-4 text-orange-600" />
              <p className="text-xs text-orange-700 font-medium">Drop Off Point</p>
            </div>
            <p className="text-2xl font-bold text-orange-900">12-24h</p>
            <p className="text-xs text-orange-700 mt-1">17% drop-off</p>
          </div>

          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-4 h-4 text-blue-600" />
              <p className="text-xs text-blue-700 font-medium">Activation Success</p>
            </div>
            <p className="text-2xl font-bold text-blue-900">89.3%</p>
            <p className="text-xs text-blue-700 mt-1">Post-approval activation</p>
          </div>
        </div>
      </div>

      {/* Section: Customer Lifetime Value Analysis */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <BarChart3 className="w-6 h-6 text-[#155DFC]" />
          <h2 className="text-xl font-bold text-slate-900">Customer Lifetime Value Analysis</h2>
        </div>

        {/* CLV Before vs After Upselling (NEW STRUCTURE) */}
        <div className="bg-white rounded-xl p-6 border border-slate-200 mb-4">
          <div className="flex items-center gap-2 mb-5">
            <BarChart3 className="w-5 h-5 text-[#155DFC]" />
            <h3 className="text-lg font-bold text-slate-900">CLV Before vs After Upselling</h3>
          </div>

          {/* Three Main Metrics */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {/* Average CLV */}
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <p className="text-sm text-slate-600 mb-3 font-medium">Average CLV</p>
              <div className="space-y-2">
                <div>
                  <p className="text-xs text-slate-500 mb-1">Before Upselling</p>
                  <p className="text-lg font-bold text-slate-900">Rp 85M</p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-2">
                  <p className="text-xs text-blue-700 mb-1">After Upselling</p>
                  <p className="text-2xl font-bold text-[#155DFC]">Rp 113.5M</p>
                </div>
                <div className="bg-green-50 rounded-lg p-2">
                  <p className="text-xs text-green-700 font-medium flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    +33.5% increase
                  </p>
                </div>
              </div>
            </div>

            {/* Monthly Revenue per Customer */}
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <p className="text-sm text-slate-600 mb-3 font-medium">Monthly Revenue per Customer</p>
              <div className="space-y-2">
                <div>
                  <p className="text-xs text-slate-500 mb-1">Before Upselling</p>
                  <p className="text-lg font-bold text-slate-900">Rp 450K</p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-2">
                  <p className="text-xs text-blue-700 mb-1">After Upselling</p>
                  <p className="text-2xl font-bold text-[#155DFC]">Rp 780K</p>
                </div>
                <div className="bg-green-50 rounded-lg p-2">
                  <p className="text-xs text-green-700 font-medium flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    +73.3% increase
                  </p>
                </div>
              </div>
            </div>

            {/* Customer Retention Rate */}
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <p className="text-sm text-slate-600 mb-3 font-medium">Customer Retention Rate</p>
              <div className="space-y-2">
                <div>
                  <p className="text-xs text-slate-500 mb-1">Before Upselling</p>
                  <p className="text-lg font-bold text-slate-900">72%</p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-2">
                  <p className="text-xs text-blue-700 mb-1">After Upselling</p>
                  <p className="text-2xl font-bold text-[#155DFC]">89%</p>
                </div>
                <div className="bg-green-50 rounded-lg p-2">
                  <p className="text-xs text-green-700 font-medium flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    +23.6% increase
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional CLV Metrics - Moved Outside */}
        <div className="grid grid-cols-4 gap-4 mb-4">
          <div className="bg-white rounded-lg p-4 border border-slate-200">
            <div className="text-sm text-slate-600 mb-2">CLV Uplift</div>
            <div className="text-2xl font-bold text-slate-900 mb-1">+Rp 28.5M</div>
            <div className="text-xs text-slate-500">Average lifetime value increase</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-slate-200">
            <div className="text-sm text-slate-600 mb-2">Payback Period</div>
            <div className="text-2xl font-bold text-slate-900 mb-1">3.2<span className="text-sm">mo</span></div>
            <div className="text-xs text-slate-500">Time to recover acquisition cost</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-slate-200">
            <div className="text-sm text-slate-600 mb-2">Product Holding Period</div>
            <div className="text-2xl font-bold text-slate-900 mb-1">18<span className="text-sm">mo</span></div>
            <div className="text-xs text-slate-500">Avg time using upgraded product</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-slate-200">
            <div className="text-sm text-slate-600 mb-2">Cross-sell Rate After Upsell</div>
            <div className="text-2xl font-bold text-slate-900 mb-1">42<span className="text-sm">%</span></div>
            <div className="text-xs text-slate-500">Adopt additional products</div>
          </div>
        </div>

        {/* Product Upgrade Performance (NEW STRUCTURE) */}
        <div className="bg-white rounded-xl p-6 border border-slate-200 mb-4">
          <div className="flex items-center gap-2 mb-5">
            <Award className="w-5 h-5 text-[#8B5CF6]" />
            <h3 className="text-lg font-bold text-slate-900">Product Upgrade Performance</h3>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Regular → Premium Savings */}
            <div className="bg-white rounded-lg p-6 border border-slate-200 hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-6">
                <div className="flex-1 text-center">
                  <div className="bg-slate-50 px-4 py-3 rounded-lg border border-slate-200">
                    <div className="font-semibold text-slate-700">Regular Savings</div>
                  </div>
                </div>
                
                <div className="px-3">
                  <ArrowUpRight className="w-5 h-5 text-slate-400" />
                </div>
                
                <div className="flex-1 text-center">
                  <div className="bg-[#00A73E] px-4 py-3 rounded-lg">
                    <div className="font-semibold text-white">Premium Savings</div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                <div className="text-center">
                  <div className="text-xs text-slate-500 mb-1">Conversion Rate</div>
                  <div className="text-xl font-bold text-slate-900">42%</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-slate-500 mb-1">AUM Increase</div>
                  <div className="text-xl font-bold text-slate-900">Rp 32M</div>
                </div>
              </div>
            </div>

            {/* Premium Savings → Deposito */}
            <div className="bg-white rounded-lg p-6 border border-slate-200 hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-6">
                <div className="flex-1 text-center">
                  <div className="bg-slate-50 px-4 py-3 rounded-lg border border-slate-200">
                    <div className="font-semibold text-slate-700">Premium Savings</div>
                  </div>
                </div>
                
                <div className="px-3">
                  <ArrowUpRight className="w-5 h-5 text-slate-400" />
                </div>
                
                <div className="flex-1 text-center">
                  <div className="bg-[#00A73E] px-4 py-3 rounded-lg">
                    <div className="font-semibold text-white">Deposito</div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                <div className="text-center">
                  <div className="text-xs text-slate-500 mb-1">Conversion Rate</div>
                  <div className="text-xl font-bold text-slate-900">38%</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-slate-500 mb-1">AUM Increase</div>
                  <div className="text-xl font-bold text-slate-900">Rp 48M</div>
                </div>
              </div>
            </div>

            {/* Deposito 3M → Deposito 12M */}
            <div className="bg-white rounded-lg p-6 border border-slate-200 hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-6">
                <div className="flex-1 text-center">
                  <div className="bg-slate-50 px-4 py-3 rounded-lg border border-slate-200">
                    <div className="font-semibold text-slate-700">Deposito 3M</div>
                  </div>
                </div>
                
                <div className="px-3">
                  <ArrowUpRight className="w-5 h-5 text-slate-400" />
                </div>
                
                <div className="flex-1 text-center">
                  <div className="bg-[#00A73E] px-4 py-3 rounded-lg">
                    <div className="font-semibold text-white">Deposito 12M</div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                <div className="text-center">
                  <div className="text-xs text-slate-500 mb-1">Conversion Rate</div>
                  <div className="text-xl font-bold text-slate-900">35%</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-slate-500 mb-1">AUM Increase</div>
                  <div className="text-xl font-bold text-slate-900">Rp 25M</div>
                </div>
              </div>
            </div>

            {/* Basic Account → Priority Banking */}
            <div className="bg-white rounded-lg p-6 border border-slate-200 hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-6">
                <div className="flex-1 text-center">
                  <div className="bg-slate-50 px-4 py-3 rounded-lg border border-slate-200">
                    <div className="font-semibold text-slate-700">Basic Account</div>
                  </div>
                </div>
                
                <div className="px-3">
                  <ArrowUpRight className="w-5 h-5 text-slate-400" />
                </div>
                
                <div className="flex-1 text-center">
                  <div className="bg-[#00A73E] px-4 py-3 rounded-lg">
                    <div className="font-semibold text-white">Priority Banking</div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                <div className="text-center">
                  <div className="text-xs text-slate-500 mb-1">Conversion Rate</div>
                  <div className="text-xl font-bold text-slate-900">28%</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-slate-500 mb-1">AUM Increase</div>
                  <div className="text-xl font-bold text-slate-900">Rp 23M</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Flow Conversion & Time to Decision */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Product Flow Conversion</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={productFlowData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis type="number" stroke="#64748b" style={{ fontSize: '12px' }} />
                <YAxis type="category" dataKey="from" stroke="#64748b" style={{ fontSize: '11px' }} width={150} />
                <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                <Bar dataKey="conversion" radius={[0, 4, 4, 0]} name="Conversion Rate %">
                  {productFlowData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={['#155DFC', '#00A63E', '#FDC700', '#8B5CF6', '#FB923C'][index % 5]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Time to Decision</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={timeToDecisionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="day" stroke="#64748b" style={{ fontSize: '12px' }} />
                <YAxis stroke="#64748b" style={{ fontSize: '12px' }} />
                <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                <Bar dataKey="decided" fill="#00A63E" radius={[4, 4, 0, 0]} name="Decided Customers">
                  {timeToDecisionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index < 2 ? '#00A63E' : index < 4 ? '#FDC700' : '#FB923C'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Customer Segmentation Performance */}
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-slate-900">Customer Segmentation Performance</h3>
            <select 
              value={segmentationType}
              onChange={(e) => setSegmentationType(e.target.value)}
              className="px-4 py-2 border border-slate-200 rounded-lg text-sm bg-white"
            >
              <option value="product">By Product Tier</option>
              <option value="income">By Income Level</option>
              <option value="tenure">By Customer Tenure</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height={400}>
            <RadarChart data={currentSegmentData}>
              <PolarGrid stroke="#e2e8f0" />
              <PolarAngleAxis dataKey="segment" stroke="#64748b" style={{ fontSize: '12px' }} />
              <PolarRadiusAxis stroke="#64748b" style={{ fontSize: '12px' }} />
              <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
              <Legend />
              <Radar name="Performance" dataKey="performance" stroke="#155DFC" fill="#155DFC" fillOpacity={0.3} />
              <Radar name="Revenue" dataKey="revenue" stroke="#00A63E" fill="#00A63E" fillOpacity={0.3} />
              <Radar name="Satisfaction" dataKey="satisfaction" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.3} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}