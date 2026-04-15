"use client";

import { useState } from "react";
import Link from "next/link";


export default function Teacher() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
          <h2 className="text-2xl font-bold">هل أنت معلماً أو مشرف حلقة؟</h2>
          <p className="text-blue-100 text-sm mt-2">
            أنشئ حجرة دراسية خاصة لطلابك
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-gray-700 mb-6 text-right">
            إذا كنت معلماً أو مشرف حلقة، يمكنك إنشاء حجرة دراسية خاصة لإدارة
            طلابك والمحتوى التعليمي.
          </p>

          {/* Features */}
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <span className="text-blue-600 text-xl">✓</span>
              <span className="text-gray-700 text-right">
                إدارة مركزة للطلاب والمحتوى
              </span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-600 text-xl">✓</span>
              <span className="text-gray-700 text-right">تتبع تقدم الطلاب</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-600 text-xl">✓</span>
              <span className="text-gray-700 text-right">
                حجرة دراسية آمنة وخاصة
              </span>
            </div>
          </div>

          {/* CTA Button */}
          <Link
            href="/teacher-setup"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200 block text-center"
          >
            إنشاء حجرة دراسية
          </Link>

          <p className="text-gray-500 text-xs text-center mt-4">
            هل أنت طالب؟{" "}
            <Link href="/student" className="text-blue-600 hover:underline">
              انضم إلى حجرة
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
