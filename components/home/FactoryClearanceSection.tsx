"use client";

import { Package, Clock, TrendingDown } from "lucide-react";
import ClearanceCard from "@/components/clearance/ClearanceCard";

// Mock clearance products
const clearanceProducts = [
  {
    id: 1,
    name: "Vintage Edison Bulb Pendant",
    image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=500&h=500&fit=crop",
    originalPrice: 1890,
    clearancePrice: 890,
    stock: 23,
    reason: "Production Surplus",
    reasonType: "surplus" as const,
    endDate: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000), // 4 days from now
  },
  {
    id: 2,
    name: "Smart LED Ceiling Light",
    image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=500&h=500&fit=crop",
    originalPrice: 2490,
    clearancePrice: 1290,
    stock: 15,
    reason: "Design Update",
    reasonType: "design-change" as const,
    endDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
  },
  {
    id: 3,
    name: "Industrial Floor Lamp",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&h=500&fit=crop",
    originalPrice: 3290,
    clearancePrice: 1890,
    stock: 8,
    reason: "Hotel Project Surplus",
    reasonType: "project-surplus" as const,
    endDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
  },
];

export default function FactoryClearanceSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-factory-orange text-white px-4 py-2 rounded-full mb-4">
            <Package className="h-4 w-4" />
            <span className="text-sm font-semibold">Limited Time Only</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Weekly Factory Clearance
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Overstock, design transitions, and project surplus items at incredible prices. Limited quantities available!
          </p>
        </div>

        {/* Clearance Info Banner */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8 max-w-4xl mx-auto border-l-4 border-factory-orange">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
              <Package className="h-6 w-6 text-factory-orange" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 mb-2">This Week's Factory Story</h3>
              <p className="text-gray-600 text-sm mb-2">
                Our production team accidentally made 50 extra units of our best-selling Edison pendant lights. 
                Instead of storing them, we're passing the savings directly to you!
              </p>
              <div className="flex items-center space-x-4 text-sm">
                <span className="text-gray-500">
                  <Clock className="inline h-4 w-4 mr-1" />
                  Clearance ends in 4 days
                </span>
                <span className="text-green-600 font-semibold">
                  Up to 60% off
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {clearanceProducts.map((product) => (
            <ClearanceCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <a
            href="/clearance"
            className="inline-flex items-center px-8 py-4 bg-factory-orange text-white font-semibold rounded-lg hover:bg-factory-orange/90 transition-colors shadow-lg"
          >
            <Package className="mr-2 h-5 w-5" />
            View All Clearance Items
          </a>
        </div>

        {/* Reason Legend */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <div className="bg-white rounded-lg p-4 text-center">
            <div className="w-10 h-10 bg-blue-100 rounded-full mx-auto mb-2 flex items-center justify-center">
              <span className="text-xl">📦</span>
            </div>
            <p className="font-semibold text-sm text-gray-900">Production Surplus</p>
            <p className="text-xs text-gray-600 mt-1">Extra units from production runs</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center">
            <div className="w-10 h-10 bg-purple-100 rounded-full mx-auto mb-2 flex items-center justify-center">
              <span className="text-xl">🎨</span>
            </div>
            <p className="font-semibold text-sm text-gray-900">Design Transition</p>
            <p className="text-xs text-gray-600 mt-1">Making way for new models</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center">
            <div className="w-10 h-10 bg-green-100 rounded-full mx-auto mb-2 flex items-center justify-center">
              <span className="text-xl">🏨</span>
            </div>
            <p className="font-semibold text-sm text-gray-900">Project Surplus</p>
            <p className="text-xs text-gray-600 mt-1">Leftover from large projects</p>
          </div>
        </div>
      </div>
    </section>
  );
}
