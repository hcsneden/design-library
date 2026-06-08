import React from 'react'
import { render, screen } from '../helpers/render'
import { Typography } from '../../src/components/Typography/Typography'

describe('Typography', () => {
  it('renders children', () => {
    render(<Typography>Hello world</Typography>)
    expect(screen.getByText('Hello world')).toBeInTheDocument()
  })

  it('renders as a paragraph by default (body variant)', () => {
    render(<Typography variant="body">Body text</Typography>)
    expect(screen.getByText('Body text').tagName).toBe('P')
  })

  it('renders display variant as h1', () => {
    render(<Typography variant="display">Hero text</Typography>)
    expect(screen.getByText('Hero text').tagName).toBe('H1')
  })

  it('renders h2 variant as h2 element', () => {
    render(<Typography variant="h2">Section title</Typography>)
    expect(screen.getByText('Section title').tagName).toBe('H2')
  })

  it('renders caption variant as span', () => {
    render(<Typography variant="caption">Caption text</Typography>)
    expect(screen.getByText('Caption text').tagName).toBe('SPAN')
  })

  it('overrides element with as prop', () => {
    render(<Typography variant="h1" as="div">Custom element</Typography>)
    expect(screen.getByText('Custom element').tagName).toBe('DIV')
  })

  it('applies variant class', () => {
    render(<Typography variant="h3">Heading</Typography>)
    expect(screen.getByText('Heading')).toHaveClass('dl-typography--h3')
  })

  it('applies muted class when muted is true', () => {
    render(<Typography muted>Muted text</Typography>)
    expect(screen.getByText('Muted text')).toHaveClass('dl-typography--muted')
  })

  it('merges custom className', () => {
    render(<Typography className="custom">Text</Typography>)
    expect(screen.getByText('Text')).toHaveClass('custom')
    expect(screen.getByText('Text')).toHaveClass('dl-typography')
  })
})
