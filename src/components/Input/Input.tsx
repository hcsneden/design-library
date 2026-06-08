import React from 'react'
import { cn } from '../../utils/cn'
import { injectStyle } from '../../utils/injectStyle'

const inputCSS = `
.dl-input-wrapper { display: flex; flex-direction: column; gap: 6px; }
.dl-input-label {
  font-family: var(--dl-font-sans);
  font-size: var(--dl-font-size-sm);
  font-weight: 500;
  color: var(--dl-color-fg);
  letter-spacing: 0.01em;
}
.dl-input-field {
  font-family: var(--dl-font-sans);
  font-size: var(--dl-font-size-base);
  color: var(--dl-color-fg);
  background: var(--dl-color-bg);
  border: 1px solid var(--dl-color-border);
  border-radius: var(--dl-radius-md);
  padding: 10px 14px;
  outline: none;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
  box-sizing: border-box;
  width: 100%;
}
.dl-input-field::placeholder { color: var(--dl-color-muted); }
.dl-input-field:focus { border-color: var(--dl-color-fg); }
.dl-input-field:disabled { opacity: 0.4; cursor: not-allowed; }
.dl-input-field--error { border-color: var(--dl-color-error) !important; }
.dl-input-helper {
  font-family: var(--dl-font-sans);
  font-size: var(--dl-font-size-xs);
  color: var(--dl-color-muted);
}
.dl-input-helper--error { color: var(--dl-color-error); }
`

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  helperText?: string
  error?: string
}

export const Input = ({ label, helperText, error, className, id, ...props }: InputProps) => {
  injectStyle('input', inputCSS)

  const inputId = id ?? (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined)
  const describedBy = error
    ? `${inputId}-error`
    : helperText
      ? `${inputId}-helper`
      : undefined

  return (
    <div className="dl-input-wrapper">
      {label && (
        <label className="dl-input-label" htmlFor={inputId}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        aria-describedby={describedBy}
        aria-invalid={!!error}
        className={cn('dl-input-field', error && 'dl-input-field--error', className)}
        {...props}
      />
      {error && (
        <span id={`${inputId}-error`} className="dl-input-helper dl-input-helper--error" role="alert">
          {error}
        </span>
      )}
      {!error && helperText && (
        <span id={`${inputId}-helper`} className="dl-input-helper">
          {helperText}
        </span>
      )}
    </div>
  )
}
