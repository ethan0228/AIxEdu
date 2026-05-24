import { expertiseItems } from "@/data/site";
import { FadeIn } from "./Motion";
import { IconMap } from "./IconMap";
import { SectionHeader } from "./SectionHeader";

export function ExpertiseSection() {
  return (
    <section id="expertise">
      <div className="section-shell">
        <FadeIn>
          <SectionHeader
            kicker="Expertise"
            title="專長"
            description="把科技議題轉譯為學校現場可推動的策略、課程與教師專業成長路徑。"
            centered
          />
        </FadeIn>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {expertiseItems.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.04} className="soft-card">
              <div className="mb-5 grid size-14 place-items-center rounded-2xl bg-blue-50 text-primary">
                <IconMap name={item.icon} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
