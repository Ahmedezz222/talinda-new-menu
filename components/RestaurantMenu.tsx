import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "./LanguageContext";
import { menuData } from "./menuData";

export type { MenuCategory } from "./menuData";

const RestaurantMenu: React.FC = () => {
  const { language } = useLanguage();
  const categories = menuData[language];
  const [activeCategoryId, setActiveCategoryId] = useState<number | null>(categories[0]?.id ?? null);
  const activeButtonRef = useRef<HTMLButtonElement>(null);
  const visibleCategories =
    activeCategoryId == null
      ? categories
      : categories.filter((c) => c.id === activeCategoryId);

  useEffect(() => {
    activeButtonRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [activeCategoryId]);

  return (
    <section
      className="w-full text-slate-50"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <div className="mx-auto max-w-5xl px-2 py-6 sm:px-4 sm:py-10">
        <header className="mb-6 flex flex-col items-center gap-3 sm:mb-8">
          <div className="text-center">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-amber-300">
              {language === "en" ? "Ramadan Specials" : "قائمة رمضان المميزة"}
            </p>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight text-amber-50 sm:text-3xl lg:text-4xl">
              {language === "en"
                ? "Share a Blessed Meal with Family & Friends"
                : "شارك وجبة عامرة بالبركة مع العائلة والأصدقاء"}
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-xs text-amber-100/80 sm:text-sm">
              {language === "en"
                ? "A warm selection of dishes crafted for cozy Iftar nights and late Suhoor gatherings."
                : "تشكيلة دافئة من الأطباق المحضّرة لليالي الإفطار والسحور الرمضانية المميزة."}
            </p>
          </div>

          <nav
            className="sticky top-2 z-10 -mx-2 w-full overflow-x-auto overflow-y-hidden rounded-2xl border border-amber-400/25 bg-gradient-to-b from-slate-900/98 to-slate-950/98 p-3 shadow-[0_4px_24px_rgba(0,0,0,0.4),0_0_0_1px_rgba(251,191,36,0.08)] backdrop-blur-md scroll-smooth sm:top-3 sm:p-3.5 [scrollbar-gutter:stable] [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-slate-800/50 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-amber-500/40 [&::-webkit-scrollbar-thumb]:hover:bg-amber-500/60"
            aria-label={language === "en" ? "Menu categories" : "تصنيفات القائمة"}
          >
            <div className="flex w-max min-w-full justify-center gap-2 sm:gap-3">
            {categories.map((category) => {
              const isActive = activeCategoryId === category.id;
              return (
                <button
                  key={category.id}
                  ref={isActive ? activeButtonRef : undefined}
                  type="button"
                  onClick={() => setActiveCategoryId(category.id)}
                  className={`
                    shrink-0
                    relative rounded-xl px-5 py-2.5 text-sm font-semibold tracking-tight transition-all duration-200
                    sm:px-6 sm:py-3 sm:text-base
                    ${isActive
                      ? "bg-amber-400 text-slate-950 shadow-[0_0_20px_rgba(251,191,36,0.45),inset_0_1px_0_rgba(255,255,255,0.2)] ring-2 ring-amber-300/80 ring-offset-2 ring-offset-slate-900 scale-[1.02]"
                      : "text-amber-100/95 bg-slate-800/60 hover:bg-slate-700/70 hover:text-amber-50 hover:ring-1 hover:ring-amber-400/40 active:scale-[0.98]"
                    }
                  `}
                >
                  {category.name}
                </button>
              );
            })}
            </div>
          </nav>
        </header>

        <div className="space-y-6">
          {visibleCategories.map((category) => (
            <section
              key={category.id}
              aria-labelledby={`category-${category.id}`}
            >
              <div className="mb-2 flex items-baseline justify-between gap-4 border-b border-amber-400/25 pb-1.5">
                <h2
                  id={`category-${category.id}`}
                  className="text-sm font-semibold tracking-tight text-amber-100 sm:text-base"
                >
                  {category.name}
                </h2>
              </div>

              <ul className="space-y-3">
                {category.items.map((item) => (
                  <li
                    key={item.id}
                    className="flex gap-3 rounded-2xl bg-slate-900/80 p-3 shadow-sm ring-1 ring-amber-400/20 backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-slate-900 hover:shadow-[0_0_24px_rgba(251,191,36,0.35)]"
                  >
                    <div className="h-16 w-20 shrink-0 overflow-hidden rounded-xl border border-amber-400/30 bg-slate-800">
                      <img
                        src={item.image.src}
                        alt={item.image.alt}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-1">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-sm font-semibold text-amber-50 sm:text-base">
                          {item.name}
                        </h3>
                        <p className="shrink-0 text-sm font-semibold text-amber-300 sm:text-base">
                          {item.price}
                        </p>
                      </div>
                      {item.description ? (
                        <p className="text-[0.7rem] text-amber-100/80 sm:text-xs">
                          {item.description}
                        </p>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RestaurantMenu;
