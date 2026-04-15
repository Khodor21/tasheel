"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="text-center px-6 md:px-16 pt-24 md:pt-28">
      {" "}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-primary leading-tight max-w-3xl mx-auto"
      >
        طريقك الأقرَب لحفـــظ القرآن الكريم وتدّبـــره
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-3 max-w-xl mx-auto text-sm md:text-base text-foreground"
      >
        تجربة متكاملة تساعدك على والحفظ والمراجعة بطريقة ذكية، لتبقى على صلة
        دائمة بالقرآن
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-8 flex items-center justify-center gap-4 flex-wrap"
      >
        {/* Register Button */}
        <button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary text-white font-semibold shadow-md hover:scale-105 transition">
          <span className="text-xs">سجّل الآن</span>

          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white text-red-700">
            →
          </span>
        </button>{" "}
        {/* Telegram Button */}
        <a
          href="https://t.me/your_channel"
          target="_blank"
          className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-400 text-black bg-transparent hover:bg-gray-100 transition"
        >
          <span className="text-xs font-medium">قناة التلغرام</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M9.04 15.56 8.9 19.5c.31 0 .45-.13.61-.29l2.93-2.8 6.07 4.44c1.11.61 1.9.29 2.18-1.03l3.96-18.6h.01c.34-1.59-.57-2.21-1.65-1.81L1.64 9.27c-1.56.61-1.54 1.48-.27 1.88l5.74 1.79 13.32-8.4c.63-.38 1.2-.17.73.21" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
