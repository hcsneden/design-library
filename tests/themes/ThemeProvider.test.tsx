import React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeProvider, useThemeContext } from '../../src/themes/ThemeProvider'
import { monochrome } from '../../src/themes/variants/monochrome'

const ThemeConsumer = () => {
  const { theme } = useThemeContext()
  return <div data-testid="theme-name">{theme.name}</div>
}

describe('ThemeProvider', () => {
  it('renders children', () => {
    render(
      <ThemeProvider theme={monochrome}>
        <span>child content</span>
      </ThemeProvider>,
    )
    expect(screen.getByText('child content')).toBeInTheDocument()
  })

  it('provides theme via context', () => {
    render(
      <ThemeProvider theme={monochrome}>
        <ThemeConsumer />
      </ThemeProvider>,
    )
    expect(screen.getByTestId('theme-name')).toHaveTextContent('monochrome')
  })

  it('throws when useThemeContext is used outside ThemeProvider', () => {
    const consoleError = jest.spyOn(console, 'error').mockImplementation(() => {})
    expect(() => render(<ThemeConsumer />)).toThrow(
      'useThemeContext must be used within a ThemeProvider',
    )
    consoleError.mockRestore()
  })

  it('applies CSS custom properties to the wrapper element', () => {
    const { container } = render(
      <ThemeProvider theme={monochrome}>
        <span>content</span>
      </ThemeProvider>,
    )
    const wrapper = container.firstChild as HTMLElement
    expect(wrapper.style.getPropertyValue('--dl-color-bg')).toBe(monochrome.colors.bg)
    expect(wrapper.style.getPropertyValue('--dl-color-fg')).toBe(monochrome.colors.fg)
  })
})
