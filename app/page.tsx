"use client";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
// Adjust this path if your supabase client is located elsewhere
import { createClient } from "../lib/supabase/client";
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
  const router = useRouter();
  const supabase = createClient();

  const [isAuthChecking, setIsAuthChecking] = useState(true);
  const [currentDay, setCurrentDay] = useState<number>(1);
  const [checkedMap, setCheckedMap] = useState<Record<string, boolean>>({});

  // ✅ Logic fix: Check if user is authenticated before showing the dashboard
  useEffect(() => {
    const checkAuth = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        router.push("/auth/register");
      } else {
        setIsAuthChecking(false);
      }
    };

    checkAuth();
  }, [router, supabase]);

  useEffect(() => {
    if (isAuthChecking) return; // Don't load local storage until auth is verified

    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed.checkedMap) setCheckedMap(parsed.checkedMap);
        if (parsed.currentDay) setCurrentDay(parsed.currentDay);
      }
    } catch (_) {}
  }, [isAuthChecking]);

  useEffect(() => {
    if (isAuthChecking) return;

    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ checkedMap, currentDay }),
      );
    } catch (_) {}
  }, [checkedMap, currentDay, isAuthChecking]);

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

  // Show a beautifully themed loading spinner while checking authentication status
  if (isAuthChecking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dir-rtl">
        <span
          className="inline-block w-10 h-10 rounded-full border-4 animate-spin shrink-0"
          style={{
            borderColor: "rgba(110,138,120,0.15)",
            borderTopColor: "#6E8A78",
          }}
        />
      </div>
    );
  }

  const dayProgress: Record<number, number> = {};
  for (let d = 1; d <= 30; d++) {
    dayProgress[d] = computeDayProgress(checkedMap, d);
  }

  const { pct: totalProgress, completedDays } =
    computeGlobalProgress(checkedMap);

  return (
    <div className="min-h-screen bg-slate-50/50" dir="rtl">
      <Header
        totalProgress={totalProgress}
        completedDays={completedDays}
        onReset={handleReset}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 pt-[160px] md:pt-[120px]">
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
