import { useState } from 'react';
import { useFormValidation } from '@/hooks/useFormValidation';
import { isRequired, isValidEmail, VALIDATION_MESSAGES } from '@/utils/validators';
import { submitContact } from '@/services/api';
import FormInput from '@/components/forms/FormInput';
import FormTextarea from '@/components/forms/FormTextarea';
import FormStatus from '@/components/forms/FormStatus';
import Button from '@/components/buttons/Button';

const rules = {
  name: [(v) => (!isRequired(v) ? VALIDATION_MESSAGES.required : '')],
  email: [
    (v) => (!isRequired(v) ? VALIDATION_MESSAGES.required : ''),
    (v) => (!isValidEmail(v) ? VALIDATION_MESSAGES.email : ''),
  ],
  message: [(v) => (!isRequired(v) ? VALIDATION_MESSAGES.required : '')],
};

export default function ContactForm() {
  const { values, errors, handleChange, handleBlur, validateAll, resetForm } = useFormValidation(
    { name: '', email: '', message: '' },
    rules
  );
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateAll()) return;
    setLoading(true);
    setStatus(null);
    try {
      const result = await submitContact(values);
      setStatus({ type: 'success', message: result.message });
      resetForm();
    } catch (err) {
      setStatus({ type: 'error', message: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <FormInput
        label="Full Name" name="name" required
        value={values.name} onChange={handleChange} onBlur={handleBlur} error={errors.name}
      />
      <FormInput
        label="Email Address" name="email" type="email" required
        value={values.email} onChange={handleChange} onBlur={handleBlur} error={errors.email}
      />
      <FormTextarea
        label="Message" name="message" required rows={5}
        placeholder="Tell us what you need help with"
        value={values.message} onChange={handleChange} onBlur={handleBlur} error={errors.message}
      />
      <Button type="submit" variant="primary" fullWidth loading={loading}>Send Message</Button>
      {status && <FormStatus type={status.type} message={status.message} />}
    </form>
  );
}
