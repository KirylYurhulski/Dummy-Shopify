import { createContext, useCallback, useContext, useState, type ReactNode } from 'react'
import { VIEW_MODE, type ViewMode } from '../../models/view'

interface IViewMode {
  mode: ViewMode
  changeViewMode: (mode: ViewMode) => void
}

const ViewContext = createContext<IViewMode>({ mode: VIEW_MODE.GRID, changeViewMode: () => {} })

export const ViewProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<ViewMode>(VIEW_MODE.GRID)
  const changeViewMode = useCallback((mode: ViewMode) => {
    setMode(mode)
  }, [])
  return <ViewContext.Provider value={{ mode, changeViewMode }}>{children}</ViewContext.Provider>
}

export const useViewMode = () => useContext(ViewContext)
