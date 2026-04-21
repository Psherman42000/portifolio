import { AnimatePresence } from 'framer-motion'
import ImmersivePanel from './ImmersivePanel'

export default function PanelStack({ panels, isMobile, onClosePanel, renderPanel }) {
  if (!panels.length) return null

  return (
    <div className={`panel-stack ${isMobile ? 'panel-stack-mobile' : ''}`}>
      <AnimatePresence>
        {panels.map((panel, index) => {
          const isTop = index === panels.length - 1
          return (
            <ImmersivePanel key={panel.key} panel={panel} depth={index} isTop={isTop} isMobile={isMobile} onClose={onClosePanel}>
              {renderPanel(panel, isTop)}
            </ImmersivePanel>
          )
        })}
      </AnimatePresence>
    </div>
  )
}

