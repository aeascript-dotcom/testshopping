"use client";

import { Users, TrendingDown, Clock } from "lucide-react";
import PoolCard from "@/components/pool/PoolCard";

// Mock data for active pools
const activePools = [
  {
    id: 1,
    name: "Modern Pendant Light - Industrial Style",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500&h=500&fit=crop",
    regularPrice: 1290,
    poolPrice: 890,
    currentParticipants: 8,
    targetParticipants: 12,
    timeLeft: "23h 45m",
    category: "Pendant Lights",
  },
  {
    id: 2,
    name: "LED Track Lighting System",
    image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=500&h=500&fit=crop",
    regularPrice: 2490,
    poolPrice: 1690,
    currentParticipants: 15,
    targetParticipants: 24,
    timeLeft: "15h 22m",
    category: "Track Lighting",
  },
  {
    id: 3,
    name: "Crystal Chandelier 6-Light",
    image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=500&h=500&fit=crop",
    regularPrice: 4590,
    poolPrice: 2990,
    currentParticipants: 4,
    targetParticipants: 6,
    timeLeft: "48h 10m",
    category: "Chandeliers",
  },
  {
    id: 4,
    name: "Outdoor Wall Sconce - Set of 2",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&h=500&fit=crop",
    regularPrice: 890,
    poolPrice: 590,
    currentParticipants: 18,
    targetParticipants: 24,
    timeLeft: "6h 30m",
    category: "Outdoor Lighting",
  },
];

export default function LightingPoolSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full mb-4">
            <Users className="h-4 w-4" />
            <span className="text-sm font-semibold">รวมซื้อ Pool ลดราคา</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Lighting Pool ที่เปิดให้เข้าร่วม
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            รวมกับผู้ซื้อท่านอื่นเพื่อปลดล็อกราคาขายส่ง ยิ่งคนเข้าร่วมมาก ราคายิ่งถูก!
          </p>
        </div>

        {/* How It Works - Quick Guide */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-blue-50 rounded-xl">
            <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
              1
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">เข้าร่วม Pool</h3>
            <p className="text-sm text-gray-600">เลือกสินค้าแล้วรวมกับผู้ซื้อท่านอื่น</p>
          </div>
          <div className="text-center p-6 bg-green-50 rounded-xl">
            <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
              2
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Wait for Target</h3>
            <p className="text-sm text-gray-600">Pool closes when target is reached (24-72hrs)</p>
          </div>
          <div className="text-center p-6 bg-purple-50 rounded-xl">
            <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
              3
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Get Your Discount</h3>
            <p className="text-sm text-gray-600">Everyone pays the pool price</p>
          </div>
        </div>

        {/* Active Pools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activePools.map((pool) => (
            <PoolCard key={pool.id} pool={pool} />
          ))}
        </div>

        {/* View All Pools Button */}
        <div className="text-center mt-12">
          <a
            href="/pool"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
          >
            <Users className="mr-2 h-5 w-5" />
            View All Active Pools
          </a>
        </div>

        {/* Stats Banner */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold mb-2">142</p>
              <p className="text-blue-100">Active Pools Today</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">฿2.8M</p>
              <p className="text-blue-100">Total Savings This Month</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">8,429</p>
              <p className="text-blue-100">Happy Pool Members</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
