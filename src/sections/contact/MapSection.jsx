import { COMPANY_INFO } from '@/constants/companyInfo';
import './MapSection.css';

export default function MapSection() {
  return (
    <div className="map-section">
      <iframe
        src={COMPANY_INFO.mapEmbedUrl}
        title={`Map showing ${COMPANY_INFO.name} office location`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
