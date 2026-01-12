import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaWallet,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validCredentials = {
    email: "Zulumax834@gmail.com",
    password: "keeper304",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    if (
      email === validCredentials.email &&
      password === validCredentials.password
    ) {
      navigate("/verify");
    } else {
      setError("Invalid credentials. Please try again");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-6 flex flex-col justify-center">
      <div className="max-w-md w-full mx-auto">
        {/* App Logo/Branding */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mb-6 shadow-lg shadow-green-500/20">
            <FaWallet className="text-white text-3xl" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Trust Wallet
          </h1>
          <p className="text-gray-400">Secure Digital Wallet Platform</p>
          <div className="inline-block mt-4 px-4 py-1 bg-gray-800 rounded-full"></div>
        </div>

        {/* Login Card */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 shadow-xl">
          <h2 className="text-2xl font-bold text-white mb-2">Welcome Back</h2>
          <p className="text-gray-400 mb-8">
            Sign in to access your wallet
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                <div className="flex items-center">
                  <FaEnvelope className="mr-2 text-green-500" />
                  Email Address
                </div>
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-900/80 border border-gray-700 text-white pl-12 pr-4 py-4 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all placeholder-gray-500"
                  placeholder="wallet@trustwallet.com"
                  required
                />
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FaEnvelope className="text-gray-500" />
                </div>
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                <div className="flex items-center">
                  <FaLock className="mr-2 text-green-500" />
                  Password
                </div>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-gray-900/80 border border-gray-700 text-white pl-12 pr-12 py-4 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all placeholder-gray-500"
                  placeholder="••••••••••"
                  required
                />
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FaLock className="text-gray-500" />
                </div>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center"
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-gray-500 hover:text-gray-300 transition" />
                  ) : (
                    <FaEye className="text-gray-500 hover:text-gray-300 transition" />
                  )}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-4 bg-red-900/20 border border-red-800 rounded-xl animate-pulse">
                <p className="text-red-400 text-sm">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 px-4 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-700 transition duration-200 shadow-lg shadow-green-500/20 hover:shadow-green-500/30 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Sign In
            </button>
          </form>

          {/* Footer Info */}
          <div className="mt-8 pt-6 border-t border-gray-800">
            <div className="text-center space-y-3">
              <div className="flex items-center justify-center space-x-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-xs text-gray-500">
                    Secure Connection
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <span className="text-xs text-gray-500">Read-Only Mode</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            Need help?{" "}
            <span className="text-green-500 hover:text-green-400 cursor-pointer">
              Contact Support
            </span>
          </p>
          <div className="flex items-center justify-center mt-4 space-x-2 text-gray-600">
            <span className="text-xs">© 2024 Trust Wallet</span>
            <span className="text-xs">•</span>
            <span className="text-xs">v1.0.0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
