'use client';

import { ShoppingCart } from 'lucide-react';
import { addToCart } from '@/lib/mockApi';
import { useState } from 'react';

interface Props {
  productId: number;
  isPool?: boolean;
}

export default function AddToCartButton({ productId, isPool = false }: Props) {
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    
    const result = addToCart(productId, quantity, isPool);
    
    setTimeout(() => {
      setIsAdding(false);
      if (result.success) {
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 2000);
      }
    }, 300);
  };

  return (
    <div className="flex items-center gap-3 flex-1">
      {/* Quantity Selector */}
      <div className="flex items-center border border-gray-300 rounded-lg">
        <button
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
          className="px-3 py-2 hover:bg-gray-100"
          aria-label="ลดจำนวน"
        >
          -
        </button>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
          className="w-16 text-center py-2 border-x border-gray-300"
          min="1"
        />
        <button
          onClick={() => setQuantity(quantity + 1)}
          className="px-3 py-2 hover:bg-gray-100"
          aria-label="เพิ่มจำนวน"
        >
          +
        </button>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        disabled={isAdding}
        className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
          showSuccess
            ? 'bg-green-600 text-white'
            : 'bg-orange-600 hover:bg-orange-700 text-white'
        } disabled:opacity-50`}
      >
        <ShoppingCart className="w-5 h-5" />
        <span>
          {isAdding ? 'กำลังเพิ่ม...' : showSuccess ? 'เพิ่มแล้ว ✓' : 'เพิ่มลงตะกร้า'}
        </span>
      </button>
    </div>
  );
}
