"use client";
import { motion } from "framer-motion";
import { FaBookOpen, FaBrain, FaChartLine } from "react-icons/fa";

const features = [
  {
    icon: <FaBookOpen />,
    title: "خطط حفظ ذكية",
    desc: "تنظيم تلقائي يساعدك على الاستمرار دون ضغط",
  },
  {
    icon: <FaBrain />,
    title: "تعلم بفهم",
    desc: "ربط الحفظ بالفهم لتثبيت أقوى",
  },
  {
    icon: <FaChartLine />,
    title: "تتبع تقدمك",
    desc: "شاهد تطورك يومًا بعد يوم",
  },
];

export default function Features() {
  return (
    <section className="px-6 md:px-16 py-20">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            className="p-6 border border-gray-800 rounded-xl bg-[#0F1424]"
          >
            <div className="text-xl mb-4">{f.icon}</div>
            <h3 className="font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-400 text-sm">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
