import { useEffect, useMemo, useState } from 'react'
import { defaultLocale, portfolioData, supportedLocales } from './data'
import Navbar from './components/ui/Navbar'
import CustomCursor from './components/ui/CustomCursor'
import AnimatedDivider from './components/ui/AnimatedDivider'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import ExperienceSection from './components/sections/ExperienceSection'
import SkillsSection from './components/sections/SkillsSection'
import HighlightsSection from './components/sections/HighlightsSection'
import ContactSection from './components/sections/ContactSection'
import FooterSection from './components/sections/FooterSection'

function getInitialLocale() {
  if (typeof window === 'undefined') {
    return defaultLocale
  }

  const saved = window.localStorage.getItem('portfolio-locale')
  if (saved && supportedLocales.includes(saved)) {
    return saved
  }

  return defaultLocale
}

export default function App() {
  const [locale, setLocale] = useState(getInitialLocale)
  const content = useMemo(() => portfolioData[locale] ?? portfolioData[defaultLocale], [locale])

  useEffect(() => {
    window.localStorage.setItem('portfolio-locale', locale)
    document.documentElement.lang = locale === 'en' ? 'en' : 'pt-BR'
  }, [locale])

  return (
    <div className="relative min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <CustomCursor />

      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="grid-overlay absolute inset-0 opacity-30" />
        <div className="absolute left-1/2 top-[-12rem] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,255,209,0.12),transparent_68%)] blur-3xl" />
        <div className="absolute right-[-8rem] top-[10rem] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(123,97,255,0.22),transparent_70%)] blur-3xl" />
      </div>

      <Navbar
        nav={content.nav}
        cv={content.cv}
        locale={locale}
        localeLabel={content.localeToggleLabel}
        onLocaleChange={setLocale}
      />

      <main className="relative z-10">
        <HeroSection hero={content.hero} />
        <AnimatedDivider label={content.dividers.about} />
        <AboutSection about={content.about} />
        <AnimatedDivider label={content.dividers.experience} />
        <ExperienceSection experience={content.experience} />
        <AnimatedDivider label={content.dividers.skills} />
        <SkillsSection skills={content.skillGroups} sectionMeta={content.skillsMeta} />
        <AnimatedDivider label={content.dividers.highlights} />
        <HighlightsSection highlights={content.highlights} />
        <AnimatedDivider label={content.dividers.contact} />
        <ContactSection contact={content.contact} locale={locale} />
      </main>

      <FooterSection footer={content.footer} />
    </div>
  )
}
