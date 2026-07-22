import { useState } from 'react';
import SEOHead from '@/components/common/SEOHead';
import Container from '@/components/layout/Container';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { ResponsiveImage } from '@/components/common/ImagePlaceholder';
import advancedWarehouseBg from '@/assets/advanced_warehouse_bg.webp';
import cleanWarehouseBg from '@/assets/clean_warehouse_bg.webp';
import fleetOperationsHero from '@/assets/fleet_operations_hero.webp';
import interstateCargoTransport from '@/assets/interstate_cargo_transport.webp';
import warehousingStorage from '@/assets/warehousing_storage.webp';
import './Gallery.css';

const CATEGORIES = ['All', 'Fleet & Transport', 'Warehousing'];

const GALLERY_ITEMS = [
  {
    id: 1,
    src: interstateCargoTransport,
    title: 'Interstate Cargo Delivery',
    category: 'Fleet & Transport',
    description: 'Long-haul container logistics truck on route between Lagos and Abuja.'
  },
  {
    id: 2,
    src: advancedWarehouseBg,
    title: 'Modern Warehousing Systems',
    category: 'Warehousing',
    description: 'Automated sorting and inventory storage in our Ikeja logistics hub.'
  },
  {
    id: 3,
    src: cleanWarehouseBg,
    title: 'Organized Storage Layouts',
    category: 'Warehousing',
    description: 'Secure pallet storage corridors showing systematic organization.'
  },
  {
    id: 4,
    src: warehousingStorage,
    title: 'Consolidated Freight Handling',
    category: 'Warehousing',
    description: 'Staging area for incoming and outgoing client shipments.'
  },
  {
    id: 5,
    src: fleetOperationsHero,
    title: 'Haulage Fleet Operations',
    category: 'Fleet & Transport',
    description: 'Heavy duty trailers parked at our main terminal ready for dispatch.'
  }
];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('All');
  const [activeItem, setActiveItem] = useState(null);

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => activeTab === 'All' || item.category === activeTab
  );

  const handleNext = (e) => {
    e.stopPropagation();
    const currentIndex = filteredItems.findIndex((item) => item.id === activeItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setActiveItem(filteredItems[nextIndex]);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    const currentIndex = filteredItems.findIndex((item) => item.id === activeItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setActiveItem(filteredItems[prevIndex]);
  };

  return (
    <div className="page">
      <SEOHead page="gallery" />
      
      <section className="page-hero">
        <Container>
          <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Gallery' }]} />
          <span className="page-hero__eyebrow">Operations & Hubs</span>
          <h1 className="page-hero__title">Our Operational Gallery</h1>
          <p className="page-hero__subtitle">
            A visual overview of our logistics network in action—including heavy haulage trucks, last-mile parcel distribution, and modern secure warehouses.
          </p>
        </Container>
      </section>

      <section className="section">
        <Container>
          {/* Category Filter tabs */}
          <div className="flex gap-md wrap" style={{ marginBottom: 'var(--space-2xl)', borderBottom: '1px solid var(--color-gray-200)', paddingBottom: 'var(--space-sm)' }}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`tab-btn font-medium`}
                style={{
                  padding: 'var(--space-sm) var(--space-lg)',
                  borderBottom: activeTab === cat ? '2px solid var(--color-accent)' : '2px solid transparent',
                  color: activeTab === cat ? 'var(--color-accent)' : 'var(--color-gray-600)',
                  cursor: 'pointer',
                  background: 'none'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid display */}
          <div className="gallery-grid">
            {filteredItems.map((item) => (
              <article 
                key={item.id} 
                className="gallery-item"
                onClick={() => setActiveItem(item)}
              >
                <div className="gallery-item__image-wrapper">
                  <ResponsiveImage src={item.src} alt={item.title} aspectRatio="16/10" />
                  <span className="gallery-item__category">
                    {item.category}
                  </span>
                </div>
                <div className="gallery-item__content">
                  <h3 className="gallery-item__title">
                    {item.title}
                  </h3>
                  <p className="gallery-item__description">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Lightbox Modal overlay */}
      {activeItem && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(8px)'
          }}
          onClick={() => setActiveItem(null)}
        >
          {/* Close button */}
          <button 
            style={{
              position: 'absolute',
              top: 'var(--space-lg)',
              right: 'var(--space-lg)',
              background: 'none',
              border: 'none',
              fontSize: '2rem',
              color: 'var(--color-white)',
              cursor: 'pointer'
            }}
            onClick={() => setActiveItem(null)}
          >
            &times;
          </button>

          {/* Left Navigation Arrow */}
          <button 
            style={{
              position: 'absolute',
              left: 'var(--space-lg)',
              background: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              fontSize: '2rem',
              color: 'var(--color-white)',
              cursor: 'pointer',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onClick={handlePrev}
          >
            &#8249;
          </button>

          {/* Lightbox content */}
          <div 
            style={{
              maxWidth: '800px',
              width: '95%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: 'var(--color-white)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={activeItem.src} 
              alt={activeItem.title} 
              style={{
                maxHeight: '70vh',
                maxWidth: '100%',
                borderRadius: 'var(--radius-md)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
              }}
            />
            <div style={{ marginTop: 'var(--space-lg)', textAlign: 'center' }}>
              <span style={{ color: 'var(--color-accent)', textTransform: 'uppercase', fontSize: 'var(--text-caption)', letterSpacing: '1px' }}>
                {activeItem.category}
              </span>
              <h2 className="font-bold" style={{ fontSize: 'var(--text-h2)', margin: 'var(--space-xs) 0' }}>
                {activeItem.title}
              </h2>
              <p style={{ color: 'var(--color-gray-300)', maxWidth: '600px', margin: '0 auto' }}>
                {activeItem.description}
              </p>
            </div>
          </div>

          {/* Right Navigation Arrow */}
          <button 
            style={{
              position: 'absolute',
              right: 'var(--space-lg)',
              background: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              fontSize: '2rem',
              color: 'var(--color-white)',
              cursor: 'pointer',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onClick={handleNext}
          >
            &#8250;
          </button>
        </div>
      )}
    </div>
  );
}
