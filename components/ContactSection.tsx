import { Mail, Mic, Send } from "lucide-react";
import { FadeIn } from "./Motion";

export function ContactSection() {
  return (
    <section id="contact" className="section-shell">
      <FadeIn>
        <div className="overflow-hidden rounded-[2rem] bg-primary px-6 py-12 text-white shadow-glow sm:px-10 lg:px-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-orange-200">Contact</p>
              <h2 className="text-3xl font-bold sm:text-4xl">歡迎交流與合作</h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-blue-50">
                如果你正在規劃 AI 教育、數位學習、STEAM 課程、教師研習或學校創新發展，歡迎與我聯繫，一起探索教育的下一步。
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 font-semibold text-primary transition hover:-translate-y-0.5 hover:bg-blue-50"
              >
                <Mail size={18} />
                聯絡我
              </a>
              <a
                href="mailto:hello@example.com?subject=邀請演講 / 工作坊"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/40 px-6 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:border-orange-200 hover:text-orange-100"
              >
                <Mic size={18} />
                邀請演講 / 工作坊
                <Send size={16} />
              </a>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
