"use client";
import { Emoji, EmojiStyle } from "emoji-picker-react";

interface HeaderProps {
  totalProgress: number;
  completedDays: number;
  onReset: () => void;
}

export default function Header({
  totalProgress,
  completedDays,
  onReset,
}: HeaderProps) {
  return (
    <header
      className="fixed top-0 right-0 left-0 z-50 animate-slide-down bg-white/95 backdrop-blur-sm"
      style={{
        borderTop: "4px solid #6E8A78",
        borderBottom: "1.5px solid #e2e8f0",
        boxShadow: "0 2px 20px rgba(110,138,120,0.08)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-5 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
        {/* ── Logo & Title ── */}
        {/* FIX: Added md:w-auto here so it doesn't push the progress bar off-screen */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-center md:justify-start shrink-0">
          <div className="md:flex hidden items-center justify-center shrink-0">
            <Emoji unified="1f31f" size={20} emojiStyle={EmojiStyle.APPLE} />
          </div>
          <div className="leading-tight text-center md:text-right">
            <h1
              className="text-xl sm:text-2xl font-bold flex flex-wrap items-center justify-center md:justify-start gap-2 tracking-wide"
              style={{ color: "#6E8A78" }}
            >
              منارة روح
              <span
                className="text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap"
                style={{
                  background: "#e8f0ec",
                  color: "#4a6252",
                  border: "1px solid #c2d1c8",
                }}
              >
                رحلة الـ 30 يوماً
              </span>
            </h1>
            <p
              className="text-[10px] sm:text-xs mt-1"
              style={{ color: "#64748b" }}
            >
              جدولك اليومي لبناء العادات الروحية
            </p>
          </div>
        </div>

        {/* ── Global Progress ── */}
        <div
          className="w-full md:max-w-sm lg:max-w-md p-3 rounded-2xl flex flex-col gap-1 shrink-0"
          style={{
            background: "rgb(241 245 249 / 0.8)",
            border: "1.5px solid #e2e8f0",
          }}
        >
          <div className="flex justify-between items-center mb-1.5">
            <span
              className="text-[11px] sm:text-xs font-semibold"
              style={{ color: "#64748b" }}
            >
              إنجاز التحدي الإجمالي
            </span>
            <span
              className="text-[11px] sm:text-xs font-extrabold"
              style={{ color: "#6E8A78" }}
            >
              {totalProgress}%
            </span>
          </div>

          {/* Progress track */}
          <div
            className="w-full h-2.5 rounded-full overflow-hidden"
            style={{ background: "#e2e8f0" }}
          >
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{
                width: `${totalProgress}%`,
                background: "#6E8A78",
              }}
            />
          </div>

          <div className="flex justify-between items-center mt-1.5">
            <span
              className="text-[10px] font-medium"
              style={{ color: "#64748b" }}
            >
              {completedDays} من أصل 30 يوماً مكتملة
            </span>
            <button
              onClick={onReset}
              className="text-[10px] font-semibold transition-colors"
              style={{ color: "#94a3b8" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ef4444")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
            >
              إعادة تهيئة
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
