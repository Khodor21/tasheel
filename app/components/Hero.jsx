"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

const categories = [
  { img: "/Category-1.svg", id: "tafsir" },
  { img: "/Category-2.svg", id: "hifz" },
  { img: "/Category-3.svg", id: "tilawa" },
  { img: "/Category-4.svg", id: "muraja3a" },
];

export default function Categories() {
  const router = useRouter();

  return (
    <section className="px-6 md:px-16 py-20">
      {/* Header */}
      <div className="max-w-2xl mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
          المساقات المتاحة في المنصة
        </h2>
        <p className="text-foreground/70 text-sm md:text-base">
          اختر المساق الذي يناسبك وابدأ رحلتك — كل مساق مُصمَّم ليأخذك خطوة خطوة
          نحو هدف واضح في حفظ القرآن وفهمه وتلاوته.
        </p>
      </div>

      {/* Categories */}
      <div className="max-w-7xl">
        <div className="flex md:grid md:grid-cols-4 gap-6 overflow-x-auto md:overflow-visible no-scrollbar">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              onClick={() => router.push(`/categories/${cat.id}`)}
              className="min-w-[260px] md:min-w-0  overflow-hidden transition cursor-pointer"
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
