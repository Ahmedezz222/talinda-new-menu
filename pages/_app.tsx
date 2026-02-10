import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Image from "next/image";
import { LanguageProvider, useLanguage } from "@/components/LanguageContext";

function AppShell({ Component, pageProps }: AppProps) {
  const { language, setLanguage } = useLanguage();
  const isArabic = language === "ar";

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      <header className="border-b border-amber-500/40 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-full border border-amber-400/60 bg-slate-900 shadow-[0_0_20px_rgba(251,191,36,0.6)] sm:h-14 sm:w-14">
              <Image
                src="/talinda.png"
                alt="Talinda House - Make Memory"
                fill
                sizes="56px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-amber-300">
                {isArabic ? "رمضان كريم" : "Ramadan Kareem"}
              </span>
              <span className="text-base font-semibold tracking-tight text-slate-50 sm:text-lg">
                Talinda House
              </span>
              <span className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-amber-100">
                {isArabic ? "ذكريات لا تُنسى" : "Make Memory"}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden flex-col text-right text-[0.65rem] leading-relaxed text-amber-100/80 sm:flex">
              <span>{isArabic ? "أوقات خاصة للإفطار والسحور" : "Special Iftar & Suhoor hours"}</span>
              <span className="text-amber-300">
                {isArabic ? "احجز طاولتك لليلة رمضانية مميزة" : "Reserve your table for a blessed evening"}
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-amber-400/40 bg-slate-900/80 p-1 text-xs sm:text-sm">
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`rounded-full px-3 py-1 font-medium transition ${
                  language === "en"
                    ? "bg-amber-300 text-slate-950 shadow-sm"
                    : "text-amber-200 hover:text-amber-100"
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage("ar")}
                className={`rounded-full px-3 py-1 font-medium transition ${
                  language === "ar"
                    ? "bg-amber-300 text-slate-950 shadow-sm"
                    : "text-amber-200 hover:text-amber-100"
                }`}
              >
                AR
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-6 sm:py-10">
        <div className="rounded-3xl border border-amber-400/20 bg-slate-900/60 p-3 shadow-[0_0_40px_rgba(15,23,42,0.9)] sm:p-4">
          <Component {...pageProps} />
        </div>
      </main>

      <footer className="border-t border-amber-500/30 bg-slate-950/90 py-4 text-xs text-amber-100/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 sm:flex-row">
          
          <p className="text-[0.7rem] text-amber-200/90">
            {isArabic
              ? ".يضاف 12% خدمة"
              : "12% service fee is added."}
          </p>
          <p>
            &copy; {new Date().getFullYear()} Talinda Restaurant.{" "}
            {isArabic ? "نتمنى لكم رمضاناً مباركاً." : "Wishing you a blessed Ramadan."}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default function App(props: AppProps) {
  return (
    <LanguageProvider>
      <AppShell {...props} />
    </LanguageProvider>
  );
}
