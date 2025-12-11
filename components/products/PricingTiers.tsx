'use client';

import { Tag } from 'lucide-react';

interface B2BPricing {
  minQty: number;
  maxQty?: number;
  pricePerUnit: number;
}

interface Props {
  b2bPricing: B2BPricing[];
}

export default function PricingTiers({ b2bPricing }: Props) {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
      <div className="flex items-center gap-2 mb-3">
        <Tag className="w-5 h-5 text-blue-600" />
        <h3 className="font-semibold text-gray-900">ราคาขายส่ง (B2B)</h3>
      </div>
      
      <div className="space-y-2">
        {b2bPricing.map((tier, index) => (
          <div
            key={index}
            className="flex justify-between items-center py-2 px-3 bg-white rounded border border-blue-100"
          >
            <span className="text-sm text-gray-600">
              {tier.minQty}
              {tier.maxQty ? ` - ${tier.maxQty}` : '+'} ชิ้น
            </span>
            <span className="font-semibold text-blue-600">
              ฿{tier.pricePerUnit.toLocaleString()}/ชิ้น
            </span>
          </div>
        ))}
      </div>
      
      <p className="text-xs text-gray-500 mt-3">
        💼 ต้องการสั่งซื้อจำนวนมาก? <a href="/contact" className="text-blue-600 hover:underline">ติดต่อเราเพื่อรับใบเสนอราคา</a>
      </p>
    </div>
  );
}
