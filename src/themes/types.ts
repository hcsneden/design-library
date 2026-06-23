export interface ThemeColors {
  canvas: string
  bg: string
  fg: string
  muted: string
  border: string
  borderHover: string
  accent: string
  accentHover: string
  accentFg: string
  link: string
  surface: string
  surfaceHover: string
  error: string
  warning: string
  success: string
}

export interface ThemeFonts {
  sans: string
  serif: string
}

export interface ThemeRadius {
  sm: string
  md: string
  lg: string
  full: string
}

export interface ThemeShadows {
  sm: string
  md: string
}

export interface ThemeFontSizes {
  xs: string
  sm: string
  base: string
  lg: string
  xl: string
  '2xl': string
  '3xl': string
  '4xl': string
  '5xl': string
}

export interface Theme {
  name: string
  colors: ThemeColors
  fonts: ThemeFonts
  radius: ThemeRadius
  shadows: ThemeShadows
  fontSizes: ThemeFontSizes
}
