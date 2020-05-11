import { h } from 'preact'
import { render, cleanup } from '@testing-library/preact'

import Samplecomponent from './Samplecomponent'

describe('Samplecomponent', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    const { getByText } = render(<Samplecomponent />)
    expect(getByText('Oingo Bongo')).toBeInTheDocument()
  })
})
