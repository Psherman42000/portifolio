import emailjs from 'emailjs-com'
import { motion } from 'framer-motion'
import { AlertCircle, ArrowUpRight, CheckCircle2, Link2, Mail, Send } from 'lucide-react'
import { useMemo, useState } from 'react'
import MagneticButton from '../ui/MagneticButton'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

const initialState = {
  name: '',
  email: '',
  message: '',
}

export default function ContactSection({ contact }) {
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

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!hasEmailConfig) {
      setStatus({
        type: 'error',
        message: 'O envio está preparado, mas as chaves do EmailJS ainda não foram configuradas neste ambiente.',
      })
      return
    }

    try {
      setStatus({ type: 'loading', message: 'Enviando mensagem...' })

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
      setStatus({ type: 'success', message: 'Mensagem enviada com sucesso. Obrigado pelo contato.' })
    } catch (error) {
      setStatus({ type: 'error', message: 'Não foi possível enviar agora. Tente novamente em instantes.' })
    }
  }

  return (
    <section id="contato" className="py-24 md:py-32">
      <div className="section-shell rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(7,12,24,0.92),rgba(8,14,25,0.72))] p-6 md:p-8 lg:p-10">
        <SectionHeading eyebrow={contact.eyebrow} title={contact.title} description={contact.description} />

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.8fr)]">
          <Reveal>
            <form className="panel rounded-[2rem] p-6 md:p-7" onSubmit={handleSubmit}>
              <div className="grid gap-4 md:grid-cols-2">
                <label className="block text-sm font-medium text-white/80">
                  Nome
                  <input
                    aria-label="Nome"
                    className="input-field mt-2"
                    name="name"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label className="block text-sm font-medium text-white/80">
                  Email
                  <input
                    aria-label="Email"
                    className="input-field mt-2"
                    name="email"
                    type="email"
                    placeholder="voce@empresa.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>

              <label className="mt-4 block text-sm font-medium text-white/80">
                Mensagem
                <textarea
                  aria-label="Mensagem"
                  className="input-field mt-2 min-h-40 resize-y"
                  name="message"
                  placeholder="Conte um pouco sobre o desafio, produto ou ideia que você quer tirar do papel."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </label>

              <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <MagneticButton className="min-w-[14rem]" type="submit" disabled={status.type === 'loading'}>
                  <span className="inline-flex items-center gap-2">
                    <Send size={16} />
                    {status.type === 'loading' ? 'Enviando...' : 'Enviar mensagem'}
                  </span>
                </MagneticButton>
                <p className="text-sm leading-6 text-[var(--muted)]">{contact.emailConfigNote}</p>
              </div>

              {status.type !== 'idle' ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-4 flex items-start gap-3 rounded-2xl border px-4 py-3 text-sm ${
                    status.type === 'success'
                      ? 'border-emerald-400/20 bg-emerald-400/10 text-emerald-100'
                      : status.type === 'error'
                        ? 'border-rose-400/18 bg-rose-400/10 text-rose-100'
                        : 'border-white/12 bg-white/6 text-white/80'
                  }`}
                >
                  {status.type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
                  <span>{status.message}</span>
                </motion.div>
              ) : null}
            </form>
          </Reveal>

          <Reveal delay={0.1} className="space-y-4">
            {contact.socialLinks.map((item) => {
              const icon = item.label === 'LinkedIn' ? Link2 : item.label === 'Email' ? Mail : ArrowUpRight
              const Icon = icon
              const commonClasses = 'panel panel-hover flex items-center justify-between gap-4 rounded-[1.8rem] px-5 py-5'

              if (!item.href) {
                return (
                  <div key={item.label} className={`${commonClasses} opacity-70`}>
                    <div className="flex items-center gap-4">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/6 text-white">
                        <Icon size={20} />
                      </div>
                      <div>
                        <p className="font-display text-lg text-white">{item.label}</p>
                        <p className="mt-1 text-sm text-[var(--muted)]">{item.value}</p>
                      </div>
                    </div>
                    <span className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Em breve</span>
                  </div>
                )
              }

              return (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className={commonClasses}>
                  <div className="flex items-center gap-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/6 text-white">
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="font-display text-lg text-white">{item.label}</p>
                      <p className="mt-1 text-sm text-[var(--muted)]">{item.value}</p>
                    </div>
                  </div>
                  <ArrowUpRight size={18} className="text-[var(--accent)]" />
                </a>
              )
            })}
          </Reveal>
        </div>
      </div>
    </section>
  )
}

