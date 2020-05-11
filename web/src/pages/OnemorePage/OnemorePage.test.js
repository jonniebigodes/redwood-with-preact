import { h } from 'preact'
import { render, cleanup } from '@testing-library/preact'

import OnemorePage from './OnemorePage'

describe('OnemorePage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<OnemorePage />)
    }).not.toThrow()
  })
})
