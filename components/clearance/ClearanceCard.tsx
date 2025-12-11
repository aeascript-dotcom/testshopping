"use client";

import { useState, useEffect } from "react";
import { Clock, TrendingDown, AlertCircle } from "lucide-react";
import Image from "next/image";

interface ClearanceProduct {
  id: number;
  name: string;
  image: string;
  originalPrice: number;
  clearancePrice: number;
  stock: number;
  reason: string;
  reasonType: "surplus" | "design-change" | "project-surplus";
  endDate: Date;
}

export default function ClearanceCard({ product }: { product: ClearanceProduct }) {
  const [timeLeft, setTimeLeft] = useState("");
  
  const savings = product.originalPrice - product.clearancePrice;
  const savingsPercent = Math.round((savings / product.originalPrice) * 100);
  
  const reasonConfig = {
    surplus: { icon: "📦", color: "bg-blue-100 text-blue-700", border: "border-blue-200" },
    "design-change": { icon: "🎨", color: "bg-purple-100 text-purple-700", border: "border-purple-200" },
    "project-surplus": { icon: "🏨", color: "bg-green-100 text-green-700", border: "border-green-200" },
  };

  const config = reasonConfig[product.reasonType];

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = product.endDate.getTime() - now;

      if (distance < 0) {
        setTimeLeft("Ended");
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      
      setTimeLeft(`${days}d ${hours}h`);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [product.endDate]);

  return (
    <div className="product-card bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:border-factory-orange transition-all">
      {/* Image */}
      <div className="relative h-56 bg-gray-100 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Clearance Badge */}
        <div className="absolute top-3 left-3">
          <div className="bg-factory-orange text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse-slow">
            CLEARANCE
          </div>
        </div>

        {/* Discount Badge */}
        <div className="absolute top-3 right-3">
          <div className="bg-black/80 text-white text-lg font-bold px-3 py-2 rounded-lg">
            -{savingsPercent}%
          </div>
        </div>

        {/* Stock Warning */}
        {product.stock < 10 && (
          <div className="absolute bottom-3 left-3">
            <div className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded flex items-center space-x-1">
              <AlertCircle className="h-3 w-3" />
              <span>Only {product.stock} left!</span>
            </div>
          </div>
        )}

        {/* Timer */}
        <div className="absolute bottom-3 right-3">
          <div className="bg-white/90 backdrop-blur text-gray-900 text-xs font-semibold px-2 py-1 rounded flex items-center space-x-1">
            <Clock className="h-3 w-3 text-factory-orange" />
            <span>{timeLeft}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Reason Badge */}
        <div className={`inline-flex items-center space-x-1 ${config.color} px-3 py-1 rounded-full text-xs font-semibold mb-3 border ${config.border}`}>
          <span>{config.icon}</span>
          <span>{product.reason}</span>
        </div>

        {/* Name */}
        <h3 className="font-bold text-gray-900 mb-3 text-lg line-clamp-2 h-14">
          {product.name}
        </h3>

        {/* Pricing */}
        <div className="mb-4">
          <div className="flex items-baseline space-x-2 mb-1">
            <span className="text-base text-gray-400 line-through">
              ฿{product.originalPrice.toLocaleString()}
            </span>
            <span className="text-2xl font-bold text-factory-orange">
              ฿{product.clearancePrice.toLocaleString()}
            </span>
          </div>
          <div className="flex items-center space-x-1 text-green-600 text-sm font-semibold">
            <TrendingDown className="h-4 w-4" />
            <span>Save ฿{savings.toLocaleString()}</span>
          </div>
        </div>

        {/* Stock Bar */}
        <div className="mb-4">
          <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
            <span>Stock:</span>
            <span className="font-semibold">{product.stock} units available</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div
              className={`h-full rounded-full ${
                product.stock < 10 ? 'bg-red-500' : 'bg-green-500'
              }`}
              style={{ width: `${Math.min((product.stock / 30) * 100, 100)}%` }}
            />
          </div>
        </div>

        {/* Action Button */}
        <button className="w-full px-4 py-3 bg-factory-orange text-white font-semibold rounded-lg hover:bg-factory-orange/90 transition-colors shadow-md">
          Add to Cart - Limited Time!
        </button>
      </div>
    </div>
  );
}
