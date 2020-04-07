import FatalErrorPage from 'src/pages/FatalErrorPage'

import Routes from 'src/Routes'
import { h, render } from 'preact'
import { RedwoodProvider, FatalErrorBoundary } from '@redwoodjs/web'

import './index.css'
{
  /* <FatalErrorBoundary page={FatalErrorPage}>
      <RedwoodProvider>
        <Routes />
      </RedwoodProvider>
    </FatalErrorBoundary> */
}

const App = () => {
  return (
    <FatalErrorBoundary page={FatalErrorPage}>
      <RedwoodProvider>
        <Routes />
      </RedwoodProvider>
    </FatalErrorBoundary>
  )
}
render(<App />, document.getElementById('redwood-app'))
