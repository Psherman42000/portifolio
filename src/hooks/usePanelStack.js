import { useMemo, useState } from 'react'

export default function usePanelStack() {
  const [panelStack, setPanelStack] = useState([])

  const openRootPanel = (panel) => {
    setPanelStack([panel])
  }

  const pushPanel = (panel) => {
    setPanelStack((current) => [...current, panel])
  }

  const popPanel = () => {
    setPanelStack((current) => current.slice(0, -1))
  }

  const clearPanels = () => {
    setPanelStack([])
  }

  const replaceTopPanel = (panel) => {
    setPanelStack((current) => {
      if (!current.length) return [panel]
      return [...current.slice(0, -1), panel]
    })
  }

  return useMemo(
    () => ({
      panelStack,
      topPanel: panelStack[panelStack.length - 1] ?? null,
      rootPanel: panelStack[0] ?? null,
      openRootPanel,
      pushPanel,
      popPanel,
      clearPanels,
      replaceTopPanel,
    }),
    [panelStack],
  )
}

