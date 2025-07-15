"use client";

import { useState } from "react"
import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Area,
  AreaChart,
  Bar,
  BarChart,
  Tooltip,
} from "recharts"
import {
  Megaphone,
  Users,
  Shield,
  Zap,
  Target,
  Copy,
  Flame,
  Rocket,
  Crown,
  Lock,
  TrendingUp,
  Activity,
  DollarSign,
  ArrowUp,
  Coins,
  BarChart3,
  PieChart,
  Globe,
  Layers,
  Sparkles,
} from "lucide-react"

const priceData = [
  { time: "00:00", price: 0.0012, volume: 45000 },
  { time: "04:00", price: 0.0015, volume: 52000 },
  { time: "08:00", price: 0.0018, volume: 67000 },
  { time: "12:00", price: 0.0022, volume: 89000 },
  { time: "16:00", price: 0.0019, volume: 76000 },
  { time: "20:00", price: 0.0025, volume: 94000 },
  { time: "24:00", price: 0.0028, volume: 112000 },
]

const tradingData = [
  { pair: "PRT/USDT", price: "$0.0028", change: "+15.2%", volume: "$2.1M" },
  { pair: "PRT/ETH", price: "0.000001", change: "+12.8%", volume: "$1.8M" },
  { pair: "PRT/ARCH", price: "1.0000", change: "0.0%", volume: "$950K" },
]

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-900/95 border border-red-500/30 rounded-lg p-3 backdrop-blur-sm">
        <p className="text-gray-300">{`Time: ${label}`}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} style={{ color: entry.color }}>
            {`${entry.dataKey}: ${entry.value}`}
          </p>
        ))}
      </div>
    )
  }
  return null
}

