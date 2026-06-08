import React from 'react'
import { cn } from '../../utils/cn'
import { injectStyle } from '../../utils/injectStyle'

const buttonCSS = `
.dl-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--dl-font-sans);
  font-weight: 500;
  letter-spacing: 0.01em;
  cursor: pointer;
  border: 1px solid transparent;
  transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease, opacity 0.15s ease;
  text-decoration: none;
  white-space: nowrap;
  box-sizing: border-box;
}
.dl-button:focus-visible {
  outline: 2px solid var(--dl-color-fg);
  outline-offset: 2px;
}
.dl-button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  pointer-events: none;
}
.dl-button--sm { padding: 6px 14px; font-size: var(--dl-font-size-sm); border-radius: var(--dl-radius-sm); }
.dl-button--md { padding: 10px 20px; font-size: var(--dl-font-size-base); border-radius: var(--dl-radius-md); }
.dl-button--lg { padding: 14px 28px; font-size: var(--dl-font-size-lg); border-radius: var(--dl-radius-md); }
.dl-button--primary {
  background: var(--dl-color-accent);
  color: var(--dl-color-accent-fg);
  border-color: var(--dl-color-accent);
}
.dl-button--primary:hover:not(:disabled) { opacity: 0.8; }
.dl-button--secondary {
  background: var(--dl-color-surface);
  color: var(--dl-color-fg);
  border-color: var(--dl-color-border);
}
.dl-button--secondary:hover:not(:disabled) {
  background: var(--dl-color-surface-hover);
  border-color: var(--dl-color-border-hover);
}
.dl-button--ghost {
  background: transparent;
  color: var(--dl-color-fg);
  border-color: transparent;
}
.dl-button--ghost:hover:not(:disabled) { background: var(--dl-color-surface); }
.dl-button--outline {
  background: transparent;
  color: var(--dl-color-fg);
  border-color: var(--dl-color-fg);
}
.dl-button--outline:hover:not(:disabled) {
  background: var(--dl-color-fg);
  color: var(--dl-color-bg);
}
`

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) => {
  injectStyle('button', buttonCSS)

  return (
    <button
      className={cn('dl-button', `dl-button--${variant}`, `dl-button--${size}`, className)}
      {...props}
    >
      {children}
    </button>
  )
}
