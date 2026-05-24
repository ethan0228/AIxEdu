import { BookMarked } from "lucide-react";
import { publications } from "@/data/site";
import { FadeIn } from "./Motion";
import { SectionHeader } from "./SectionHeader";

export function PublicationsSection() {
  return (
    <section id="publications">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <FadeIn>
          <SectionHeader
            kicker="Publications"
            title="文章出版"
            description="持續以教育現場經驗為基礎，整理 AI、數位學習、STEAM 與 Maker 教育的實務觀點。"
          />
        </FadeIn>

        <div className="grid gap-4">
          {publications.map((item, index) => (
            <FadeIn key={item} delay={index * 0.05} className="soft-card">
              <div className="flex items-center gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-orange-50 text-accent">
                  <BookMarked size={24} />
                </span>
                <p className="font-semibold leading-7 text-slate-800">{item}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
