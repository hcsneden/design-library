import React from 'react'
import { render, screen } from '../helpers/render'
import { Card, CardHeader, CardContent, CardFooter } from '../../src/components/Card/Card'

describe('Card', () => {
  it('renders children', () => {
    render(<Card>Card content</Card>)
    expect(screen.getByText('Card content')).toBeInTheDocument()
  })

  it('applies shadow class when shadow is true', () => {
    const { container } = render(<Card shadow>Content</Card>)
    expect(container.querySelector('.dl-card')).toHaveClass('dl-card--shadow')
  })

  it('applies padding class', () => {
    const { container } = render(<Card padding="md">Content</Card>)
    expect(container.querySelector('.dl-card')).toHaveClass('dl-card--padding-md')
  })

  it('does not apply padding class when padding is none', () => {
    const { container } = render(<Card padding="none">Content</Card>)
    expect(container.querySelector('.dl-card')).not.toHaveClass('dl-card--padding-none')
  })

  it('renders CardHeader with title and subtitle', () => {
    render(
      <Card>
        <CardHeader title="Card Title" subtitle="Card subtitle" />
      </Card>,
    )
    expect(screen.getByText('Card Title')).toBeInTheDocument()
    expect(screen.getByText('Card subtitle')).toBeInTheDocument()
  })

  it('renders CardHeader with custom children', () => {
    render(
      <Card>
        <CardHeader>
          <span>Custom header</span>
        </CardHeader>
      </Card>,
    )
    expect(screen.getByText('Custom header')).toBeInTheDocument()
  })

  it('renders CardContent', () => {
    render(
      <Card>
        <CardContent>Main content</CardContent>
      </Card>,
    )
    expect(screen.getByText('Main content')).toBeInTheDocument()
  })

  it('renders CardFooter', () => {
    render(
      <Card>
        <CardFooter>Footer content</CardFooter>
      </Card>,
    )
    expect(screen.getByText('Footer content')).toBeInTheDocument()
  })

  it('merges custom className', () => {
    const { container } = render(<Card className="custom-card">Content</Card>)
    expect(container.querySelector('.dl-card')).toHaveClass('custom-card')
    expect(container.querySelector('.dl-card')).toHaveClass('dl-card')
  })
})
