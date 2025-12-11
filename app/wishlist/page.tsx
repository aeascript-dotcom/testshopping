'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, ShoppingCart } from 'lucide-react';
import { getWishlist, removeFromWishlist, addToCart } from '@/lib/mockApi';
import { mockProducts } from '@/lib/mockData';

export default function WishlistPage() {
  const [wishlistIds, setWishlistIds] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadWishlist();
  }, []);

  const loadWishlist = () => {
    const ids = getWishlist();
    setWishlistIds(ids);
    setIsLoading(false);
  };

  const handleRemove = (productId: number) => {
    removeFromWishlist(productId);
    loadWishlist();
  };

  const handleAddToCart = (productId: number) => {
    const result = addToCart(productId, 1);
    if (result.success) {
      alert('เพิ่มสินค้าลงตะกร้าแล้ว!');
    }
  };

  const wishlistProducts = mockProducts.filter(p => wishlistIds.includes(p.id));

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto mb-4"></div>
          <p className="text-gray-600">กำลังโหลด...</p>
        </div>
      </div>
    );
  }

  if (wishlistProducts.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md">
          <Heart className="w-24 h-24 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">รายการโปรดว่างเปล่า</h2>
          <p className="text-gray-600 mb-6">
            คุณยังไม่มีสินค้าในรายการโปรด เริ่มเพิ่มสินค้าที่คุณชอบเลย!
          </p>
          <Link
            href="/products"
            className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
          >
            เลือกซื้อสินค้า
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            รายการโปรด
          </h1>
          <p className="text-gray-600">
            คุณมีสินค้า {wishlistProducts.length} รายการในรายการโปรด
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlistProducts.map((product) => {
            const savings = product.retailPrice - product.factoryPrice;
            const savingsPercent = Math.round((savings / product.retailPrice) * 100);

            return (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden group hover:shadow-lg transition-shadow relative"
              >
                {/* Remove Button */}
                <button
                  onClick={() => handleRemove(product.id)}
                  className="absolute top-3 right-3 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
                  aria-label="ลบออกจากรายการโปรด"
                >
                  <Heart className="w-5 h-5 text-red-600 fill-red-600" />
                </button>

                {/* Product Image */}
                <div className="relative aspect-square bg-gray-100">
                  <Link href={`/products/${product.id}`}>
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </Link>

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {product.onClearance && (
                      <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold">
                        🔥 Sale
                      </span>
                    )}
                    {product.hasPool && (
                      <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">
                        💧 Pool
                      </span>
                    )}
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <Link
                    href={`/products/${product.id}`}
                    className="font-semibold text-gray-900 hover:text-orange-600 line-clamp-2 mb-2 block"
                  >
                    {product.name}
                  </Link>

                  {/* Pricing */}
                  <div className="mb-3">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-xl font-bold text-orange-600">
                        ฿{product.factoryPrice.toLocaleString()}
                      </span>
                      <span className="text-sm text-gray-400 line-through">
                        ฿{product.retailPrice.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-sm text-green-600 font-semibold">
                      ประหยัด {savingsPercent}%
                    </p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    <span className="text-yellow-400">★</span>
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className="text-sm text-gray-500">({product.reviewCount})</span>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleAddToCart(product.id)}
                      className="flex-1 flex items-center justify-center gap-2 bg-orange-600 text-white py-2 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <span className="text-sm">เพิ่มลงตะกร้า</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Share Wishlist */}
        <div className="mt-12 bg-white rounded-lg shadow-sm p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            แชร์รายการโปรดของคุณ
          </h2>
          <p className="text-gray-600 mb-6">
            คัดลอกลิงก์นี้เพื่อแชร์รายการโปรดให้เพื่อนหรือครอบครัว
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="text"
              value={`${window.location.origin}/wishlist?shared=${btoa(wishlistIds.join(','))}`}
              readOnly
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
            />
            <button
              onClick={() => {
                navigator.clipboard.writeText(
                  `${window.location.origin}/wishlist?shared=${btoa(wishlistIds.join(','))}`
                );
                alert('คัดลอกลิงก์แล้ว!');
              }}
              className="bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
            >
              คัดลอก
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
