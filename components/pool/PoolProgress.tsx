'use client';

import { TrendingUp } from 'lucide-react';

interface Props {
  current: number;
  target: number;
  endDate: string;
}

export default function PoolProgress({ current, target, endDate }: Props) {
  const percent = Math.min((current / target) * 100, 100);
  const daysLeft = Math.ceil((new Date(endDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24));

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">
          ความคืบหน้า Pool
        </span>
        <span className="text-sm font-semibold text-blue-600">
          {current} / {target} คน ({Math.round(percent)}%)
        </span>
      </div>

      {/* Progress Bar */}
      <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden mb-2">
        <div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-500 flex items-center justify-end pr-2"
          style={{ width: `${percent}%` }}
        >
          {percent > 20 && (
            <TrendingUp className="w-3 h-3 text-white" />
          )}
        </div>
      </div>

      <p className="text-sm text-gray-600">
        {daysLeft > 0 ? (
          <>⏰ เหลืออีก <span className="font-semibold text-orange-600">{daysLeft} วัน</span> ก่อน Pool ปิด</>
        ) : (
          <span className="text-red-600 font-semibold">Pool ปิดแล้ว</span>
        )}
      </p>
    </div>
  );
}
