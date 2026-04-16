"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Player } from "@lottiefiles/react-lottie-player";

const courses = [
  {
    id: "course-1",
    title: "مراجعة وتدبر سورة البقرة",
    description:
      "مساق مخصص لمراجعة وتدبر سورة البقرة خلال شهر كامل بأسلوب سهل ومنظم",
    cta: "ابدأ الآن",
    image: "/courses/course-1.svg",
  },
  {
    id: "course-2",
    title: "مراجعة وفهم سور آل حم",
    description:
      "مساق مخصص لمراجعة وفهم سور آل حم خلال شهر أسبوعين بطريقة منظمة ومنهجية",
    cta: "ابدأ الآن",
    image: "/courses/course-2.svg",
  },
];

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-primary py-8 mt-16 text-center">
        <p className="text-sm text-white/90 mb-2">البرامج</p>
        <div className="flex text-xl md:text-2xl font-bold text-white">
          مجموعة متنوعة من البرامج المتميزة{" "}
          <Player
            autoplay
            loop
            src="/fire.json"
            style={{ width: 40, height: 40 }}
          />{" "}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-6 mt-8 mb-10 text-sm">
        <button className="text-gray-400">دراسة ذاتية</button>
        <button className="text-primary border-b-2 border-primary pb-1">
          دراسة تفاعلية
        </button>
      </div>

      {/* Grid */}
      <div className="px-4 md:px-10 lg:px-20 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition"
            >
              {/* Image */}
              <div className="relative w-full aspect-[650/370] rounded-t-2xl overflow-hidden bg-gray-50">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col gap-2">
                <h3 className="text-lg font-bold text-primary leading-snug">
                  {course.title}
                </h3>

                <p className="text-sm text-foreground leading-relaxed">
                  {course.description}
                </p>

                {/* CTA */}
                <button className="mt-auto w-full bg-foreground text-white py-2 rounded-lg text-sm hover:opacity-90 transition">
                  {course.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
