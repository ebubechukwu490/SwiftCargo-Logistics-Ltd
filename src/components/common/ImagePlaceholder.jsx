import { cn } from '@/utils/formatters';
import './ImagePlaceholder.css';

export default function ImagePlaceholder({
  label = 'Image placeholder',
  aspectRatio = '16/9',
  className,
  rounded = false,
}) {
  return (
    <div
      className={cn('image-placeholder', rounded && 'image-placeholder--rounded', className)}
      style={{ aspectRatio }}
      role="img"
      aria-label={label}
    >
      <div className="image-placeholder__inner">
        <svg className="image-placeholder__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
          <path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="image-placeholder__label">{label}</span>
      </div>
    </div>
  );
}

export function ResponsiveImage({ src, alt, label, aspectRatio = '16/9', className, rounded = false, ...props }) {
  if (!src) {
    return <ImagePlaceholder label={label || alt || 'Image placeholder'} aspectRatio={aspectRatio} className={className} rounded={rounded} />;
  }

  return (
    <div className={cn('responsive-image', rounded && 'responsive-image--rounded', className)} style={{ aspectRatio }}>
      <img src={src} alt={alt} loading="lazy" className="responsive-image__img" {...props} />
    </div>
  );
}
