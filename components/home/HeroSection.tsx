"use client";

import Link from "next/link";
import { ArrowRight, Factory, TrendingDown } from "lucide-react";
import SavingsCalculator from "@/components/shared/SavingsCalculator";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Hero Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-factory-orange/10 text-factory-orange px-4 py-2 rounded-full border border-factory-orange/20">
              <Factory className="h-4 w-4" />
              <span className="text-sm font-semibold">ตรงจากโรงงานไทย</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              ราคาโรงงาน
              <br />
              <span className="text-factory-orange">ไม่ผ่านคนกลาง</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-gray-600 leading-relaxed">
              ไฟคุณภาพพรีเมี่ยมตรงจากโรงงานไทย ประหยัดสูงสุด 60% เมื่อเทียบกับร้านค้า เหมาะสำหรับบ้าน ธุรกิจ และโครงการขนาดใหญ่
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="flex items-center space-x-2">
                <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <TrendingDown className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">สูงสุด 60%</p>
                  <p className="text-sm text-gray-600">ประหยัด</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Factory className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">จากโรงงาน</p>
                  <p className="text-sm text-gray-600">โดยตรง</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">คุณภาพ</p>
                  <p className="text-sm text-gray-600">รับประกัน</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/pool"
                className="inline-flex items-center justify-center px-8 py-4 bg-factory-orange text-white font-semibold rounded-lg hover:bg-factory-orange/90 transition-colors shadow-lg shadow-factory-orange/30 group"
              >
                เข้า Lighting Pool
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-colors border-2 border-gray-200"
              >
                ดูสินค้าทั้งหมด
              </Link>
            </div>

            {/* Trust Badge */}
            <p className="text-sm text-gray-500 pt-4">
              ⭐ ไว้วางใจจากลูกค้า 10,000+ ราย • รับประกัน  5 ปี
            </p>
          </div>

          {/* Right Column - Savings Calculator */}
          <div className="lg:pl-8">
            <SavingsCalculator />
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
