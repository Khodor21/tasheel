"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="text-center px-6 md:px-16 pt-24">
      {" "}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold text-primary leading-tight max-w-3xl mx-auto"
      >
        طريقك الأقرب لحفظ القرآن الكريم وتدّبـــره
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-6 max-w-xl mx-auto text-sm md:text-base text-foreground"
      >
        تجربة متكاملة تساعدك على التلاوة والحفظ والمراجعة بطريقة ذكية، لتبقى على
        صلة دائمة بكلام الله
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-8"
      >
        <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition">
          سجّل دخول
        </button>
      </motion.div>
    </section>
  );
}
