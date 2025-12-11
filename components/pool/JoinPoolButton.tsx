'use client';

import { useState } from 'react';
import { joinPool } from '@/lib/mockApi';
import { Users } from 'lucide-react';

interface Props {
  poolId: number;
}

export default function JoinPoolButton({ poolId }: Props) {
  const [quantity, setQuantity] = useState(1);
  const [isJoining, setIsJoining] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleJoinPool = async () => {
    setIsJoining(true);
    setErrorMessage('');

    const result = await joinPool(poolId, quantity);

    if (result.success) {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        window.location.reload(); // Reload to show updated participant count
      }, 2000);
    } else {
      setErrorMessage(result.message);
    }

    setIsJoining(false);
  };

  if (showSuccess) {
    return (
      <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6 text-center">
        <div className="text-4xl mb-3">🎉</div>
        <h3 className="text-lg font-bold text-green-900 mb-2">เข้าร่วม Pool สำเร็จ!</h3>
        <p className="text-sm text-green-700">
          ขอบคุณที่ร่วม Pool กับเรา เราจะแจ้งความคืบหน้าทาง Email
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Quantity Selector */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          จำนวนที่ต้องการ
        </label>
        <div className="flex items-center border border-gray-300 rounded-lg">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-4 py-2 hover:bg-gray-100"
            aria-label="ลดจำนวน"
          >
            -
          </button>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
            className="flex-1 text-center py-2 border-x border-gray-300"
            min="1"
          />
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-4 py-2 hover:bg-gray-100"
            aria-label="เพิ่มจำนวน"
          >
            +
          </button>
        </div>
      </div>

      {/* Join Button */}
      <button
        onClick={handleJoinPool}
        disabled={isJoining}
        className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
      >
        <Users className="w-5 h-5" />
        <span>{isJoining ? 'กำลังเข้าร่วม...' : 'เข้าร่วม Pool'}</span>
      </button>

      {errorMessage && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-700">
          {errorMessage}
        </div>
      )}

      <p className="text-xs text-gray-500 text-center">
        💰 ชำระมัดจำ 30% ตอนเข้าร่วม<br />
        ส่วนที่เหลือจ่ายเมื่อรับสินค้า
      </p>
    </div>
  );
}
