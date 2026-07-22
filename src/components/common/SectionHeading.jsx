import { cn } from '@/utils/formatters';
import './SectionHeading.css';

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  light = false,
  className,
}) {
  return (
    <div className={cn('section-heading', `section-heading--${align}`, light && 'section-heading--light', className)}>
      {eyebrow && <span className="section-heading__eyebrow">{eyebrow}</span>}
      <h2 className="section-heading__title">{title}</h2>
      <span className="section-heading__accent" aria-hidden="true" />
      {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
    </div>
  );
}
