import { siteConfig } from "@/config/site";
import Reveal from "@/components/Reveal";
import Frame from "@/components/Frame";

export default function Hero() {
  const { hero } = siteConfig;

  return (
    <section className="relative mx-auto max-w-[1400px] px-5 pb-20 pt-10 sm:pb-28 sm:pt-16">
      <Reveal>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] opacity-50">
          {hero.eyebrow}
        </span>
      </Reveal>

      <Reveal delay={80}>
        <h1 className="mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.06] tracking-tight sm:text-6xl lg:text-7xl">
          {hero.headline}
        </h1>
      </Reveal>

      <div className="mt-10 grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
        <Reveal delay={150}>
          <div>
            <p className="max-w-sm text-base leading-relaxed opacity-70">{hero.sub}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-ink-900 px-7 py-3.5 font-semibold text-ink-50 transition-opacity hover:opacity-85 dark:bg-ink-100 dark:text-ink-900"
              >
                {hero.primaryCta}
              </a>
              <a
                href="#work"
                className="inline-flex items-center justify-center rounded-full border border-current/20 px-7 py-3.5 font-semibold transition-colors hover:bg-current/5"
              >
                {hero.secondaryCta}
              </a>
            </div>
          </div>
        </Reveal>

        {/* Большой журнальный кадр в духе travel-портфолио. */}
        <Reveal delay={220}>
          <div className="relative">
            <Frame seed="hero" index={0} ratio="landscape" className="min-h-[420px] sm:min-h-[560px]" />
            <div className="pointer-events-none absolute inset-x-5 bottom-5 flex items-end justify-between text-white sm:inset-x-8 sm:bottom-8">
              <span className="text-[10px] uppercase tracking-[0.24em] text-white/75">Свадебные истории · Москва</span>
              <span className="font-display text-2xl italic text-white/90">живой свет</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
