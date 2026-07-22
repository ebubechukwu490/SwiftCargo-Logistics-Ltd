import { useState } from 'react';
import { cn } from '@/utils/formatters';
import './Accordion.css';

export default function Accordion({ items, allowMultiple = false, defaultOpen = [] }) {
  const [openItems, setOpenItems] = useState(defaultOpen);

  const toggle = (id) => {
    setOpenItems((prev) => {
      const isOpen = prev.includes(id);
      if (allowMultiple) {
        return isOpen ? prev.filter((i) => i !== id) : [...prev, id];
      }
      return isOpen ? [] : [id];
    });
  };

  return (
    <div className="accordion">
      {items.map(({ id, question, answer }) => {
        const isOpen = openItems.includes(id);
        return (
          <div key={id} className={cn('accordion__item', isOpen && 'accordion__item--open')}>
            <button
              type="button"
              className="accordion__trigger"
              aria-expanded={isOpen}
              aria-controls={`accordion-panel-${id}`}
              onClick={() => toggle(id)}
            >
              <span>{question}</span>
              <svg className="accordion__icon" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div id={`accordion-panel-${id}`} className="accordion__panel" role="region">
              <p className="accordion__content">{answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
