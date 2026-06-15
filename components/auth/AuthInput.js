"use client";

import { useState } from "react";
import { Emoji, EmojiStyle } from "emoji-picker-react";

export default function AuthInput({
  label,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  required,
  autoComplete,
  hint,
}) {
  const [focused, setFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <div className="mb-3 md:mb-5">
      <label
        className="block text-[22px] font-medium mb-1.5"
        style={{ color: "#4a6252" }}
      >
        {label}
      </label>

      <div className="relative">
        <input
          type={inputType}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          autoComplete={autoComplete}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full rounded-sm text-[16px] outline-none transition-all duration-300 placeholder:text-slate-400 font-medium"
          style={{
            background: focused ? "#ffffff" : "rgb(241 245 249 / 0.7)",
            border: `1.5px solid ${focused ? "#6E8A78" : "transparent"}`,
            padding: isPassword ? "16px 20px 16px 56px" : "16px 20px", // Bigger tap targets
            color: "#4a6252",
            boxShadow: focused ? "0 4px 12px rgba(110,138,120,0.08)" : "none",
            textAlign: "right",
            direction: "rtl",
          }}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full transition-all hover:bg-slate-100 outline-none"
            title={showPassword ? "إخفاء كلمة المرور" : "إظهار كلمة المرور"}
          >
            {/* 1f648 = 🙈 Monkey, 1f441 = 👁️ Eye */}
            <Emoji
              unified={showPassword ? "1f648" : "1f441"}
              size={22}
              emojiStyle={EmojiStyle.APPLE}
            />
          </button>
        )}
      </div>

      {hint && (
        <p
          className="text-[13px] mt-2 font-medium"
          style={{ color: "#94a3b8" }}
        >
          {hint}
        </p>
      )}
    </div>
  );
}
