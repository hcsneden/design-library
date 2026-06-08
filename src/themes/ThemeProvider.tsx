import React, { createContext, useContext, useMemo } from 'react'
import type { Theme } from './types'

interface ThemeContextValue {
  theme: Theme
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

const toTokens = (theme: Theme): Record<string, string> => ({
  '--dl-color-bg': theme.colors.bg,
  '--dl-color-fg': theme.colors.fg,
  '--dl-color-muted': theme.colors.muted,
  '--dl-color-border': theme.colors.border,
  '--dl-color-border-hover': theme.colors.borderHover,
  '--dl-color-accent': theme.colors.accent,
  '--dl-color-accent-fg': theme.colors.accentFg,
  '--dl-color-surface': theme.colors.surface,
  '--dl-color-surface-hover': theme.colors.surfaceHover,
  '--dl-color-error': theme.colors.error,
  '--dl-color-success': theme.colors.success,
  '--dl-font-sans': theme.fonts.sans,
  '--dl-font-serif': theme.fonts.serif,
  '--dl-radius-sm': theme.radius.sm,
  '--dl-radius-md': theme.radius.md,
  '--dl-radius-lg': theme.radius.lg,
  '--dl-radius-full': theme.radius.full,
  '--dl-shadow-sm': theme.shadows.sm,
  '--dl-shadow-md': theme.shadows.md,
  '--dl-font-size-xs': theme.fontSizes.xs,
  '--dl-font-size-sm': theme.fontSizes.sm,
  '--dl-font-size-base': theme.fontSizes.base,
  '--dl-font-size-lg': theme.fontSizes.lg,
  '--dl-font-size-xl': theme.fontSizes.xl,
  '--dl-font-size-2xl': theme.fontSizes['2xl'],
  '--dl-font-size-3xl': theme.fontSizes['3xl'],
  '--dl-font-size-4xl': theme.fontSizes['4xl'],
  '--dl-font-size-5xl': theme.fontSizes['5xl'],
})

interface ThemeProviderProps {
  theme: Theme
  children: React.ReactNode
}

export const ThemeProvider = ({ theme, children }: ThemeProviderProps) => {
  const tokens = useMemo(() => toTokens(theme), [theme])
  const contextValue = useMemo(() => ({ theme }), [theme])

  return (
    <ThemeContext.Provider value={contextValue}>
      <div style={tokens as React.CSSProperties}>{children}</div>
    </ThemeContext.Provider>
  )
}

export const useThemeContext = (): ThemeContextValue => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider')
  }
  return context
}
