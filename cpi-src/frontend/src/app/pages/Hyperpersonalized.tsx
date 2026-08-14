import { useState } from 'react';
import { Users, DollarSign, TrendingUp, Calendar, ArrowUpRight, ArrowDownRight, Smartphone, Monitor, Clock, MousePointerClick, Activity, Layers } from 'lucide-react';
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
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ComposedChart
} from 'recharts';

// Data
const transactionData = [
  { month: 'Jan', amount: 285000000, avgAmount: 1250000, with: 185000000, without: 100000000 },
  { month: 'Feb', amount: 310000000, avgAmount: 1320000, with: 208000000, without: 102000000 },
  { month: 'Mar', amount: 345000000, avgAmount: 1380000, with: 238000000, without: 107000000 },
  { month: 'Apr', amount: 385000000, avgAmount: 1450000, with: 272000000, without: 113000000 },
  { month: 'May', amount: 420000000, avgAmount: 1520000, with: 305000000, without: 115000000 },
  { month: 'Jun', amount: 465000000, avgAmount: 1600000, with: 348000000, without: 117000000 },
];

const activeUserData = [
  { month: 'Jan', dau: 12400, wau: 45200, mau: 125000 },
  { month: 'Feb', dau: 14200, wau: 48500, mau: 132000 },
  { month: 'Mar', dau: 15800, wau: 52100, mau: 141000 },
  { month: 'Apr', dau: 17500, wau: 56300, mau: 148000 },
  { month: 'May', dau: 19200, wau: 61200, mau: 157000 },
  { month: 'Jun', dau: 21800, wau: 67400, mau: 168000 },
];

const funnelData = [
  { name: 'Customers Shown', value: 100000, fill: '#155DFC' },
  { name: 'Clicked', value: 57800, fill: '#8B5CF6' },
  { name: 'Engaged', value: 34500, fill: '#00A63E' },
  { name: 'Converted', value: 12400, fill: '#FDC700' },
];

const growthTrendData = [
  { month: 'Jan', mom: 8.5, yoy: 32.4 },
  { month: 'Feb', mom: 9.2, yoy: 38.7 },
  { month: 'Mar', mom: 10.1, yoy: 42.3 },
  { month: 'Apr', mom: 11.3, yoy: 46.8 },
  { month: 'May', mom: 10.7, yoy: 51.2 },
  { month: 'Jun', mom: 13.5, yoy: 52.8 },
];

const conversionRateData = [
  { month: 'Jan', rate: 8.2 },
  { month: 'Feb', rate: 9.5 },
  { month: 'Mar', rate: 10.8 },
  { month: 'Apr', rate: 11.2 },
  { month: 'May', rate: 12.0 },
  { month: 'Jun', rate: 12.4 },
];

const revenueData = [
  { month: 'Jan', revenue: 285000000 },
  { month: 'Feb', revenue: 310000000 },
  { month: 'Mar', revenue: 345000000 },
  { month: 'Apr', revenue: 385000000 },
  { month: 'May', revenue: 420000000 },
  { month: 'Jun', revenue: 465000000 },
];

const featureUsageData = [
  { feature: 'Banner Personalization', volume: 45200 },
  { feature: 'Product Recommendation', volume: 38500 },
  { feature: 'Content Curation', volume: 32100 },
  { feature: 'Offer Targeting', volume: 28400 },
  { feature: 'Smart Notification', volume: 21800 },
];

const featureAdoptionData = [
  { month: 'Jan', banner: 42.3, product: 35.8, content: 28.5, offer: 24.2, notification: 18.7 },
  { month: 'Feb', banner: 48.5, product: 38.2, content: 31.4, offer: 26.8, notification: 20.5 },
  { month: 'Mar', banner: 52.1, product: 41.5, content: 34.2, offer: 29.3, notification: 22.8 },
  { month: 'Apr', banner: 56.8, product: 44.7, content: 37.1, offer: 31.9, notification: 25.2 },
  { month: 'May', banner: 61.2, product: 48.3, content: 40.5, offer: 34.6, notification: 27.8 },
  { month: 'Jun', banner: 67.4, product: 52.1, content: 44.2, offer: 37.8, notification: 30.5 },
];

