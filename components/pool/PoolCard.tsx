"use client";

import { useState } from "react";
import { Users, Clock, TrendingDown } from "lucide-react";
import Image from "next/image";

interface Pool {
  id: number;
  name: string;
  image: string;
  regularPrice: number;
  poolPrice: number;
  currentParticipants: number;
  targetParticipants: number;
  timeLeft: string;
  category: string;
}

export default function PoolCard({ pool }: { pool: Pool }) {
  const [isHovered, setIsHovered] = useState(false);
  
  const progress = (pool.currentParticipants / pool.targetParticipants) * 100;
  const savings = pool.regularPrice - pool.poolPrice;
  const savingsPercent = Math.round((savings / pool.regularPrice) * 100);
  const remaining = pool.targetParticipants - pool.currentParticipants;

  // Generate mock avatars
  const avatars = Array.from({ length: Math.min(pool.currentParticipants, 3) }, (_, i) => i);

  return (
    <div
      className="product-card bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:border-factory-orange transition-all"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative h-48 bg-gray-100 overflow-hidden">
        <Image
          src={pool.image}
          alt={pool.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        {/* Pool Badge */}
        <div className="absolute top-3 left-3">
          <div className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center space-x-1">
            <Users className="h-3 w-3" />
            <span>POOL</span>
          </div>
        </div>
        {/* Time Badge */}
        <div className="absolute top-3 right-3">
          <div className="bg-black/70 text-white text-xs font-semibold px-2 py-1 rounded flex items-center space-x-1">
            <Clock className="h-3 w-3" />
            <span>{pool.timeLeft}</span>
          </div>
        </div>
        {/* Savings Badge */}
        <div className="absolute bottom-3 right-3">
          <div className="bg-factory-orange text-white text-sm font-bold px-3 py-1 rounded-full">
            Save {savingsPercent}%
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Category */}
        <p className="text-xs text-gray-500 mb-1">{pool.category}</p>
        
        {/* Name */}
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 h-12">
          {pool.name}
        </h3>

        {/* Pricing */}
        <div className="mb-3">
          <div className="flex items-baseline space-x-2">
            <span className="text-sm text-gray-400 line-through">
              ฿{pool.regularPrice.toLocaleString()}
            </span>
            <span className="text-xl font-bold text-factory-orange">
              ฿{pool.poolPrice.toLocaleString()}
            </span>
          </div>
          <p className="text-xs text-green-600 font-medium">
            <TrendingDown className="inline h-3 w-3" /> Save ฿{savings.toLocaleString()}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-3">
          <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
            <span>{pool.currentParticipants}/{pool.targetParticipants} joined</span>
            <span className="font-semibold text-blue-600">{remaining} more needed</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div
              className="pool-progress bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Participants Avatars */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex -space-x-2">
            {avatars.map((i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 border-2 border-white flex items-center justify-center text-white text-xs font-bold"
              >
                {String.fromCharCode(65 + i)}
              </div>
            ))}
            {pool.currentParticipants > 3 && (
              <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-gray-700 text-xs font-bold">
                +{pool.currentParticipants - 3}
              </div>
            )}
          </div>
          <Users className="h-4 w-4 text-gray-400" />
        </div>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-2">
          <button className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors">
            Join Pool
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-semibold rounded-lg hover:bg-gray-200 transition-colors">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
