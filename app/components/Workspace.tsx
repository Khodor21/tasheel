export default function Workspace() {
  return (
    <section className="w-full lg:w-2/3 flex flex-col gap-6">
      {/* Daily Header */}
      <div className="rounded-3xl p-6 bg-[#1B4332] text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shadow-md">
        <div>
          <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2">
            <span>🌟</span> جدول{" "}
            <span className="text-[#C9A84C]">اليوم الأول</span>
          </h2>
          <p className="text-[#F5F0E8] text-sm mt-2 opacity-90">
            تتبعي عباداتكِ لهذا اليوم بنية خالصة.
          </p>
        </div>
        <div className="bg-white/10 px-5 py-3 rounded-2xl text-center border border-white/20">
          <span className="text-xs text-[#F5F0E8] block font-medium mb-1">
            إنجاز اليوم
          </span>
          <span className="text-2xl font-extrabold text-[#C9A84C]">0%</span>
        </div>
      </div>

      {/* Tracking Cards Container */}
      <div className="space-y-6">
        {/* Adhkar Card Example */}
        <div className="rounded-3xl p-6 bg-white border border-[#e8e4de] shadow-sm">
          <div className="flex flex-wrap items-center justify-between mb-5 pb-4 border-b border-[#F5F0E8] gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-[#F5F0E8] p-3 rounded-xl text-xl">📿</div>
              <div>
                <h3 className="font-bold text-[#1B4332] text-lg">
                  قسم الأذكار اليومية
                </h3>
                <p className="text-sm text-[#6b6b69]">
                  طمأنينة لقلبك وصيانة ليومك
                </p>
              </div>
            </div>
            <span className="text-xs bg-[#F5F0E8] text-[#C9A84C] font-bold px-3 py-1.5 rounded-full">
              حصن المسلم
            </span>
          </div>

          {/* Checkboxes grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="flex items-start gap-4 p-4 bg-[#F5F0E8] hover:bg-[#e8e4de] rounded-2xl transition cursor-pointer border border-transparent hover:border-[#dedad3]">
              <input
                type="checkbox"
                id="adhkar_morning"
                className="mt-1 w-5 h-5 accent-[#C9A84C] rounded-md cursor-pointer"
              />
              <div>
                <span className="text-base font-bold text-[#1B4332] block">
                  أذكار الصباح
                </span>
                <span className="text-xs text-[#6b6b69] mt-1 block">
                  قوت القلوب وبداية النور
                </span>
              </div>
            </label>

            <label className="flex items-start gap-4 p-4 bg-[#F5F0E8] hover:bg-[#e8e4de] rounded-2xl transition cursor-pointer border border-transparent hover:border-[#dedad3]">
              <input
                type="checkbox"
                id="adhkar_evening"
                className="mt-1 w-5 h-5 accent-[#C9A84C] rounded-md cursor-pointer"
              />
              <div>
                <span className="text-base font-bold text-[#1B4332] block">
                  أذكار المساء
                </span>
                <span className="text-xs text-[#6b6b69] mt-1 block">
                  ختام اليوم بحفظ الله
                </span>
              </div>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}