const ageSegmentData = [
  { age: '18-25', performance: 65 },
  { age: '26-35', performance: 82 },
  { age: '36-45', performance: 78 },
  { age: '46-55', performance: 58 },
  { age: '56+', performance: 42 },
];

const locationSegmentData = [
  { location: 'Jakarta', value: 35, performance: 85, fill: '#155DFC' },
  { location: 'Surabaya', value: 22, performance: 78, fill: '#8B5CF6' },
  { location: 'Bandung', value: 18, performance: 72, fill: '#00A63E' },
  { location: 'Medan', value: 12, performance: 65, fill: '#FDC700' },
  { location: 'Others', value: 13, performance: 58, fill: '#FB923C' },
];

const tierSegmentData = [
  { tier: 'Platinum', engagement: 92, conversion: 88, retention: 95 },
  { tier: 'Gold', engagement: 78, conversion: 72, retention: 82 },
  { tier: 'Silver', engagement: 65, conversion: 58, retention: 68 },
  { tier: 'Bronze', engagement: 48, conversion: 42, retention: 52 },
];

const deviceSegmentData = [
  { device: 'iOS', value: 58, fill: '#155DFC' },
  { device: 'Android', value: 42, fill: '#00A63E' },
];

const peakHoursData = [
  { hour: '00:00', transactions: 1200 },
  { hour: '03:00', transactions: 800 },
  { hour: '06:00', transactions: 2500 },
  { hour: '09:00', transactions: 8500 },
  { hour: '12:00', transactions: 12400 },
  { hour: '15:00', transactions: 9800 },
  { hour: '18:00', transactions: 15200 },
  { hour: '21:00', transactions: 11500 },
];

const dayOfWeekData = [
  { day: 'Mon', transactions: 12400, conversion: 11.2 },
  { day: 'Tue', transactions: 13800, conversion: 11.8 },
  { day: 'Wed', transactions: 15200, conversion: 12.5 },
  { day: 'Thu', transactions: 14500, conversion: 12.1 },
  { day: 'Fri', transactions: 16800, conversion: 13.2 },
  { day: 'Sat', transactions: 18200, conversion: 13.8 },
  { day: 'Sun', transactions: 14100, conversion: 11.5 },
];

