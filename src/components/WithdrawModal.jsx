import React, { useState } from 'react';
import { FaTimes, FaUser, FaBuilding, FaHashtag, FaExclamationTriangle, FaShieldAlt } from 'react-icons/fa';
import { MdAttachMoney } from 'react-icons/md';

const WithdrawModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    bankName: '',
    routingNumber: '',
  });
  const [error, setError] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setIsProcessing(true);

    // Simulate processing
    setTimeout(() => {
      // Show service fee error as required
      setError('⚠️ Service fee of $500 required to proceed.');
      setIsProcessing(false);
      
      // Shake animation for error
      const errorDiv = document.querySelector('.error-message');
      if (errorDiv) {
        errorDiv.classList.add('animate-shake');
        setTimeout(() => errorDiv.classList.remove('animate-shake'), 500);
      }
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl w-full max-w-md border border-gray-800 shadow-2xl overflow-hidden animate-slideUp">
        {/* Header */}
        <div className="relative p-6 border-b border-gray-800">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <MdAttachMoney className="text-white text-lg" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Withdraw Funds</h3>
                <p className="text-gray-400 text-sm">Transfer to your bank account</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white hover:bg-gray-800 w-8 h-8 rounded-lg flex items-center justify-center transition"
            >
              <FaTimes />
            </button>
          </div>
          
          {/* Balance Preview */}
          <div className="mt-6 p-4 bg-gray-800/50 rounded-xl border border-gray-700">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-400 text-sm">Available Balance</p>
                <p className="text-2xl font-bold text-white">$10,428.65</p>
              </div>
              <div className="text-right">
                <p className="text-gray-400 text-sm">Minimum Withdrawal</p>
                <p className="text-lg font-bold text-green-400">$100.00</p>
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
                <FaUser className="mr-2 text-green-500" />
                Full Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full bg-gray-900/50 border border-gray-700 text-white pl-12 pr-4 py-4 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all placeholder-gray-500"
                  placeholder="Enter your full name"
                  required
                />
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FaUser className="text-gray-500" />
                </div>
              </div>
            </div>

            {/* Bank Name */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3 flex items-center">
                <FaBuilding className="mr-2 text-green-500" />
                Bank Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="bankName"
                  value={formData.bankName}
                  onChange={handleChange}
                  className="w-full bg-gray-900/50 border border-gray-700 text-white pl-12 pr-4 py-4 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all placeholder-gray-500"
                  placeholder="e.g., Chase Bank, Bank of America"
                  required
                />
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FaBuilding className="text-gray-500" />
                </div>
              </div>
            </div>

            {/* Routing Number */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3 flex items-center">
                <FaHashtag className="mr-2 text-green-500" />
                Routing Number
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="routingNumber"
                  value={formData.routingNumber}
                  onChange={handleChange}
                  className="w-full bg-gray-900/50 border border-gray-700 text-white pl-12 pr-4 py-4 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all placeholder-gray-500"
                  placeholder="9-digit routing number"
                  required
                  maxLength="9"
                  pattern="\d{9}"
                  title="Please enter a valid 9-digit routing number"
                />
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FaHashtag className="text-gray-500" />
                </div>
              </div>
              <p className="text-gray-500 text-xs mt-2 ml-1">Your bank's 9-digit routing number</p>
            </div>

            {/* Amount to Withdraw */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Amount to Withdraw
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <span className="text-gray-500 text-lg">$</span>
                </div>
                <input
                  type="number"
                  min="100"
                  max="10000"
                  step="0.01"
                  defaultValue="1000"
                  className="w-full bg-gray-900/50 border border-gray-700 text-white pl-12 pr-24 py-4 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
                  required
                />
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                  <button
                    type="button"
                    className="text-green-500 hover:text-green-400 text-sm font-medium"
                    onClick={() => {
                      const input = document.querySelector('input[type="number"]');
                      input.value = '10428.65';
                    }}
                  >
                    Max
                  </button>
                </div>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>Min: $100</span>
                <span>Max: $10,000</span>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="error-message p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                <div className="flex items-start">
                  <FaExclamationTriangle className="text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-red-400 font-medium mb-1">Service Fee Required</p>
                    <p className="text-red-400/80 text-sm">A processing fee of $500 is required to complete this withdrawal.</p>
                    <div className="mt-2 p-2 bg-red-500/5 rounded-lg">
                      <p className="text-red-300 text-sm font-mono">
                        Total Withdrawal: $1,000.00 + $500.00 fee = $1,500.00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex space-x-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-4 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-xl font-semibold border border-gray-700 hover:border-gray-600 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isProcessing}
                className={`flex-1 px-4 py-4 rounded-xl font-semibold transition flex items-center justify-center ${
                  isProcessing
                    ? 'bg-gray-700 cursor-not-allowed'
                    : 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-lg shadow-green-500/20'
                }`}
              >
                {isProcessing ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                    Processing...
                  </>
                ) : (
                  'Proceed Withdrawal'
                )}
              </button>
            </div>
          </div>
        </form>

        {/* Security Info */}
        <div className="p-6 bg-gray-900/50 border-t border-gray-800">
          <div className="flex items-start">
            <div className="text-green-500 mr-3 mt-1">
              <FaShieldAlt />
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-300 mb-2">Secure Withdrawal Notice</h4>
              <div className="space-y-2">
                <p className="text-xs text-gray-500">
                  • Withdrawals typically process within 3-5 business days
                </p>
                <p className="text-xs text-gray-500">
                  • All transactions are secured with bank-level encryption
                </p>
                <p className="text-xs text-gray-500">
                  • You will receive email confirmation once processed
                </p>
                <div className="pt-2 mt-2 border-t border-gray-800">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom animations to index.css */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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