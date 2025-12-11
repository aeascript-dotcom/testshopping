'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { getCart, updateCartItem, removeFromCart, Cart } from '@/lib/mockApi';

export default function CartPage() {
  const [cart, setCart] = useState<Cart | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = () => {
    const cartData = getCart();
    setCart(cartData);
    setIsLoading(false);
  };

  const handleUpdateQuantity = (productId: number, quantity: number) => {
    updateCartItem(productId, quantity);
    loadCart();
  };

  const handleRemoveItem = (productId: number) => {
    if (confirm('คุณต้องการลบสินค้านี้ออกจากตะกร้าหรือไม่?')) {
      removeFromCart(productId);
      loadCart();
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto mb-4"></div>
          <p className="text-gray-600">กำลังโหลดตะกร้า...</p>
        </div>
      </div>
    );
  }

  if (!cart || cart.items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">ตะกร้าสินค้าว่างเปล่า</h2>
          <p className="text-gray-600 mb-6">ยังไม่มีสินค้าในตะกร้า เลือกซื้อสินค้าเลย!</p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
          >
            เลือกซื้อสินค้า
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">ตะกร้าสินค้า ({cart.items.length})</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.items.map((item) => (
              <div key={item.productId} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex gap-4">
                  {/* Product Image */}
                  <div className="relative w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <Link
                          href={`/products/${item.product.id}`}
                          className="font-semibold text-gray-900 hover:text-orange-600"
                        >
                          {item.product.name}
                        </Link>
                        {item.isPool && (
                          <span className="ml-2 text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">
                            💧 ราคา Pool
                          </span>
                        )}
                      </div>
                      <button
                        onClick={() => handleRemoveItem(item.productId)}
                        className="text-red-600 hover:text-red-700 p-1"
                        aria-label="ลบสินค้า"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>

                    <p className="text-sm text-gray-600 mb-3">
                      ราคา: ฿{item.priceAtAdd.toLocaleString()} / ชิ้น
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-gray-300 rounded-lg">
                        <button
                          onClick={() => handleUpdateQuantity(item.productId, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          className="px-3 py-1 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                          aria-label="ลดจำนวน"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="px-4 py-1 border-x border-gray-300 min-w-[60px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => handleUpdateQuantity(item.productId, item.quantity + 1)}
                          className="px-3 py-1 hover:bg-gray-100"
                          aria-label="เพิ่มจำนวน"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="text-right">
                        <p className="font-bold text-lg text-orange-600">
                          ฿{(item.priceAtAdd * item.quantity).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <h2 className="text-xl font-bold text-gray-900 mb-4">สรุปคำสั่งซื้อ</h2>

              <div className="space-y-3 mb-4 pb-4 border-b">
                <div className="flex justify-between text-gray-600">
                  <span>ยอดรวม</span>
                  <span>฿{cart.subtotal.toLocaleString()}</span>
                </div>
                {cart.discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>ส่วนลด</span>
                    <span>-฿{cart.discount.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between text-gray-600">
                  <span>ค่าจัดส่ง</span>
                  <span>{cart.shipping === 0 ? 'ฟรี' : `฿${cart.shipping.toLocaleString()}`}</span>
                </div>
              </div>

              <div className="flex justify-between text-xl font-bold mb-6">
                <span>ยอดรวมทั้งสิ้น</span>
                <span className="text-orange-600">฿{cart.total.toLocaleString()}</span>
              </div>

              {cart.shipping > 0 && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                  <p className="text-sm text-blue-800">
                    🚚 ซื้อเพิ่มอีก ฿{(2000 - cart.subtotal).toLocaleString()} เพื่อรับส่งฟรี!
                  </p>
                </div>
              )}

              <button className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors mb-3">
                ดำเนินการชำระเงิน
              </button>

              <Link
                href="/products"
                className="block w-full text-center border-2 border-gray-300 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                ช้อปปิ้งต่อ
              </Link>

              {/* Trust Signals */}
              <div className="mt-6 pt-6 border-t space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>ชำระเงินปลอดภัย SSL</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>รับประกันสินค้า 2 ปี</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>จัดส่งฟรี เมื่อซื้อครบ ฿2,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
