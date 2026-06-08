import React from 'react'
import { render as rtlRender, RenderOptions, screen, fireEvent, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProvider } from '../../src/themes/ThemeProvider'
import { monochrome } from '../../src/themes/variants/monochrome'

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={monochrome}>{children}</ThemeProvider>
)

const render = (ui: React.ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  rtlRender(ui, { wrapper: Wrapper, ...options })

export { render, screen, fireEvent, within, userEvent }
