import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Star, Heart, ShoppingCart, Truck, Shield, Package } from 'lucide-react';
import { getProductById } from '@/lib/mockApi';
import AddToCartButton from '@/components/products/AddToCartButton';
import WishlistButton from '@/components/products/WishlistButton';
import ProductGallery from '@/components/products/ProductGallery';
import PricingTiers from '@/components/products/PricingTiers';
import ProductTabs from '@/components/products/ProductTabs';

interface Props {
  params: {
    id: string;
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const product = await getProductById(parseInt(params.id));
  
  if (!product) {
    notFound();
  }

  const retailSavings = product.retailPrice - product.factoryPrice;
  const savingsPercent = Math.round((retailSavings / product.retailPrice) * 100);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center text-sm text-gray-500">
            <a href="/" className="hover:text-orange-600">หน้าแรก</a>
            <span className="mx-2">/</span>
            <a href="/products" className="hover:text-orange-600">สินค้าทั้งหมด</a>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Product Gallery */}
          <ProductGallery images={product.images} productName={product.name} />

          {/* Product Info */}
          <div>
            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              {product.onClearance && (
                <span className="px-3 py-1 bg-red-100 text-red-700 text-sm font-semibold rounded-full">
                  🔥 Clearance Sale
                </span>
              )}
              {product.hasPool && (
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
                  💧 มี Pool ลดราคา
                </span>
              )}
              {product.isNewArrival && (
                <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
                  ✨ สินค้าใหม่
                </span>
              )}
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            
            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center">
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
              <span className="text-gray-600">
                {product.rating} ({product.reviewCount} รีวิว)
              </span>
            </div>

            {/* Pricing */}
            <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6 mb-6">
              <div className="mb-4">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-4xl font-bold text-orange-600">
                    ฿{product.factoryPrice.toLocaleString()}
                  </span>
                  <span className="text-xl text-gray-400 line-through">
                    ฿{product.retailPrice.toLocaleString()}
                  </span>
                </div>
                <p className="text-green-600 font-semibold text-lg">
                  ประหยัด ฿{retailSavings.toLocaleString()} ({savingsPercent}%)
                </p>
              </div>

              {product.poolPrice && (
                <div className="pt-4 border-t border-orange-200">
                  <p className="text-sm text-gray-600 mb-1">ราคา Pool (เมื่อรวมซื้อ):</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-blue-600">
                      ฿{product.poolPrice.toLocaleString()}
                    </span>
                    <span className="text-sm text-green-600 font-semibold">
                      ถูกกว่าอีก ฿{(product.factoryPrice - product.poolPrice).toLocaleString()}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Quantity & B2B Pricing */}
            {product.b2bPricing && <PricingTiers b2bPricing={product.b2bPricing} />}

            {/* Action Buttons */}
            <div className="flex gap-3 mb-6">
              <AddToCartButton productId={product.id} />
              <WishlistButton productId={product.id} />
            </div>

            {/* Trust Signals */}
            <div className="grid grid-cols-3 gap-4 py-6 border-t border-b">
              <div className="text-center">
                <Truck className="w-6 h-6 mx-auto mb-2 text-orange-600" />
                <p className="text-xs text-gray-600">ส่งฟรี ซื้อครบ ฿2,000</p>
              </div>
              <div className="text-center">
                <Shield className="w-6 h-6 mx-auto mb-2 text-orange-600" />
                <p className="text-xs text-gray-600">รับประกัน 2 ปี</p>
              </div>
              <div className="text-center">
                <Package className="w-6 h-6 mx-auto mb-2 text-orange-600" />
                <p className="text-xs text-gray-600">สินค้าจากโรงงาน 100%</p>
              </div>
            </div>

            {/* Quick Info */}
            <div className="mt-6 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">หมวดหมู่:</span>
                <span className="font-medium">{product.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">แบรนด์:</span>
                <span className="font-medium">{product.brand}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">รหัสสินค้า:</span>
                <span className="font-medium">{product.sku}</span>
              </div>
              {product.stock !== undefined && (
                <div className="flex justify-between">
                  <span className="text-gray-600">สต็อก:</span>
                  <span className={`font-medium ${product.stock > 10 ? 'text-green-600' : 'text-red-600'}`}>
                    {product.stock > 0 ? `มีสินค้า ${product.stock} ชิ้น` : 'สินค้าหมด'}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <ProductTabs product={product} />
      </div>
    </div>
  );
}
