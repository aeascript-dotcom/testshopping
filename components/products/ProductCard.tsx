"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart, Users, TrendingDown, Star } from "lucide-react";

interface Product {
  id: number;
  name: string;
  image: string;
  retailPrice: number;
  contractorPrice: number;
  factoryPrice: number;
  category: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  hasPool?: boolean;
  poolPrice?: number;
  onClearance?: boolean;
  clearancePrice?: number;
}

export default function ProductCard({ product }: { product: Product }) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  const displayPrice = product.onClearance ? product.clearancePrice! : product.factoryPrice;
  const savings = product.retailPrice - displayPrice;
  const savingsPercent = Math.round((savings / product.retailPrice) * 100);

  return (
    <div className="product-card bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:border-factory-orange transition-all">
      {/* Image */}
      <Link href={`/products/${product.id}`}>
        <div className="relative h-56 bg-gray-100 overflow-hidden cursor-pointer">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col space-y-2">
            {product.hasPool && (
              <div className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center space-x-1">
                <Users className="h-3 w-3" />
                <span>POOL</span>
              </div>
            )}
            {product.onClearance && (
              <div className="bg-factory-orange text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse-slow">
                CLEARANCE
              </div>
            )}
            {savingsPercent > 0 && (
              <div className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                -{savingsPercent}%
              </div>
            )}
          </div>

          {/* Wishlist Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsWishlisted(!isWishlisted);
            }}
            className="absolute top-3 right-3 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center hover:bg-white transition-colors"
          >
            <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-700'}`} />
          </button>
        </div>
      </Link>

      {/* Content */}
      <div className="p-4">
        {/* Category */}
        <p className="text-xs text-gray-500 mb-1">{product.category}</p>
        
        {/* Name */}
        <Link href={`/products/${product.id}`}>
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 h-12 hover:text-factory-orange cursor-pointer">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex text-yellow-400 mr-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-600">
            {product.rating} ({product.reviews})
          </span>
        </div>

        {/* Pricing - Transparent Display */}
        <div className="bg-gray-50 rounded-lg p-3 mb-3 space-y-1 text-xs">
          <div className="flex items-center justify-between text-gray-400">
            <span>🏪 ร้านค้า:</span>
            <span className="line-through">฿{product.retailPrice.toLocaleString()}</span>
          </div>
          <div className="flex items-center justify-between text-gray-500">
            <span>👷 ช่าง:</span>
            <span>฿{product.contractorPrice.toLocaleString()}</span>
          </div>
          {product.hasPool && product.poolPrice && (
            <div className="flex items-center justify-between text-blue-600 font-semibold">
              <span className="flex items-center">
                <Users className="h-3 w-3 mr-1" /> Pool:
              </span>
              <span>฿{product.poolPrice.toLocaleString()}</span>
            </div>
          )}
          <div className="flex items-center justify-between text-factory-orange font-bold text-sm pt-1 border-t border-gray-200">
            <span>🏭 ราคาโรงงาน:</span>
            <span>฿{displayPrice.toLocaleString()}</span>
          </div>
        </div>

        {/* Savings Highlight */}
        <div className="flex items-center space-x-1 text-green-600 text-sm font-semibold mb-4">
          <TrendingDown className="h-4 w-4" />
          <span>ประหยัด ฿{savings.toLocaleString()} ({savingsPercent}%)</span>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-2">
          {product.hasPool ? (
            <>
              <button className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                <Users className="h-4 w-4 mr-1" />
                เข้า Pool
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-semibold rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center">
                <ShoppingCart className="h-4 w-4" />
              </button>
            </>
          ) : (
            <button className="col-span-2 px-4 py-2 bg-factory-orange text-white text-sm font-semibold rounded-lg hover:bg-factory-orange/90 transition-colors flex items-center justify-center">
              <ShoppingCart className="h-4 w-4 mr-2" />
              เพิ่มลงตะกร้า
            </button>
          )}
        </div>

        {/* Stock Status */}
        <div className="mt-3 text-center">
          {product.inStock ? (
            <span className="text-xs text-green-600 font-medium">✓ มีสินค้า</span>
          ) : (
            <span className="text-xs text-red-600 font-medium">สินค้าหมด</span>
          )}
        </div>
      </div>
    </div>
  );
}
