import { useState } from 'react';
import { COMPANY_INFO } from '@/constants/companyInfo';
import './AdminPages.css';

export default function Settings() {
  const [settings, setSettings] = useState({
    companyName: COMPANY_INFO.name,
    tagline: COMPANY_INFO.tagline,
    description: COMPANY_INFO.description,
    email: COMPANY_INFO.email,
    phone: COMPANY_INFO.phone.display,
    address: COMPANY_INFO.address.full,
    autoReplyEnabled: true,
    autoReplyMessage: 'Thank you for contacting us. We will respond within 24 hours.',
    notificationEmail: COMPANY_INFO.email,
    maintenanceMode: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings({
      ...settings,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSave = () => {
    alert('⚠️ Settings saved successfully!\n\nNote: Changes will not reflect on the website yet because the backend has not been implemented. Once the backend is connected, your settings changes will take effect immediately.');
  };

  return (
    <div className="admin-page">
      <div className="admin-page__header">
        <h1 className="admin-page__title">Settings</h1>
        <p className="admin-page__subtitle">Configure your admin dashboard and website settings</p>
      </div>

      <div className="admin-page__settings-grid">
        <div className="settings-section">
          <h2 className="settings-section__title">Company Information</h2>
          <div className="settings-form">
            <div className="form-group">
              <label>Company Name</label>
              <input
                type="text"
                name="companyName"
                value={settings.companyName}
                onChange={handleChange}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label>Tagline</label>
              <input
                type="text"
                name="tagline"
                value={settings.tagline}
                onChange={handleChange}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                name="description"
                value={settings.description}
                onChange={handleChange}
                className="form-input"
                rows={3}
              />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={settings.email}
                onChange={handleChange}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="text"
                name="phone"
                value={settings.phone}
                onChange={handleChange}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label>Address</label>
              <textarea
                name="address"
                value={settings.address}
                onChange={handleChange}
                className="form-input"
                rows={3}
              />
            </div>
          </div>
        </div>

        <div className="settings-section">
          <h2 className="settings-section__title">Auto-Reply Settings</h2>
          <div className="settings-form">
            <div className="form-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="autoReplyEnabled"
                  checked={settings.autoReplyEnabled}
                  onChange={handleChange}
                />
                <span>Enable Auto-Reply</span>
              </label>
            </div>
            <div className="form-group">
              <label>Auto-Reply Message</label>
              <textarea
                name="autoReplyMessage"
                value={settings.autoReplyMessage}
                onChange={handleChange}
                className="form-input"
                rows={4}
              />
            </div>
          </div>
        </div>

        <div className="settings-section">
          <h2 className="settings-section__title">Notification Settings</h2>
          <div className="settings-form">
            <div className="form-group">
              <label>Notification Email</label>
              <input
                type="email"
                name="notificationEmail"
                value={settings.notificationEmail}
                onChange={handleChange}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="maintenanceMode"
                  checked={settings.maintenanceMode}
                  onChange={handleChange}
                />
                <span>Maintenance Mode</span>
              </label>
              <small className="form-help">
                When enabled, visitors will see a maintenance page instead of the website.
              </small>
            </div>
          </div>
        </div>

        <div className="settings-section">
          <h2 className="settings-section__title">Security</h2>
          <div className="settings-form">
            <button className="btn btn-secondary">Change Password</button>
            <button className="btn btn-secondary">Enable Two-Factor Auth</button>
            <button className="btn btn-danger">Reset All Settings</button>
          </div>
        </div>
      </div>

      <div className="admin-page__actions">
        <button onClick={handleSave} className="btn btn-primary">
          Save Settings
        </button>
      </div>
    </div>
  );
}
