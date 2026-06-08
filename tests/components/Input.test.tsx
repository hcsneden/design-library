import React from 'react'
import { render, screen, fireEvent } from '../helpers/render'
import { Input } from '../../src/components/Input/Input'
import { inputFields, errorMessages } from '../testData'

describe('Input', () => {
  it('renders without a label', () => {
    render(<Input placeholder={inputFields.email.placeholder} />)
    expect(screen.getByPlaceholderText(inputFields.email.placeholder)).toBeInTheDocument()
  })

  it('renders with a label', () => {
    render(<Input label={inputFields.email.label} />)
    expect(screen.getByLabelText(inputFields.email.label)).toBeInTheDocument()
  })

  it('associates label with input via htmlFor', () => {
    render(<Input label={inputFields.email.label} />)
    const input = screen.getByLabelText(inputFields.email.label)
    expect(input.tagName).toBe('INPUT')
  })

  it('renders helper text', () => {
    render(<Input label={inputFields.email.label} helperText={inputFields.email.helperText} />)
    expect(screen.getByText(inputFields.email.helperText)).toBeInTheDocument()
  })

  it('renders error message and hides helper text', () => {
    render(
      <Input
        label={inputFields.email.label}
        helperText={inputFields.email.helperText}
        error={errorMessages.invalidEmail}
      />,
    )
    expect(screen.getByText(errorMessages.invalidEmail)).toBeInTheDocument()
    expect(screen.queryByText(inputFields.email.helperText)).not.toBeInTheDocument()
  })

  it('sets aria-invalid when error is present', () => {
    render(<Input label={inputFields.email.label} error={errorMessages.required} />)
    expect(screen.getByLabelText(inputFields.email.label)).toHaveAttribute('aria-invalid', 'true')
  })

  it('applies error class when error is present', () => {
    render(<Input label={inputFields.email.label} error={errorMessages.required} />)
    expect(screen.getByLabelText(inputFields.email.label)).toHaveClass('dl-input-field--error')
  })

  it('calls onChange when value changes', () => {
    const onChange = jest.fn()
    render(<Input label={inputFields.email.label} onChange={onChange} />)
    fireEvent.change(screen.getByLabelText(inputFields.email.label), {
      target: { value: 'test@test.com' },
    })
    expect(onChange).toHaveBeenCalledTimes(1)
  })

  it('renders as disabled', () => {
    render(<Input label={inputFields.email.label} disabled />)
    expect(screen.getByLabelText(inputFields.email.label)).toBeDisabled()
  })
})
