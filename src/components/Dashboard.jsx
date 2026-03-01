import React, { useState } from 'react';
import { FaHome, FaChartLine, FaExchangeAlt, FaGift, FaCompass, 
         FaArrowUp, FaArrowDown, FaPlus, FaWallet, FaShieldAlt, 
         FaCrown, FaFire, FaRobot, FaCoins } from 'react-icons/fa';
import { MdSend, MdSwapVert, MdSell, MdTrendingUp, MdOutlineAccountBalanceWallet } from 'react-icons/md';
import { GiTakeMyMoney } from 'react-icons/gi';
import { SiBitcoin, SiEthereum } from 'react-icons/si';
import { TbCoin } from 'react-icons/tb';
import WithdrawModal from './WithdrawModal';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('crypto');
  const [activeMoverTab, setActiveMoverTab] = useState('stocks');
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [error, setError] = useState('');

  const handleActionClick = (action) => {
    if (action === 'withdraw') {
      setShowWithdrawModal(true);
    } else {
      setError('🔒 Get full access after verification.');
      setTimeout(() => setError(''), 3000);
    }
  };

  const navigationTabs = [
    { id: 'home', label: 'Home', icon: <FaHome />, active: true },
    { id: 'trending', label: 'Trending', icon: <FaFire /> },
    { id: 'trade', label: 'Trade', icon: <FaExchangeAlt /> },
    { id: 'rewards', label: 'Rewards', icon: <FaGift /> },
    { id: 'discover', label: 'Discover', icon: <FaCompass /> },
  ];

  const actionButtons = [
    { id: 'withdraw', label: 'Withdraw', icon: <MdSend />, color: 'from-green-500 to-emerald-600' },
    { id: 'fund', label: 'Fund', icon: <FaPlus />, color: 'from-blue-500 to-cyan-600' },
    { id: 'swap', label: 'Swap', icon: <MdSwapVert />, color: 'from-purple-500 to-pink-600' },
    { id: 'sell', label: 'Sell', icon: <MdSell />, color: 'from-red-500 to-orange-600' },
  ];

  const mainTabs = [
    { id: 'crypto', label: 'Crypto' },
    { id: 'prediction', label: 'Prediction' },
    { id: 'watchlist', label: 'Watchlist' },
  ];

  const moverTabs = [
    { id: 'stocks', label: 'Stocks', icon: <MdTrendingUp /> },
    { id: 'memes', label: 'Memes', icon: <FaCrown /> },
    { id: 'x402', label: 'x402', icon: <TbCoin /> },
    { id: 'ai', label: 'AI', icon: <FaRobot /> },
  ];

  const cryptoAssets = [
    { name: 'Bitcoin', symbol: 'BTC', price: '$92,231.50', change: '+2.5%', trend: 'up', icon: <SiBitcoin className="text-orange-500" />, bg: 'bg-orange-500/10' },
    { name: 'Ethereum', symbol: 'ETH', price: '$3,210.75', change: '+1.8%', trend: 'up', icon: <SiEthereum className="text-purple-500" />, bg: 'bg-purple-500/10' },
    { name: 'Solana', symbol: 'SOL', price: '$102.30', change: '+5.2%', trend: 'up', icon: <FaCoins className="text-cyan-500" />, bg: 'bg-cyan-500/10' },
    { name: 'Cardano', symbol: 'ADA', price: '$0.52', change: '-0.5%', trend: 'down', icon: <TbCoin className="text-blue-500" />, bg: 'bg-blue-500/10' },
  ];

  const trendingAssets = [
    { name: 'AI Protocol', symbol: 'AIP', price: '$12.45', change: '+15.2%', volume: '$4.2M' },
    { name: 'Meme King', symbol: 'MEME', price: '$0.023', change: '+32.5%', volume: '$8.7M' },
    { name: 'x402 Token', symbol: 'X402', price: '$3.21', change: '+8.7%', volume: '$2.1M' },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-900 via-black to-gray-900 pb-24">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-gray-900/90 backdrop-blur-xl border-b border-gray-800 p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-8 h-8 bg-linear-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <FaWallet className="text-white text-sm" />
              </div>
              <h1 className="text-xl font-bold text-white">Digital Wallet</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center border border-gray-700">
                <FaShieldAlt className="text-green-500" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            <div className="text-right">
              <div className="px-3 py-1 bg-red-500/10 border border-red-500/30 rounded-lg">
              </div>
            </div>
          </div>
        </div>

        {/* Total Balance */}
        <div className="relative overflow-hidden rounded-2xl bg-linear-to-r from-gray-800 via-gray-900 to-gray-800 p-6 border border-gray-700 shadow-2xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-green-500/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-400 text-sm font-medium">Total Balance</p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-green-400 font-medium">Live</span>
              </div>
            </div>
            
            <div className="flex items-baseline gap-3 mb-2">
              <h2 className="text-4xl font-bold text-white">$12,428.65</h2>
              <div className="flex items-center gap-1 px-3 py-1 bg-green-500/20 rounded-full">
                <FaArrowUp className="text-green-400 text-xs" />
                <span className="text-green-400 text-sm font-semibold">+$240.50 (2.4%)</span>
              </div>
            </div>
            
            <p className="text-gray-500 text-sm">≈ 0.231 BTC • Updated just now</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between mt-8 px-2 z-30">
          {actionButtons.map((btn) => (
            <button
              key={btn.id}
              onClick={() => handleActionClick(btn.id)}
              className="flex flex-col items-center group"
            >
              <div className={`relative w-14 h-14 rounded-2xl bg-linear-to-br ${btn.color} flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-transform duration-200`}>
                <span className="text-white text-xl">{btn.icon}</span>
                <div className="absolute inset-0 rounded-2xl border border-white/20"></div>
              </div>
              <span className="text-gray-300 text-xs font-medium group-hover:text-white transition">{btn.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="mx-6 mt-4 p-4 bg-red-500/10 border border-red-500/30 rounded-2xl animate-pulse">
          <p className="text-red-400 text-sm text-center font-medium">{error}</p>
        </div>
      )}

      {/* Main Content */}
      <div className="p-6">
        {/* Main Tabs */}
        <div className="flex space-x-2 bg-gray-800/50 p-1 rounded-2xl mb-8 border border-gray-700">
          {mainTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-3 px-4 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id 
                  ? 'bg-linear-to-r from-green-500/20 to-emerald-600/20 text-green-400 border border-green-500/30 shadow-lg shadow-green-500/10' 
                  : 'text-gray-400 hover:text-gray-300 hover:bg-gray-700/50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Assets Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-white">Your Assets</h3>
            <button className="text-green-500 text-sm font-medium hover:text-green-400 transition">
              View All
            </button>
          </div>
          
          <div className="space-y-3">
            {cryptoAssets.map((asset) => (
              <div key={asset.symbol} className="group bg-gray-800/50 hover:bg-gray-800 p-4 rounded-2xl border border-gray-700 hover:border-green-500/30 transition-all duration-300 cursor-pointer">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className={`w-12 h-12 ${asset.bg} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}>
                      <span className="text-2xl">{asset.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{asset.name}</h4>
                      <p className="text-gray-400 text-sm">{asset.symbol}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-white">{asset.price}</p>
                    <div className={`inline-flex items-center px-3 py-1 rounded-full ${asset.trend === 'up' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                      {asset.trend === 'up' ? 
                        <FaArrowUp className="mr-1 text-xs" /> : 
                        <FaArrowDown className="mr-1 text-xs" />
                      }
                      <span className="text-sm font-medium">{asset.change}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Movers Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-white">Top Movers</h3>
            <button className="text-green-500 text-sm font-medium hover:text-green-400 transition">
              See All
            </button>
          </div>
          
          {/* Mover Tabs */}
          <div className="flex space-x-2 mb-6 overflow-x-auto pb-2">
            {moverTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveMoverTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                  activeMoverTab === tab.id 
                    ? 'bg-linear-to-r from-green-500 to-emerald-600 text-white shadow-lg shadow-green-500/20' 
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-300'
                }`}
              >
                <span className="text-base">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Trending Assets */}
          <div className="space-y-3 mb-8">
            {trendingAssets.map((asset) => (
              <div key={asset.symbol} className="bg-gray-800/50 p-4 rounded-2xl border border-gray-700">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold text-white">{asset.name}</h4>
                    <div className="flex items-center gap-4 mt-1">
                      <span className="text-gray-400 text-sm">{asset.symbol}</span>
                      <span className="text-green-400 text-sm font-medium">{asset.change}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-white">{asset.price}</p>
                    <p className="text-gray-400 text-sm">Vol: {asset.volume}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Add Funds CTA */}
          <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-gray-800 via-gray-900 to-gray-800 p-8 border border-gray-700">
            <div className="absolute top-0 right-0 w-48 h-48 bg-linear-to-br from-green-500/5 to-transparent rounded-full -translate-y-24 translate-x-24"></div>
            
            <div className="relative text-center">
              <div className="w-16 h-16 bg-linear-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-500/20">
                <GiTakeMyMoney className="text-white text-2xl" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Fund Your Wallet</h4>
              <p className="text-gray-400 mb-6">Start investing in crypto with as little as $10</p>
              <button
                onClick={() => handleActionClick('fund')}
                className="inline-flex items-center gap-2 bg-linear-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-700 transition shadow-lg shadow-green-500/20 hover:shadow-green-500/30"
              >
                <FaPlus />
                Add Funds
              </button>
            </div>
          </div>
        </div>

        {/* Earn Section */}
        <div className="relative overflow-hidden rounded-2xl bg-linear-to-r from-purple-900/30 via-gray-800 to-purple-900/30 p-6 border border-purple-500/30 mb-20">
          <div className="absolute top-0 left-0 w-32 h-32 bg-linear-to-br from-purple-500/10 to-transparent rounded-full -translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-linear-to-br from-pink-500/10 to-transparent rounded-full translate-x-16 translate-y-16"></div>
          
          <div className="relative z-10">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <FaGift className="text-purple-400 text-xl" />
                  <h4 className="text-xl font-bold text-white">Earn Rewards</h4>
                </div>
                <p className="text-gray-300 mb-2">Stake your crypto and earn up to</p>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">12.5% APY</span>
                  <span className="text-green-400 text-sm font-medium">+2.5% bonus</span>
                </div>
                <button
                  onClick={() => handleActionClick('earn')}
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-5 py-2.5 rounded-xl font-semibold border border-white/20 transition"
                >
                  Start Earning
                </button>
              </div>
              <div className="text-5xl text-purple-400/30">
                <MdOutlineAccountBalanceWallet />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-gray-900/95 backdrop-blur-xl border-t border-gray-800 z-20">
        <div className="flex justify-around py-4">
          {navigationTabs.map((tab) => (
            <button
              key={tab.id}
              className="flex flex-col items-center group"
            >
              <div className={`relative p-3 rounded-2xl mb-1 transition-all duration-300 ${
                tab.active 
                  ? 'bg-linear-to-br from-green-500 to-emerald-600 text-white shadow-lg shadow-green-500/20' 
                  : 'text-gray-500 group-hover:text-gray-300'
              }`}>
                <span className="text-xl">{tab.icon}</span>
                {tab.active && (
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                )}
              </div>
              <span className={`text-xs font-medium transition ${
                tab.active ? 'text-green-400' : 'text-gray-500 group-hover:text-gray-400'
              }`}>
                {tab.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Withdraw Modal */}
      <WithdrawModal
        isOpen={showWithdrawModal}
        onClose={() => setShowWithdrawModal(false)}
      />
    </div>
  );
};

export default Dashboard;