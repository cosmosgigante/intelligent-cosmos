'use client';

import { useState, FormEvent } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { ContactFormData, ContactFormResponse } from '@/types';
import { isValidEmail } from '@/lib/utils';
import styles from './ContactForm.module.css';

const services = [
  'Desarrollo Web',
  'Software a Medida',
  'Producto SaaS',
  'Consultoría Técnica',
  'Otro',
];

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormData>({
    name: '', email: '', company: '', service: '', message: '',
  });
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [serverMsg, setServerMsg] = useState('');

  const validate = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};
    if (!form.name.trim())          newErrors.name    = 'El nombre es requerido.';
    if (!form.email.trim())         newErrors.email   = 'El email es requerido.';
    else if (!isValidEmail(form.email)) newErrors.email = 'Email inválido.';
    if (!form.message.trim())       newErrors.message = 'El mensaje es requerido.';
    else if (form.message.trim().length < 10) newErrors.message = 'El mensaje debe tener al menos 10 caracteres.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    try {
      const res = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data: ContactFormResponse = await res.json();

      if (data.success) {
        setStatus('success');
        setServerMsg(data.message);
        setForm({ name: '', email: '', company: '', service: '', message: '' });
      } else {
        setStatus('error');
        setServerMsg(data.message);
      }
    } catch {
      setStatus('error');
      setServerMsg('Error de conexión. Intente nuevamente.');
    }
  };

  if (status === 'success') {
    return (
      <div className={styles.success}>
        <CheckCircle size={40} className={styles.successIcon} />
        <h3>¡Mensaje enviado!</h3>
        <p>{serverMsg}</p>
        <button className="btn btn--secondary" onClick={() => setStatus('idle')}>
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form} noValidate>
      <div className={styles.row}>
        <div className="form-group">
          <label className="form-label" htmlFor="contact-name">Nombre *</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            className={`form-input ${errors.name ? styles.inputError : ''}`}
            placeholder="Tu nombre"
            value={form.name}
            onChange={handleChange}
            disabled={status === 'loading'}
            autoComplete="name"
          />
          {errors.name && <span className="form-error">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="contact-email">Email *</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            className={`form-input ${errors.email ? styles.inputError : ''}`}
            placeholder="tu@empresa.com"
            value={form.email}
            onChange={handleChange}
            disabled={status === 'loading'}
            autoComplete="email"
          />
          {errors.email && <span className="form-error">{errors.email}</span>}
        </div>
      </div>

      <div className={styles.row}>
        <div className="form-group">
          <label className="form-label" htmlFor="contact-company">Empresa (opcional)</label>
          <input
            id="contact-company"
            name="company"
            type="text"
            className="form-input"
            placeholder="Tu empresa"
            value={form.company}
            onChange={handleChange}
            disabled={status === 'loading'}
            autoComplete="organization"
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="contact-service">Servicio de interés</label>
          <select
            id="contact-service"
            name="service"
            className="form-select"
            value={form.service}
            onChange={handleChange}
            disabled={status === 'loading'}
          >
            <option value="">Seleccioná un servicio</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="contact-message">Mensaje *</label>
        <textarea
          id="contact-message"
          name="message"
          className={`form-textarea ${errors.message ? styles.inputError : ''}`}
          placeholder="Contanos sobre tu proyecto o consulta…"
          value={form.message}
          onChange={handleChange}
          disabled={status === 'loading'}
          rows={6}
        />
        {errors.message && <span className="form-error">{errors.message}</span>}
      </div>

      {status === 'error' && (
        <div className={styles.errorBanner}>
          <AlertCircle size={16} />
          <span>{serverMsg}</span>
        </div>
      )}

      <button
        id="contact-submit"
        type="submit"
        className={`btn btn--primary btn--lg ${styles.submit}`}
        disabled={status === 'loading'}
      >
        {status === 'loading' ? (
          <span className={styles.spinner} />
        ) : (
          <Send size={18} />
        )}
        {status === 'loading' ? 'Enviando…' : 'Enviar mensaje'}
      </button>
    </form>
  );
}
