import { Home, Building2, Hotel } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    id: "residential",
    name: "Residential",
    icon: Home,
    description: "Stylish lighting for homes and apartments",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
    products: "2,400+ products",
    color: "from-blue-500 to-blue-600",
  },
  {
    id: "commercial",
    name: "Commercial",
    icon: Building2,
    description: "Professional lighting for offices and retail",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
    products: "1,800+ products",
    color: "from-purple-500 to-purple-600",
  },
  {
    id: "hospitality",
    name: "Hospitality",
    icon: Hotel,
    description: "Premium lighting for hotels and restaurants",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop",
    products: "1,200+ products",
    color: "from-orange-500 to-orange-600",
  },
];

export default function ShopByUseSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Shop by Use Case
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find the perfect lighting solutions tailored to your specific needs
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.id}
                href={`/categories/${category.id}`}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                {/* Background Image */}
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url(${category.image})` }}
                  />
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-70 group-hover:opacity-80 transition-opacity`} />
                  
                  {/* Icon */}
                  <div className="absolute top-6 left-6">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Products Count */}
                  <div className="absolute top-6 right-6">
                    <div className="bg-white/90 backdrop-blur text-gray-900 text-xs font-semibold px-3 py-1 rounded-full">
                      {category.products}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-factory-orange transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center text-factory-orange font-semibold group-hover:translate-x-2 transition-transform">
                    Explore {category.name}
                    <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Additional Categories Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {[
            { name: "Outdoor", emoji: "🌳", count: "450+" },
            { name: "Industrial", emoji: "🏭", count: "320+" },
            { name: "Smart Lighting", emoji: "💡", count: "180+" },
            { name: "Decorative", emoji: "✨", count: "890+" },
          ].map((cat) => (
            <Link
              key={cat.name}
              href={`/categories/${cat.name.toLowerCase()}`}
              className="bg-gray-50 hover:bg-gray-100 rounded-xl p-4 text-center transition-colors border border-gray-200 hover:border-factory-orange"
            >
              <div className="text-3xl mb-2">{cat.emoji}</div>
              <h4 className="font-semibold text-gray-900 mb-1">{cat.name}</h4>
              <p className="text-sm text-gray-600">{cat.count} products</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
