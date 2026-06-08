import React from 'react'
import { cn } from '../../utils/cn'
import { injectStyle } from '../../utils/injectStyle'
import { Typography } from '../Typography/Typography'

const cardCSS = `
.dl-card {
  background: var(--dl-color-bg);
  border: 1px solid var(--dl-color-border);
  border-radius: var(--dl-radius-lg);
  overflow: hidden;
  box-sizing: border-box;
}
.dl-card--shadow { box-shadow: var(--dl-shadow-md); border-color: transparent; }
.dl-card--padding-sm { padding: 16px; }
.dl-card--padding-md { padding: 24px; }
.dl-card--padding-lg { padding: 32px; }
.dl-card-header {
  padding: 20px 24px 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.dl-card-header + .dl-card-content { padding-top: 16px; }
.dl-card-content { padding: 24px; }
.dl-card-footer {
  padding: 16px 24px;
  border-top: 1px solid var(--dl-color-border);
  background: var(--dl-color-surface);
}
`

export type CardPadding = 'sm' | 'md' | 'lg' | 'none'

export interface CardProps {
  padding?: CardPadding
  shadow?: boolean
  className?: string
  children?: React.ReactNode
}

export interface CardHeaderProps {
  title?: React.ReactNode
  subtitle?: React.ReactNode
  className?: string
  children?: React.ReactNode
}

export interface CardContentProps {
  className?: string
  children?: React.ReactNode
}

export interface CardFooterProps {
  className?: string
  children?: React.ReactNode
}

export const CardHeader = ({ title, subtitle, className, children }: CardHeaderProps) => (
  <div className={cn('dl-card-header', className)}>
    {children ?? (
      <>
        {title && <Typography variant="h4">{title}</Typography>}
        {subtitle && <Typography variant="body-sm" muted>{subtitle}</Typography>}
      </>
    )}
  </div>
)

export const CardContent = ({ className, children }: CardContentProps) => (
  <div className={cn('dl-card-content', className)}>{children}</div>
)

export const CardFooter = ({ className, children }: CardFooterProps) => (
  <div className={cn('dl-card-footer', className)}>{children}</div>
)

export const Card = ({ padding = 'none', shadow = false, className, children }: CardProps) => {
  injectStyle('card', cardCSS)

  return (
    <div
      className={cn(
        'dl-card',
        shadow && 'dl-card--shadow',
        padding !== 'none' && `dl-card--padding-${padding}`,
        className,
      )}
    >
      {children}
    </div>
  )
}
