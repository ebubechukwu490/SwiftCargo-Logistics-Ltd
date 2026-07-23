import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import SEOHead from '@/components/common/SEOHead';
import Container from '@/components/layout/Container';
import FormInput from '@/components/forms/FormInput';
import FormStatus from '@/components/forms/FormStatus';
import Button from '@/components/buttons/Button';
import { useFormValidation } from '@/hooks/useFormValidation';
import { isRequired, isValidEmail, VALIDATION_MESSAGES } from '@/utils/validators';
import { adminLogin } from '@/services/api';
import { useAuth } from '@/context/AuthContext';
import { COMPANY_INFO } from '@/constants/companyInfo';
import logoSrc from '@/assets/logo.png';
import './Login.css';

const rules = {
  email: [
    (v) => (!isRequired(v) ? VALIDATION_MESSAGES.required : ''),
    (v) => (!isValidEmail(v) ? VALIDATION_MESSAGES.email : ''),
  ],
  password: [(v) => (!isRequired(v) ? VALIDATION_MESSAGES.required : '')],
};

export default function Login() {
  const { values, errors, handleChange, handleBlur, validateAll } = useFormValidation(
    { email: '', password: '' },
    rules
  );
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();

  if (isAuthenticated) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateAll()) return;
    setLoading(true);
    setError('');
    try {
      const result = await adminLogin(values);
      login(result.user);
      navigate('/admin/dashboard', { replace: true });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <SEOHead page="login" />
      <Container narrow>
        <div className="login-page__card">
          <div className="login-page__brand">
            <img src={logoSrc} alt={COMPANY_INFO.name} className="login-page__logo" />
            <span className="login-page__brand-text">{COMPANY_INFO.name}</span>
          </div>
          <h1 className="login-page__title">Operations Login</h1>
          <p className="login-page__subtitle">Internal access for SwiftCargo Owner and Ops Manager accounts.</p>
          <form onSubmit={handleSubmit} noValidate>
            <FormInput
              label="Email Address" name="email" type="email" required
              value={values.email} onChange={handleChange} onBlur={handleBlur} error={errors.email}
            />
            <FormInput
              label="Password" name="password" type="password" required
              value={values.password} onChange={handleChange} onBlur={handleBlur} error={errors.password}
            />
            <Button type="submit" variant="primary" fullWidth loading={loading}>Log In</Button>
            {error && <FormStatus type="error" message={error} />}
          </form>
          <p className="login-page__hint">Backend integration pending. This feature has been fully prepared on the frontend and will become functional once the backend services are connected.</p>
        </div>
      </Container>
    </div>
  );
}