export default function ProtestTokenHomepage() {
  const [copied, setCopied] = useState(false)
  const contractAddress = "0x1234...5678"

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-red-600/3 rounded-full blur-2xl animate-bounce" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gradient-to-r  backdrop-blur-xl border-b border-gradient-to-r from-red-500/20 via-orange-500/20 to-red-500/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Megaphone className="h-10 w-10 text-red-500 animate-pulse" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full animate-ping" />
            </div>
            <div>
              <span className="text-3xl font-black bg-gradient-to-r from-red-400 via-orange-400 to-red-500 bg-clip-text text-transparent">
                PROTEST TOKEN
              </span>
              <span className="ml-2 bg-gradient-to-r from-red-600 to-orange-600 text-white border-0 animate-pulse px-3 py-1 rounded-full text-sm font-bold">
                PRT
              </span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-gray-300 hover:text-red-400 transition-all duration-300 font-semibold relative group"
            >
              Movement
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="#tokenomics"
              className="text-gray-300 hover:text-orange-400 transition-all duration-300 font-semibold relative group"
            >
              Tokenomics
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="#charts"
              className="text-gray-300 hover:text-red-400 transition-all duration-300 font-semibold relative group"
            >
              Charts
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-transparent to-orange-900/10" />
        <div className="container mx-auto text-center relative z-10">
          <div className="mb-12">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 text-red-400 border border-red-500/30 text-xl px-6 py-3 animate-bounce rounded-full flex items-center">
                <Flame className="mr-2 h-5 w-5" />
                THE REVOLUTION IS LIVE
              </div>
            </div>

            <h1 className="text-7xl md:text-9xl font-black mb-8 bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text text-transparent animate-pulse">
              PROTEST
              <br />
              <span className="text-6xl md:text-8xl">TOKEN</span>
            </h1>

            <div className="text-2xl md:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              <span className="text-red-400 font-bold">BREAK THE CHAINS.</span>
              <span className="text-orange-400 font-bold"> DEFY THE SYSTEM.</span>
              <br />
              Join the financial revolution that's reshaping the future.
            </div>

            {/* Exchange Rate Display */}
            <div className="bg-gradient-to-r from-red-900/20 via-orange-900/20 to-red-900/20 border border-red-500/30 rounded-2xl p-6 max-w-2xl mx-auto mb-12 backdrop-blur-sm">
              <div className="flex items-center justify-center space-x-4 text-2xl font-bold">
                <div className="flex items-center space-x-2">
                  <Coins className="h-8 w-8 text-blue-400" />
                  <span className="text-blue-400">1 ARCH</span>
                </div>
                <div className="text-red-400">=</div>
                <div className="flex items-center space-x-2">
                  <Megaphone className="h-8 w-8 text-red-500" />
                  <span className="text-red-400">1 PRT</span>
                </div>
              </div>
              <p className="text-gray-400 mt-2">Fixed exchange rate with Archway Network</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16">
            <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-12 py-6 text-xl font-bold rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center">
              <Rocket className="mr-3 h-6 w-6" />
              IGNITE REVOLUTION
            </button>
            
          </div>

          <div className="flex items-center justify-center space-x-3 bg-gradient-to-r from-gray-900/80 to-black/80 rounded-2xl p-6 max-w-lg mx-auto backdrop-blur-sm border border-red-500/20">
            <span className="text-gray-400 font-semibold">Contract:</span>
            <code className="text-red-400 font-mono text-lg">{contractAddress}</code>
            <button
              onClick={copyToClipboard}
              className="text-red-400 hover:text-red-300 hover:bg-red-500/10 p-2 rounded transition-colors"
            >
              {copied ? <span className="text-green-400">Copied!</span> : <Copy className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </section>

      {/* Live Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-900/5 via-transparent to-orange-900/5">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-red-900/20 to-transparent border border-red-500/30 backdrop-blur-sm hover:border-red-400/50 transition-all duration-300 rounded-lg p-6 text-center">
              <Users className="h-8 w-8 text-red-500 mx-auto mb-3" />
              <div className="text-3xl font-black text-red-400 mb-2">15.2M</div>
              <div className="text-gray-400 font-semibold">Rebels United</div>
              <div className="flex items-center justify-center mt-2 text-green-400">
                <ArrowUp className="h-4 w-4 mr-1" />
                <span className="text-sm">+12.5%</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-900/20 to-transparent border border-orange-500/30 backdrop-blur-sm hover:border-orange-400/50 transition-all duration-300 rounded-lg p-6 text-center">
              <DollarSign className="h-8 w-8 text-orange-500 mx-auto mb-3" />
              <div className="text-3xl font-black text-orange-400 mb-2">$4.7M</div>
              <div className="text-gray-400 font-semibold">Market Cap</div>
              <div className="flex items-center justify-center mt-2 text-green-400">
                <ArrowUp className="h-4 w-4 mr-1" />
                <span className="text-sm">+28.3%</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-900/20 to-transparent border border-red-500/30 backdrop-blur-sm hover:border-red-400/50 transition-all duration-300 rounded-lg p-6 text-center">
              <TrendingUp className="h-8 w-8 text-red-500 mx-auto mb-3" />
              <div className="text-3xl font-black text-red-400 mb-2">847%</div>
              <div className="text-gray-400 font-semibold">ATH Gains</div>
              <div className="flex items-center justify-center mt-2 text-red-400">
                <Sparkles className="h-4 w-4 mr-1" />
                <span className="text-sm">All Time</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-900/20 to-transparent border border-orange-500/30 backdrop-blur-sm hover:border-orange-400/50 transition-all duration-300 rounded-lg p-6 text-center">
              <Activity className="h-8 w-8 text-orange-500 mx-auto mb-3" />
              <div className="text-3xl font-black text-orange-400 mb-2">$2.1M</div>
              <div className="text-gray-400 font-semibold">24h Volume</div>
              <div className="flex items-center justify-center mt-2 text-green-400">
                <ArrowUp className="h-4 w-4 mr-1" />
                <span className="text-sm">+45.7%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trading Pairs Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              LIVE TRADING
            </h2>
            <p className="text-xl text-gray-300">Real-time market data across all exchanges</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {tradingData.map((pair, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-red-500/20 backdrop-blur-sm hover:border-red-400/40 transition-all duration-300 rounded-lg p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-bold text-white">{pair.pair}</span>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      pair.change.startsWith("+")
                        ? "bg-green-600/20 text-green-400 border border-green-500/30"
                        : "bg-red-600/20 text-red-400 border border-red-500/30"
                    }`}
                  >
                    {pair.change}
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Price:</span>
                    <span className="text-red-400 font-bold">{pair.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Volume:</span>
                    <span className="text-orange-400 font-bold">{pair.volume}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Charts Section */}
      <section id="charts" className="py-20 px-4 bg-gradient-to-br from-red-900/5 via-transparent to-orange-900/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-red-400 via-orange-400 to-red-500 bg-clip-text text-transparent">
              REVOLUTION ANALYTICS
            </h2>
            <p className="text-2xl text-gray-300">Data-driven rebellion. Numbers don't lie.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Price Chart */}
            <div className="bg-gradient-to-br from-gray-900/30 to-black/30 border border-red-500/30 backdrop-blur-sm rounded-lg">
              <div className="p-6 border-b border-red-500/20">
                <h3 className="text-2xl font-bold text-red-400 flex items-center">
                  <BarChart3 className="mr-3 h-6 w-6" />
                  PRICE MOVEMENT (24H)
                </h3>
                <p className="text-gray-300 mt-2">Revolutionary price action in real-time</p>
              </div>
              <div className="p-6">
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={priceData}>
                      <defs>
                        <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="time" stroke="#9ca3af" />
                      <YAxis stroke="#9ca3af" />
                      <Tooltip content={<CustomTooltip />} />
                      <Area
                        type="monotone"
                        dataKey="price"
                        stroke="#ef4444"
                        strokeWidth={3}
                        fill="url(#priceGradient)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Volume Chart */}
            <div className="bg-gradient-to-br from-gray-900/30 to-black/30 border border-orange-500/30 backdrop-blur-sm rounded-lg">
              <div className="p-6 border-b border-orange-500/20">
                <h3 className="text-2xl font-bold text-orange-400 flex items-center">
                  <Activity className="mr-3 h-6 w-6" />
                  TRADING VOLUME (24H)
                </h3>
                <p className="text-gray-300 mt-2">Revolutionary trading activity</p>
              </div>
              <div className="p-6">
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={priceData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="time" stroke="#9ca3af" />
                      <YAxis stroke="#9ca3af" />
                      <Tooltip content={<CustomTooltip />} />
                      <Bar dataKey="volume" fill="#f97316" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>

          {/* Combined Chart */}
          <div className="bg-gradient-to-br from-gray-900/30 to-black/30 border border-red-500/30 backdrop-blur-sm rounded-lg">
            <div className="p-6 border-b border-red-500/20">
              <h3 className="text-3xl font-bold text-red-400 flex items-center">
                <PieChart className="mr-3 h-8 w-8" />
                REVOLUTION MOMENTUM
              </h3>
              <p className="text-gray-300 text-lg mt-2">
                Price and volume correlation showing the strength of our movement
              </p>
            </div>
            <div className="p-6">
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={priceData}>
                    <defs>
                      <linearGradient id="combinedGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#ef4444" stopOpacity={0.2} />
                        <stop offset="95%" stopColor="#f97316" stopOpacity={0.1} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="time" stroke="#9ca3af" />
                    <YAxis yAxisId="price" orientation="left" stroke="#ef4444" />
                    <YAxis yAxisId="volume" orientation="right" stroke="#f97316" />
                    <Tooltip content={<CustomTooltip />} />
                    <Area
                      yAxisId="volume"
                      type="monotone"
                      dataKey="volume"
                      stroke="none"
                      fill="url(#combinedGradient)"
                    />
                    <Line
                      yAxisId="price"
                      type="monotone"
                      dataKey="price"
                      stroke="#ef4444"
                      strokeWidth={4}
                      dot={{ fill: "#ef4444", strokeWidth: 2, r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              THE MOVEMENT
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Born from the ashes of financial oppression, Protest Token represents the voice of the unheard, the power
              of the people, and the future of decentralized rebellion.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-red-900/20 to-transparent border border-red-500/30 backdrop-blur-sm hover:border-red-400/50 transition-all duration-500 transform hover:scale-105 rounded-lg">
              <div className="text-center p-8">
                <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-red-600/20 to-red-800/20 rounded-full w-20 h-20 flex items-center justify-center">
                  <Shield className="h-10 w-10 text-red-400" />
                </div>
                <h3 className="text-2xl font-bold text-red-400 mb-4">DECENTRALIZED POWER</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  No central authority. No manipulation. Pure community-driven governance that puts power back in the
                  hands of the people where it belongs.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-900/20 to-transparent border border-orange-500/30 backdrop-blur-sm hover:border-orange-400/50 transition-all duration-500 transform hover:scale-105 rounded-lg">
              <div className="text-center p-8">
                <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-orange-600/20 to-orange-800/20 rounded-full w-20 h-20 flex items-center justify-center">
                  <Zap className="h-10 w-10 text-orange-400" />
                </div>
                <h3 className="text-2xl font-bold text-orange-400 mb-4">LIGHTNING FAST</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Built on cutting-edge blockchain technology for instant transactions and minimal fees. Revolution
                  shouldn't be expensive or slow.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-900/20 to-transparent border border-red-500/30 backdrop-blur-sm hover:border-red-400/50 transition-all duration-500 transform hover:scale-105 rounded-lg">
              <div className="text-center p-8">
                <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-red-600/20 to-red-800/20 rounded-full w-20 h-20 flex items-center justify-center">
                  <Target className="h-10 w-10 text-red-400" />
                </div>
                <h3 className="text-2xl font-bold text-red-400 mb-4">TARGETED DISRUPTION</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Strategically designed to challenge traditional financial systems and create real change in the crypto
                  ecosystem and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics */}
      <section id="tokenomics" className="py-24 px-4 bg-gradient-to-br from-red-900/5 via-transparent to-orange-900/5">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              TOKENOMICS
            </h2>
            <p className="text-2xl text-gray-300">
              Fair distribution. No hidden agendas. Pure revolutionary economics.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-red-900/20 to-transparent border border-red-500/30 backdrop-blur-sm p-6 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Globe className="h-6 w-6 text-red-400" />
                    <span className="text-xl font-semibold text-gray-300">Total Supply</span>
                  </div>
                  <span className="text-2xl font-black text-red-400">1,000,000,000 PRT</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-900/20 to-transparent border border-orange-500/30 backdrop-blur-sm p-6 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Layers className="h-6 w-6 text-orange-400" />
                    <span className="text-xl font-semibold text-gray-300">Liquidity Pool</span>
                  </div>
                  <span className="text-2xl font-black text-orange-400">40%</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-900/20 to-transparent border border-red-500/30 backdrop-blur-sm p-6 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Users className="h-6 w-6 text-red-400" />
                    <span className="text-xl font-semibold text-gray-300">Community Rewards</span>
                  </div>
                  <span className="text-2xl font-black text-red-400">30%</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-900/20 to-transparent border border-orange-500/30 backdrop-blur-sm p-6 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Rocket className="h-6 w-6 text-orange-400" />
                    <span className="text-xl font-semibold text-gray-300">Development</span>
                  </div>
                  <span className="text-2xl font-black text-orange-400">20%</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-900/20 to-transparent border border-red-500/30 backdrop-blur-sm p-6 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Megaphone className="h-6 w-6 text-red-400" />
                    <span className="text-xl font-semibold text-gray-300">Marketing</span>
                  </div>
                  <span className="text-2xl font-black text-red-400">10%</span>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 border border-red-500/40 backdrop-blur-sm rounded-lg">
                <div className="p-6 border-b border-red-500/20">
                  <h3 className="text-2xl font-bold text-red-400 flex items-center">
                    <Lock className="mr-3 h-6 w-6" />
                    LOCKED LIQUIDITY
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 text-lg leading-relaxed mb-4">
                    100% of liquidity is locked for 2 years. No rug pulls, no exit scams. This revolution is built to
                    last and grow stronger with time.
                  </p>
                  <span className="bg-green-600/20 text-green-400 border border-green-500/30 text-lg px-4 py-2 rounded-full">
                    VERIFIED LOCKED
                  </span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 border border-orange-500/40 backdrop-blur-sm rounded-lg">
                <div className="p-6 border-b border-orange-500/20">
                  <h3 className="text-2xl font-bold text-orange-400 flex items-center">
                    <Crown className="mr-3 h-6 w-6" />
                    COMMUNITY OWNED
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 text-lg leading-relaxed mb-4">
                    No team tokens. No insider allocations. Every PRT token is earned through participation in the
                    revolution. True decentralization.
                  </p>
                  <span className="bg-blue-600/20 text-blue-400 border border-blue-500/30 text-lg px-4 py-2 rounded-full">
                    100% FAIR LAUNCH
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4 bg-gradient-to-br from-red-900/10 via-transparent to-orange-900/10">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
            JOIN THE REBELLION
          </h2>
          <p className="text-2xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
            The revolution starts with you. Every rebel counts. Every token matters.
            <br />
            <span className="text-red-400 font-bold">The time for change is NOW.</span>
          </p>

          <div className="max-w-4xl mx-auto bg-gradient-to-r from-red-900/20 via-orange-900/20 to-red-900/20 border border-red-500/40 backdrop-blur-sm rounded-lg p-12">
            <div className="mb-8">
              <div className="text-6xl font-black text-red-400 mb-4">READY TO REVOLT?</div>
              <p className="text-xl text-gray-300 leading-relaxed">
                Don't just watch the revolution - be part of it. Join thousands of rebels who are reshaping the future
                of finance.
              </p>
            </div>
            <button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-16 py-8 text-2xl font-black rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center mx-auto">
              <Flame className="mr-4 h-8 w-8" />
              START YOUR REVOLUTION NOW
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 bg-gradient-to-r from-black via-gray-900 to-black border-t border-red-500/20">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <div className="flex items-center space-x-4 mb-6 md:mb-0">
              <div className="relative">
                <Megaphone className="h-8 w-8 text-red-500" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full animate-ping" />
              </div>
              <span className="text-2xl font-black bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                PROTEST TOKEN
              </span>
              <span className="bg-gradient-to-r from-red-600 to-orange-600 text-white border-0 px-3 py-1 rounded-full text-sm font-bold">
                PRT
              </span>
            </div>
            <div className="text-gray-400 text-lg font-semibold">
              © 2024 Protest Token. Power to the People. Revolution Never Ends.
            </div>
          </div>
          <div className="my-8 h-px bg-gradient-to-r from-red-500/20 via-orange-500/20 to-red-500/20" />
          <div className="text-center text-gray-500">
            <p className="text-lg">
              <span className="text-red-400 font-bold">Disclaimer:</span> Cryptocurrency investments carry risk. This is
              not financial advice. DYOR and revolt responsibly.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
