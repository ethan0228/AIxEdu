import { CheckCircle2 } from "lucide-react";
import { aboutTags } from "@/data/site";
import { FadeIn } from "./Motion";
import { SectionHeader } from "./SectionHeader";

export function AboutSection() {
  return (
    <section id="about" className="bg-white/60">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <FadeIn>
          <SectionHeader
            kicker="About"
            title="關於我"
            description="長期投入國小教育現場，關注 AI、數位學習、Maker 教育與 STEAM 課程如何真正進入學生的學習經驗。"
          />
        </FadeIn>

        <FadeIn delay={0.1} className="soft-card">
          <div className="space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
            <p>
              我相信科技教育的起點不是設備，而是學生面對問題時的好奇、判斷與創造能力。從學校經營到課程實作，我持續思考如何讓 AI 與數位工具成為學習的延伸，而不是教學的裝飾。
            </p>
            <p>
              教育實踐應該 <span className="font-semibold text-accent">從問題出發</span>、從實作理解、從科技延伸學習，讓孩子在真實任務中建立跨域整合與主動探究的能力。
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {aboutTags.map((tag) => (
              <span key={tag} className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700">
                <CheckCircle2 size={16} className="text-accent" />
                {tag}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
