import { useState } from 'react';
import { cn } from '@/utils/formatters';
import './Tabs.css';

export default function Tabs({ tabs, defaultTab, onChange }) {
  const [active, setActive] = useState(defaultTab || tabs[0]?.id);

  const handleSelect = (id) => {
    setActive(id);
    onChange?.(id);
  };

  const activeTab = tabs.find((t) => t.id === active);

  return (
    <div className="tabs">
      <div className="tabs__list" role="tablist">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={active === tab.id}
            className={cn('tabs__tab', active === tab.id && 'tabs__tab--active')}
            onClick={() => handleSelect(tab.id)}
          >
            {tab.label}
            {tab.count !== undefined && <span className="tabs__count">{tab.count}</span>}
          </button>
        ))}
      </div>
      <div className="tabs__panel" role="tabpanel">
        {activeTab?.content}
      </div>
    </div>
  );
}
