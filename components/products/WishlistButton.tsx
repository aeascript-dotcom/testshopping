'use client';

import { Heart } from 'lucide-react';
import { addToWishlist, removeFromWishlist, isInWishlist } from '@/lib/mockApi';
import { useState, useEffect } from 'react';

interface Props {
  productId: number;
}

export default function WishlistButton({ productId }: Props) {
  const [inWishlist, setInWishlist] = useState(false);

  useEffect(() => {
    setInWishlist(isInWishlist(productId));
  }, [productId]);

  const handleToggle = () => {
    if (inWishlist) {
      removeFromWishlist(productId);
      setInWishlist(false);
    } else {
      addToWishlist(productId);
      setInWishlist(true);
    }
  };

  return (
    <button
      onClick={handleToggle}
      className={`p-3 rounded-lg border-2 transition-all ${
        inWishlist
          ? 'border-red-500 bg-red-50 text-red-600'
          : 'border-gray-300 hover:border-red-500 hover:bg-red-50'
      }`}
      aria-label={inWishlist ? 'ลบออกจากรายการโปรด' : 'เพิ่มลงรายการโปรด'}
    >
      <Heart className={`w-6 h-6 ${inWishlist ? 'fill-red-600' : ''}`} />
    </button>
  );
}
