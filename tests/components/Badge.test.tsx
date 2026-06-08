import React from 'react'
import { render, screen } from '../helpers/render'
import { Badge } from '../../src/components/Badge/Badge'

describe('Badge', () => {
  it('renders children', () => {
    render(<Badge>New</Badge>)
    expect(screen.getByText('New')).toBeInTheDocument()
  })

  it('applies default variant class by default', () => {
    render(<Badge>New</Badge>)
    expect(screen.getByText('New')).toHaveClass('dl-badge--default')
  })

  it('applies outline variant class', () => {
    render(<Badge variant="outline">Beta</Badge>)
    expect(screen.getByText('Beta')).toHaveClass('dl-badge--outline')
  })

  it('applies subtle variant class', () => {
    render(<Badge variant="subtle">Draft</Badge>)
    expect(screen.getByText('Draft')).toHaveClass('dl-badge--subtle')
  })

  it('merges custom className', () => {
    render(<Badge className="custom">Tag</Badge>)
    expect(screen.getByText('Tag')).toHaveClass('custom')
    expect(screen.getByText('Tag')).toHaveClass('dl-badge')
  })
})
