import { Link, routes } from '@redwoodjs/router'
const DummyLayout = ({ children }) => {
  return (
    <>
      <header>
        <h1>Page with a layout</h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.home()}>Go home</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default DummyLayout
