"use client";

import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import {
  FiCheckCircle,
  FiCircle,
  FiChevronRight,
  FiArrowRight,
} from "react-icons/fi";
const categoryData = {
  tafsir: {
    label: "مساق التفسير",
    description:
      "مخلصات تفسيرية موثوقة تأخذك عبر معاني القرآن سورةً سورة، بأسلوب مركّز وميسّر.",
    lessons: [
      { title: "مخلص تفسير سورة البقرة", completed: true },
      { title: "مخلص تفسير سورة آل عمران", completed: true },
      { title: "مخلص تفسير سورة النساء", completed: false },
      { title: "مخلص تفسير جزء بس", completed: true },
      { title: "مخلص تفسير الحواميم", completed: false },
      { title: "مخلص تفسير جزء عم", completed: false },
    ],
  },
  hifz: {
    label: "مساق الحفظ",
    description:
      "خطة حفظ منهجية تساعدك على إتقان حفظ القرآن الكريم بخطوات واضحة ومتدرجة.",
    lessons: [
      { title: "الجزء الأول - الفاتحة والبقرة", completed: true },
      { title: "الجزء الثاني", completed: true },
      { title: "الجزء الثالث", completed: false },
      { title: "الجزء الرابع", completed: false },
    ],
  },
  tilawa: {
    label: "مساق التلاوة",
    description:
      "دروس عملية لتحسين تلاوتك وضبط أحكام التجويد الأساسية من المخارج إلى الصفات.",
    lessons: [
      { title: "مقدمة في التجويد", completed: true },
      { title: "أحكام النون الساكنة والتنوين", completed: true },
      { title: "أحكام الميم الساكنة", completed: false },
      { title: "المدود وأنواعها", completed: false },
      { title: "أحكام الراء واللام", completed: false },
    ],
  },
  muraja3a: {
    label: "مساق المراجعة",
    description:
      "نظام مراجعة ذكي يضمن تثبيت ما حفظته وعدم نسيانه على المدى الطويل.",
    lessons: [
      { title: "مراجعة الأجزاء الأولى", completed: true },
      { title: "مراجعة جزء عم", completed: true },
      { title: "مراجعة جزء تبارك", completed: false },
      { title: "مراجعة الحزب الأخير", completed: false },
    ],
  },
};

// ─── Animations ───────────────────────────────────────────────────────────────

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function CategoryPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id;

  const category = categoryData[id];

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center text-foreground/50 text-lg">
        المساق غير موجود
      </div>
    );
  }

  const completedCount = category.lessons.filter((l) => l.completed).length;
  const totalCount = category.lessons.length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  return (
    <main className="min-h-screen bg-background px-6 md:px-16 py-14" dir="rtl">
      {/* Back */}
      <motion.button
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        onClick={() => router.back()}
        className="flex items-center gap-2 text-sm text-foreground/50 hover:text-primary transition mb-10 group"
      >
        <FiChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        العودة إلى المساقات
      </motion.button>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-10"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-3">
          {category.label}
        </h1>
        <p className="text-foreground/60 text-sm md:text-base max-w-xl">
          {category.description}
        </p>

        {/* Progress bar */}
        <div className="mt-6 max-w-sm">
          <div className="flex justify-between text-xs text-foreground/50 mb-2">
            <span>
              {completedCount} من {totalCount} دروس مكتملة
            </span>
            <span>{progressPercent}%</span>
          </div>
          <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="h-full rounded-full bg-primary"
            />
          </div>
        </div>
      </motion.div>

      {/* Lessons list */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-4 max-w-2xl"
      >
        {category.lessons.map((lesson, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            whileHover={{ x: -4 }}
            className={`group flex items-center justify-between gap-4 rounded-2xl border px-5 py-4 transition cursor-pointer
              ${
                lesson.completed
                  ? "border-primary/20 bg-primary/5 hover:bg-primary/10"
                  : "border-gray-200 bg-white hover:border-primary/30 hover:shadow-sm"
              }`}
          >
            {/* Right side: icon + title */}
            <div className="flex items-center gap-3">
              {lesson.completed ? (
                <FiCheckCircle className="w-5 h-5 text-primary shrink-0" />
              ) : (
                <FiCircle className="w-5 h-5 text-gray-300 shrink-0" />
              )}
              <div>
                <p
                  className={`text-sm font-medium leading-snug ${
                    lesson.completed ? "text-primary" : "text-foreground"
                  }`}
                >
                  {lesson.title}
                </p>
                <span
                  className={`text-xs mt-0.5 inline-block ${
                    lesson.completed ? "text-primary/60" : "text-foreground/40"
                  }`}
                >
                  {lesson.completed ? "مكتمل" : "غير مكتمل"}
                </span>
              </div>
            </div>

            {/* Left side: arrow */}
            <FiArrowRight className="w-4 h-4 text-foreground/20 group-hover:text-primary transition shrink-0 rotate-180" />
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}
