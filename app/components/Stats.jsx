export default function Stats() {
  const stats = [
    { value: "10K+", label: "مستخدم نشط" },
    { value: "500+", label: "خطة حفظ" },
    { value: "95%", label: "نسبة الالتزام" },
  ];

  return (
    <section className="px-6 md:px-16 pb-20">
      <div className="max-w-4xl mx-auto grid grid-cols-3 text-center border-t border-gray-800 pt-10">
        {stats.map((s, i) => (
          <div key={i}>
            <h3 className="text-xl font-bold">{s.value}</h3>
            <p className="text-gray-400 text-sm mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
