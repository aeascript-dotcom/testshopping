"use client";

import { useState, useEffect } from "react";
import { TrendingDown } from "lucide-react";

interface PriceBreakdown {
  retail: number;
  contractor: number;
  factory: number;
}

export default function SavingsCalculator({ 
  prices = { retail: 1590, contractor: 890, factory: 990 } 
}: { 
  prices?: PriceBreakdown 
}) {
  const [animatedSavings, setAnimatedSavings] = useState(0);
  const savings = prices.retail - prices.factory;
  const savingsPercent = Math.round((savings / prices.retail) * 100);

  useEffect(() => {
    // Animated counter effect
    let start = 0;
    const end = savings;
    const duration = 1000; // 1 second
    const increment = end / (duration / 16); // 60 FPS

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setAnimatedSavings(end);
        clearInterval(timer);
      } else {
        setAnimatedSavings(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [savings]);

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-900">ความโปร่งใสราคา</h3>
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
          <TrendingDown className="h-6 w-6 text-green-600" />
        </div>
      </div>

      <div className="space-y-4">
        {/* Retail Price */}
        <div className="flex items-center justify-between pb-3 border-b border-gray-100">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🏪</span>
            <span className="text-gray-600">ร้านค้าทั่วไป:</span>
          </div>
          <span className="text-lg font-semibold text-gray-400 line-through">
            ฿{prices.retail.toLocaleString()}
          </span>
        </div>

        {/* Contractor Price */}
        <div className="flex items-center justify-between pb-3 border-b border-gray-100">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">👷</span>
            <span className="text-gray-600">ราคาช่าง:</span>
          </div>
          <span className="text-lg font-semibold text-gray-500">
            ฿{prices.contractor.toLocaleString()}
          </span>
        </div>

        {/* Factory Price */}
        <div className="flex items-center justify-between pb-3 border-b-2 border-factory-orange">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🏭</span>
            <span className="text-gray-900 font-semibold">ราคาโรงงานของเรา:</span>
          </div>
          <span className="text-2xl font-bold text-factory-orange">
            ฿{prices.factory.toLocaleString()}
          </span>
        </div>

        {/* Savings Highlight */}
        <div className="bg-gradient-to-r from-factory-orange/10 to-amber-500/10 rounded-xl p-6 mt-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Your Savings:</p>
              <p className="text-4xl font-bold text-factory-orange animate-counter">
                ฿{animatedSavings.toLocaleString()}
              </p>
            </div>
            <div className="text-right">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-factory-orange rounded-full text-white">
                <span className="text-2xl font-bold">{savingsPercent}%</span>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-3">
            ✨ Compared to typical retail pricing
          </p>
        </div>

        {/* Why We're Cheaper */}
        <div className="bg-gray-50 rounded-lg p-4 mt-4">
          <p className="text-xs font-semibold text-gray-700 mb-2">💡 Why We're Cheaper:</p>
          <ul className="text-xs text-gray-600 space-y-1">
            <li>✓ No retail store overhead</li>
            <li>✓ No distributor markup</li>
            <li>✓ No sales agent commission</li>
            <li>✓ Direct from our factory to you</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
