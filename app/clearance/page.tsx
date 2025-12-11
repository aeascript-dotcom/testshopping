import { getClearanceProducts } from '@/lib/mockApi';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, Tag, Package } from 'lucide-react';

export default async function ClearancePage() {
  const clearanceProducts = await getClearanceProducts();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-white/20 px-4 py-2 rounded-full mb-4">
            <span className="text-2xl">🔥</span>
            <span className="ml-2 font-semibold">Factory Clearance Sale</span>
          </div>
          <h1 className="text-5xl font-bold mb-4">ล้างสต็อกโรงงาน</h1>
          <p className="text-xl text-red-100 max-w-2xl mx-auto">
            สินค้าคุณภาพดี ลดสูงสุด 70% เหลือเพียงไม่กี่ชิ้น หมดแล้วหมดเลย!
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Info Banner */}
        <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <Package className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">ของแท้ 100%</h3>
                <p className="text-sm text-gray-600">
                  สินค้าคุณภาพจากโรงงาน ไม่ใช่ของเลียนแบบ
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">จำกัดจำนวน</h3>
                <p className="text-sm text-gray-600">
                  ของมีจำนวนจำกัด หมดแล้วหมดเลย
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Tag className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">รับประกันเหมือนเดิม</h3>
                <p className="text-sm text-gray-600">
                  ยังคงได้รับการรับประกัน 2 ปีเต็ม
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {clearanceProducts.map((item) => {
            const product = item.product;
            const savings = product.factoryPrice - item.clearancePrice;
            const savingsPercent = Math.round((savings / product.factoryPrice) * 100);

            return (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden group hover:shadow-lg transition-shadow"
              >
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

                  {/* Discount Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full font-bold text-sm">
                      -{savingsPercent}%
                    </span>
                  </div>

                  {/* Stock Badge */}
                  {item.stock <= 5 && (
                    <div className="absolute top-3 right-3">
                      <span className="bg-orange-600 text-white px-2 py-1 rounded text-xs font-semibold">
                        เหลือ {item.stock} ชิ้น!
                      </span>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-4">
                  {/* Reason Badge */}
                  <div className="mb-2">
                    <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                      {item.reason === 'overstock' && '📦 สต็อกเหลือ'}
                      {item.reason === 'discontinued' && '🔄 เลิกผลิต'}
                      {item.reason === 'seasonal' && '🌸 สินค้าตามฤดูกาล'}
                      {item.reason === 'display' && '🏪 สินค้าจัดแสดง'}
                    </span>
                  </div>

                  <Link
                    href={`/products/${product.id}`}
                    className="font-semibold text-gray-900 hover:text-orange-600 line-clamp-2 mb-2"
                  >
                    {product.name}
                  </Link>

                  {/* Pricing */}
                  <div className="mb-3">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-2xl font-bold text-red-600">
                        ฿{item.clearancePrice.toLocaleString()}
                      </span>
                      <span className="text-sm text-gray-400 line-through">
                        ฿{product.factoryPrice.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-sm text-green-600 font-semibold">
                      ประหยัด ฿{savings.toLocaleString()}
                    </p>
                  </div>

                  {/* Add to Cart Button */}
                  <button className="w-full bg-orange-600 text-white py-2 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                    เพิ่มลงตะกร้า
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {clearanceProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              ขายหมดแล้ว!
            </h2>
            <p className="text-gray-600 mb-6">
              สินค้า Clearance ทั้งหมดถูกจองหมดแล้ว กลับมาดูใหม่ในครั้งถัดไป
            </p>
            <Link
              href="/products"
              className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
            >
              ดูสินค้าทั้งหมด
            </Link>
          </div>
        )}

        {/* FAQ Section */}
        <div className="mt-16 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            คำถามที่พบบ่อยเกี่ยวกับ Clearance Sale
          </h2>

          <div className="space-y-6 max-w-3xl mx-auto">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Q: ทำไมถึงขายถูกขนาดนี้?
              </h3>
              <p className="text-gray-600">
                A: เรามีสินค้าคงคลังเหลือจากการผลิต หรือเป็นโมเดลที่เลิกผลิตแล้ว 
                เราต้องการเคลียร์สต็อกเพื่อเปิดพื้นที่สำหรับสินค้าใหม่
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Q: สินค้า Clearance มีรับประกันไหม?
              </h3>
              <p className="text-gray-600">
                A: มีครับ! สินค้าทุกชิ้นยังคงได้รับการรับประกัน 2 ปีเต็มเหมือนสินค้าราคาปกติ
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Q: สภาพสินค้าเป็นอย่างไร?
              </h3>
              <p className="text-gray-600">
                A: ส่วนใหญ่เป็นสินค้าใหม่ในกล่อง บางรายการอาจเป็นสินค้าจัดแสดง 
                แต่ได้รับการตรวจสอบคุณภาพอย่างดีก่อนจัดส่ง
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Q: คืนสินค้าได้ไหม?
              </h3>
              <p className="text-gray-600">
                A: สินค้า Clearance สามารถคืนได้ภายใน 7 วัน หากพบข้อบกพร่อง 
                แต่ไม่รับเปลี่ยนใจ เนื่องจากเป็นสินค้าราคาพิเศษ
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
