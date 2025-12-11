import Link from "next/link";
import { Factory, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Factory className="h-6 w-6 text-factory-orange" />
              <span className="font-bold text-white text-lg">Lighting Factory</span>
            </div>
            <p className="text-sm mb-4">
              ส่งตรงจากโรงงานไทยถึงหน้าบ้านคุณ ไม่มีคนกลาง ไม่มีมาร์คอัพ เพียงราคาโรงงานที่เป็นธรรม
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-factory-orange transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-factory-orange transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-factory-orange transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-semibold text-white mb-4">ช้อปปิ้ง</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products" className="hover:text-factory-orange transition-colors">สินค้าทั้งหมด</Link></li>
              <li><Link href="/pool" className="hover:text-factory-orange transition-colors">Lighting Pool</Link></li>
              <li><Link href="/clearance" className="hover:text-factory-orange transition-colors">ล้างสต็อกประจำสัปดาห์</Link></li>
              <li><Link href="/categories/residential" className="hover:text-factory-orange transition-colors">ที่อยู่อาศัย</Link></li>
              <li><Link href="/categories/commercial" className="hover:text-factory-orange transition-colors">อาคารพาณิชย์</Link></li>
              <li><Link href="/categories/hospitality" className="hover:text-factory-orange transition-colors">โรงแรม-รีสอร์ท</Link></li>
            </ul>
          </div>

          {/* For Professionals */}
          <div>
            <h3 className="font-semibold text-white mb-4">สำหรับมืออาชีพ</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/pro" className="hover:text-factory-orange transition-colors">โปรแกรม PRO</Link></li>
              <li><Link href="/pro/register" className="hover:text-factory-orange transition-colors">สมัครสมาชิก PRO</Link></li>
              <li><Link href="/projects" className="hover:text-factory-orange transition-colors">โครงการพิเศษ</Link></li>
              <li><Link href="/quotation" className="hover:text-factory-orange transition-colors">ขอใบเสนอราคา</Link></li>
              <li><Link href="/bulk-orders" className="hover:text-factory-orange transition-colors">สั่งซื้อจำนวนมาก</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">ติดต่อเรา</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>กรุงเทพมหานคร ประเทศไทย 10110</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+66 2 XXX XXXX</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@lightingfactory.th</span>
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-xs text-gray-400">เวลาทำการ:</p>
              <p className="text-sm">จันทร์-เสาร์: 9:00 - 18:00 น.</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; 2025 Lighting Factory Outlet Online สงวนลิขสิทธิ์</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-factory-orange transition-colors">นโยบายความเป็นส่วนตัว</Link>
            <Link href="/terms" className="hover:text-factory-orange transition-colors">ข้อกำหนดการใช้งาน</Link>
            <Link href="/shipping" className="hover:text-factory-orange transition-colors">นโยบายการจัดส่ง</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
