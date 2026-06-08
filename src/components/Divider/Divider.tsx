import React from 'react'
import { cn } from '../../utils/cn'
import { injectStyle } from '../../utils/injectStyle'

const dividerCSS = `
.dl-divider {
  border: none;
  background: var(--dl-color-border);
  flex-shrink: 0;
}
.dl-divider--horizontal { height: 1px; width: 100%; display: block; }
.dl-divider--vertical { width: 1px; height: 100%; display: inline-block; align-self: stretch; }
.dl-divider-labeled {
  display: flex;
  align-items: center;
  gap: 12px;
}
.dl-divider-labeled .dl-divider { flex: 1; }
.dl-divider-label {
  font-family: var(--dl-font-sans);
  font-size: var(--dl-font-size-xs);
  color: var(--dl-color-muted);
  white-space: nowrap;
}
`

export type DividerOrientation = 'horizontal' | 'vertical'

export interface DividerProps {
  orientation?: DividerOrientation
  label?: React.ReactNode
  className?: string
}

export const Divider = ({ orientation = 'horizontal', label, className }: DividerProps) => {
  injectStyle('divider', dividerCSS)

  if (label && orientation === 'horizontal') {
    return (
      <div className={cn('dl-divider-labeled', className)}>
        <div className="dl-divider dl-divider--horizontal" role="separator" />
        <span className="dl-divider-label">{label}</span>
        <div className="dl-divider dl-divider--horizontal" role="separator" />
      </div>
    )
  }

  return (
    <div
      role="separator"
      aria-orientation={orientation}
      className={cn('dl-divider', `dl-divider--${orientation}`, className)}
    />
  )
}
