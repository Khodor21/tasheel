import "./globals.css";

export const metadata = {
  title: "منصة منارة روج",
  description: " منصة تهتمَ بخدمة القرآن الكريم وطلبتهِ وتسهيل حفظه وتدّبره وتدارسه.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="font-ibm bg-[#0B0F19] text-white">{children}</body>
    </html>
  );
}
