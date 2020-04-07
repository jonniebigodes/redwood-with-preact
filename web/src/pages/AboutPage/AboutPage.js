import { Link, routes } from '@redwoodjs/router'

const AboutPage = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>Find me in ./web\src\pages\AboutPage\AboutPage.js</p>
      <Link to={routes.home()}>Return home</Link>
    </div>
  )
}

export default AboutPage
