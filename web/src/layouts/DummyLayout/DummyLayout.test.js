import { render, cleanup } from '@testing-library/react'

import DummyLayout from './DummyLayout'

describe('DummyLayout', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<DummyLayout />)
    }).not.toThrow()
  })
})
