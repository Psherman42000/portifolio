import { useEffect, useMemo, useState, lazy, Suspense } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { getPortfolioContent, rootNodeIds } from './data'
import useDeviceTier from './hooks/useDeviceTier'
import useGlitchCycle from './hooks/useGlitchCycle'
import { usePrefersReducedMotion } from './hooks/usePrefersReducedMotion'
import usePanelStack from './hooks/usePanelStack'
import LoadingScreen from './components/system/LoadingScreen'
import Navbar from './components/system/Navbar'
import CustomCursor from './components/system/CustomCursor'
import PanelStack from './components/system/PanelStack'

const BackgroundShader = lazy(() => import('./components/3d/BackgroundShader'))
const GraphScene = lazy(() => import('./components/3d/GraphScene'))
const AboutPanel = lazy(() => import('./components/sections/AboutPanel'))
const ExperienceTerminalPanel = lazy(() => import('./components/sections/ExperienceTerminalPanel'))
const SkillsHexPanel = lazy(() => import('./components/sections/SkillsHexPanel'))
const ProjectsPanel = lazy(() => import('./components/sections/ProjectsPanel'))
const ProjectDetailPanel = lazy(() => import('./components/sections/ProjectDetailPanel'))
const ContactPanel = lazy(() => import('./components/sections/ContactPanel'))

function createRootPanel(id, content) {
  const source = content[id]
  return {
    key: `${id}-root`,
    type: id,
    rootNodeId: id,
    title: source.title,
    eyebrow: source.eyebrow,
    payload: source,
  }
}

function PanelFallback() {
  return <div className="panel-loading">carregando...</div>
}

export default function App() {
  const content = useMemo(() => getPortfolioContent('pt'), [])
  const [loadingDone, setLoadingDone] = useState(false)
  const { isMobile, quality, graphIntensity, dpr } = useDeviceTier()
  const prefersReducedMotion = usePrefersReducedMotion()
  const { glitchOn } = useGlitchCycle()
  const { panelStack, rootPanel, openRootPanel, pushPanel, popPanel, clearPanels } = usePanelStack()

  const activeNodeId = rootPanel?.rootNodeId ?? null
  const isDimmed = panelStack.length > 0 && !isMobile

  useEffect(() => {
    document.documentElement.lang = 'pt-BR'
    document.title = content.meta.title
    const description = document.querySelector('meta[name="description"]')
    if (description) {
      description.setAttribute('content', content.meta.description)
    }
  }, [content.meta.description, content.meta.title])

  const handleOpenNode = (nodeId) => {
    if (!rootNodeIds.includes(nodeId)) return
    openRootPanel(createRootPanel(nodeId, content))
  }

  const stackPath = ['mapa', ...panelStack.map((panel) => panel.title)].join(' / ')

  const renderPanel = (panel) => {
    if (panel.type === 'about') {
      return (
        <Suspense fallback={<PanelFallback />}>
          <AboutPanel section={panel.payload} />
        </Suspense>
      )
    }

    if (panel.type === 'experience') {
      return (
        <Suspense fallback={<PanelFallback />}>
          <ExperienceTerminalPanel section={panel.payload} cv={content.cv} />
        </Suspense>
      )
    }

    if (panel.type === 'skills') {
      return (
        <Suspense fallback={<PanelFallback />}>
          <SkillsHexPanel section={panel.payload} />
        </Suspense>
      )
    }

    if (panel.type === 'projects') {
      return (
        <Suspense fallback={<PanelFallback />}>
          <ProjectsPanel
            section={panel.payload}
            isMobile={isMobile}
            onOpenProject={(project) =>
              pushPanel({
                key: `project-${project.id}`,
                type: 'project-detail',
                rootNodeId: 'projects',
                title: project.name,
                eyebrow: 'Projeto em producao',
                payload: project,
              })
            }
          />
        </Suspense>
      )
    }

    if (panel.type === 'project-detail') {
      return (
        <Suspense fallback={<PanelFallback />}>
          <ProjectDetailPanel project={panel.payload} isMobile={isMobile} />
        </Suspense>
      )
    }

    if (panel.type === 'contact') {
      return (
        <Suspense fallback={<PanelFallback />}>
          <ContactPanel section={panel.payload} />
        </Suspense>
      )
    }

    return null
  }

  return (
    <div className="app-shell">
      <AnimatePresence>{!loadingDone ? <LoadingScreen lines={content.ui.loading} onFinish={() => setLoadingDone(true)} /> : null}</AnimatePresence>
      <CustomCursor />

      <Suspense fallback={null}>
        <BackgroundShader quality={quality} />
      </Suspense>

      <div className={`scanlines ${panelStack.length ? 'scanlines-active' : ''}`} aria-hidden="true" />
      <div className="grid-overlay-system" aria-hidden="true" />

      <Navbar nodes={content.graph.nodes} cv={content.cv} onOpenNode={handleOpenNode} stackPath={stackPath} isDimmed={isDimmed} />

      <main className="system-stage">
        <div className={`graph-stage ${isMobile && panelStack.length ? 'graph-stage-hidden' : ''}`}>
          <Suspense fallback={null}>
            <GraphScene
              graph={content.graph}
              activeNodeId={activeNodeId}
              onOpenNode={handleOpenNode}
              graphIntensity={prefersReducedMotion ? 0.35 : graphIntensity}
              dpr={dpr}
              isMobile={isMobile}
              glitchOn={glitchOn && !prefersReducedMotion}
            />
          </Suspense>

          <motion.div
            className={`graph-overlay ${isDimmed ? 'graph-overlay-dimmed' : ''}`}
            animate={{ opacity: isDimmed ? 1 : 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          />

          <div className="graph-hud">
            <div className="graph-hud__copy">
              <span className="graph-hud__label">{content.ui.mapLabel}</span>
              <h1 className={`graph-hud__title ${glitchOn ? 'graph-hud__title-glitch' : ''}`}>Pedro Dias</h1>
              <p className="graph-hud__description">{isMobile ? content.ui.tapHint : content.ui.hoverHint}</p>
            </div>
            {panelStack.length ? (
              <button type="button" className="map-reset-button map-reset-button-floating" onClick={clearPanels} data-interactive="true">
                ← {content.ui.backToMap}
              </button>
            ) : null}
          </div>
        </div>

        <PanelStack panels={panelStack} isMobile={isMobile} onClosePanel={popPanel} renderPanel={renderPanel} />
      </main>

      <footer className={`system-footer ${panelStack.length ? 'system-footer-muted' : ''}`}>
        <p>{content.ui.footerCommand}</p>
        <span>{content.ui.footerNote}</span>
      </footer>
    </div>
  )
}

