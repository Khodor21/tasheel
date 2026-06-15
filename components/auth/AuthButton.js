"use client";

export default function AuthButton({ children, loading, disabled }) {
  const isDisabled = loading || disabled;

  return (
    <button
      type="submit"
      disabled={isDisabled}
      className={`w-full flex items-center justify-center gap-3 rounded-2xl py-4 text-[17px] font-bold tracking-wide transition-all duration-300 outline-none
        ${
          isDisabled
            ? "cursor-not-allowed opacity-70"
            : "cursor-pointer hover:shadow-lg hover:-translate-y-0.5"
        }
      `}
      style={{
        background: isDisabled ? "#9cae9f" : "#6E8A78",
        color: "#ffffff",
      }}
    >
      {loading && (
        <span
          className="inline-block w-5 h-5 rounded-full border-2 animate-spin shrink-0"
          style={{
            borderColor: "rgba(255, 255, 255, 0.3)",
            borderTopColor: "#ffffff",
          }}
        />
      )}
      <span>{loading ? "جاري التحميل..." : children}</span>
    </button>
  );
}
