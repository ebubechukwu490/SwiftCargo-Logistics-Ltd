import { useState } from 'react';
import SEOHead from '@/components/common/SEOHead';
import Container from '@/components/layout/Container';
import Breadcrumb from '@/components/ui/Breadcrumb';
import CareerCard from '@/components/cards/CareerCard';
import Button from '@/components/buttons/Button';
import FormInput from '@/components/forms/FormInput';
import FormTextarea from '@/components/forms/FormTextarea';
import { CAREERS } from '@/constants/careers';
import './Careers.css';

const DEPARTMENTS = ['All', 'Operations', 'Warehousing', 'Last-Mile'];

export default function Careers() {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedJob, setSelectedJob] = useState(null);
  const [formValues, setFormValues] = useState({ name: '', email: '', phone: '', coverLetter: '' });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const filteredCareers = CAREERS.filter(
    (job) => activeTab === 'All' || job.department === activeTab
  );

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setSubmitSuccess(false);
    setFormValues({ name: '', email: '', phone: '', coverLetter: '' });
    setFormErrors({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formValues.name.trim()) errors.name = 'Full name is required';
    if (!formValues.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!formValues.phone.trim()) errors.phone = 'Phone number is required';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    // Mock API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 1200);
  };

  return (
    <div className="page">
      <SEOHead page="careers" />
      
      <section className="page-hero">
        <Container>
          <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Careers' }]} />
          <span className="page-hero__eyebrow">Work With Us</span>
          <h1 className="page-hero__title">Build the Future of Logistics</h1>
          <p className="page-hero__subtitle">
            Explore exciting career opportunities across Nigeria and join our team of transport, cargo operations, and warehousing professionals.
          </p>
        </Container>
      </section>

      <section className="section">
        <Container>
          {/* Department Filter Tabs */}
          <div className="flex gap-md wrap" style={{ marginBottom: 'var(--space-2xl)', borderBottom: '1px solid var(--color-gray-200)', paddingBottom: 'var(--space-sm)' }}>
            {DEPARTMENTS.map((dept) => (
              <button
                key={dept}
                onClick={() => setActiveTab(dept)}
                className={`tab-btn font-medium`}
                style={{
                  padding: 'var(--space-sm) var(--space-lg)',
                  borderBottom: activeTab === dept ? '2px solid var(--color-accent)' : '2px solid transparent',
                  color: activeTab === dept ? 'var(--color-accent)' : 'var(--color-gray-600)',
                  cursor: 'pointer',
                  background: 'none'
                }}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Job List */}
          {filteredCareers.length > 0 ? (
            <div className="careers-page__list">
              {filteredCareers.map((job) => (
                <CareerCard key={job.id} career={job} onApply={handleApplyClick} />
              ))}
            </div>
          ) : (
            <div className="text-center" style={{ paddingBlock: 'var(--space-3xl)' }}>
              <p style={{ color: 'var(--color-gray-500)' }}>No positions currently open in this department. Check back later!</p>
            </div>
          )}
        </Container>
      </section>

      {/* Application Modal Popup */}
      {selectedJob && (
        <div 
          className="modal-backdrop" 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(4px)'
          }}
          onClick={() => setSelectedJob(null)}
        >
          <div 
            className="modal-content" 
            style={{
              backgroundColor: 'var(--color-white)',
              padding: 'var(--space-2xl)',
              borderRadius: 'var(--radius-lg)',
              maxWidth: '500px',
              width: '90%',
              boxShadow: 'var(--shadow-xl)',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              style={{
                position: 'absolute',
                top: 'var(--space-md)',
                right: 'var(--space-md)',
                background: 'none',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
                color: 'var(--color-gray-500)'
              }}
              onClick={() => setSelectedJob(null)}
            >
              &times;
            </button>

            {submitSuccess ? (
              <div className="text-center" style={{ paddingBlock: 'var(--space-lg)' }}>
                <div 
                  style={{
                    backgroundColor: 'var(--color-accent-light)',
                    color: 'var(--color-accent-dark)',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto var(--space-lg) auto',
                    fontSize: '1.8rem'
                  }}
                >
                  ✓
                </div>
                <h3 className="font-bold" style={{ fontSize: 'var(--text-h3)', marginBottom: 'var(--space-sm)' }}>Application Received</h3>
                <p style={{ color: 'var(--color-gray-600)', marginBottom: 'var(--space-xl)' }}>
                  Thank you for applying for the <strong>{selectedJob.title}</strong> role. Our logistics recruitment team will review your details and reach out.
                </p>
                <Button variant="primary" onClick={() => setSelectedJob(null)}>Close</Button>
              </div>
            ) : (
              <div>
                <span className="font-semibold" style={{ fontSize: 'var(--text-caption)', color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Applying For
                </span>
                <h3 className="font-bold" style={{ fontSize: 'var(--text-h3)', marginBottom: 'var(--space-xs)', color: 'var(--color-primary)' }}>
                  {selectedJob.title}
                </h3>
                <p style={{ fontSize: 'var(--text-body-sm)', color: 'var(--color-gray-500)', marginBottom: 'var(--space-xl)' }}>
                  {selectedJob.department} · {selectedJob.location}
                </p>

                <form onSubmit={handleFormSubmit}>
                  <FormInput
                    label="Full Name"
                    name="name"
                    value={formValues.name}
                    onChange={handleInputChange}
                    error={formErrors.name}
                    required
                  />
                  <FormInput
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formValues.email}
                    onChange={handleInputChange}
                    error={formErrors.email}
                    required
                  />
                  <FormInput
                    label="Phone Number"
                    name="phone"
                    value={formValues.phone}
                    onChange={handleInputChange}
                    error={formErrors.phone}
                    required
                  />
                  <FormTextarea
                    label="Cover Letter / Notes (Optional)"
                    name="coverLetter"
                    value={formValues.coverLetter}
                    onChange={handleInputChange}
                    rows={4}
                  />

                  <div className="flex justify-end gap-md" style={{ marginTop: 'var(--space-xl)' }}>
                    <Button variant="outline" type="button" onClick={() => setSelectedJob(null)}>Cancel</Button>
                    <Button variant="primary" type="submit" loading={isSubmitting}>Submit Application</Button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
