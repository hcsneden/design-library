import type { Theme } from '../types'

export const trailhead: Theme = {
  name: 'trailhead',
  colors: {
    bg: '#FBF7E3',
    fg: '#16270E',
    muted: '#5E6750',
    border: '#DED7BB',
    borderHover: '#8FA383',
    accent: '#103606',
    accentFg: '#FFFFFF',
    surface: '#F1EACD',
    surfaceHover: '#EDE7CF',
    error: '#A8432B',
    success: '#3C7D2F',
  },
  fonts: {
    sans: "'Public Sans', system-ui, -apple-system, sans-serif",
    serif: "'Public Sans', system-ui, -apple-system, sans-serif",
  },
  radius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 3px rgba(22,39,14,0.06), 0 1px 2px rgba(22,39,14,0.04)',
    md: '0 4px 12px rgba(22,39,14,0.08), 0 2px 4px rgba(22,39,14,0.04)',
  },
  fontSizes: {
    xs: '11px',
    sm: '12px',
    base: '16px',
    lg: '18px',
    xl: '22px',
    '2xl': '24px',
    '3xl': '30px',
    '4xl': '38px',
    '5xl': '44px',
  },
}
