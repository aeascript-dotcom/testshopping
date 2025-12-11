import { Factory, TrendingDown, Package } from "lucide-react";
import Image from "next/image";

export default function FactoryStory() {
  return (
    <section className="py-16 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.05) 10px, rgba(255,255,255,.05) 20px)`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-factory-orange/20 text-factory-orange px-4 py-2 rounded-full mb-6">
              <Factory className="h-4 w-4" />
              <span className="text-sm font-semibold">Our Factory Story</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Buy Direct from the Factory?
            </h2>

            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              We manufacture premium lighting fixtures in Thailand with over 20 years of experience. 
              By selling directly to you, we eliminate wholesalers, distributors, and retail markups.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-factory-orange/20 rounded-lg flex items-center justify-center">
                  <TrendingDown className="h-6 w-6 text-factory-orange" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">No Middleman Markup</h3>
                  <p className="text-gray-400 text-sm">
                    Traditional retail adds 3-4x markup. We pass those savings to you.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-factory-orange/20 rounded-lg flex items-center justify-center">
                  <Factory className="h-6 w-6 text-factory-orange" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Quality Guaranteed</h3>
                  <p className="text-gray-400 text-sm">
                    Same factory that supplies major hotels and commercial projects across Asia.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-factory-orange/20 rounded-lg flex items-center justify-center">
                  <Package className="h-6 w-6 text-factory-orange" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Flexible Orders</h3>
                  <p className="text-gray-400 text-sm">
                    Buy 1 unit at pool price or 100 units for your project - same great pricing.
                  </p>
                </div>
              </div>
            </div>

            <a
              href="/about"
              className="inline-flex items-center px-6 py-3 bg-factory-orange text-white font-semibold rounded-lg hover:bg-factory-orange/90 transition-colors"
            >
              Learn More About Our Factory
            </a>
          </div>

          {/* Right - Factory Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=500&h=400&fit=crop"
                  alt="Factory production line"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <p className="text-white text-sm font-semibold">Production Line</p>
                </div>
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&h=500&fit=crop"
                  alt="Quality control"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <p className="text-white text-sm font-semibold">Quality Control</p>
                </div>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1581092160607-ee67e00e5a70?w=500&h=500&fit=crop"
                  alt="Warehouse"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <p className="text-white text-sm font-semibold">Warehouse</p>
                </div>
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1581092160667-afc90dcaef37?w=500&h=400&fit=crop"
                  alt="Packaging"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <p className="text-white text-sm font-semibold">Packaging</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
