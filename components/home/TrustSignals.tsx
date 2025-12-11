import { Shield, Award, Truck, Heart } from "lucide-react";

const trustFeatures = [
  {
    icon: Shield,
    title: "5-Year Warranty",
    description: "All products backed by comprehensive warranty",
  },
  {
    icon: Award,
    title: "ISO 9001 Certified",
    description: "International quality management standards",
  },
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On orders over ฿2,000 nationwide",
  },
  {
    icon: Heart,
    title: "10,000+ Happy Customers",
    description: "Trusted by homeowners and businesses",
  },
];

const certifications = [
  { name: "ISO 9001", year: "2024" },
  { name: "CE Certified", year: "2024" },
  { name: "Thai Industrial", year: "Standards" },
];

export default function TrustSignals() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Trust Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trustFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-factory-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-7 w-7 text-factory-orange" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Certifications & Reviews */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Certifications */}
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Certifications & Quality</h3>
            <div className="grid grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="h-8 w-8 text-blue-600" />
                  </div>
                  <p className="font-bold text-gray-900 text-sm">{cert.name}</p>
                  <p className="text-xs text-gray-600">{cert.year}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-6 text-center">
              Our factory meets international standards for quality and safety
            </p>
          </div>

          {/* Customer Reviews */}
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">What Customers Say</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-factory-orange pl-4">
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400 mr-2">
                    {"★★★★★".split("").map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">Verified Purchase</span>
                </div>
                <p className="text-gray-700 text-sm mb-2">
                  "Amazing quality at factory prices! Saved over 40% compared to retail stores. Will definitely order again."
                </p>
                <p className="text-xs text-gray-500">- Somchai P., Bangkok</p>
              </div>

              <div className="border-l-4 border-factory-orange pl-4">
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400 mr-2">
                    {"★★★★★".split("").map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">PRO Member</span>
                </div>
                <p className="text-gray-700 text-sm mb-2">
                  "As a contractor, the PRO program has been a game-changer. Great pricing, fast delivery, and excellent support."
                </p>
                <p className="text-xs text-gray-500">- Electrical Solutions Co.</p>
              </div>
            </div>
            <div className="text-center mt-6">
              <a href="/reviews" className="text-factory-orange font-semibold hover:underline">
                Read 2,450+ Reviews →
              </a>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-12 bg-gradient-to-r from-factory-orange to-amber-500 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold mb-1">20+</p>
              <p className="text-sm md:text-base opacity-90">Years in Business</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold mb-1">5,000+</p>
              <p className="text-sm md:text-base opacity-90">Products Available</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold mb-1">98%</p>
              <p className="text-sm md:text-base opacity-90">Customer Satisfaction</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold mb-1">24/7</p>
              <p className="text-sm md:text-base opacity-90">Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
