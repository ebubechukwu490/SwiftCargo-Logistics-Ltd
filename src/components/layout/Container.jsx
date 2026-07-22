import { cn } from '@/utils/formatters';
import './Container.css';

export default function Container({ children, className, as: Tag = 'div', narrow = false }) {
  return (
    <Tag className={cn('container', narrow && 'container--narrow', className)}>
      {children}
    </Tag>
  );
}
