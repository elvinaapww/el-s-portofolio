interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
}

export function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <div className="text-center mb-10 sm:mb-12 lg:mb-16 px-2">
      <span className="text-xs sm:text-sm font-medium text-primary tracking-wider uppercase">
        {label}
      </span>
      <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
