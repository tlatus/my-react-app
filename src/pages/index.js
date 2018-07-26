import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn how to design and code React apps</h1>
        <p>Complete Courses Nullam quis risus eget urna mollis ornare vel eu leo. </p>
        <Link to="/page-2/">Watch the Video</Link>
      </div>
    </div>
  </div>
)

export default IndexPage
