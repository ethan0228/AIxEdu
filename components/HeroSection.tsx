import { ArrowRight, BookOpenCheck, Cpu, Lightbulb, Network, Rocket } from "lucide-react";
import { identityTags } from "@/data/site";
import { FadeIn } from "./Motion";

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden pt-20">
      <div className="section-shell grid min-h-[calc(100vh-5rem)] items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <FadeIn>
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-primary shadow-sm">
            <Rocket size={16} />
            AI x Education x STEAM
          </div>
          <h1 className="mt-7 max-w-4xl text-4xl font-black leading-tight tracking-normal text-primary sm:text-5xl lg:text-6xl">
            以科技啟發學習，以教育培養未來
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            專注於 <span className="font-semibold text-accent">AI 教育</span>、數位學習、STEAM 課程與學校創新經營，推動科技融入國小教育現場。
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {identityTags.map((tag) => (
              <span key={tag} className="pill">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
              了解我的教育實踐
              <ArrowRight size={18} />
            </a>
            <a
              href="#publications"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-blue-200 bg-white px-6 py-4 font-semibold text-primary shadow-sm transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              查看文章與演講
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.12}>
          <div className="relative mx-auto aspect-square w-full max-w-[540px]">
            <div className="absolute inset-8 rounded-[2rem] border border-blue-100 bg-white/72 shadow-glow backdrop-blur">
              <div className="absolute left-10 top-10 grid size-20 place-items-center rounded-2xl bg-blue-600 text-white shadow-sm">
                <Cpu size={34} />
              </div>
              <div className="absolute right-9 top-20 grid size-16 place-items-center rounded-2xl bg-orange-500 text-white shadow-sm">
                <Lightbulb size={28} />
              </div>
              <div className="absolute bottom-12 left-12 grid size-16 place-items-center rounded-2xl bg-cyan-500 text-white shadow-sm">
                <BookOpenCheck size={28} />
              </div>
              <div className="absolute bottom-16 right-12 grid size-20 place-items-center rounded-2xl bg-emerald-500 text-white shadow-sm">
                <Network size={34} />
              </div>
              <div className="absolute left-1/2 top-1/2 size-32 -translate-x-1/2 -translate-y-1/2 rounded-full border-[18px] border-blue-100 bg-white shadow-inner" />
              <div className="absolute left-[31%] top-[34%] h-0.5 w-[38%] rotate-12 bg-blue-200" />
              <div className="absolute left-[28%] top-[59%] h-0.5 w-[38%] -rotate-12 bg-orange-200" />
              <div className="absolute left-[48%] top-[28%] h-[44%] w-0.5 rotate-12 bg-cyan-200" />
            </div>
            <div className="absolute left-0 top-12 size-24 rounded-[1.5rem] border border-orange-100 bg-orange-50/90" />
            <div className="absolute bottom-5 right-2 size-28 rounded-full border border-blue-100 bg-blue-50/90" />
            <div className="absolute right-16 top-0 h-16 w-36 rounded-full border border-cyan-100 bg-cyan-50/80" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
