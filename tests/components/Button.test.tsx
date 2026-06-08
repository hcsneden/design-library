import React from 'react'
import { render, screen, fireEvent } from '../helpers/render'
import { Button } from '../../src/components/Button/Button'
import { buttonLabels } from '../testData'

describe('Button', () => {
  it('renders children', () => {
    render(<Button>{buttonLabels.default}</Button>)
    expect(screen.getByText(buttonLabels.default)).toBeInTheDocument()
  })

  it('applies primary variant class by default', () => {
    render(<Button>{buttonLabels.default}</Button>)
    expect(screen.getByRole('button')).toHaveClass('dl-button--primary')
  })

  it('applies the correct variant class', () => {
    const { rerender } = render(<Button variant="secondary">{buttonLabels.default}</Button>)
    expect(screen.getByRole('button')).toHaveClass('dl-button--secondary')

    rerender(<Button variant="ghost">{buttonLabels.default}</Button>)
    expect(screen.getByRole('button')).toHaveClass('dl-button--ghost')

    rerender(<Button variant="outline">{buttonLabels.default}</Button>)
    expect(screen.getByRole('button')).toHaveClass('dl-button--outline')
  })

  it('applies the correct size class', () => {
    const { rerender } = render(<Button size="sm">{buttonLabels.default}</Button>)
    expect(screen.getByRole('button')).toHaveClass('dl-button--sm')

    rerender(<Button size="lg">{buttonLabels.default}</Button>)
    expect(screen.getByRole('button')).toHaveClass('dl-button--lg')
  })

  it('calls onClick when clicked', () => {
    const onClick = jest.fn()
    render(<Button onClick={onClick}>{buttonLabels.default}</Button>)
    fireEvent.click(screen.getByRole('button'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('does not call onClick when disabled', () => {
    const onClick = jest.fn()
    render(<Button disabled onClick={onClick}>{buttonLabels.default}</Button>)
    fireEvent.click(screen.getByRole('button'))
    expect(onClick).not.toHaveBeenCalled()
  })

  it('renders as disabled when disabled prop is set', () => {
    render(<Button disabled>{buttonLabels.default}</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('forwards additional HTML attributes', () => {
    render(<Button type="submit" aria-label="Submit form">{buttonLabels.submit}</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('type', 'submit')
    expect(button).toHaveAttribute('aria-label', 'Submit form')
  })

  it('merges custom className', () => {
    render(<Button className="custom-class">{buttonLabels.default}</Button>)
    expect(screen.getByRole('button')).toHaveClass('custom-class')
    expect(screen.getByRole('button')).toHaveClass('dl-button')
  })
})
