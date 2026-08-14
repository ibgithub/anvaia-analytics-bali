import { useState } from 'react';
import { 
  Mail,
  Eye,
  MousePointerClick,
  TrendingUp,
  DollarSign,
  Users,
  UserX,
  MessageSquare,
  Clock,
  BarChart3,
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
  ChevronDown,
  Repeat,
  Activity,
  Target,
  Zap,
  AlertTriangle,
  Smartphone,
  CreditCard,
  ArrowLeftRight,
  CheckCircle
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

// Data
const reminderData = [
  { month: 'Jan', sent: 142000, opened: 98500, clicked: 62400, converted: 39800 },
  { month: 'Feb', sent: 158000, opened: 109200, clicked: 69800, converted: 44700 },
  { month: 'Mar', sent: 165000, opened: 118200, clicked: 74900, converted: 48200 },
  { month: 'Apr', sent: 172000, opened: 125800, clicked: 81400, converted: 52900 },
  { month: 'May', sent: 185000, opened: 135700, clicked: 88800, converted: 58300 },
  { month: 'Jun', sent: 198000, opened: 148500, clicked: 96800, converted: 65100 },
];

const transactionData = [
  { month: 'Jan', with: 285000000, without: 180000000 },
  { month: 'Feb', with: 310000000, without: 185000000 },
  { month: 'Mar', with: 345000000, without: 190000000 },
  { month: 'Apr', with: 385000000, without: 195000000 },
  { month: 'May', with: 420000000, without: 198000000 },
  { month: 'Jun', with: 465000000, without: 200000000 },
];

const dauWauMauData = [
  { month: 'Jan', dau: 18200, wau: 52400, mau: 142000 },
  { month: 'Feb', dau: 19800, wau: 56800, mau: 151000 },
  { month: 'Mar', dau: 21500, wau: 61200, mau: 159000 },
  { month: 'Apr', dau: 23800, wau: 66500, mau: 168000 },
  { month: 'May', dau: 25900, wau: 72100, mau: 178000 },
  { month: 'Jun', dau: 28500, wau: 79200, mau: 189000 },
];

const growthData = [
  { month: 'Jan', mom: 7.2, yoy: 28.5 },
  { month: 'Feb', mom: 8.5, yoy: 32.8 },
  { month: 'Mar', mom: 9.1, yoy: 36.2 },
  { month: 'Apr', mom: 10.8, yoy: 41.5 },
  { month: 'May', mom: 11.3, yoy: 45.8 },
  { month: 'Jun', mom: 12.9, yoy: 48.2 },
];

const conversionRateData = [
  { month: 'Jan', rate: 28.0 },
  { month: 'Feb', rate: 28.3 },
  { month: 'Mar', rate: 29.2 },
  { month: 'Apr', rate: 30.8 },
  { month: 'May', rate: 31.5 },
  { month: 'Jun', rate: 32.9 },
];

const revenueData = [
  { month: 'Jan', revenue: 285000000 },
  { month: 'Feb', revenue: 310000000 },
  { month: 'Mar', revenue: 345000000 },
  { month: 'Apr', revenue: 385000000 },
  { month: 'May', revenue: 420000000 },
  { month: 'Jun', revenue: 465000000 },
];

const channelConversionData = [
  { channel: 'Push Notification', rate: 38.5 },
  { channel: 'Email', rate: 32.8 },
  { channel: 'SMS', rate: 28.3 },
  { channel: 'In-App', rate: 42.1 },
  { channel: 'WhatsApp', rate: 35.7 },
];

const channelVolumeData = [
  { channel: 'Push Notification', value: 35, fill: '#155DFC' },
  { channel: 'Email', value: 25, fill: '#8B5CF6' },
  { channel: 'SMS', value: 18, fill: '#00A63E' },
  { channel: 'In-App', value: 15, fill: '#FDC700' },
  { channel: 'WhatsApp', value: 7, fill: '#FB923C' },
];

const channelPerformanceTable = [
  { channel: 'Push Notification', sent: 69300, opened: 52000, clicked: 33800, converted: 26700, convRate: 38.5 },
  { channel: 'Email', sent: 49500, opened: 36300, clicked: 22800, converted: 16200, convRate: 32.8 },
  { channel: 'SMS', sent: 35640, opened: 26700, clicked: 16400, converted: 10100, convRate: 28.3 },
  { channel: 'In-App', sent: 29700, opened: 24500, clicked: 17800, converted: 12500, convRate: 42.1 },
  { channel: 'WhatsApp', sent: 13860, opened: 10400, clicked: 7200, converted: 4900, convRate: 35.7 },
];

const optOutData = [
  { month: 'Jan', rate: 2.8 },
  { month: 'Feb', rate: 3.1 },
  { month: 'Mar', rate: 2.9 },
  { month: 'Apr', rate: 2.7 },
  { month: 'May', rate: 2.5 },
  { month: 'Jun', rate: 2.4 },
];

const fatigueData = [
  { reminder: '1st Reminder', rate: 45, fill: '#4ADE80' },
  { reminder: '2nd Reminder', rate: 27, fill: '#3B82F6' },
  { reminder: '3rd Reminder', rate: 15, fill: '#FB923C' },
  { reminder: '4th+ Reminder', rate: 7, fill: '#EF4444' },
];

const avgTransactionByType = [
  { type: 'PLN Bill Payment', avg: 450000 },
  { type: 'Mobile Top-up', avg: 85000 },
  { type: 'Transfer Reminder', avg: 1250000 },
  { type: 'E-Wallet Top-up', avg: 320000 },
  { type: 'Subscription', avg: 180000 },
];

const valueVsVolumeTable = [
  { type: 'PLN Bill', volume: 12300, avgValue: 45.50, totalRevenue: 560000, convRate: 38, priority: 'High' },
  { type: 'Mobile Top-up', volume: 9900, avgValue: 15.20, totalRevenue: 150000, convRate: 35, priority: 'Medium' },
  { type: 'Transfer', volume: 1400, avgValue: 125.80, totalRevenue: 176000, convRate: 28, priority: 'High Value' },
  { type: 'E-wallet', volume: 3600, avgValue: 22.30, totalRevenue: 80000, convRate: 25, priority: 'Low' },
];

const peakHoursData = [
  { hour: '00:00', responses: 850 },
  { hour: '03:00', responses: 420 },
  { hour: '06:00', responses: 2100 },
  { hour: '09:00', responses: 8500 },
  { hour: '12:00', responses: 12400 },
  { hour: '15:00', responses: 9800 },
  { hour: '18:00', responses: 15800 },
  { hour: '21:00', responses: 11200 },
];

const dayOfWeekData = [
  { day: 'Mon', responses: 12400, conversion: 28.5 },
  { day: 'Tue', responses: 13800, conversion: 29.2 },
  { day: 'Wed', responses: 15200, conversion: 31.8 },
  { day: 'Thu', responses: 14500, conversion: 30.5 },
  { day: 'Fri', responses: 16800, conversion: 32.9 },
  { day: 'Sat', responses: 11200, conversion: 27.3 },
  { day: 'Sun', responses: 9800, conversion: 25.8 },
];

const daysDueDateData = [
  { days: '1 day before', conversion: 42.5, volume: 15200 },
  { days: '2 days before', conversion: 38.8, volume: 18500 },
  { days: '3 days before', conversion: 35.2, volume: 21800 },
  { days: '5 days before', conversion: 28.5, volume: 12400 },
  { days: '7 days before', conversion: 22.3, volume: 8200 },
];

const revenueByTypeData = [
  { type: 'PLN Bill', revenue: 185000000 },
  { type: 'Mobile Top-up', revenue: 95000000 },
  { type: 'Transfer', revenue: 125000000 },
  { type: 'E-Wallet', revenue: 45000000 },
  { type: 'Subscription', revenue: 15000000 },
];

const frequencySuccessData = [
  { frequency: '1x/week', success: 42.5 },
  { frequency: '2x/week', success: 48.2 },
  { frequency: '3x/week', success: 38.5 },
  { frequency: '4x/week', success: 28.7 },
  { frequency: '5+x/week', success: 18.3 },
];

const reminderTypePerformance = [
  { type: 'PLN Bill Payment', sent: 48500, converted: 16280, rate: 33.6, revenue: 185000000 },
  { type: 'Mobile Top-up', sent: 58200, converted: 18524, rate: 31.8, revenue: 95000000 },
  { type: 'Transfer Reminder', sent: 32500, converted: 9425, rate: 29.0, revenue: 125000000 },
  { type: 'E-Wallet Top-up', sent: 42800, converted: 12412, rate: 29.0, revenue: 45000000 },
];

const ageSegmentData = [
  { age: '18-25', performance: 68 },
  { age: '26-35', performance: 85 },
  { age: '36-45', performance: 72 },
  { age: '46-55', performance: 58 },
  { age: '56+', performance: 42 },
];

const locationSegmentData = [
  { location: 'Jakarta', performance: 82 },
  { location: 'Surabaya', performance: 75 },
  { location: 'Bandung', performance: 68 },
  { location: 'Medan', performance: 62 },
  { location: 'Others', performance: 58 },
];

const tierSegmentData = [
  { tier: 'Platinum', performance: 92 },
  { tier: 'Gold', performance: 78 },
  { tier: 'Silver', performance: 65 },
  { tier: 'Bronze', performance: 48 },
];

export function AutoReminder() {
  const [segmentBy, setSegmentBy] = useState<'age' | 'location' | 'tier'>('age');

  const formatCurrency = (value: number) => {
    return `Rp ${(value / 1000000).toFixed(0)}M`;
  };

  const formatNumber = (value: number) => {
    return value.toLocaleString('id-ID');
  };

  const getSegmentData = () => {
    switch (segmentBy) {
      case 'age':
        return { data: ageSegmentData, key: 'age' };
      case 'location':
        return { data: locationSegmentData, key: 'location' };
      case 'tier':
        return { data: tierSegmentData, key: 'tier' };
    }
  };

  const segmentData = getSegmentData();

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Auto Reminder Analytics</h1>
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
            <p className="text-xs text-slate-600 font-medium">Total Reminders Sent</p>
            <Mail className="w-4 h-4 text-[#155DFC]" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">198K</h3>
          <p className="text-xs text-[#00A63E] mt-1 flex items-center gap-1">
            <ArrowUpRight className="w-3 h-3" />
            +7.0%
          </p>
        </div>

        <div className="bg-white rounded-xl p-5 border border-slate-200">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs text-slate-600 font-medium">Opened Rate</p>
            <Eye className="w-4 h-4 text-[#8B5CF6]" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">75.0%</h3>
          <p className="text-xs text-[#00A63E] mt-1 flex items-center gap-1">
            <ArrowUpRight className="w-3 h-3" />
            +2.8%
          </p>
        </div>

        <div className="bg-white rounded-xl p-5 border border-slate-200">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs text-slate-600 font-medium">Clicked Rate</p>
            <MousePointerClick className="w-4 h-4 text-[#FDC700]" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">48.9%</h3>
          <p className="text-xs text-[#00A63E] mt-1 flex items-center gap-1">
            <ArrowUpRight className="w-3 h-3" />
            +3.2%
          </p>
        </div>

        <div className="bg-white rounded-xl p-5 border border-slate-200">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs text-slate-600 font-medium">Conversion Rate</p>
            <TrendingUp className="w-4 h-4 text-[#00A63E]" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">32.9%</h3>
          <p className="text-xs text-[#00A63E] mt-1 flex items-center gap-1">
            <ArrowUpRight className="w-3 h-3" />
            +4.1%
          </p>
        </div>
      </div>

      {/* Key Metrics - Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <div className="bg-white rounded-xl p-5 border border-slate-200">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs text-slate-600 font-medium">Total Transaction Amount</p>
            <DollarSign className="w-4 h-4 text-[#00A63E]" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Rp 465M</h3>
          <p className="text-xs text-[#00A63E] mt-1 flex items-center gap-1">
            <ArrowUpRight className="w-3 h-3" />
            +10.7%
          </p>
        </div>

        <div className="bg-white rounded-xl p-5 border border-slate-200">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs text-slate-600 font-medium">Avg Transaction Amount</p>
            <DollarSign className="w-4 h-4 text-[#155DFC]" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Rp 715K</h3>
          <p className="text-xs text-[#00A63E] mt-1 flex items-center gap-1">
            <ArrowUpRight className="w-3 h-3" />
            +5.2%
          </p>
        </div>

        <div className="bg-white rounded-xl p-5 border border-slate-200">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs text-slate-600 font-medium">Daily Active Users</p>
            <Users className="w-4 h-4 text-[#8B5CF6]" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">28.5K</h3>
          <p className="text-xs text-[#00A63E] mt-1 flex items-center gap-1">
            <ArrowUpRight className="w-3 h-3" />
            +9.7%
          </p>
        </div>

        <div className="bg-white rounded-xl p-5 border border-slate-200">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs text-slate-600 font-medium">Weekly Active Users</p>
            <Users className="w-4 h-4 text-[#FDC700]" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">79.2K</h3>
          <p className="text-xs text-[#00A63E] mt-1 flex items-center gap-1">
            <ArrowUpRight className="w-3 h-3" />
            +9.9%
          </p>
        </div>
      </div>

      {/* Key Metrics - Row 3 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-xl p-5 border border-slate-200">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs text-slate-600 font-medium">Opt-out Rate</p>
            <UserX className="w-4 h-4 text-[#C10007]" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">2.4%</h3>
          <p className="text-xs text-[#00A63E] mt-1 flex items-center gap-1">
            <ArrowDownRight className="w-3 h-3" />
            -4.0% (Better)
          </p>
        </div>

        <div className="bg-white rounded-xl p-5 border border-slate-200">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs text-slate-600 font-medium">Best Channel</p>
            <MessageSquare className="w-4 h-4 text-[#155DFC]" />
          </div>
          <h3 className="text-base font-bold text-slate-900">In-App</h3>
          <p className="text-xs text-slate-600 mt-1">42.1% conversion</p>
        </div>

        <div className="bg-white rounded-xl p-5 border border-slate-200">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs text-slate-600 font-medium">Avg Response Time</p>
            <Clock className="w-4 h-4 text-[#8B5CF6]" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">2.4 hrs</h3>
          <p className="text-xs text-[#00A63E] mt-1 flex items-center gap-1">
            <ArrowDownRight className="w-3 h-3" />
            -12.5% (Better)
          </p>
        </div>

        <div className="bg-white rounded-xl p-5 border border-slate-200">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs text-slate-600 font-medium">Habit Formation Rate</p>
            <BarChart3 className="w-4 h-4 text-[#FDC700]" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">45.8%</h3>
          <p className="text-xs text-[#00A63E] mt-1 flex items-center gap-1">
            <ArrowUpRight className="w-3 h-3" />
            +8.2%
          </p>
        </div>
      </div>

      {/* Performance Comparison */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 mb-6">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1 h-6 bg-gradient-to-b from-[#155DFC] to-[#8B5CF6] rounded-full"></div>
          <h3 className="text-lg font-bold text-slate-900">Performance Comparison: With vs Without Reminder</h3>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Transaction Completion Rate */}
          <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
            <p className="text-xs text-slate-600 font-medium mb-3">Transaction Completion Rate</p>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-slate-500 mb-1">Without Reminder</p>
                <p className="text-lg font-bold text-slate-900">18%</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <p className="text-xs text-blue-700 mb-1">With Reminder</p>
                <p className="text-2xl font-bold text-[#155DFC]">32%</p>
              </div>
              <div className="bg-green-50 rounded-lg p-2">
                <p className="text-xs text-green-700 font-medium flex items-center gap-1">
                  +77.8% increase 📈
                </p>
              </div>
            </div>
          </div>

          {/* Avg Days to Transaction */}
          <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
            <p className="text-xs text-slate-600 font-medium mb-3">Avg Days to Transaction</p>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-slate-500 mb-1">Without Reminder</p>
                <p className="text-lg font-bold text-slate-900">8.5 days</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <p className="text-xs text-blue-700 mb-1">With Reminder</p>
                <p className="text-2xl font-bold text-[#155DFC]">2.4 days</p>
              </div>
              <div className="bg-green-50 rounded-lg p-2">
                <p className="text-xs text-green-700 font-medium flex items-center gap-1">
                  71.8% faster ⚡
                </p>
              </div>
            </div>
          </div>

          {/* Revenue Impact */}
          <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
            <p className="text-xs text-slate-600 font-medium mb-3">Revenue Impact</p>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-slate-500 mb-1">Without Reminder</p>
                <p className="text-lg font-bold text-slate-900">$520K</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <p className="text-xs text-blue-700 mb-1">With Reminder</p>
                <p className="text-2xl font-bold text-[#155DFC]">$935K</p>
              </div>
              <div className="bg-green-50 rounded-lg p-2">
                <p className="text-xs text-green-700 font-medium flex items-center gap-1">
                  +$415K additional revenue 💰
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
            <BarChart data={reminderData[5] ? [
              { name: 'Reminders Sent', value: reminderData[5].sent, fill: '#155DFC' },
              { name: 'Opened', value: reminderData[5].opened, fill: '#8B5CF6' },
              { name: 'Clicked', value: reminderData[5].clicked, fill: '#FDC700' },
              { name: 'Converted', value: reminderData[5].converted, fill: '#00A63E' },
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

      {/* Engagement & Retention Section */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Activity className="w-6 h-6 text-[#155DFC]" />
          <h2 className="text-xl font-bold text-slate-900">Engagement & Retention</h2>
        </div>
        
        <div className="grid grid-cols-1 gap-6">
          {/* DAU/WAU/MAU Trends with Metrics Inside */}
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
                  <Line type="monotone" dataKey="dau" stroke="#8B5CF6" strokeWidth={3} name="DAU" dot={{ r: 5, fill: '#8B5CF6' }} />
                  <Line type="monotone" dataKey="wau" stroke="#FDC700" strokeWidth={3} name="WAU" dot={{ r: 5, fill: '#FDC700' }} />
                  <Line type="monotone" dataKey="mau" stroke="#00A63E" strokeWidth={3} name="MAU" dot={{ r: 5, fill: '#00A63E' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Engagement Metrics - Integrated inside DAU/WAU/MAU card */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-slate-200">
              <div>
                <p className="text-xs text-slate-600 mb-1">Current MAU</p>
                <p className="text-xl font-bold text-[#00A63E]">189K</p>
                <p className="text-xs text-slate-500 mt-0.5">+6.2% MoM</p>
              </div>

              <div>
                <p className="text-xs text-slate-600 mb-1">Avg Reminders Responded</p>
                <p className="text-xl font-bold text-[#155DFC]">3.8</p>
                <p className="text-xs text-slate-500 mt-0.5">per user/month</p>
              </div>

              <div>
                <p className="text-xs text-slate-600 mb-1">Active Responder Rate</p>
                <p className="text-xl font-bold text-[#8B5CF6]">45.8%</p>
                <p className="text-xs text-slate-500 mt-0.5">+3.2% MoM</p>
              </div>

              <div>
                <p className="text-xs text-slate-600 mb-1">Stickiness Ratio (DAU/MAU)</p>
                <p className="text-xl font-bold text-[#FDC700]">15.1%</p>
                <p className="text-xs text-slate-500 mt-0.5">+1.8% MoM</p>
              </div>
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
              <p className="text-2xl font-bold text-[#155DFC]">12.9%</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-slate-600 mb-1">Current YoY Growth</p>
              <p className="text-2xl font-bold text-[#00A63E]">48.2%</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-slate-600 mb-1">Avg MoM Growth</p>
              <p className="text-2xl font-bold text-[#8B5CF6]">10.0%</p>
            </div>
          </div>
        </div>

        {/* Conversion Rate & Revenue Trends */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Conversion Rate Trend */}
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Conversion Rate Trend</h3>
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={conversionRateData}>
                <defs>
                  <linearGradient id="colorConversionReminder" x1="0" y1="0" x2="0" y2="1">
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
                <Area type="monotone" dataKey="rate" stroke="#155DFC" strokeWidth={3} fillOpacity={1} fill="url(#colorConversionReminder)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Revenue Trend */}
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Revenue Trend</h3>
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="colorRevenueReminder" x1="0" y1="0" x2="0" y2="1">
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
                <Area type="monotone" dataKey="revenue" stroke="#00A63E" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenueReminder)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Channel Performance Section */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Target className="w-6 h-6 text-[#8B5CF6]" />
          <h2 className="text-xl font-bold text-slate-900">Channel Performance</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Conversion Rate by Channel */}
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Conversion Rate by Channel</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={channelConversionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="channel" stroke="#64748b" style={{ fontSize: '11px' }} angle={-15} textAnchor="end" height={80} />
                <YAxis stroke="#64748b" style={{ fontSize: '12px' }} unit="%" />
                <Tooltip 
                  formatter={(value: number) => `${value}%`}
                  contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }}
                />
                <Bar dataKey="rate" fill="#8B5CF6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Volume Distribution by Channel */}
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Volume Distribution by Channel</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={channelVolumeData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ channel, value }) => `${channel}: ${value}%`}
                  outerRadius={100}
                  dataKey="value"
                >
                  {channelVolumeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
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

        {/* Channel Performance Table */}
        <div className="bg-white rounded-xl p-6 border border-slate-200 mb-6">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Channel Performance Detail</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">Channel</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-slate-700">Sent</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-slate-700">Opened</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-slate-700">Clicked</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-slate-700">Converted</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-slate-700">Conv Rate</th>
                </tr>
              </thead>
              <tbody>
                {channelPerformanceTable.map((item, index) => (
                  <tr key={index} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-medium text-slate-900">{item.channel}</td>
                    <td className="text-right py-3 px-4 text-slate-900">{formatNumber(item.sent)}</td>
                    <td className="text-right py-3 px-4 text-slate-700">{formatNumber(item.opened)}</td>
                    <td className="text-right py-3 px-4 text-slate-700">{formatNumber(item.clicked)}</td>
                    <td className="text-right py-3 px-4 text-slate-700">{formatNumber(item.converted)}</td>
                    <td className="text-right py-3 px-4">
                      <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                        item.convRate > 40 ? 'bg-green-50 text-green-700' :
                        item.convRate > 30 ? 'bg-blue-50 text-blue-700' :
                        'bg-orange-50 text-orange-700'
                      }`}>
                        {item.convRate}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Channel Insights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-green-50 rounded-lg p-4 border border-green-200">
            <p className="text-xs text-green-700 font-medium mb-1">Best Performer</p>
            <p className="text-lg font-bold text-green-900">In-App</p>
            <p className="text-xs text-green-700 mt-1">42.1% conversion rate</p>
          </div>

          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <p className="text-xs text-blue-700 font-medium mb-1">Highest Volume</p>
            <p className="text-lg font-bold text-blue-900">Push Notification</p>
            <p className="text-xs text-blue-700 mt-1">69.3K reminders sent</p>
          </div>

          <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
            <p className="text-xs text-orange-700 font-medium mb-1">Needs Improvement</p>
            <p className="text-lg font-bold text-orange-900">SMS</p>
            <p className="text-xs text-orange-700 mt-1">28.3% conversion rate</p>
          </div>
        </div>
      </div>

      {/* Opt-out & Fatigue Analysis Section */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle className="w-6 h-6 text-[#FB923C]" />
          <h2 className="text-xl font-bold text-slate-900">Opt-out & Fatigue Analysis</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Opt-out Rate Trend */}
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Opt-out Rate Trend</h3>
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={optOutData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" stroke="#64748b" style={{ fontSize: '12px' }} />
                <YAxis stroke="#64748b" style={{ fontSize: '12px' }} unit="%" />
                <Tooltip 
                  formatter={(value: number) => `${value}%`}
                  contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }}
                />
                <Line type="monotone" dataKey="rate" stroke="#C10007" strokeWidth={3} dot={{ r: 5 }} />
              </LineChart>
            </ResponsiveContainer>
            <div className="mt-4 pt-4 border-t border-slate-200">
              <p className="text-sm text-slate-700">
                📊 <span className="font-semibold">Opt-out Rate Stability:</span> The rate has stabilized around <span className="font-bold text-[#00A63E]">2.4-2.7%</span> over the past 3 months, indicating healthy reminder frequency management.
              </p>
            </div>
          </div>

          {/* Reminder Fatigue Analysis */}
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Reminder Fatigue Analysis</h3>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={fatigueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="reminder" stroke="#64748b" style={{ fontSize: '12px' }} />
                <YAxis stroke="#64748b" style={{ fontSize: '12px' }} unit="%" domain={[0, 50]} />
                <Tooltip 
                  formatter={(value: number) => `${value}%`}
                  contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }}
                />
                <Bar dataKey="rate" radius={[8, 8, 0, 0]}>
                  {fatigueData.map((entry, index) => (
                    <Cell key={`cell-fatigue-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-4 bg-blue-50 rounded-lg p-3 border border-blue-200">
              <p className="text-sm text-blue-800 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                <span className="font-semibold">Response drops 50% after 3rd reminder</span>
              </p>
            </div>
          </div>
        </div>

        {/* Fatigue Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-xl p-5 border border-slate-200">
            <p className="text-xs text-slate-600 font-medium mb-2">Avg Reminders Before Opt-out</p>
            <h3 className="text-2xl font-bold text-slate-900">6.8</h3>
            <p className="text-xs text-slate-600 mt-1">reminders tolerance threshold</p>
          </div>

          <div className="bg-white rounded-xl p-5 border border-slate-200">
            <p className="text-xs text-slate-600 font-medium mb-2">Fatigue Threshold</p>
            <h3 className="text-2xl font-bold text-slate-900">7</h3>
            <p className="text-xs text-orange-600 mt-1">response drops significantly</p>
          </div>

          <div className="bg-white rounded-xl p-5 border border-slate-200">
            <p className="text-xs text-slate-600 font-medium mb-2">Re-engagement Rate</p>
            <h3 className="text-2xl font-bold text-slate-900">18.5%</h3>
            <p className="text-xs text-[#00A63E] mt-1">opt-out users who return</p>
          </div>
        </div>

        {/* Recommendation Card */}
        <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200 mb-4">
          <div className="flex items-start gap-3">
            <Zap className="w-6 h-6 text-[#155DFC] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-slate-900 mb-2">Recommendation</h4>
              <p className="text-sm text-slate-700">
                Limit to maximum <span className="font-bold text-[#155DFC]">3 reminders per transaction</span> to prevent fatigue. 
                Response rate drops from <span className="font-bold text-[#00A63E]">45% (1st reminder)</span> to <span className="font-bold text-[#C10007]">8% (4th+ reminder)</span>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Transaction Value Analysis Section */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Transaction Value Analysis</h2>
        
        {/* Avg Transaction Value by Reminder Type */}
        <div className="bg-white rounded-xl p-6 border border-slate-200 mb-6">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Avg Transaction Value by Reminder Type</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={avgTransactionByType}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="type" stroke="#64748b" style={{ fontSize: '11px' }} angle={-15} textAnchor="end" height={80} />
              <YAxis stroke="#64748b" style={{ fontSize: '12px' }} tickFormatter={formatCurrency} />
              <Tooltip 
                formatter={(value: number) => formatCurrency(value)}
                contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }}
              />
              <Bar dataKey="avg" fill="#155DFC" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Value vs Volume Analysis */}
        <div className="bg-white rounded-xl p-6 border border-slate-200 mb-6">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Value vs Volume Analysis</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-slate-700">Type</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-slate-700">Volume</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-slate-700">Avg Value</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-slate-700">Total Revenue</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-slate-700">Conv Rate</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-slate-700">Priority</th>
                </tr>
              </thead>
              <tbody>
                {valueVsVolumeTable.map((item, index) => (
                  <tr key={index} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-medium text-slate-900">{item.type}</td>
                    <td className="text-right py-3 px-4 text-slate-700">{formatNumber(item.volume)}</td>
                    <td className="text-right py-3 px-4 text-slate-700">{formatCurrency(item.avgValue)}</td>
                    <td className="text-right py-3 px-4 text-slate-900 font-medium">{formatCurrency(item.totalRevenue)}</td>
                    <td className="text-right py-3 px-4 text-slate-700">{item.convRate}%</td>
                    <td className="text-right py-3 px-4">
                      <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                        item.priority === 'High' ? 'bg-green-50 text-green-700' :
                        item.priority === 'Medium' ? 'bg-slate-50 text-slate-700' :
                        item.priority === 'High Value' ? 'bg-yellow-50 text-yellow-700' :
                        item.priority === 'Low' ? 'bg-slate-50 text-slate-500' :
                        'bg-slate-50 text-slate-700'
                      }`}>
                        {item.priority}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Value Insights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-green-50 rounded-lg p-4 border border-green-200">
            <p className="text-xs text-green-700 font-medium mb-1">🎯 High Priority</p>
            <p className="text-lg font-bold text-green-900">PLN Bill</p>
            <p className="text-xs text-green-700 mt-1">High volume (12.3K) + high revenue ($560K) = best ROI</p>
          </div>

          <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
            <p className="text-xs text-yellow-700 font-medium mb-1">💎 High Value Opportunity</p>
            <p className="text-lg font-bold text-yellow-900">Transfer</p>
            <p className="text-xs text-yellow-700 mt-1">Highest avg value ($125.80) - upsell opportunity despite low volume</p>
          </div>

          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <p className="text-xs text-blue-700 font-medium mb-1">⚡ Quick Wins</p>
            <p className="text-lg font-bold text-blue-900">Mobile Top-up</p>
            <p className="text-xs text-blue-700 mt-1">High volume (9.9K) with good conversion (35%) - easy revenue</p>
          </div>
        </div>
      </div>

      {/* Additional Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Peak Response Time */}
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Peak Response Time (Hourly)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={peakHoursData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="hour" stroke="#64748b" style={{ fontSize: '12px' }} />
              <YAxis stroke="#64748b" style={{ fontSize: '12px' }} />
              <Tooltip 
                formatter={(value: number) => formatNumber(value)}
                contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }}
              />
              <Bar dataKey="responses" fill="#FDC700" radius={[8, 8, 0, 0]} />
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
              <Bar yAxisId="left" dataKey="responses" fill="#C10007" radius={[8, 8, 0, 0]} name="Responses" />
              <Line yAxisId="right" type="monotone" dataKey="conversion" stroke="#00A63E" strokeWidth={3} name="Conversion Rate (%)" dot={{ r: 5 }} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Days Before Due Date Performance */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 mb-6">
        <h3 className="text-lg font-bold text-slate-900 mb-4">Days Before Due Date Performance</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={daysDueDateData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="days" stroke="#64748b" style={{ fontSize: '12px' }} />
            <YAxis stroke="#64748b" style={{ fontSize: '12px' }} unit="%" />
            <Tooltip 
              formatter={(value: number) => `${value}%`}
              contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }}
            />
            <Legend />
            <Line type="monotone" dataKey="conversion" stroke="#155DFC" strokeWidth={3} name="Conversion Rate (%)" dot={{ r: 6 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Revenue & Frequency */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Revenue by Reminder Type */}
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Revenue by Reminder Type</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={revenueByTypeData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis type="number" stroke="#64748b" style={{ fontSize: '12px' }} tickFormatter={formatCurrency} />
              <YAxis type="category" dataKey="type" stroke="#64748b" style={{ fontSize: '11px' }} width={100} />
              <Tooltip 
                formatter={(value: number) => formatCurrency(value)}
                contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }}
              />
              <Bar dataKey="revenue" fill="#00A63E" radius={[0, 8, 8, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Reminder Frequency vs Success Rate */}
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Reminder Frequency vs Success Rate</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={frequencySuccessData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="frequency" stroke="#64748b" style={{ fontSize: '12px' }} />
              <YAxis stroke="#64748b" style={{ fontSize: '12px' }} unit="%" />
              <Tooltip 
                formatter={(value: number) => `${value}%`}
                contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }}
              />
              <Bar dataKey="success" fill="#FB923C" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Reminder Type Performance */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 mb-6">
        <h3 className="text-lg font-bold text-slate-900 mb-4">Reminder Type Performance</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {/* PLN Bill Payment */}
          <div className="bg-gradient-to-br from-orange-50 to-white rounded-lg p-5 border border-orange-100">
            <div className="flex items-start justify-between mb-3">
              <div className="bg-orange-100 p-2.5 rounded-lg">
                <Zap className="w-5 h-5 text-orange-600" />
              </div>
            </div>
            <p className="text-sm font-semibold text-slate-900 mb-3">PLN Bill Payment</p>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-xs text-slate-600">Reminders Sent</p>
                <p className="text-sm font-bold text-slate-900">32.5K</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-xs text-slate-600">Conversion Rate</p>
                <p className="text-sm font-bold text-slate-900">38%</p>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-orange-100">
                <p className="text-xs text-slate-600">Revenue</p>
                <p className="text-sm font-bold text-orange-600">Rp 185M</p>
              </div>
            </div>
          </div>

          {/* Mobile Top-up */}
          <div className="bg-gradient-to-br from-purple-50 to-white rounded-lg p-5 border border-purple-100">
            <div className="flex items-start justify-between mb-3">
              <div className="bg-purple-100 p-2.5 rounded-lg">
                <Smartphone className="w-5 h-5 text-purple-600" />
              </div>
            </div>
            <p className="text-sm font-semibold text-slate-900 mb-3">Mobile Top-up</p>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-xs text-slate-600">Reminders Sent</p>
                <p className="text-sm font-bold text-slate-900">28.2K</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-xs text-slate-600">Conversion Rate</p>
                <p className="text-sm font-bold text-slate-900">35%</p>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-purple-100">
                <p className="text-xs text-slate-600">Revenue</p>
                <p className="text-sm font-bold text-purple-600">Rp 95M</p>
              </div>
            </div>
          </div>

          {/* Transfer Reminder */}
          <div className="bg-gradient-to-br from-green-50 to-white rounded-lg p-5 border border-green-100">
            <div className="flex items-start justify-between mb-3">
              <div className="bg-green-100 p-2.5 rounded-lg">
                <ArrowLeftRight className="w-5 h-5 text-green-600" />
              </div>
            </div>
            <p className="text-sm font-semibold text-slate-900 mb-3">Transfer Reminder</p>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-xs text-slate-600">Reminders Sent</p>
                <p className="text-sm font-bold text-slate-900">15.8K</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-xs text-slate-600">Conversion Rate</p>
                <p className="text-sm font-bold text-slate-900">28%</p>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-green-100">
                <p className="text-xs text-slate-600">Revenue</p>
                <p className="text-sm font-bold text-green-600">Rp 125M</p>
              </div>
            </div>
          </div>

          {/* E-wallet Top-up */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-5 border border-blue-100">
            <div className="flex items-start justify-between mb-3">
              <div className="bg-blue-100 p-2.5 rounded-lg">
                <CreditCard className="w-5 h-5 text-blue-600" />
              </div>
            </div>
            <p className="text-sm font-semibold text-slate-900 mb-3">E-wallet Top-up</p>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-xs text-slate-600">Reminders Sent</p>
                <p className="text-sm font-bold text-slate-900">8.5K</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-xs text-slate-600">Conversion Rate</p>
                <p className="text-sm font-bold text-slate-900">25%</p>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-blue-100">
                <p className="text-xs text-slate-600">Revenue</p>
                <p className="text-sm font-bold text-blue-600">Rp 45M</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Habit Formation */}
      <div className="mb-6">
        {/* Repeat Transaction Rate */}
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <div className="flex items-center gap-2 mb-3">
            <Repeat className="w-5 h-5 text-[#155DFC]" />
            <h3 className="text-lg font-bold text-slate-900">Repeat Transaction Rate</h3>
          </div>
          <p className="text-sm text-slate-600 mb-6">Users forming habits after reminders</p>
          
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <p className="text-xs text-slate-600 mb-1">Users Received Reminders</p>
              <p className="text-2xl font-bold text-slate-900">27.2K</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <p className="text-xs text-slate-600 mb-1">Base Transact Without Reminders</p>
              <p className="text-2xl font-bold text-slate-900">11.5K</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <p className="text-xs text-slate-600 mb-1">Habit Formation Rate</p>
              <p className="text-2xl font-bold text-[#00A63E]">42.3%</p>
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <p className="text-sm text-blue-800">
              💡 <span className="font-semibold">42.3%</span> of users who received reminders now complete transactions regularly without needing reminders - showing successful habit formation!
            </p>
          </div>
        </div>
      </div>

      {/* Time to Action */}
      <div className="mb-6">
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <div className="flex items-center gap-2 mb-3">
            <Clock className="w-5 h-5 text-[#8B5CF6]" />
            <h3 className="text-lg font-bold text-slate-900">Time to Action</h3>
          </div>
          <p className="text-sm text-slate-600 mb-6">Average time between each funnel stage</p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm font-medium text-slate-700">Sent → Opened</p>
                  <p className="text-lg font-bold text-[#155DFC]">2.5 <span className="text-sm font-normal text-slate-600">hours</span></p>
                </div>
                <p className="text-xs text-slate-500">Users check notifications within half a day</p>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center">
              <div className="h-8 w-px bg-slate-300"></div>
              <span className="text-slate-400">→</span>
              <div className="h-8 w-px bg-slate-300"></div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-orange-100 p-3 rounded-lg flex-shrink-0">
                <MousePointerClick className="w-6 h-6 text-orange-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm font-medium text-slate-700">Opened → Clicked</p>
                  <p className="text-lg font-bold text-[#FB923C]">15 <span className="text-sm font-normal text-slate-600">min</span></p>
                </div>
                <p className="text-xs text-slate-500">Quick decision to explore</p>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center">
              <div className="h-8 w-px bg-slate-300"></div>
              <span className="text-slate-400">→</span>
              <div className="h-8 w-px bg-slate-300"></div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm font-medium text-slate-700">Clicked → Completed</p>
                  <p className="text-lg font-bold text-[#00A63E]">8 <span className="text-sm font-normal text-slate-600">min</span></p>
                </div>
                <p className="text-xs text-slate-500">Fast transaction completion</p>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-green-50 rounded-lg p-4 border border-green-200">
            <p className="text-sm text-center text-green-800">
              <span className="font-semibold">Total Average Time:</span> <span className="text-lg font-bold text-[#00A63E]">~3 hours</span> from reminder sent to transaction completed
            </p>
          </div>
        </div>
      </div>

      {/* User Segmentation Performance */}
      <div className="bg-white rounded-xl p-6 border border-slate-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-slate-900">User Segmentation Performance</h3>
          <div className="relative">
            <select 
              value={segmentBy}
              onChange={(e) => setSegmentBy(e.target.value as 'age' | 'location' | 'tier')}
              className="appearance-none px-4 py-2 pr-10 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#155DFC]"
            >
              <option value="age">By Age</option>
              <option value="location">By Location</option>
              <option value="tier">By Customer Tier</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600 pointer-events-none" />
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={segmentData.data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey={segmentData.key} stroke="#64748b" style={{ fontSize: '12px' }} />
            <YAxis stroke="#64748b" style={{ fontSize: '12px' }} />
            <Tooltip 
              formatter={(value: number) => `${value}%`}
              contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }}
            />
            <Bar dataKey="performance" fill="#155DFC" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}