export function Hyperpersonalized() {
  const [segmentBy, setSegmentBy] = useState<'age' | 'location' | 'tier' | 'device'>('age');

  const formatCurrency = (value: number) => {
    return `Rp ${(value / 1000000).toFixed(0)}M`;
  };

  const formatNumber = (value: number) => {
    return value.toLocaleString('id-ID');
  };

  const getSegmentData = () => {
    switch (segmentBy) {
      case 'age':
        return { data: ageSegmentData, title: 'Performance by Age Group', dataKey: 'age', chartType: 'bar' };
      case 'location':
        return { data: locationSegmentData, title: 'Performance by Location', dataKey: 'location', chartType: 'bar' };
      case 'tier':
        return { data: tierSegmentData, title: 'Performance by Customer Tier', dataKey: 'tier', chartType: 'radar' };
      case 'device':
        return { data: deviceSegmentData, title: 'Performance by Device', dataKey: 'device', chartType: 'pie' };
    }
  };

  const segmentData = getSegmentData();

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Hyperpersonalized Analytics</h1>
            <p className="text-slate-600 mt-1">AI-powered personalized banking experience analytics</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
            <Calendar className="w-4 h-4 text-slate-600" />
            <span className="text-sm text-slate-700">Jan - Jun 2026</span>
          </button>
        </div>
      </div>

      {/* New Summary Cards - Simplified & Grouped */}
      <div className="grid grid-cols-1 gap-6 mb-8">
        {/* Engagement Metrics - Top Card with Sub-cards */}
        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <MousePointerClick className="w-5 h-5 text-[#155DFC]" />
            <h3 className="text-lg font-bold text-slate-900">Engagement Metrics</h3>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {/* Customer Shown Card */}
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200 hover:shadow-sm transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Users className="w-4 h-4 text-[#155DFC]" />
                </div>
                <div className="px-2 py-1 bg-green-50 rounded-full">
                  <p className="text-xs text-[#00A63E] font-semibold flex items-center gap-1">
                    <ArrowUpRight className="w-3 h-3" />
                    +8.5%
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 font-medium mb-1">Customer Shown</p>
              <h3 className="text-2xl font-bold text-slate-900">100K</h3>
              <p className="text-xs text-slate-500 mt-1">vs last month</p>
            </div>

            {/* Clicked Features Card */}
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200 hover:shadow-sm transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <div className="p-2 bg-purple-50 rounded-lg">
                  <MousePointerClick className="w-4 h-4 text-[#8B5CF6]" />
                </div>
                <div className="px-2 py-1 bg-green-50 rounded-full">
                  <p className="text-xs text-[#00A63E] font-semibold flex items-center gap-1">
                    <ArrowUpRight className="w-3 h-3" />
                    +10.2%
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 font-medium mb-1">Clicked Features</p>
              <h3 className="text-2xl font-bold text-slate-900">57.8K</h3>
              <p className="text-xs text-slate-500 mt-1">vs last month</p>
            </div>

            {/* Conversion Rate Card */}
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200 hover:shadow-sm transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <div className="p-2 bg-green-50 rounded-lg">
                  <TrendingUp className="w-4 h-4 text-[#00A63E]" />
                </div>
                <div className="px-2 py-1 bg-green-50 rounded-full">
                  <p className="text-xs text-[#00A63E] font-semibold flex items-center gap-1">
                    <ArrowUpRight className="w-3 h-3" />
                    +6.4%
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 font-medium mb-1">Conversion Rate</p>
              <h3 className="text-2xl font-bold text-slate-900">12.4%</h3>
              <p className="text-xs text-slate-500 mt-1">vs last month</p>
            </div>

            {/* Total Conversions Card */}
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200 hover:shadow-sm transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <div className="p-2 bg-yellow-50 rounded-lg">
                  <DollarSign className="w-4 h-4 text-[#FDC700]" />
                </div>
                <div className="px-2 py-1 bg-green-50 rounded-full">
                  <p className="text-xs text-[#00A63E] font-semibold flex items-center gap-1">
                    <ArrowUpRight className="w-3 h-3" />
                    +7.8%
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 font-medium mb-1">Total Conversions</p>
              <h3 className="text-2xl font-bold text-slate-900">12.4K</h3>
              <p className="text-xs text-slate-500 mt-1">vs last month</p>
            </div>
          </div>
        </div>

        {/* Revenue & User Metrics - Bottom Card with Sub-cards */}
        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <DollarSign className="w-5 h-5 text-[#00A63E]" />
            <h3 className="text-lg font-bold text-slate-900">Revenue & User Metrics</h3>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {/* Total Revenue Card */}
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200 hover:shadow-sm transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <div className="p-2 bg-green-50 rounded-lg">
                  <DollarSign className="w-4 h-4 text-[#00A63E]" />
                </div>
                <div className="px-2 py-1 bg-green-50 rounded-full">
                  <p className="text-xs text-[#00A63E] font-semibold flex items-center gap-1">
                    <ArrowUpRight className="w-3 h-3" />
                    +10.7%
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 font-medium mb-1">Total Revenue</p>
              <h3 className="text-2xl font-bold text-slate-900">Rp 465M</h3>
              <p className="text-xs text-slate-500 mt-1">vs last month</p>
            </div>

            {/* Avg Transaction Card */}
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200 hover:shadow-sm transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <DollarSign className="w-4 h-4 text-[#155DFC]" />
                </div>
                <div className="px-2 py-1 bg-green-50 rounded-full">
                  <p className="text-xs text-[#00A63E] font-semibold flex items-center gap-1">
                    <ArrowUpRight className="w-3 h-3" />
                    +5.3%
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 font-medium mb-1">Avg Transaction</p>
              <h3 className="text-2xl font-bold text-slate-900">Rp 1.6M</h3>
              <p className="text-xs text-slate-500 mt-1">vs last month</p>
            </div>

            {/* Monthly Active User Card */}
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200 hover:shadow-sm transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <div className="p-2 bg-green-50 rounded-lg">
                  <Users className="w-4 h-4 text-[#00A63E]" />
                </div>
                <div className="px-2 py-1 bg-green-50 rounded-full">
                  <p className="text-xs text-[#00A63E] font-semibold flex items-center gap-1">
                    <ArrowUpRight className="w-3 h-3" />
                    +7.0%
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 font-medium mb-1">Monthly Active User</p>
              <h3 className="text-2xl font-bold text-slate-900">168K</h3>
              <p className="text-xs text-slate-500 mt-1">vs last month</p>
            </div>

            {/* Repeat Transaction Card */}
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200 hover:shadow-sm transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <div className="p-2 bg-orange-50 rounded-lg">
                  <TrendingUp className="w-4 h-4 text-[#FB923C]" />
                </div>
                <div className="px-2 py-1 bg-green-50 rounded-full">
                  <p className="text-xs text-[#00A63E] font-semibold flex items-center gap-1">
                    <ArrowUpRight className="w-3 h-3" />
                    +6.4%
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 font-medium mb-1">Repeat Transaction</p>
              <h3 className="text-2xl font-bold text-slate-900">34.5%</h3>
              <p className="text-xs text-slate-500 mt-1">vs last month</p>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Comparison */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 mb-6">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1 h-6 bg-gradient-to-b from-[#155DFC] to-[#8B5CF6] rounded-full"></div>
          <h3 className="text-lg font-bold text-slate-900">Performance Comparison: With vs Without Hyperpersonalization</h3>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Avg Transaction Amount */}
          <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
            <p className="text-xs text-slate-600 font-medium mb-3">Avg Transaction Amount</p>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-slate-500 mb-1">Without Personalization</p>
                <p className="text-lg font-bold text-slate-900">$8.20</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <p className="text-xs text-blue-700 mb-1">With Personalization</p>
                <p className="text-2xl font-bold text-[#155DFC]">$12.50</p>
              </div>
              <div className="bg-green-50 rounded-lg p-2">
                <p className="text-xs text-green-700 font-medium flex items-center gap-1">
                  +52.4% increase 📈
                </p>
              </div>
            </div>
          </div>

          {/* Conversion Rate */}
          <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
            <p className="text-xs text-slate-600 font-medium mb-3">Conversion Rate</p>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-slate-500 mb-1">Without Personalization</p>
                <p className="text-lg font-bold text-slate-900">18.5%</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <p className="text-xs text-blue-700 mb-1">With Personalization</p>
                <p className="text-2xl font-bold text-[#155DFC]">29.3%</p>
              </div>
              <div className="bg-green-50 rounded-lg p-2">
                <p className="text-xs text-green-700 font-medium flex items-center gap-1">
                  +58.4% increase 📈
                </p>
              </div>
            </div>
          </div>

          {/* Total Revenue Impact */}
          <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
            <p className="text-xs text-slate-600 font-medium mb-3">Total Revenue Impact</p>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-slate-500 mb-1">Without Personalization</p>
                <p className="text-lg font-bold text-slate-900">$289K</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <p className="text-xs text-blue-700 mb-1">With Personalization</p>
                <p className="text-2xl font-bold text-[#155DFC]">$456K</p>
              </div>
              <div className="bg-green-50 rounded-lg p-2">
                <p className="text-xs text-green-700 font-medium flex items-center gap-1">
                  +$167K additional revenue 💰
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
              <YAxis type="category" dataKey="name" stroke="#64748b" style={{ fontSize: '12px' }} width={150} />
              <Tooltip 
                formatter={(value: number) => formatNumber(value)}
                contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }}
              />
              <Bar dataKey="value" radius={[0, 8, 8, 0]}>
                {funnelData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Engagement & Retention Section */}
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
              <LineChart data={activeUserData}>
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

          {/* Additional Engagement Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-slate-200">
            <div>
              <p className="text-xs text-slate-600 mb-1">Current MAU</p>
              <p className="text-xl font-bold text-[#00A63E]">168K</p>
              <p className="text-xs text-slate-500 mt-0.5">Monthly Active Users</p>
            </div>
            <div>
              <p className="text-xs text-slate-600 mb-1">Avg Transaction per User</p>
              <p className="text-xl font-bold text-[#155DFC]">3.2</p>
              <p className="text-xs text-slate-500 mt-0.5">per week</p>
            </div>
            <div>
              <p className="text-xs text-slate-600 mb-1">Feature Cross-usage</p>
              <p className="text-xl font-bold text-[#8B5CF6]">2.4</p>
              <p className="text-xs text-slate-500 mt-0.5">avg features used per user</p>
            </div>
            <div>
              <p className="text-xs text-slate-600 mb-1">Stickiness Ratio (DAU/MAU)</p>
              <p className="text-xl font-bold text-[#FDC700]">13.0%</p>
              <p className="text-xs text-slate-500 mt-0.5">daily engagement rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Growth & Trend Section */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-6 h-6 text-[#00A63E]" />
          <h2 className="text-xl font-bold text-slate-900">Growth & Trend</h2>
        </div>
        
        {/* MoM & YoY Growth Chart */}
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-4">MoM & YoY Growth Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={growthTrendData}>
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
              <p className="text-2xl font-bold text-[#155DFC]">13.5%</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-slate-600 mb-1">Current YoY Growth</p>
              <p className="text-2xl font-bold text-[#00A63E]">52.8%</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-slate-600 mb-1">Avg MoM Growth</p>
              <p className="text-2xl font-bold text-[#8B5CF6]">10.5%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Conversion Rate & Revenue Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Conversion Rate Trend */}
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Conversion Rate Trend</h3>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={conversionRateData}>
              <defs>
                <linearGradient id="colorConversion" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#155DFC" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#155DFC" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" stroke="#64748b" style={{ fontSize: '12px' }} />
              <YAxis stroke="#64748b" style={{ fontSize: '12px' }} unit="%" />
              <Tooltip 
                formatter={(value: number) => `${value}%`}
                contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }}
              />
              <Area type="monotone" dataKey="rate" stroke="#155DFC" strokeWidth={3} fillOpacity={1} fill="url(#colorConversion)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Revenue Trend */}
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Revenue Trend</h3>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
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
              <Area type="monotone" dataKey="revenue" stroke="#00A63E" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Features Performance Section */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Features Performance</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Feature Usage Volume */}
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Feature Usage Volume</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={featureUsageData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis type="number" stroke="#64748b" style={{ fontSize: '12px' }} />
                <YAxis type="category" dataKey="feature" stroke="#64748b" style={{ fontSize: '11px' }} width={140} />
                <Tooltip 
                  formatter={(value: number) => formatNumber(value)}
                  contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }}
                />
                <Bar dataKey="volume" fill="#8B5CF6" radius={[0, 8, 8, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Feature Adoption Rate */}
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Feature Adoption Rate</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={featureAdoptionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" stroke="#64748b" style={{ fontSize: '12px' }} />
                <YAxis stroke="#64748b" style={{ fontSize: '12px' }} unit="%" />
                <Tooltip 
                  formatter={(value: number) => `${value}%`}
                  contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '11px' }}
                />
                <Legend wrapperStyle={{ fontSize: '11px' }} />
                <Line type="monotone" dataKey="banner" stroke="#155DFC" strokeWidth={2} name="Banner" dot={{ r: 3 }} />
                <Line type="monotone" dataKey="product" stroke="#8B5CF6" strokeWidth={2} name="Product" dot={{ r: 3 }} />
                <Line type="monotone" dataKey="content" stroke="#00A63E" strokeWidth={2} name="Content" dot={{ r: 3 }} />
                <Line type="monotone" dataKey="offer" stroke="#FDC700" strokeWidth={2} name="Offer" dot={{ r: 3 }} />
                <Line type="monotone" dataKey="notification" stroke="#FB923C" strokeWidth={2} name="Notification" dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* User Segmentation Performance */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Layers className="w-6 h-6 text-[#8B5CF6]" />
          <h2 className="text-xl font-bold text-slate-900">User Segmentation Performance</h2>
        </div>
        
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-slate-900">{segmentData.title}</h3>
            <select
              value={segmentBy}
              onChange={(e) => setSegmentBy(e.target.value as any)}
              className="px-4 py-2 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#155DFC]"
            >
              <option value="age">By Age</option>
              <option value="location">By Location</option>
              <option value="tier">By Customer Tier</option>
              <option value="device">By Device</option>
            </select>
          </div>

          <ResponsiveContainer width="100%" height={350}>
            {segmentData.chartType === 'bar' && segmentBy === 'age' && (
              <BarChart data={segmentData.data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey={segmentData.dataKey} stroke="#64748b" style={{ fontSize: '12px' }} />
                <YAxis stroke="#64748b" style={{ fontSize: '12px' }} />
                <Tooltip 
                  formatter={(value: number) => `${value}%`}
                  contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }}
                />
                <Bar dataKey="performance" fill="#155DFC" radius={[8, 8, 0, 0]} />
              </BarChart>
            )}

            {segmentData.chartType === 'bar' && segmentBy === 'location' && (
              <BarChart data={segmentData.data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey={segmentData.dataKey} stroke="#64748b" style={{ fontSize: '12px' }} />
                <YAxis stroke="#64748b" style={{ fontSize: '12px' }} />
                <Tooltip 
                  formatter={(value: number) => `${value}%`}
                  contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }}
                />
                <Bar dataKey="performance" fill="#8B5CF6" radius={[8, 8, 0, 0]} />
              </BarChart>
            )}

            {segmentData.chartType === 'radar' && (
              <RadarChart data={segmentData.data}>
                <PolarGrid stroke="#e2e8f0" />
                <PolarAngleAxis dataKey={segmentData.dataKey} stroke="#64748b" style={{ fontSize: '12px' }} />
                <PolarRadiusAxis stroke="#64748b" style={{ fontSize: '12px' }} />
                <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                <Legend />
                <Radar name="Engagement" dataKey="engagement" stroke="#155DFC" fill="#155DFC" fillOpacity={0.3} />
                <Radar name="Conversion" dataKey="conversion" stroke="#00A63E" fill="#00A63E" fillOpacity={0.3} />
                <Radar name="Retention" dataKey="retention" stroke="#FDC700" fill="#FDC700" fillOpacity={0.3} />
              </RadarChart>
            )}

            {segmentData.chartType === 'pie' && (
              <PieChart>
                <Pie
                  data={segmentData.data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={120}
                  dataKey="value"
                >
                  {deviceSegmentData.map((entry, index) => (
                    <Cell key={`cell-device-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value: number) => `${value}%`}
                  contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }}
                />
              </PieChart>
            )}
          </ResponsiveContainer>
        </div>
      </div>

      {/* Peak Hours & Best Day */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Peak Transaction Hours */}
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Peak Transaction Hours</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={peakHoursData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="hour" stroke="#64748b" style={{ fontSize: '12px' }} />
              <YAxis stroke="#64748b" style={{ fontSize: '12px' }} />
              <Tooltip 
                formatter={(value: number) => formatNumber(value)}
                contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }}
              />
              <Bar dataKey="transactions" fill="#FDC700" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Best Day of Week */}
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Best Day of Week</h3>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={dayOfWeekData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="day" stroke="#64748b" style={{ fontSize: '12px' }} />
              <YAxis yAxisId="left" stroke="#64748b" style={{ fontSize: '12px' }} />
              <YAxis yAxisId="right" orientation="right" stroke="#64748b" style={{ fontSize: '12px' }} unit="%" />
              <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
              <Legend />
              <Bar yAxisId="left" dataKey="transactions" fill="#C10007" radius={[8, 8, 0, 0]} name="Transactions" />
              <Line yAxisId="right" type="monotone" dataKey="conversion" stroke="#00A63E" strokeWidth={3} name="Conversion Rate (%)" dot={{ r: 5 }} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}