"use client";
import { Emoji, EmojiStyle } from "emoji-picker-react";

/* ─── Types ──────────────────────────────────────────── */
interface Task {
  id: string;
  label: string;
  sub: string;
}

interface Section {
  id: string;
  emoji: string;
  title: string;
  description: string;
  tag: string;
  tasks: Task[];
}

/* ─── Static data ────────────────────────────────────── */
const SECTIONS: Section[] = [
  {
    id: "adhkar",
    emoji: "1f4ff",
    title: "قسم الأذكار اليومية",
    description: "طمأنينة لقلبك وصيانة ليومك",
    tag: "حصن المسلم",
    tasks: [
      { id: "morning", label: "أذكار الصباح", sub: "قوت القلوب وبداية النور" },
      { id: "evening", label: "أذكار المساء", sub: "ختام اليوم بحفظ الله" },
      { id: "sleep", label: "أذكار النوم", sub: "أنسِ الوحدة وراحة الروح" },
      { id: "esteghfar", label: "الاستغفار والصلاة على النبي ", sub: "ورد حر وتكرار مستمر للبركة" },
    ],
  },
  {
    id: "salah",
    emoji: "1f54b",
    title: "الصلوات الخمس",
    description: "عمود الدين وأنس المؤمن",
    tag: "فريضة",
    tasks: [
      { id: "fajr", label: "الفجر", sub: "في الخشوع تبدأ الطاقة" },
      { id: "dhuhr", label: "الظهر", sub: "توقف في عزّ الانشغال" },
      { id: "asr", label: "العصر", sub: "محطة منتصف النهار" },
      { id: "maghrib", label: "المغرب", sub: "لحظة الشكر عند الغروب" },
      { id: "isha", label: "العشاء", sub: "ختم اليوم بسلام" },
    ],
  },
  {
    id: "quran",
    emoji: "1f4d6",
    title: "تلاوة القرآن",
    description: "غذاء الروح ونور الطريق",
    tag: "وِرد يومي",
    tasks: [
      {
        id: "read",
        label: "قراءة حزب يومي",
        sub: "الاستمرارية أفضل من الكثرة",
      },
      { id: "tadabur", label: "تدبّر آية واحدة", sub: "أُنسٌ وبصيرة" },
      { id: "hifz", label: "مراجعة المحفوظ", sub: "ثمرة الجهد لا تضيع" },
    ],
  },
  {
    id: "nafs",
    emoji: "2728",
    title: "تزكية النفس",
    description: "بناء العادات الأخلاقية والروحية",
    tag: "تطوير ذاتي",
    tasks: [
      { id: "sadaqa", label: "صدقة اليوم", sub: "ولو بابتسامة أو كلمة طيبة" },
      { id: "dhikr", label: "100 تسبيحة", sub: "سبحان الله وبحمده" },
      {
        id: "muhasaba",
        label: "محاسبة النفس",
        sub: "دقيقة صدق مع نفسك قبل النوم",
      },
    ],
  },
];

/* ─── Props ──────────────────────────────────────────── */
interface WorkspaceProps {
  currentDay: number;
  checkedMap: Record<string, boolean>;
  onCheck: (key: string, checked: boolean) => void;
}

/* ─── Component ──────────────────────────────────────── */
export default function Workspace({
  currentDay,
  checkedMap,
  onCheck,
}: WorkspaceProps) {
  const totalTasks = SECTIONS.reduce((a, s) => a + s.tasks.length, 0);
  const done = SECTIONS.reduce(
    (a, s) =>
      a + s.tasks.filter((t) => checkedMap[`${currentDay}-${t.id}`]).length,
    0,
  );
  const pct = Math.round((done / totalTasks) * 100);
  const allDone = done === totalTasks;

  return (
    <section className="flex- mt-4 md:mt-16 flex flex-col gap-5 min-w-0 bg-white border-none p-4 sm:p-6 rounded-3xl">
      {/* ── Daily Header Card ── */}
      <div
        className="rounded-2xl p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 transition-all duration-500 bg-slate-100/80"
        style={{
          border: allDone ? "2px solid #6E8A78" : "1.5px solid #e2e8f0",
          boxShadow: allDone
            ? "0 4px 24px rgba(20, 24, 21, 0.18)"
            : "0 2px 12px rgba(0,0,0,0.02)",
        }}
      >
        <div>
          <p
            className="text-[10px] uppercase tracking-widest font-bold mb-1"
            style={{ color: "#6E8A78" }}
          >
            جدول التعبّد
          </p>
          <h2
            className="text-xl sm:text-2xl font-bold flex items-center gap-2 flex-wrap"
            style={{ color: "#6E8A78" }}
          >
            <Emoji unified="1f31f" size={24} emojiStyle={EmojiStyle.APPLE} />
            <span>
              اليوم{" "}
              <span style={{ color: "#6E8A78" }}>
                {currentDay.toLocaleString("ar-SA")}
              </span>
            </span>
            {allDone && (
              <span
                className="text-xs px-2.5 py-0.5 rounded-full font-bold animate-pulse"
                style={{ background: "#6E8A78", color: "#ffffff" }}
              >
                مكتمل 🎉
              </span>
            )}
          </h2>
          <p className="text-xs mt-1" style={{ color: "#64748b" }}>
            تتبّعي عباداتكِ بنية خالصة ومثابرة صادقة.
          </p>
        </div>

        {/* Daily progress ring */}
        <div
          className="shrink-0 flex items-center gap-3 px-5 py-3 rounded-2xl bg-white"
          style={{ border: "1.5px solid #e2e8f0" }}
        >
          <div className="relative w-14 h-14">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
              <circle
                cx="18"
                cy="18"
                r="15.9"
                fill="none"
                stroke="#e2e8f0"
                strokeWidth="3"
              />
              <circle
                cx="18"
                cy="18"
                r="15.9"
                fill="none"
                stroke="#6E8A78"
                strokeWidth="3"
                strokeDasharray={`${pct} ${100 - pct}`}
                strokeDashoffset="0"
                strokeLinecap="round"
                style={{ transition: "stroke-dasharray 0.6s ease" }}
              />
            </svg>
            <span
              className="absolute inset-0 flex items-center justify-center text-sm font-extrabold"
              style={{ color: "#6E8A78" }}
            >
              {pct}%
            </span>
          </div>
          <div>
            <p className="text-xs font-semibold" style={{ color: "#6E8A78" }}>
              إنجاز اليوم
            </p>
            <p className="text-xs mt-0.5" style={{ color: "#64748b" }}>
              {done}/{totalTasks} مهمة
            </p>
          </div>
        </div>
      </div>

      {/* ── Progress bar strip ── */}
      <div
        className="w-full h-1.5 rounded-full overflow-hidden"
        style={{ background: "#e2e8f0" }}
      >
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{
            width: `${pct}%`,
            background: "#6E8A78",
          }}
        />
      </div>

      {/* ── Section Cards ── */}
      <div className="flex flex-col gap-4">
        {SECTIONS.map((section) => (
          <SectionCard
            key={section.id}
            section={section}
            currentDay={currentDay}
            checkedMap={checkedMap}
            onCheck={onCheck}
          />
        ))}
      </div>
    </section>
  );
}

