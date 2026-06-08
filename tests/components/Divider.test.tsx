import React from 'react'
import { render, screen } from '../helpers/render'
import { Divider } from '../../src/components/Divider/Divider'

describe('Divider', () => {
  it('renders a horizontal divider by default', () => {
    render(<Divider />)
    const divider = screen.getByRole('separator')
    expect(divider).toHaveClass('dl-divider--horizontal')
  })

  it('renders a vertical divider', () => {
    render(<Divider orientation="vertical" />)
    const divider = screen.getByRole('separator')
    expect(divider).toHaveClass('dl-divider--vertical')
    expect(divider).toHaveAttribute('aria-orientation', 'vertical')
  })

  it('renders a labeled divider', () => {
    render(<Divider label="or" />)
    expect(screen.getByText('or')).toBeInTheDocument()
    expect(screen.getAllByRole('separator')).toHaveLength(2)
  })

  it('merges custom className on unlabeled divider', () => {
    render(<Divider className="custom-divider" />)
    expect(screen.getByRole('separator')).toHaveClass('custom-divider')
  })
})
