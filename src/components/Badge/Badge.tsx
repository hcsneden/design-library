import React from 'react'
import { cn } from '../../utils/cn'
import { injectStyle } from '../../utils/injectStyle'

const badgeCSS = `
.dl-badge {
  display: inline-flex;
  align-items: center;
  font-family: var(--dl-font-sans);
  font-size: var(--dl-font-size-xs);
  font-weight: 500;
  letter-spacing: 0.03em;
  border-radius: var(--dl-radius-full);
  padding: 3px 10px;
  line-height: 1.5;
  box-sizing: border-box;
  white-space: nowrap;
}
.dl-badge--default {
  background: var(--dl-color-fg);
  color: var(--dl-color-bg);
}
.dl-badge--outline {
  background: transparent;
  color: var(--dl-color-fg);
  border: 1px solid var(--dl-color-fg);
}
.dl-badge--subtle {
  background: var(--dl-color-surface);
  color: var(--dl-color-fg);
  border: 1px solid var(--dl-color-border);
}
`

export type BadgeVariant = 'default' | 'outline' | 'subtle'

export interface BadgeProps {
  variant?: BadgeVariant
  className?: string
  children?: React.ReactNode
}

export const Badge = ({ variant = 'default', className, children }: BadgeProps) => {
  injectStyle('badge', badgeCSS)

  return (
    <span className={cn('dl-badge', `dl-badge--${variant}`, className)}>
      {children}
    </span>
  )
}
