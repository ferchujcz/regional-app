import Link from "next/link";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  crumb: string;
};

/** Dark hero header used on every inner page (keeps the transparent navbar readable). */
export default function PageHeader({ eyebrow, title, intro, crumb }: Props) {
  return (
    <header className="relative bg-vino-deep text-crema pt-36 pb-20 md:pt-44 md:pb-24 grain overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-vino-deep via-vino-deep to-verde/70" />
      <div className="absolute -top-40 -right-32 w-[30rem] h-[30rem] rounded-full bg-oro/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-32 w-[24rem] h-[24rem] rounded-full bg-verde/40 blur-3xl" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center animate-[fadeUp_0.9s_ease-out_both]">
        <nav aria-label="Breadcrumb" className="mb-6 font-sans text-xs uppercase tracking-[0.25em] text-crema/60">
          <Link href="/" className="hover:text-oro transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <span className="text-oro">{crumb}</span>
        </nav>
        <span className="font-sans text-sm tracking-[0.3em] uppercase text-oro font-semibold ornament block mb-4">
          {eyebrow}
        </span>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-tight mb-6">{title}</h1>
        {intro && <p className="font-sans text-lg md:text-xl text-crema/75 max-w-2xl mx-auto leading-relaxed">{intro}</p>}
      </div>
    </header>
  );
}
