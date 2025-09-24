export const VIEW_MODE = {
  GRID: 'grid',
  LIST: 'list',
} as const

export type ViewMode = (typeof VIEW_MODE)[keyof typeof VIEW_MODE]
