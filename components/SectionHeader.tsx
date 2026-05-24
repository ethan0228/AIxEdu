type SectionHeaderProps = {
  kicker: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export function SectionHeader({ kicker, title, description, centered = false }: SectionHeaderProps) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="section-kicker">{kicker}</p>
      <h2 className="section-title">{title}</h2>
      {description ? <p className="section-copy">{description}</p> : null}
    </div>
  );
}
