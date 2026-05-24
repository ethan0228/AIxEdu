import { FolderKanban } from "lucide-react";
import { projects } from "@/data/site";
import { FadeIn } from "./Motion";
import { SectionHeader } from "./SectionHeader";

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-white/60">
      <div className="section-shell">
        <FadeIn>
          <SectionHeader
            kicker="Projects"
            title="實踐專案"
            description="以國小教育現場為核心，串連自造、能源、AI 與運算思維，讓學生在真實任務中學習。"
          />
        </FadeIn>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.05} className="soft-card">
              <div className="mb-5 flex items-center gap-3 text-primary">
                <span className="grid size-12 place-items-center rounded-2xl bg-blue-50">
                  <FolderKanban size={24} />
                </span>
                <span className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Practice</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-orange-50 px-3 py-1 text-sm font-semibold text-accent">
                    {tag}
                  </span>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
