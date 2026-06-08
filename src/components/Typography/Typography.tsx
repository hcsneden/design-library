import React from 'react'
import { cn } from '../../utils/cn'
import { injectStyle } from '../../utils/injectStyle'

const typographyCSS = `
.dl-typography { margin: 0; padding: 0; }
.dl-typography--display {
  font-family: var(--dl-font-serif);
  font-size: var(--dl-font-size-5xl);
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--dl-color-fg);
}
.dl-typography--h1 {
  font-family: var(--dl-font-serif);
  font-size: var(--dl-font-size-4xl);
  font-weight: 400;
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: var(--dl-color-fg);
}
.dl-typography--h2 {
  font-family: var(--dl-font-serif);
  font-size: var(--dl-font-size-3xl);
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.01em;
  color: var(--dl-color-fg);
}
.dl-typography--h3 {
  font-family: var(--dl-font-sans);
  font-size: var(--dl-font-size-2xl);
  font-weight: 600;
  line-height: 1.25;
  color: var(--dl-color-fg);
}
.dl-typography--h4 {
  font-family: var(--dl-font-sans);
  font-size: var(--dl-font-size-xl);
  font-weight: 600;
  line-height: 1.3;
  color: var(--dl-color-fg);
}
.dl-typography--body {
  font-family: var(--dl-font-sans);
  font-size: var(--dl-font-size-base);
  font-weight: 400;
  line-height: 1.65;
  color: var(--dl-color-fg);
}
.dl-typography--body-sm {
  font-family: var(--dl-font-sans);
  font-size: var(--dl-font-size-sm);
  font-weight: 400;
  line-height: 1.6;
  color: var(--dl-color-fg);
}
.dl-typography--caption {
  font-family: var(--dl-font-sans);
  font-size: var(--dl-font-size-xs);
  font-weight: 400;
  line-height: 1.5;
  color: var(--dl-color-muted);
}
.dl-typography--label {
  font-family: var(--dl-font-sans);
  font-size: var(--dl-font-size-sm);
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: 0.01em;
  color: var(--dl-color-fg);
}
.dl-typography--overline {
  font-family: var(--dl-font-sans);
  font-size: var(--dl-font-size-xs);
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--dl-color-muted);
}
.dl-typography--muted { color: var(--dl-color-muted); }
`

export type TypographyVariant =
  | 'display'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'body'
  | 'body-sm'
  | 'caption'
  | 'label'
  | 'overline'

const variantToElement: Record<TypographyVariant, React.ElementType> = {
  display: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  body: 'p',
  'body-sm': 'p',
  caption: 'span',
  label: 'span',
  overline: 'span',
}

export interface TypographyProps {
  variant?: TypographyVariant
  as?: React.ElementType
  muted?: boolean
  className?: string
  children?: React.ReactNode
}

export const Typography = ({
  variant = 'body',
  as,
  muted = false,
  className,
  children,
  ...props
}: TypographyProps) => {
  injectStyle('typography', typographyCSS)

  const Element = as ?? variantToElement[variant]

  return (
    <Element
      className={cn('dl-typography', `dl-typography--${variant}`, muted && 'dl-typography--muted', className)}
      {...props}
    >
      {children}
    </Element>
  )
}
