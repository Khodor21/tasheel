import { IBM_Plex_Sans_Arabic } from "next/font/google"; // Recommended for Arabic
import "./globals.css";

// 1. Viewport Export (Newest Standard)
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

// 2. Comprehensive Metadata Object
export const metadata = {
  metadataBase: new URL("https://manarat-rooh.vercel.app"),
  title: {
    default: "منصة منارة روح | لخدمة القرآن الكريم",
    template: "%s | منارة روح", // Automatically adds suffix to sub-pages
  },
  description:
    "منصة منارة روح التعليمية: وجهتكم الأولى لخدمة القرآن الكريم، تسهيل حفظه، تدبره، وتدارسه عبر دورات متخصصة وبرامج تعليمية متطورة لكل الأعمار.",
  keywords: [
    "قرآن كريم",
    "تحفيظ القرآن",
    "تدبر القرآن",
    "تعليم إسلامي",
    "منصة تعليمية",
  ],
  authors: [{ name: "Khodor Hasan" }],

  // Open Graph (Facebook, WhatsApp, LinkedIn)
  openGraph: {
    title: "منصة منارة روح - خياركم لتعلم وتدبر القرآن",
    description:
      "انضم إلينا في رحلة إيمانية لتسهيل حفظ القرآن الكريم وتدبر معانيه.",
    url: "https://manarat-ruj.com",
    siteName: "منارة روح",
    images: [
      {
        url: "/og-image.png", // Place this in your /public folder
        width: 1200,
        height: 630,
        alt: "شعار منصة منارة روح",
      },
    ],
    locale: "ar_SA",
    type: "website",
  },

  // Twitter (X) Card
  twitter: {
    card: "summary_large_image",
    title: "منصة منارة روح | لخدمة القرآن الكريم",
    description: "تسهيل حفظ وتدبر القرآن الكريم عبر برامج تعليمية تفاعلية.",
    images: ["/og-image.png"],
  },

  // Robots & Indexing
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Icons (Favicon & Apple Touch)
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="font-ibm ">
        <main>{children}</main>
      </body>
    </html>
  );
}
