import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Calendar, Users, TrendingDown, Clock } from 'lucide-react';
import { getPoolById } from '@/lib/mockApi';
import JoinPoolButton from '@/components/pool/JoinPoolButton';
import PoolProgress from '@/components/pool/PoolProgress';

interface Props {
  params: {
    id: string;
  };
}

export default async function PoolDetailPage({ params }: Props) {
  const pool = await getPoolById(parseInt(params.id));
  
  if (!pool) {
    notFound();
  }

  const participantPercent = (pool.currentParticipants / pool.targetParticipants) * 100;
  const daysLeft = Math.ceil((new Date(pool.endDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">💧</span>
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
              Lighting Pool #{pool.id}
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-4">{pool.name}</h1>
          <p className="text-blue-100 text-lg max-w-2xl">{pool.description}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Pool Status Card */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <PoolProgress
                current={pool.currentParticipants}
                target={pool.targetParticipants}
                endDate={pool.endDate}
              />

              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Users className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                  <p className="text-2xl font-bold text-gray-900">{pool.currentParticipants}</p>
                  <p className="text-sm text-gray-600">ผู้เข้าร่วม</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <TrendingDown className="w-6 h-6 mx-auto mb-2 text-green-600" />
                  <p className="text-2xl font-bold text-gray-900">{pool.discountPercent}%</p>
                  <p className="text-sm text-gray-600">ส่วนลด</p>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <Clock className="w-6 h-6 mx-auto mb-2 text-orange-600" />
                  <p className="text-2xl font-bold text-gray-900">{daysLeft}</p>
                  <p className="text-sm text-gray-600">วันที่เหลือ</p>
                </div>
              </div>
            </div>

            {/* Products in Pool */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">สินค้าใน Pool นี้</h2>
              
              {pool.products.map((product) => {
                const savings = product.factoryPrice - (product.poolPrice || product.factoryPrice);
                
                return (
                  <div key={product.id} className="flex gap-4 pb-6 mb-6 border-b last:border-b-0">
                    {/* Product Image */}
                    <div className="relative w-32 h-32 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">
                        <a href={`/products/${product.id}`} className="hover:text-orange-600">
                          {product.name}
                        </a>
                      </h3>
                      
                      <div className="flex items-baseline gap-3 mb-3">
                        <span className="text-2xl font-bold text-blue-600">
                          ฿{(product.poolPrice || product.factoryPrice).toLocaleString()}
                        </span>
                        <span className="text-lg text-gray-400 line-through">
                          ฿{product.factoryPrice.toLocaleString()}
                        </span>
                        <span className="text-green-600 font-semibold">
                          ประหยัด ฿{savings.toLocaleString()}
                        </span>
                      </div>

                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {product.description}
                      </p>

                      <a
                        href={`/products/${product.id}`}
                        className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold"
                      >
                        ดูรายละเอียด →
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* How It Works */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pool คืออะไร? ทำงานยังไง?</h2>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">เข้าร่วม Pool</h3>
                    <p className="text-gray-600">เลือกสินค้าและจำนวนที่ต้องการ จ่ายเงินมัดจำ 30%</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">รอ Pool เต็ม</h3>
                    <p className="text-gray-600">เมื่อมีผู้เข้าร่วมครบตามเป้า Pool จะปิดและเริ่มการผลิต</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">ผลิตและจัดส่ง</h3>
                    <p className="text-gray-600">โรงงานผลิตและจัดส่งสินค้า ชำระส่วนที่เหลือเมื่อได้รับสินค้า</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">ได้รับสินค้า</h3>
                    <p className="text-gray-600">รับสินค้าคุณภาพ พร้อมประหยัดเงิน 40-60% จากราคาปกติ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <div className="mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>Pool เริ่ม: {new Date(pool.startDate).toLocaleDateString('th-TH')}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>Pool สิ้นสุด: {new Date(pool.endDate).toLocaleDateString('th-TH')}</span>
                </div>
              </div>

              <JoinPoolButton poolId={pool.id} />

              <div className="mt-6 pt-6 border-t space-y-3">
                <h3 className="font-semibold text-gray-900">ข้อดีของ Pool</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>ประหยัดสูงสุด 40-60%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>จ่ายมัดจำ 30% ที่เหลือจ่ายเมื่อรับของ</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>ผลิตใหม่จากโรงงาน</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>รับประกัน 2 ปีเต็ม</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>คืนเงินหาก Pool ไม่เต็ม</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-6 border-t">
                <h3 className="font-semibold text-gray-900 mb-3">ต้องการความช่วยเหลือ?</h3>
                <p className="text-sm text-gray-600 mb-3">
                  ทีมงานพร้อมให้คำปรึกษา
                </p>
                <a
                  href="/contact"
                  className="block w-full text-center border-2 border-orange-600 text-orange-600 py-2 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
                >
                  ติดต่อเรา
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
