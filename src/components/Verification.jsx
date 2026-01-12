import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShieldAlt, FaArrowLeft, FaClock, FaEnvelope, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Verification = () => {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');
  const [resendTimer, setResendTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const inputRefs = useRef([]);

  // Predefined verification code
  const verificationCode = '832666';

  // Timer for resend code
  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [resendTimer]);

  const handleChange = (index, value) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // Auto-focus next input
      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }

      // Auto verify if all digits are entered
      if (newCode.every(digit => digit !== '') && newCode.join('').length === 6) {
        setTimeout(() => handleSubmit(newCode.join('')), 300);
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      // Move to previous input on backspace if current is empty
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (enteredCode = code.join('')) => {
    setError('');
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      if (enteredCode.length === 6) {
        if (enteredCode === verificationCode) {
          navigate('/dashboard');
        } else {
          setError('Invalid verification code.');
          setIsLoading(false);
        }
      } else {
        setError('Please enter the complete 6-digit code');
        setIsLoading(false);
      }
    }, 1000);
  };

  const handleResendCode = () => {
    if (canResend) {
      setResendTimer(60);
      setCanResend(false);
      setError('');
      // In a real app, this would trigger an API call
    }
  };

  const handleAutoFill = () => {
    const digits = verificationCode.split('');
    setCode(digits);
    
    // Focus on last input after auto-fill
    setTimeout(() => {
      inputRefs.current[5]?.focus();
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-6 flex flex-col justify-center">
      <div className="max-w-md w-full mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <Link to="/login" className="inline-flex items-center text-gray-400 hover:text-green-500 transition group">
            <FaArrowLeft className="mr-3 transition-transform group-hover:-translate-x-1" />
            <span className="font-medium">Back to Login</span>
          </Link>
        </div>

        {/* Main Card */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 shadow-xl">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="relative inline-block mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/20">
                <FaShieldAlt className="text-white text-3xl" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center border-4 border-gray-900">
                <FaCheckCircle className="text-white text-xs" />
              </div>
            </div>
            
            <h1 className="text-2xl font-bold text-white mb-3">Secure Verification</h1>
            <p className="text-gray-400 mb-2">Enter the verification code sent to</p>
            <div className="inline-flex items-center bg-gray-900/50 px-4 py-2 rounded-lg border border-gray-700">
              <FaEnvelope className="text-green-500 mr-2" />
              <code className="text-green-400 font-medium">Zulumax834@gmail.com</code>
            </div>
          </div>

          {/* Code Inputs */}
          <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-300 mb-4 text-center">
                6-Digit Verification Code
              </label>
              
              <div className="flex justify-center space-x-3 mb-6">
                {code.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => inputRefs.current[index] = el}
                    id={`code-${index}`}
                    type="text"
                    inputMode="numeric"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="w-14 h-14 text-center text-2xl font-bold bg-gray-900 border-2 border-gray-700 text-white rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
                    autoFocus={index === 0}
                  />
                ))}
              </div>

            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-900/20 border border-red-800 rounded-xl animate-pulse">
                <p className="text-red-400 text-sm text-center">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading || code.join('').length !== 6}
              className={`w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 px-4 rounded-xl font-semibold transition duration-200 shadow-lg ${
                isLoading || code.join('').length !== 6
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:from-green-600 hover:to-emerald-700 shadow-green-500/20 hover:shadow-green-500/30'
              }`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                  Verifying...
                </div>
              ) : (
                'Verify & Continue'
              )}
            </button>
          </form>

          {/* Timer and Resend */}
          <div className="mt-8 pt-8 border-t border-gray-700">
            <div className="text-center">
              <p className="text-gray-400 mb-4">
                Didn't receive the code?
              </p>
              
              {canResend ? (
                <button
                  onClick={handleResendCode}
                  className="text-green-500 hover:text-green-400 font-medium transition flex items-center justify-center mx-auto"
                >
                  <FaEnvelope className="mr-2" />
                  Resend Verification Code
                </button>
              ) : (
                <div className="flex items-center justify-center text-gray-500">
                  <FaClock className="mr-2 animate-pulse" />
                  <span>Resend code in </span>
                  <span className="ml-2 font-mono font-bold text-green-500">
                    00:{resendTimer.toString().padStart(2, '0')}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Security Info */}
        <div className="mt-8 p-4 bg-gray-900/30 rounded-xl border border-gray-800">
          <div className="flex items-start">
            <div className="text-green-500 mr-3 mt-1">
              <FaShieldAlt />
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-300 mb-1">Security Notice</h4>
              <p className="text-xs text-gray-500">
                This verification code expires in 10 minutes. Never share your verification code with anyone. 
                Trust Wallet will never ask for your code via phone or email.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-xs text-gray-600">
            © 2024 Trust Wallet • Secure Authentication System
          </p>
        </div>
      </div>
    </div>
  );
};

export default Verification;