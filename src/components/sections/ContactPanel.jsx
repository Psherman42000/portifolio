import { ArrowUpRight } from 'lucide-react'
import { useMemo, useState } from 'react'

const initialState = { name: '', email: '', message: '' }

export default function ContactPanel({ section }) {
  const [formData, setFormData] = useState(initialState)
  const [status, setStatus] = useState({ type: 'idle', message: '' })

  const emailConfig = useMemo(
    () => ({
      serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
      templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    }),
    [],
  )

  const hasEmailConfig = Object.values(emailConfig).every(Boolean)

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!hasEmailConfig) {
      setStatus({ type: 'error', message: section.error })
      return
    }

    try {
      setStatus({ type: 'loading', message: section.sending })
      const { default: emailjs } = await import('emailjs-com')
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        emailConfig.publicKey,
      )
      setFormData(initialState)
      setStatus({ type: 'success', message: section.success })
    } catch {
      setStatus({ type: 'error', message: section.error })
    }
  }

  return (
    <div className="panel-section contact-panel">
      <div className="contact-grid">
        <div className="transmission-panel">
          <div className="transmission-meta">
            <span>DESTINATION: {section.destination}</span>
            <span>PROTOCOL: {section.protocol}</span>
          </div>

          <form className="transmission-form" onSubmit={handleSubmit}>
            <label>
              <span>FROM_NAME</span>
              <input value={formData.name} onChange={(event) => setFormData((current) => ({ ...current, name: event.target.value }))} placeholder="Seu nome" required />
            </label>
            <label>
              <span>FROM_EMAIL</span>
              <input
                type="email"
                value={formData.email}
                onChange={(event) => setFormData((current) => ({ ...current, email: event.target.value }))}
                placeholder="voce@empresa.com"
                required
              />
            </label>
            <label>
              <span>MESSAGE</span>
              <textarea
                value={formData.message}
                onChange={(event) => setFormData((current) => ({ ...current, message: event.target.value }))}
                placeholder="Conte um pouco sobre a arquitetura, desafio ou produto que voce quer colocar em producao."
                rows={7}
                required
              />
            </label>
            <button type="submit" className="transmission-submit" data-interactive="true">
              {status.type === 'loading' ? section.sending : section.submit}
            </button>
            {status.type !== 'idle' ? <p className={`transmission-status transmission-status-${status.type}`}>{status.message}</p> : null}
          </form>
        </div>

        <div className="contact-aside">
          <div className="direct-channels">
            {section.social.map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="direct-channel-card" data-interactive="true">
                <div>
                  <p>{item.label}</p>
                  <span>{item.value}</span>
                </div>
                <ArrowUpRight size={18} />
              </a>
            ))}
          </div>
          <h4 className="contact-phrase">
            {section.phrase.split('\n').map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h4>
        </div>
      </div>
    </div>
  )
}


