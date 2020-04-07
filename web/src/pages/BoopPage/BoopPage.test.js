import { render, cleanup } from '@testing-library/react'

import BoopPage from './BoopPage'

describe('BoopPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<BoopPage />)
    }).not.toThrow()
  })
})
