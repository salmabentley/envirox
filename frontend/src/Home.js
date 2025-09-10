import React from 'react'
import { Link } from 'react-router'
import { Helmet } from 'react-helmet'

const Home = () => {
  return (
    <main>
        <Helmet>
            <title>EnviroX</title>
            <meta name="description" content="A society of sustainability enlightened leaders aiming to provide intersectional insights combining STEM, humanities and environmental challenges." />
            <meta property="og:title" content="EnviroX" />
            <meta property="og:description" content="A society of sustainability enlightened leaders aiming to provide intersectional insights combining STEM, humanities and environmental challenges." />
            <link rel="canonical" href="https://envirox-ac901.web.app/" />
        </Helmet>
    <section className='title'>
      <aside className="left">
        <div id="left-container">
          <h1>EnviroX</h1>
          <p style={{color: '#616161'}}>A society of sustainability enlightened leaders aiming to provide intersectional insights combining STEM, humanities and environmental challenges.
          </p> <br />
          <Link to='/aboutus' id="learn-more">
            Learn More
          </Link>
        </div>
      </aside>
      <aside className="right"></aside>
    </section>
    <section className='featured'>
      <h2>Featured Articles</h2>
      <div className="carouselContainer">
        <button style={{transform: 'rotate(180deg)'}} disabled></button>
        <div className="carousel">
          <div className="article">
            <Link to='/articles/running-wild'>
            
              <h3>Running Wild: PFAS Pollution in Vietnam</h3>
              <img src="https://enviliance.com/src-tsr/wp-content/uploads/2021/09/_6-e1630819857700.png" alt="" />
              <p>There are more than nutrients in the breast milk of Vietnamese mothers but also per- and poly-fluoroalkyl substances (PFAS), a group of artificial chemicals, a figure 3.75 times higher than the maximum level of PFAS permitted by the Vermont state of the United States. </p>
            </Link>
          </div>
          <div className="article">
            <Link to='/articles/water-crisis'>
              <h3>The Global Water Crisis: Challenges and development</h3>
              <img src="https://static1.squarespace.com/static/63bd810bc84e6c4c5f396e08/63eabee4a3e9b53b3b9f2cf1/642c60ff8d16c438969fb04c/1692112742869/%2359+Water+Scarcity%3AGlobal+Water+Crisi+-+HEAL+THE+PLANET.jpg?format=1500w" alt="" />
              <p>Since 1984, the "Guidelines for Drinking-water Quality" by the World Health Organization (WHO) defines clean water as water that is safe, acceptable, and accessible for human consumption and use. </p>
            </Link>
          </div>
          {/* <div className="article">
            <h3>Running Wild: PFAS Pollution in Vietnam</h3>
            <img src="https://enviliance.com/src-tsr/wp-content/uploads/2021/09/_6-e1630819857700.png" alt="" />
            <p>There are more than nutrients in the breast milk of Vietnamese mothers but also per- and poly-fluoroalkyl substances (PFAS), a group of artificial chemicals, a figure 3.75 times higher than the maximum level of PFAS permitted by the Vermont state of the United States. </p>
          </div> */}

        </div>
        <button disabled></button>
      </div>
    </section>
    {/* <section>
      <h2>Upcoming Events</h2>
      <div className="calendar"></div>
    </section> */}
  </main>
  )
}

export default Home