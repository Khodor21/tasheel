export default function Sidebar() {
  const days = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <aside className="w-full lg:w-1/3 flex flex-col gap-6">
      {/* Wisdom Quote */}
      <div className="rounded-3xl p-6 bg-white border-r-4 border-r-[#C9A84C] shadow-sm">
        <h3 className="font-bold text-[#C9A84C] text-lg mb-3 flex items-center gap-2">
          <span>💡</span> قبس من الحكمة
        </h3>
        <p className="text-[#1B4332] leading-relaxed font-medium">
          "إنَّ أحبَّ الأعمالِ إلى اللَّهِ أدومُها وإن قلَّ."
        </p>
      </div>

      {/* 30-Day Map */}
      <div className="rounded-3xl p-6 bg-white shadow-sm border border-[#e8e4de]">
        <div className="flex items-center justify-between border-b border-[#F5F0E8] pb-4 mb-4">
          <h3 className="font-bold text-[#1B4332] flex items-center gap-2">
            <span>📅</span> خريطة التحدي
          </h3>
        </div>

        <div className="grid grid-cols-5 sm:grid-cols-6 lg:grid-cols-5 gap-3">
          {days.map((day) => (
            <button
              key={day}
              className="w-11 h-11 rounded-xl flex items-center justify-center font-bold text-sm transition-all border border-[#dedad3] bg-[#F5F0E8] text-[#1B4332] hover:bg-[#C9A84C] hover:text-white hover:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C] focus:ring-offset-2 focus:ring-offset-[#FDFAF4]"
            >
              {day}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
