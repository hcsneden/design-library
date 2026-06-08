import { useThemeContext } from './ThemeProvider'
import type { Theme } from './types'

export const useTheme = (): Theme => useThemeContext().theme
