"use client";
import { useState, useEffect, useCallback } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Workspace from "./components/Workspace";

const STORAGE_KEY = "manara-rouh-v1";
const TASKS_PER_DAY = 14; // 3+5+3+3

/* ─── Helpers ─────────────────────────────────────────── */
function computeDayProgress(
  checkedMap: Record<string, boolean>,
  day: number,
): number {
  const done = Object.keys(checkedMap).filter(
    (k) => k.startsWith(`${day}-`) && checkedMap[k],
  ).length;
  return Math.round((done / TASKS_PER_DAY) * 100);
}

function computeGlobalProgress(checkedMap: Record<string, boolean>): {
  pct: number;
  completedDays: number;
} {
  let completedDays = 0;
  let totalDone = 0;
  for (let d = 1; d <= 30; d++) {
    const pct = computeDayProgress(checkedMap, d);
    if (pct === 100) completedDays++;
    totalDone += pct;
  }
  return { pct: Math.round(totalDone / 30), completedDays };
}

/* ─── Component ────────────────────────────────────────── */
export default function App() {
  const [currentDay, setCurrentDay] = useState<number>(1);
  const [checkedMap, setCheckedMap] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed.checkedMap) setCheckedMap(parsed.checkedMap);
        if (parsed.currentDay) setCurrentDay(parsed.currentDay);
      }
    } catch (_) {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ checkedMap, currentDay }),
      );
    } catch (_) {}
  }, [checkedMap, currentDay]);

  const handleCheck = useCallback((key: string, checked: boolean) => {
    setCheckedMap((prev) => ({ ...prev, [key]: checked }));
  }, []);

  const handleReset = useCallback(() => {
    if (
      window.confirm("هل أنتِ متأكدة من إعادة التهيئة؟ سيتم حذف جميع البيانات.")
    ) {
      setCheckedMap({});
      setCurrentDay(1);
    }
  }, []);

  const dayProgress: Record<number, number> = {};
  for (let d = 1; d <= 30; d++) {
    dayProgress[d] = computeDayProgress(checkedMap, d);
  }

  const { pct: totalProgress, completedDays } =
    computeGlobalProgress(checkedMap);

  return (
    /*
     * Page background: warm off-white beige — NOT green.
     * A very subtle gold-tinted gradient grounds the whole layout.
     */
    <div
      className="min-h-screen"
      dir="rtl"
      style={{
        background:
          "linear-gradient(160deg, #fffefd 0%, #fdfaf4 50%, #faf5e8 100%)",
      }}
    >
      <Header
        totalProgress={totalProgress}
        completedDays={completedDays}
        onReset={handleReset}
      />

      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6"
        style={{ paddingTop: "calc(var(--header-h, 72px) + 28px)" }}
      >
        <main className="flex flex-col lg:flex-row gap-6 w-full items-start">
          <Sidebar
            currentDay={currentDay}
            dayProgress={dayProgress}
            onSelectDay={setCurrentDay}
          />
          <Workspace
            currentDay={currentDay}
            checkedMap={checkedMap}
            onCheck={handleCheck}
          />
        </main>
      </div>
    </div>
  );
}