/* ─── Section Card ───────────────────────────────────── */
function SectionCard({
  section,
  currentDay,
  checkedMap,
  onCheck,
}: {
  section: Section;
  currentDay: number;
  checkedMap: Record<string, boolean>;
  onCheck: (key: string, checked: boolean) => void;
}) {
  const done = section.tasks.filter(
    (t) => checkedMap[`${currentDay}-${t.id}`],
  ).length;
  const total = section.tasks.length;
  const pct = Math.round((done / total) * 100);
  const allDone = done === total;

  return (
    <div
      className="rounded-2xl overflow-hidden card-lift transition-all duration-300 "
      style={{
        border: allDone ? "0.5px solid #e2e8f0" : "",
      }}
    >
      {/* Card header */}
      <div
        className="flex flex-wrap items-center justify-between px-5 pt-5 pb-3 gap-3"
        style={{ borderBottom: "1px solid #e2e8f0" }}
      >
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-white">
            <Emoji
              unified={section.emoji}
              size={22}
              emojiStyle={EmojiStyle.APPLE}
            />
          </div>
          <div>
            <h3
              className="font-bold text-base leading-tight"
              style={{ color: "#6E8A78" }}
            >
              {section.title}
            </h3>
            <p className="text-xs mt-0.5" style={{ color: "#64748b" }}>
              {section.description}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {allDone && (
            <span
              className="text-[10px] font-bold px-2.5 py-1 rounded-full"
              style={{
                background: "#e8f0ec",
                color: "#4a6252",
                border: "1px solid #c2d1c8",
              }}
            >
              ✓ مكتمل
            </span>
          )}
          <span
            className="text-[10px] font-bold px-3 py-1 rounded-full bg-white"
            style={{
              color: "#6E8A78",
              border: "1px solid #e2e8f0",
            }}
          >
            {section.tag}
          </span>
        </div>
      </div>

      {/* Mini progress bar */}

      {/* Tasks grid */}
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {section.tasks.map((task) => {
          const key = `${currentDay}-${task.id}`;
          const checked = !!checkedMap[key];
          return (
            <label
              key={task.id}
              className="flex items-start gap-3 p-3.5 rounded-xl cursor-pointer select-none transition-all duration-200"
              style={{
                background: checked
                  ? "rgb(241 245 249 / 0.8)"
                  : "rgb(241 245 249 / 0.8)", // bg-slate-100/80
                border: checked ? "0.5px solid #e2e8f0" : "0.5px solid #e2e8f0",
              }}
              onMouseEnter={(e) => {
                if (!checked) {
                  (e.currentTarget as HTMLElement).style.border =
                    "1.5px solid #6E8A78";
                  (e.currentTarget as HTMLElement).style.background = "#ffffff";
                }
              }}
              onMouseLeave={(e) => {
                if (!checked) {
                  (e.currentTarget as HTMLElement).style.border =
                    "1.5px solid #e2e8f0";
                  (e.currentTarget as HTMLElement).style.background =
                    "rgb(241 245 249 / 0.8)";
                }
              }}
            >
              {/* Custom checkbox */}
              <div className="mt-0.5 shrink-0">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={(e) => onCheck(key, e.target.checked)}
                  className="sr-only"
                />
                <div
                  className="w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-200 bg-white"
                  style={{
                    background: checked ? "#6E8A78" : "#ffffff",
                    borderColor: checked ? "#6E8A78" : "#cbd5e1",
                  }}
                >
                  {checked && (
                    <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2 6l3 3 5-5"
                        stroke="#ffffff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
              </div>

              <div>
                <span
                  className="text-sm font-bold block leading-snug transition-colors"
                  style={{
                    color: checked ? "#4a6252" : "#6E8A78",
                    textDecoration: checked ? "line-through" : "none",
                    textDecorationColor: "#6E8A78",
                  }}
                >
                  {task.label}
                </span>
                <span
                  className="text-[11px] mt-0.5 block"
                  style={{ color: "#64748b" }}
                >
                  {task.sub}
                </span>
              </div>
            </label>
          );
        })}
      </div>
    </div>
  );
}
