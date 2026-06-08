import type { Theme } from '../types'

export const monochrome: Theme = {
  name: 'monochrome',
  colors: {
    bg: '#ffffff',
    fg: '#0a0a0a',
    muted: '#737373',
    border: '#e5e5e5',
    borderHover: '#a3a3a3',
    accent: '#0a0a0a',
    accentFg: '#ffffff',
    surface: '#f5f5f5',
    surfaceHover: '#ebebeb',
    error: '#dc2626',
    success: '#16a34a',
  },
  fonts: {
    sans: "'Inter', system-ui, -apple-system, sans-serif",
    serif: "'DM Serif Display', Georgia, serif",
  },
  radius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)',
    md: '0 4px 12px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04)',
  },
  fontSizes: {
    xs: '11px',
    sm: '13px',
    base: '15px',
    lg: '17px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '30px',
    '4xl': '38px',
    '5xl': '52px',
  },
}
