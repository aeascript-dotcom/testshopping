"use client";

import Link from "next/link";
import { Factory, ShoppingCart, User, Menu, Search } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      {/* Top Banner */}
      <div className="bg-factory-orange text-white py-2 px-4 text-center text-sm font-medium">
        🏭 ราคาโรงงานตรง • ไม่ผ่านคนกลาง • ประหยัดสูงสุด 60%
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <Factory className="h-8 w-8 text-factory-orange group-hover:rotate-12 transition-transform" />
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight">Lighting Factory</span>
              <span className="text-xs text-gray-600">Outlet Online</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/products" className="text-gray-700 hover:text-factory-orange font-medium transition-colors">
              สินค้าทั้งหมด
            </Link>
            <Link href="/pool" className="text-gray-700 hover:text-factory-orange font-medium transition-colors">
              Lighting Pool
            </Link>
            <Link href="/clearance" className="text-gray-700 hover:text-factory-orange font-medium transition-colors">
              ล้างสต็อก
            </Link>
            <Link href="/pro" className="text-gray-700 hover:text-factory-orange font-medium transition-colors">
              โปรแกรม PRO
            </Link>
            <Link href="/projects" className="text-gray-700 hover:text-factory-orange font-medium transition-colors">
              โครงการพิเศษ
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors hidden md:block">
              <Search className="h-5 w-5 text-gray-700" />
            </button>
            <Link href="/account" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <User className="h-5 w-5 text-gray-700" />
            </Link>
            <Link href="/cart" className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <ShoppingCart className="h-5 w-5 text-gray-700" />
              <span className="absolute -top-1 -right-1 bg-factory-orange text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Menu className="h-5 w-5 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3">
              <Link href="/products" className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                สินค้าทั้งหมด
              </Link>
              <Link href="/pool" className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                Lighting Pool
              </Link>
              <Link href="/clearance" className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                ล้างสต็อก
              </Link>
              <Link href="/pro" className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                โปรแกรม PRO
              </Link>
              <Link href="/projects" className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                โครงการพิเศษ
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
