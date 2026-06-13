export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md border border-[#e8e4de] rounded-3xl p-6 shadow-sm transition-all">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo and Title */}
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div>
            <h1 className="text-2xl font-bold text-[#1B4332] flex items-center gap-2">
              منارة روح
              <span className="text-xs font-normal bg-[#F5F0E8] text-[#1B4332] px-3 py-1 rounded-full">
                رحلة الـ 30 يوماً
              </span>
            </h1>
            <p className="text-sm text-[#6b6b69] mt-1">
              جدولك اليومي المنظم لبناء العادات
            </p>
          </div>
        </div>

        {/* Global Progress Tracking */}
        <div className="w-full md:w-96 bg-[#F5F0E8] p-4 rounded-2xl flex flex-col gap-2 border border-[#dedad3]">
          <div className="flex justify-between text-sm font-bold text-[#1B4332]">
            <span>إنجاز التحدي الإجمالي</span>
            <span className="text-[#C9A84C]">0%</span>
          </div>
          <div className="w-full bg-[#dedad3] h-2.5 rounded-full overflow-hidden">
            <div
              className="bg-[#C9A84C] h-full rounded-full transition-all duration-500"
              style={{ width: "0%" }}
            ></div>
          </div>
          <div className="flex justify-between text-xs text-[#6b6b69] font-medium mt-1">
            <span>0 من أصل 30 يوماً مكتملة</span>
            <button className="text-red-500 hover:text-red-700 transition">
              إعادة تهيئة
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
