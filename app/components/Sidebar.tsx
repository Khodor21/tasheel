"use client";
import { Emoji, EmojiStyle } from "emoji-picker-react";

interface SidebarProps {
  currentDay: number;
  dayProgress: Record<number, number>;
  onSelectDay: (day: number) => void;
}

const quotes = [
  "إنَّ أحبَّ الأعمالِ إلى اللَّهِ أدومُها وإن قلَّ.",
  "مَن كانت الآخرةُ همَّهُ جعلَ اللهُ غِناهُ في قلبِه.",
  "اللهمَّ أعنِّي على ذِكرِكَ وشُكرِكَ وحُسنِ عبادتِكَ.",
];

const todayQuote = quotes[new Date().getDay() % quotes.length];

export default function Sidebar({
  currentDay,
  dayProgress,
  onSelectDay,
}: SidebarProps) {
  const days = Array.from({ length: 30 }, (_, i) => i + 1);

  const getDayStyle = (
    day: number,
  ): React.CSSProperties & { className?: string } => {
    const pct = dayProgress[day] ?? 0;

    if (day === currentDay) {
      return {
        background: "#6E8A78",
        color: "#ffffff",
        fontWeight: 800,
        boxShadow: "0 4px 14px rgba(110,138,120,0.40)",
        outline: "2.5px solid #6E8A78",
        outlineOffset: "2px",
      };
    }
    if (pct === 100) {
      return {
        background: "#e8f0ec",
        color: "#4a6252",
        fontWeight: 700,
        border: "1.5px solid #c2d1c8",
      };
    }
    if (pct > 0) {
      return {
        background: "rgb(241 245 249 / 0.8)",
        color: "#6E8A78",
        fontWeight: 600,
        border: "1.5px solid #e2e8f0",
      };
    }
    return {
      background: "#ffffff",
      color: "#64748b",
      border: "1px solid #e2e8f0",
    };
  };

  const completedCount = Object.values(dayProgress).filter(
    (p) => p === 100,
  ).length;
  const inProgressCount = Object.values(dayProgress).filter(
    (p) => p > 0 && p < 100,
  ).length;

  return (
    <aside className="w-full lg:w-80 xl:w-72 flex flex-col gap-4 mt-36 md:mt-16">
      {/* ── Wisdom Quote ── */}
      <div
        className="rounded-2xl p-5 card-lift"
        style={{
          background: "rgb(241 245 249 / 0.8)",
          border: "1.5px solid #e2e8f0",
          borderRight: "4px solid #6E8A78",
        }}
      >
        <h3
          className="font-bold text-sm mb-2 flex items-center gap-2"
          style={{ color: "#6E8A78" }}
        >
          <Emoji unified="1f4a1" size={18} emojiStyle={EmojiStyle.APPLE} />
          قبس من الحكمة
        </h3>
        <p
          className="leading-loose text-sm font-medium"
          style={{ color: "#64748b" }}
        >
          "{todayQuote}"
        </p>
      </div>

      {/* ── Legend ── */}
      <div
        className="rounded-2xl p-4 flex flex-wrap gap-3 text-xs"
        style={{ background: "#ffffff", border: "1px solid #e2e8f0" }}
      >
        <span
          className="flex items-center gap-1.5"
          style={{ color: "#64748b" }}
        >
          <span
            className="w-3 h-3 rounded-sm inline-block"
            style={{ background: "#e8f0ec", border: "1.5px solid #c2d1c8" }}
          />
          مكتمل
        </span>
        <span
          className="flex items-center gap-1.5"
          style={{ color: "#64748b" }}
        >
          <span
            className="w-3 h-3 rounded-sm inline-block"
            style={{
              background: "rgb(241 245 249 / 0.8)",
              border: "1.5px solid #e2e8f0",
            }}
          />
          جارٍ
        </span>
        <span
          className="flex items-center gap-1.5"
          style={{ color: "#64748b" }}
        >
          <span
            className="w-3 h-3 rounded-sm inline-block"
            style={{ background: "#ffffff", border: "1px solid #e2e8f0" }}
          />
          لم يبدأ
        </span>
        <span
          className="flex items-center gap-1.5"
          style={{ color: "#64748b" }}
        >
          <span
            className="w-3 h-3 rounded-sm inline-block"
            style={{
              background: "#6E8A78",
              outline: "2px solid #6E8A78",
              outlineOffset: "1px",
            }}
          />
          اليوم المحدد
        </span>
      </div>

      {/* ── 30-Day Map ── */}
      <div
        className="rounded-2xl p-5"
        style={{
          background: "#ffffff",
          border: "1.5px solid #e2e8f0",
          boxShadow: "0 2px 12px rgba(0,0,0,0.02)",
        }}
      >
        <div className="flex items-center gap-2 mb-4">
          <Emoji unified="1f4c5" size={20} emojiStyle={EmojiStyle.APPLE} />
          <h3 className="font-bold text-sm" style={{ color: "#6E8A78" }}>
            خريطة التحدي
          </h3>
        </div>

        <div className="grid grid-cols-6 sm:grid-cols-8 lg:grid-cols-6 gap-2">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => onSelectDay(day)}
              title={`اليوم ${day} — ${dayProgress[day] ?? 0}%`}
              className="w-full aspect-square rounded-xl flex items-center justify-center text-xs transition-all duration-200 focus:outline-none"
              style={{
                ...getDayStyle(day),
                fontSize: "11px",
              }}
            >
              {day}
            </button>
          ))}
        </div>
      </div>

      {/* ── Mini Stats ── */}
      <div className="grid grid-cols-2 gap-3">
        <div
          className="rounded-2xl p-4 text-center card-lift"
          style={{
            background: "#e8f0ec",
            border: "1.5px solid #c2d1c8",
          }}
        >
          <span
            className="text-2xl font-extrabold"
            style={{ color: "#4a6252" }}
          >
            {completedCount}
          </span>
          <p
            className="text-[10px] mt-1 font-semibold"
            style={{ color: "#4a6252" }}
          >
            يوم مكتمل
          </p>
        </div>

        <div
          className="rounded-2xl p-4 text-center card-lift"
          style={{
            background: "rgb(241 245 249 / 0.8)",
            border: "1.5px solid #e2e8f0",
          }}
        >
          <span
            className="text-2xl font-extrabold"
            style={{ color: "#6E8A78" }}
          >
            {inProgressCount}
          </span>
          <p
            className="text-[10px] mt-1 font-semibold"
            style={{ color: "#64748b" }}
          >
            يوم جارٍ
          </p>
        </div>
      </div>
    </aside>
  );
}
