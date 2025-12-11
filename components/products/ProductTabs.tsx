'use client';

import { useState } from 'react';
import { Product } from '@/types';
import { Star } from 'lucide-react';

interface Props {
  product: Product;
}

export default function ProductTabs({ product }: Props) {
  const [activeTab, setActiveTab] = useState<'description' | 'specs' | 'reviews'>('description');

  const tabs = [
    { id: 'description' as const, label: 'รายละเอียด' },
    { id: 'specs' as const, label: 'ข้อมูลจำเพาะ' },
    { id: 'reviews' as const, label: `รีวิว (${product.reviewCount})` },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm">
      {/* Tab Headers */}
      <div className="border-b">
        <div className="flex gap-8 px-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 font-semibold transition-colors relative ${
                activeTab === tab.id
                  ? 'text-orange-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-600" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {activeTab === 'description' && (
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-4">{product.description}</p>
            
            {product.features && product.features.length > 0 && (
              <>
                <h3 className="text-lg font-semibold mb-3 mt-6">คุณสมบัติเด่น</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-100">
              <h4 className="font-semibold text-orange-900 mb-2">💡 ทำไมต้องซื้อจากโรงงาน?</h4>
              <ul className="space-y-1 text-sm text-orange-800">
                <li>• ไม่มีต้นทุนตัวกลาง ราคาถูกกว่า 40-60%</li>
                <li>• สินค้าคุณภาพเดียวกับที่ส่งออก</li>
                <li>• รับประกันโดยตรงจากผู้ผลิต 2 ปีเต็ม</li>
                <li>• มีใบ CE, RoHS ครบถ้วน</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'specs' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.specifications ? (
              Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between py-3 px-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">{key}:</span>
                  <span className="font-medium">{value}</span>
                </div>
              ))
            ) : (
              <p className="text-gray-500">ไม่มีข้อมูลจำเพาะ</p>
            )}
          </div>
        )}

        {activeTab === 'reviews' && (
          <div>
            {/* Rating Summary */}
            <div className="flex items-center gap-8 mb-8 pb-8 border-b">
              <div className="text-center">
                <div className="text-5xl font-bold text-gray-900 mb-2">
                  {product.rating}
                </div>
                <div className="flex items-center justify-center mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-600">{product.reviewCount} รีวิว</p>
              </div>

              <div className="flex-1 space-y-2">
                {[5, 4, 3, 2, 1].map((stars) => {
                  const percent = Math.floor(Math.random() * 50) + (stars === 5 ? 30 : 0);
                  return (
                    <div key={stars} className="flex items-center gap-3">
                      <span className="text-sm text-gray-600 w-8">{stars} ⭐</span>
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-yellow-400 h-2 rounded-full"
                          style={{ width: `${percent}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-600 w-12">{percent}%</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Sample Reviews */}
            <div className="space-y-6">
              {[
                {
                  name: 'คุณสมชาย',
                  rating: 5,
                  date: '15 ม.ค. 2567',
                  comment: 'สินค้าคุณภาพดีมาก ติดตั้งง่าย แสงสวยมาก ราคาถูกกว่าร้านค้าปลีกเยอะ คุ้มค่ามาก',
                  verified: true,
                },
                {
                  name: 'คุณอรทัย',
                  rating: 4,
                  date: '8 ม.ค. 2567',
                  comment: 'สินค้าดีครับ แต่การจัดส่งช้าไปหน่อย โดยรวมพอใจ',
                  verified: true,
                },
                {
                  name: 'คุณวิชัย',
                  rating: 5,
                  date: '3 ม.ค. 2567',
                  comment: 'ซื้อมาหลายชิ้นเพื่อติดโครงการคอนโด คุณภาพดีเยี่ยม ราคาประหยัดมาก แนะนำเลยครับ',
                  verified: true,
                },
              ].map((review, index) => (
                <div key={index} className="border-b pb-6">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold">{review.name}</span>
                        {review.verified && (
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">
                            ✓ ซื้อแล้ว
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating
                                ? 'text-yellow-400 fill-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                </div>
              ))}
            </div>

            <button className="mt-6 w-full py-3 border-2 border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              ดูรีวิวทั้งหมด
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
