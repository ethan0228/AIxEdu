import { Clock3, Mic2, Users } from "lucide-react";
import { talks } from "@/data/site";
import { FadeIn } from "./Motion";
import { SectionHeader } from "./SectionHeader";

export function TalksSection() {
  return (
    <section id="talks" className="bg-white/60">
      <div className="section-shell">
        <FadeIn>
          <SectionHeader
            kicker="Talks"
            title="演講工作坊"
            description="適合學校行政、教師社群、跨領域課程團隊與教育行政單位的專題分享與實作工作坊。"
          />
        </FadeIn>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {talks.map((talk, index) => (
            <FadeIn key={talk.title} delay={index * 0.035} className="soft-card">
              <div className="flex gap-4">
                <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-blue-50 text-primary">
                  <Mic2 size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{talk.title}</h3>
                  <div className="mt-4 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
                    <span className="inline-flex items-center gap-2">
                      <Users size={16} className="text-accent" />
                      {talk.audience}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <Clock3 size={16} className="text-accent" />
                      {talk.duration}
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
