import { useState, useEffect } from 'react';
import './CookieConsent.css';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-consent">
      <div className="cookie-consent__content">
        <div className="cookie-consent__text">
          <h4>Cookie Policy</h4>
          <p>
            We use cookies to improve your experience and analyze site traffic. 
            By clicking "Accept", you agree to our use of cookies. 
            Read our <a href="/privacy">Privacy Policy</a> for more information.
          </p>
        </div>
        <div className="cookie-consent__actions">
          <button onClick={handleReject} className="cookie-consent__btn cookie-consent__btn--reject">
            Reject
          </button>
          <button onClick={handleAccept} className="cookie-consent__btn cookie-consent__btn--accept">
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
