import { Quote } from "lucide-react";
import { insights } from "@/data/site";
import { FadeIn } from "./Motion";
import { SectionHeader } from "./SectionHeader";

export function InsightsSection() {
  return (
    <section id="insights">
      <div className="section-shell">
        <FadeIn>
          <SectionHeader
            kicker="Insights"
            title="教育觀點"
            description="面對科技快速變化，教育現場更需要清楚的價值判斷與能落地的課程設計。"
            centered
          />
        </FadeIn>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {insights.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.05} className="soft-card">
              <Quote className="text-accent" size={28} />
              <h3 className="mt-5 text-xl font-bold leading-8 text-slate-900">{item.title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{item.description}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
