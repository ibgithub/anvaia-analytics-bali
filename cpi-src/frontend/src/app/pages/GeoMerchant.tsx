import { useState } from 'react';
import {
  MapPin,
  Store,
  Users,
  TrendingUp,
  DollarSign,
  Calendar,
  Target,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  Navigation,
  Repeat,
  ShoppingBag,
  Activity,
  Layers,
  BarChart3,
  Award
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
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts';

// Mock Data
const conversionFunnelData = [
  { stage: 'Recommendation Shown', value: 100, color: '#155DFC' },
  { stage: 'Clicked', value: 68, color: '#3b82f6' },
  { stage: 'Visited', value: 45, color: '#60a5fa' },
  { stage: 'Transacted', value: 32, color: '#00A63E' },
];

const dauWauMauTrendData = [
  { month: 'Jan', dau: 28.5, wau: 82.3, mau: 185.5 },
  { month: 'Feb', dau: 31.2, wau: 88.7, mau: 192.8 },
  { month: 'Mar', dau: 34.8, wau: 95.2, mau: 205.3 },
  { month: 'Apr', dau: 38.2, wau: 102.5, mau: 218.7 },
  { month: 'May', dau: 42.5, wau: 110.8, mau: 232.5 },
  { month: 'Jun', dau: 47.3, wau: 120.2, mau: 248.9 },
];

const transactionByCategoryData = [
  { category: 'F&B', transactions: 12500 },
  { category: 'Retail', transactions: 8900 },
  { category: 'Services', transactions: 5600 },
  { category: 'Entertainment', transactions: 3200 },
  { category: 'Others', transactions: 1800 },
];

const transactionFrequencyData = [
  { frequency: '1-2 times', users: 8500 },
  { frequency: '3-5 times', users: 6200 },
  { frequency: '6-10 times', users: 3800 },
  { frequency: '11-20 times', users: 2100 },
  { frequency: '20+ times', users: 900 },
];

const avgTransactionByZoneData = [
  { zone: 'North Jakarta', amount: 285 },
  { zone: 'South Jakarta', amount: 320 },
  { zone: 'East Jakarta', amount: 245 },
  { zone: 'West Jakarta', amount: 268 },
  { zone: 'Central Jakarta', amount: 298 },
];

const revenueTrendData = [
  { month: 'Jan', revenue: 1250 },
  { month: 'Feb', revenue: 1380 },
  { month: 'Mar', revenue: 1520 },
  { month: 'Apr', revenue: 1680 },
  { month: 'May', revenue: 1820 },
  { month: 'Jun', revenue: 1985 },
];

const transactionVolumeTrendData = [
  { month: 'Jan', volume: 28500 },
  { month: 'Feb', volume: 31200 },
  { month: 'Mar', volume: 34800 },
  { month: 'Apr', volume: 38200 },
  { month: 'May', volume: 42500 },
  { month: 'Jun', volume: 47300 },
];

const momGrowthData = [
  { month: 'Jan', rate: 8.5 },
  { month: 'Feb', rate: 10.4 },
  { month: 'Mar', rate: 10.1 },
  { month: 'Apr', rate: 10.5 },
  { month: 'May', rate: 8.4 },
  { month: 'Jun', rate: 9.1 },
];

const yoyGrowthData = [
  { month: 'Jan', rate: 28.5 },
  { month: 'Feb', rate: 32.8 },
  { month: 'Mar', rate: 35.2 },
  { month: 'Apr', rate: 38.7 },
  { month: 'May', rate: 41.5 },
  { month: 'Jun', rate: 45.3 },
];

const hourlyTransactionData = [
  { hour: '6AM', fnb: 120, retail: 80, services: 50 },
  { hour: '9AM', fnb: 350, retail: 280, services: 180 },
  { hour: '12PM', fnb: 820, retail: 420, services: 280 },
  { hour: '3PM', fnb: 580, retail: 520, services: 650 },
  { hour: '6PM', fnb: 720, retail: 880, services: 420 },
  { hour: '9PM', fnb: 420, retail: 320, services: 180 },
];

const hourlyConversionData = [
  { hour: '6AM', rate: 18.5 },
  { hour: '9AM', rate: 24.3 },
  { hour: '12PM', rate: 32.8 },
  { hour: '3PM', rate: 28.5 },
  { hour: '6PM', rate: 35.2 },
  { hour: '9PM', rate: 22.7 },
];

const footTrafficTrendData = [
  { day: 'Mon', traffic: 4200 },
  { day: 'Tue', traffic: 4580 },
  { day: 'Wed', traffic: 4920 },
  { day: 'Thu', traffic: 5280 },
  { day: 'Fri', traffic: 6850 },
  { day: 'Sat', traffic: 8920 },
  { day: 'Sun', traffic: 7820 },
];

const peakHoursByCategoryData = [
  { category: 'F&B', morning: 35, afternoon: 85, evening: 68 },
  { category: 'Retail', morning: 28, afternoon: 52, evening: 95 },
  { category: 'Services', morning: 42, afternoon: 88, evening: 45 },
];

const weekdayWeekendData = [
  { day: 'Weekday', transactions: 24500, avgValue: 245 },
  { day: 'Weekend', transactions: 38200, avgValue: 312 },
];

const newReturningData = [
  { type: 'New Customers', value: 35, color: '#155DFC' },
  { type: 'Returning Customers', value: 65, color: '#00A63E' },
];

const clvAllZoneData = [
  { zone: 'North Jakarta', clv: 2850, revenue: 1250, merchants: 280 },
  { zone: 'South Jakarta', clv: 3420, revenue: 1580, merchants: 320 },
  { zone: 'East Jakarta', clv: 2380, revenue: 980, merchants: 225 },
  { zone: 'West Jakarta', clv: 2680, revenue: 1180, merchants: 268 },
  { zone: 'Central Jakarta', clv: 3120, revenue: 1420, merchants: 295 },
];

const clvNorthJakartaData = [
  { zone: 'Kelapa Gading', clv: 3200, revenue: 1420, merchants: 95 },
  { zone: 'Pantai Indah Kapuk', clv: 3850, revenue: 1680, merchants: 82 },
  { zone: 'Ancol', clv: 2150, revenue: 820, merchants: 58 },
  { zone: 'Sunter', clv: 2580, revenue: 980, merchants: 45 },
];

const clvSouthJakartaData = [
  { zone: 'Senayan', clv: 4200, revenue: 1980, merchants: 105 },
  { zone: 'Pondok Indah', clv: 3950, revenue: 1820, merchants: 88 },
  { zone: 'Kemang', clv: 3680, revenue: 1650, merchants: 72 },
  { zone: 'Blok M', clv: 2850, revenue: 1280, merchants: 55 },
];

const clvEastJakartaData = [
  { zone: 'Cibubur', clv: 2680, revenue: 1180, merchants: 68 },
  { zone: 'Klender', clv: 2250, revenue: 920, merchants: 52 },
  { zone: 'Rawamangun', clv: 2420, revenue: 1050, merchants: 58 },
  { zone: 'Jatinegara', clv: 2180, revenue: 880, merchants: 47 },
];

const clvWestJakartaData = [
  { zone: 'Taman Anggrek', clv: 3280, revenue: 1480, merchants: 85 },
  { zone: 'Kebon Jeruk', clv: 2580, revenue: 1120, merchants: 68 },
  { zone: 'Grogol', clv: 2450, revenue: 980, merchants: 62 },
  { zone: 'Meruya', clv: 2420, revenue: 920, merchants: 53 },
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

interface MerchantCardProps {
  name: string;
  category: string;
  categoryColor: string;
  conversionRate: string;
  avgTransaction: string;
  totalTransactions: string;
}

function MerchantCard({ name, category, categoryColor, conversionRate, avgTransaction, totalTransactions }: MerchantCardProps) {
  return (
    <div className="bg-white rounded-xl p-4 border border-slate-200 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <h4 className="text-sm font-bold text-slate-900">{name}</h4>
        <span className={`px-1.5 py-0.5 rounded text-[10px] font-medium ${categoryColor}`}>
          {category}
        </span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div>
          <p className="text-[10px] text-slate-500 mb-0.5">Conv. Rate</p>
          <p className="text-sm font-bold text-slate-900">{conversionRate}</p>
        </div>
        <div>
          <p className="text-[10px] text-slate-500 mb-0.5">Avg Trx</p>
          <p className="text-sm font-bold text-slate-900">{avgTransaction}</p>
        </div>
        <div>
          <p className="text-[10px] text-slate-500 mb-0.5">Total Trx</p>
          <p className="text-sm font-bold text-slate-900">{totalTransactions}</p>
        </div>
      </div>
    </div>
  );
}

export function GeoMerchant() {
  const [clvZone, setClvZone] = useState<'all' | 'north' | 'south' | 'east' | 'west'>('all');

  const getClvData = () => {
    switch (clvZone) {
      case 'north':
        return clvNorthJakartaData;
      case 'south':
        return clvSouthJakartaData;
      case 'east':
        return clvEastJakartaData;
      case 'west':
        return clvWestJakartaData;
      default:
        return clvAllZoneData;
    }
  };

  const getTotalMetrics = () => {
    const data = getClvData();
    return {
      avgClv: (data.reduce((sum, item) => sum + item.clv, 0) / data.length).toFixed(0),
      totalRevenue: (data.reduce((sum, item) => sum + item.revenue, 0)),
      totalMerchants: data.reduce((sum, item) => sum + item.merchants, 0)
    };
  };

  const metrics = getTotalMetrics();

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Geo Merchant Analytics</h1>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
            <Calendar className="w-4 h-4 text-slate-600" />
            <span className="text-sm text-slate-700">Jan - Jun 2026</span>
          </button>
        </div>
      </div>

      {/* Overview Cards - Row 1 */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        {/* Engagement & Conversion Metrics */}
        <div className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-blue-50 text-[#155DFC] p-2 rounded-lg">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900">Engagement & Conversion</h3>
          </div>
          <div className="grid grid-cols-4 gap-3">
            <div>
              <p className="text-xs text-slate-600 mb-1">Total Active Users</p>
              <p className="text-lg font-bold text-slate-900">248.9K</p>
              <p className="text-xs text-[#00A63E]">+15.8%</p>
            </div>
            <div>
              <p className="text-xs text-slate-600 mb-1">Impressions</p>
              <p className="text-lg font-bold text-slate-900">1.2M</p>
              <p className="text-xs text-[#00A63E]">+22.3%</p>
            </div>
            <div>
              <p className="text-xs text-slate-600 mb-1">Click Through</p>
              <p className="text-lg font-bold text-[#00A63E]">68.4%</p>
              <p className="text-xs text-[#00A63E]">+8.2%</p>
            </div>
            <div>
              <p className="text-xs text-slate-600 mb-1">Visit Conv.</p>
              <p className="text-lg font-bold text-[#00A63E]">45.2%</p>
              <p className="text-xs text-[#00A63E]">+5.7%</p>
            </div>
          </div>
        </div>

        {/* Location & Behavior Metrics */}
        <div className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-purple-50 text-[#8B5CF6] p-2 rounded-lg">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900">Location & Behavior</h3>
          </div>
          <div className="grid grid-cols-4 gap-3">
            <div>
              <p className="text-xs text-slate-600 mb-1">Trx Conv.</p>
              <p className="text-lg font-bold text-[#00A63E]">32.5%</p>
              <p className="text-xs text-[#00A63E]">+6.3%</p>
            </div>
            <div>
              <p className="text-xs text-slate-600 mb-1">Time to Visit</p>
              <p className="text-lg font-bold text-slate-900">18.5min</p>
              <p className="text-xs text-[#C10007]">-2.3min</p>
            </div>
            <div>
              <p className="text-xs text-slate-600 mb-1">Distance</p>
              <p className="text-lg font-bold text-slate-900">2.8km</p>
              <p className="text-xs text-[#00A63E]">+0.3km</p>
            </div>
            <div>
              <p className="text-xs text-slate-600 mb-1">Radius</p>
              <p className="text-lg font-bold text-slate-900">5.2km</p>
              <p className="text-xs text-[#00A63E]">+0.5km</p>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Cards - Row 2 */}
      <div className="grid grid-cols-1 gap-6 mb-6">
        <div className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-emerald-50 text-[#00A63E] p-2 rounded-lg">
              <DollarSign className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900">Revenue & Partners</h3>
          </div>
          <div className="grid grid-cols-5 gap-4">
            <div>
              <p className="text-xs text-slate-600 mb-1">Avg Trx Value</p>
              <p className="text-lg font-bold text-slate-900">Rp 285K</p>
              <p className="text-xs text-[#00A63E]">+8.5%</p>
            </div>
            <div>
              <p className="text-xs text-slate-600 mb-1">Total GMV</p>
              <p className="text-lg font-bold text-[#00A63E]">Rp 1.98T</p>
              <p className="text-xs text-[#00A63E]">+28.3%</p>
            </div>
            <div>
              <p className="text-xs text-slate-600 mb-1">Inc. Revenue</p>
              <p className="text-lg font-bold text-slate-900">Rp 428M</p>
              <p className="text-xs text-[#00A63E]">+32.7%</p>
            </div>
            <div>
              <p className="text-xs text-slate-600 mb-1">Partners</p>
              <p className="text-lg font-bold text-[#155DFC]">3,428</p>
              <p className="text-xs text-[#00A63E]">+16.2%</p>
            </div>
            <div>
              <p className="text-xs text-slate-600 mb-1">Revenue Per User</p>
              <p className="text-lg font-bold text-[#8B5CF6]">Rp 7.95K</p>
              <p className="text-xs text-[#00A63E]">+12.8%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Conversion Funnel & Hot Zones Map (reordered) */}
      <div className="grid grid-cols-1 gap-6 mb-6">
        {/* Conversion Funnel First */}
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Conversion Funnel</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={conversionFunnelData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis type="number" stroke="#64748b" style={{ fontSize: '12px' }} unit="%" />
              <YAxis type="category" dataKey="stage" stroke="#64748b" style={{ fontSize: '12px' }} width={150} />
              <Tooltip
                formatter={(value: number) => `${value}%`}
                contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }}
              />
              <Bar dataKey="value" radius={[0, 8, 8, 0]} name="Percentage">
                {conversionFunnelData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Hot Zones Map Below */}
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Hot Zones Map - Merchant Locations (Jakarta)</h3>
          <div className="relative w-full h-[300px] bg-slate-100 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-100">
              <div className="absolute inset-0" style={{
                backgroundImage: 'linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)',
                backgroundSize: '40px 40px'
              }}></div>
              
              {/* Food & Beverage - Central */}
              <div className="absolute" style={{ top: '45%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <div className="relative">
                  <div className="w-12 h-12 bg-[#155DFC] rounded-full flex items-center justify-center shadow-lg animate-pulse">
                    <ShoppingBag className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <p className="text-xs font-semibold text-slate-700 bg-white px-2 py-1 rounded shadow">F&B Zone</p>
                  </div>
                </div>
              </div>

              {/* Retail - South */}
              <div className="absolute" style={{ top: '65%', left: '40%', transform: 'translate(-50%, -50%)' }}>
                <div className="relative">
                  <div className="w-12 h-12 bg-[#00A63E] rounded-full flex items-center justify-center shadow-lg animate-pulse" style={{ animationDelay: '0.5s' }}>
                    <Store className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <p className="text-xs font-semibold text-slate-700 bg-white px-2 py-1 rounded shadow">Retail Zone</p>
                  </div>
                </div>
              </div>

              {/* Services - North */}
              <div className="absolute" style={{ top: '25%', left: '60%', transform: 'translate(-50%, -50%)' }}>
                <div className="relative">
                  <div className="w-12 h-12 bg-[#8B5CF6] rounded-full flex items-center justify-center shadow-lg animate-pulse" style={{ animationDelay: '1s' }}>
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <p className="text-xs font-semibold text-slate-700 bg-white px-2 py-1 rounded shadow">Services Zone</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section: User Engagement DAU/WAU/MAU */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Activity className="w-6 h-6 text-[#155DFC]" />
          <h2 className="text-xl font-bold text-slate-900">User Engagement DAU/WAU/MAU</h2>
        </div>
        
        {/* DAU/WAU/MAU Trend */}
        <div className="bg-white rounded-xl p-6 border border-slate-200 mb-6">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Daily, Weekly, Monthly Active Users Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dauWauMauTrendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" stroke="#64748b" style={{ fontSize: '12px' }} />
              <YAxis stroke="#64748b" style={{ fontSize: '12px' }} unit="K" />
              <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
              <Legend />
              <Line type="monotone" dataKey="dau" stroke="#155DFC" strokeWidth={3} dot={{ fill: '#155DFC', r: 5 }} name="DAU (K)" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="wau" stroke="#8B5CF6" strokeWidth={3} dot={{ fill: '#8B5CF6', r: 5 }} name="WAU (K)" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="mau" stroke="#00A63E" strokeWidth={3} dot={{ fill: '#00A63E', r: 5 }} name="MAU (K)" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Engagement Metrics - Row 1 */}
        <div className="grid grid-cols-4 gap-6 mb-6">
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <p className="text-sm text-slate-600 mb-2">Current DAU</p>
            <h3 className="text-2xl font-bold text-[#155DFC]">47.3K</h3>
          </div>
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <p className="text-sm text-slate-600 mb-2">Current WAU</p>
            <h3 className="text-2xl font-bold text-[#8B5CF6]">120.2K</h3>
          </div>
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <p className="text-sm text-slate-600 mb-2">Current MAU</p>
            <h3 className="text-2xl font-bold text-[#00A63E]">248.9K</h3>
          </div>
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <p className="text-sm text-slate-600 mb-2">DAU/MAU Ratio (Stickiness)</p>
            <h3 className="text-2xl font-bold text-slate-900">19.0%</h3>
          </div>
        </div>

        {/* Engagement Metrics - Row 2 */}
        <div className="grid grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <p className="text-sm text-slate-600 mb-2">WAU/MAU Ratio</p>
            <h3 className="text-2xl font-bold text-slate-900">48.3%</h3>
          </div>
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <p className="text-sm text-slate-600 mb-2">DAU Growth (6W)</p>
            <h3 className="text-2xl font-bold text-[#00A63E]">+28.5%</h3>
          </div>
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <p className="text-sm text-slate-600 mb-2">WAU Growth (6W)</p>
            <h3 className="text-2xl font-bold text-[#00A63E]">+24.8%</h3>
          </div>
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <p className="text-sm text-slate-600 mb-2">MAU Growth (6W)</p>
            <h3 className="text-2xl font-bold text-[#00A63E]">+18.2%</h3>
          </div>
        </div>
      </div>

      {/* Section: Transaction Analysis - Part 1 */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <ShoppingBag className="w-6 h-6 text-[#155DFC]" />
          <h2 className="text-xl font-bold text-slate-900">Transaction Analysis</h2>
        </div>
        
        {/* Transaction Overview Cards */}
        <div className="grid grid-cols-4 gap-6 mb-6">
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <p className="text-sm text-slate-600 mb-2">Total Transactions</p>
            <h3 className="text-2xl font-bold text-slate-900">47,300</h3>
          </div>
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <p className="text-sm text-slate-600 mb-2">Avg Transaction per User</p>
            <h3 className="text-2xl font-bold text-slate-900">3.8</h3>
          </div>
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <p className="text-sm text-slate-600 mb-2">Avg Transaction Value</p>
            <h3 className="text-2xl font-bold text-slate-900">Rp 285K</h3>
          </div>
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <p className="text-sm text-slate-600 mb-2">Total Transaction Volume</p>
            <h3 className="text-2xl font-bold text-slate-900">Rp 13.5B</h3>
          </div>
        </div>

        {/* Transaction Details */}
        <div className="grid grid-cols-4 gap-6 mb-6">
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <p className="text-sm text-slate-600 mb-2">Transaction Success Rate</p>
            <h3 className="text-2xl font-bold text-[#00A63E]">96.8%</h3>
          </div>
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <p className="text-sm text-slate-600 mb-2">Avg Basket Size</p>
            <h3 className="text-2xl font-bold text-slate-900">2.4 items</h3>
          </div>
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <p className="text-sm text-slate-600 mb-2">Repeat Transaction Rate</p>
            <h3 className="text-2xl font-bold text-[#155DFC]">64.8%</h3>
          </div>
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <p className="text-sm text-slate-600 mb-2">Transaction Growth (MoM)</p>
            <h3 className="text-2xl font-bold text-[#00A63E]">+9.1%</h3>
          </div>
        </div>

        {/* Charts - Row 1 */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* Transaction by Category */}
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Transaction by Category</h3>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={transactionByCategoryData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="category" stroke="#64748b" style={{ fontSize: '11px' }} angle={-15} textAnchor="end" height={60} />
                <YAxis stroke="#64748b" style={{ fontSize: '12px' }} />
                <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                <Bar dataKey="transactions" fill="#155DFC" radius={[8, 8, 0, 0]} name="Transactions" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Transaction Frequency */}
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Transaction Frequency Distribution</h3>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={transactionFrequencyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="frequency" stroke="#64748b" style={{ fontSize: '11px' }} angle={-15} textAnchor="end" height={60} />
                <YAxis stroke="#64748b" style={{ fontSize: '12px' }} />
                <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                <Bar dataKey="users" fill="#8B5CF6" radius={[8, 8, 0, 0]} name="Users" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Charts - Row 2 */}
        <div className="grid grid-cols-1 gap-6">
          {/* Avg Transaction by Zone */}
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Avg Transaction Value by Zone</h3>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={avgTransactionByZoneData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="zone" stroke="#64748b" style={{ fontSize: '10px' }} angle={-15} textAnchor="end" height={70} />
                <YAxis stroke="#64748b" style={{ fontSize: '12px' }} tickFormatter={(value) => `${value}K`} />
                <Tooltip formatter={(value: number) => `Rp ${value}K`} contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                <Bar dataKey="amount" fill="#00A63E" radius={[8, 8, 0, 0]} name="Amount" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Section: Revenue & Transaction Time Series */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-6 h-6 text-[#155DFC]" />
          <h2 className="text-xl font-bold text-slate-900">Revenue & Transaction Time Series</h2>
        </div>
        
        {/* Row 1: Revenue & Transaction Trends */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* Revenue Trend */}
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Revenue Trend</h3>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={revenueTrendData}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00A63E" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#00A63E" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" stroke="#64748b" style={{ fontSize: '12px' }} />
                <YAxis stroke="#64748b" style={{ fontSize: '12px' }} tickFormatter={(value) => `${value}M`} />
                <Tooltip formatter={(value: number) => `Rp ${value}M`} contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                <Area type="monotone" dataKey="revenue" stroke="#00A63E" strokeWidth={2} fillOpacity={1} fill="url(#colorRevenue)" name="Revenue" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Transaction Volume Trend */}
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Transaction Volume Trend</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={transactionVolumeTrendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" stroke="#64748b" style={{ fontSize: '12px' }} />
                <YAxis stroke="#64748b" style={{ fontSize: '12px' }} tickFormatter={(value) => `${value/1000}K`} />
                <Tooltip formatter={(value: number) => value.toLocaleString()} contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                <Bar dataKey="volume" fill="#155DFC" radius={[8, 8, 0, 0]} name="Volume" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Row 2: Growth Metrics */}
        <div className="bg-white rounded-xl p-6 border border-slate-200 mb-6">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Growth Metrics</h3>
          <div className="grid grid-cols-4 gap-4">
            <InfoCard label="Current MoM Growth" value="9.1%" color="text-[#155DFC]" />
            <InfoCard label="Current YoY Growth" value="45.3%" color="text-[#00A63E]" />
            <InfoCard label="Avg MoM Growth (8M)" value="9.5%" color="text-slate-900" />
            <InfoCard label="Avg YoY Growth (8M)" value="37.0%" color="text-slate-900" />
          </div>
        </div>

        {/* Row 3: Growth Rate Charts */}
        <div className="grid grid-cols-2 gap-6">
          {/* MoM Growth */}
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Month over Month Growth Rate</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={momGrowthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" stroke="#64748b" style={{ fontSize: '12px' }} />
                <YAxis stroke="#64748b" style={{ fontSize: '12px' }} unit="%" />
                <Tooltip formatter={(value: number) => `${value}%`} contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                <Line type="monotone" dataKey="rate" stroke="#155DFC" strokeWidth={3} dot={{ fill: '#155DFC', r: 5 }} name="MoM Growth" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* YoY Growth */}
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Year over Year Growth Rate</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={yoyGrowthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" stroke="#64748b" style={{ fontSize: '12px' }} />
                <YAxis stroke="#64748b" style={{ fontSize: '12px' }} unit="%" />
                <Tooltip formatter={(value: number) => `${value}%`} contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                <Line type="monotone" dataKey="rate" stroke="#00A63E" strokeWidth={3} dot={{ fill: '#00A63E', r: 5 }} name="YoY Growth" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Section: Peak Hour Analysis */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Clock className="w-6 h-6 text-[#155DFC]" />
          <h2 className="text-xl font-bold text-slate-900">Peak Hour Analysis</h2>
        </div>
        
        {/* Hourly Transaction Volume */}
        <div className="bg-white rounded-xl p-6 border border-slate-200 mb-6">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Hourly Transaction Volume by Category</h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={hourlyTransactionData} barGap={2} barCategoryGap="20%">
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="hour" stroke="#64748b" style={{ fontSize: '12px' }} />
              <YAxis stroke="#64748b" style={{ fontSize: '12px' }} />
              <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
              <Legend />
              <Bar dataKey="fnb" fill="#155DFC" name="F&B" />
              <Bar dataKey="retail" fill="#00A63E" name="Retail" />
              <Bar dataKey="services" fill="#8B5CF6" name="Services" />
            </BarChart>
          </ResponsiveContainer>
          
          {/* Peak Hours - Inside the same card, below the chart */}
          <div className="mt-6 pt-6 border-t border-slate-200">
            <h4 className="text-md font-bold text-slate-900 mb-4">Peak Hours</h4>
            <div className="grid grid-cols-3 gap-4">
              <InfoCard label="F&B Peak" value="12 PM" color="text-[#155DFC]" />
              <InfoCard label="Retail Peak" value="6 PM" color="text-[#00A63E]" />
              <InfoCard label="Service Peak" value="3 PM" color="text-[#8B5CF6]" />
            </div>
          </div>
        </div>

        {/* Hourly Conversion Pattern */}
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Hourly Conversion Rate Pattern</h3>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={hourlyConversionData}>
              <defs>
                <linearGradient id="colorConversion" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="hour" stroke="#64748b" style={{ fontSize: '12px' }} />
              <YAxis stroke="#64748b" style={{ fontSize: '12px' }} unit="%" />
              <Tooltip formatter={(value: number) => `${value}%`} contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
              <Area type="monotone" dataKey="rate" stroke="#8B5CF6" strokeWidth={2} fillOpacity={1} fill="url(#colorConversion)" name="Conversion Rate" />
            </AreaChart>
          </ResponsiveContainer>
          
          {/* Hour Insights - Inside the same card, below the chart */}
          <div className="mt-6 pt-6 border-t border-slate-200">
            <h4 className="text-md font-bold text-slate-900 mb-4">Hour Insights</h4>
            <div className="grid grid-cols-4 gap-4">
              <InfoCard label="Peak Hour (Overall)" value="6 PM" color="text-[#155DFC]" />
              <InfoCard label="Peak Conversion Hour" value="6 PM" color="text-[#00A63E]" />
              <InfoCard label="Off-peak Opportunity" value="9 AM" color="text-[#FDC700]" />
              <InfoCard label="Evening Performance" value="35.2%" color="text-slate-900" />
            </div>
          </div>
        </div>
      </div>

      {/* Section: Location Intelligence */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <MapPin className="w-6 h-6 text-[#155DFC]" />
          <h2 className="text-xl font-bold text-slate-900">Location Intelligence</h2>
        </div>
        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* Foot Traffic Trend */}
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Foot Traffic Trend</h3>
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={footTrafficTrendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="day" stroke="#64748b" style={{ fontSize: '12px' }} />
                <YAxis stroke="#64748b" style={{ fontSize: '12px' }} />
                <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                <Line type="monotone" dataKey="traffic" stroke="#155DFC" strokeWidth={3} dot={{ fill: '#155DFC', r: 5 }} name="Traffic" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Peak Hours by Category */}
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Peak Hours by Category</h3>
            <ResponsiveContainer width="100%" height={280}>
              <RadarChart data={peakHoursByCategoryData}>
                <PolarGrid stroke="#e2e8f0" />
                <PolarAngleAxis dataKey="category" stroke="#64748b" style={{ fontSize: '12px' }} />
                <PolarRadiusAxis stroke="#64748b" style={{ fontSize: '12px' }} />
                <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                <Legend />
                <Radar name="Morning" dataKey="morning" stroke="#FDC700" fill="#FDC700" fillOpacity={0.3} />
                <Radar name="Afternoon" dataKey="afternoon" stroke="#155DFC" fill="#155DFC" fillOpacity={0.3} />
                <Radar name="Evening" dataKey="evening" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.3} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {/* Weekday vs Weekend */}
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Weekday vs Weekend Pattern</h3>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={weekdayWeekendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="day" stroke="#64748b" style={{ fontSize: '12px' }} />
                <YAxis yAxisId="left" stroke="#64748b" style={{ fontSize: '12px' }} />
                <YAxis yAxisId="right" orientation="right" stroke="#64748b" style={{ fontSize: '12px' }} />
                <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                <Legend />
                <Bar yAxisId="left" dataKey="transactions" fill="#155DFC" radius={[8, 8, 0, 0]} name="Transactions" />
                <Bar yAxisId="right" dataKey="avgValue" fill="#00A63E" radius={[8, 8, 0, 0]} name="Avg Value (K)" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* New vs Returning */}
          <div className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">New vs Returning Customers</h3>
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie
                  data={newReturningData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ type, value }) => `${type}: ${value}%`}
                  outerRadius={110}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {newReturningData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Section: Merchant Performance */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Award className="w-6 h-6 text-[#155DFC]" />
          <h2 className="text-xl font-bold text-slate-900">Merchant Performance</h2>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <MerchantCard
            name="Starbucks Coffee"
            category="F&B"
            categoryColor="bg-blue-50 text-[#155DFC]"
            conversionRate="42%"
            avgTransaction="$85"
            totalTransactions="1250"
          />
          <MerchantCard
            name="Indomaret"
            category="Retail"
            categoryColor="bg-green-50 text-[#00A63E]"
            conversionRate="68%"
            avgTransaction="$45"
            totalTransactions="2100"
          />
          <MerchantCard
            name="KFC Restaurant"
            category="F&B"
            categoryColor="bg-blue-50 text-[#155DFC]"
            conversionRate="38%"
            avgTransaction="$95"
            totalTransactions="980"
          />
          <MerchantCard
            name="Alfamart"
            category="Retail"
            categoryColor="bg-green-50 text-[#00A63E]"
            conversionRate="72%"
            avgTransaction="$38"
            totalTransactions="1850"
          />
          <MerchantCard
            name="Pizza Hut"
            category="F&B"
            categoryColor="bg-blue-50 text-[#155DFC]"
            conversionRate="35%"
            avgTransaction="$125"
            totalTransactions="720"
          />
          <MerchantCard
            name="Salon Express"
            category="Services"
            categoryColor="bg-purple-50 text-[#8B5CF6]"
            conversionRate="45%"
            avgTransaction="$180"
            totalTransactions="450"
          />
          <MerchantCard
            name="McDonald's"
            category="F&B"
            categoryColor="bg-blue-50 text-[#155DFC]"
            conversionRate="52%"
            avgTransaction="$65"
            totalTransactions="1580"
          />
          <MerchantCard
            name="Circle K"
            category="Retail"
            categoryColor="bg-green-50 text-[#00A63E]"
            conversionRate="58%"
            avgTransaction="$32"
            totalTransactions="1320"
          />
        </div>
      </div>

      {/* Section: Customer Lifetime Value by Zone */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Layers className="w-6 h-6 text-[#155DFC]" />
          <h2 className="text-xl font-bold text-slate-900">Customer Lifetime Value by Zone</h2>
        </div>
        
        {/* Single Card with Zone Selector & Metrics */}
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <div className="mb-6">
            <label className="text-sm font-medium text-slate-600 mb-2 block">Select Zone</label>
            <select
              value={clvZone}
              onChange={(e) => setClvZone(e.target.value as any)}
              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#155DFC]"
            >
              <option value="all">All Zones</option>
              <option value="north">North Jakarta</option>
              <option value="south">South Jakarta</option>
              <option value="east">East Jakarta</option>
              <option value="west">West Jakarta</option>
            </select>
          </div>

          {/* Metrics in one row */}
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-slate-50 rounded-lg p-4">
              <p className="text-sm text-slate-600 mb-2">CLV in {clvZone === 'all' ? 'All Zones' : clvZone === 'north' ? 'North Jakarta' : clvZone === 'south' ? 'South Jakarta' : clvZone === 'east' ? 'East Jakarta' : 'West Jakarta'}</p>
              <h3 className="text-2xl font-bold text-[#155DFC]">Rp {metrics.avgClv}K</h3>
            </div>

            <div className="bg-slate-50 rounded-lg p-4">
              <p className="text-sm text-slate-600 mb-2">Zone Revenue</p>
              <h3 className="text-2xl font-bold text-[#00A63E]">Rp {metrics.totalRevenue}M</h3>
            </div>

            <div className="bg-slate-50 rounded-lg p-4">
              <p className="text-sm text-slate-600 mb-2">Active Merchants</p>
              <h3 className="text-2xl font-bold text-slate-900">{metrics.totalMerchants}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}