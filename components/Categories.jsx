"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const categories = [
  { img: "/Category-1.svg" },
  { img: "/Category-2.svg" },
  { img: "/Category-3.svg" },
  { img: "/Category-4.svg" },
];

export default function Categories() {
  return (
    <section className="px-6 md:px-16 py-20">
      {/* Header (like features style) */}
      <div className="max-w-2xl mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
          تجربة متكاملة تساعدك على الارتقاء بعلاقتك مع القرآن
        </h2>
        <p className="text-foreground/70 text-sm md:text-base">
          كل ما تحتاجه من أدوات الحفظ، التلاوة، الفهم والمراجعة في مكان واحد
          مصمم بأسلوب بسيط وفعّال يدعم استمراريتك يومًا بعد يوم.
        </p>
      </div>

      {/* Categories */}
      <div className="max-w-7xl">
        <div className="flex md:grid md:grid-cols-4 gap-6 overflow-x-auto md:overflow-visible no-scrollbar">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="min-w-[260px] md:min-w-0 rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition"
            >
              <Image
                src={cat.img}
                width={400}
                height={400}
                alt="category"
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
