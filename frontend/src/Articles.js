import React from 'react'
import { Link } from 'react-router'

const Articles = () => {
  return (
    <main className='articles-main'>
        <aside className="todays-article-section">
          <h2>Today's Article</h2>
            <div className="todays-article">
              <Link to='/articles/water-crisis'>
                <h3>The Global Water Crisis: Challenges and development</h3>
                <img src="https://static1.squarespace.com/static/63bd810bc84e6c4c5f396e08/63eabee4a3e9b53b3b9f2cf1/642c60ff8d16c438969fb04c/1692112742869/%2359+Water+Scarcity%3AGlobal+Water+Crisi+-+HEAL+THE+PLANET.jpg?format=1500w" alt="" />
                <p>Since 1984, the "Guidelines for Drinking-water Quality" by the World Health Organization (WHO) defines clean water as water that is safe, acceptable, and accessible for human consumption and use. </p>
              </Link>
            </div>
        </aside>
        <section className="articles-carousel">
          <div className="">
            <Link to='/articles/water-crisis'>
              <h3>The Global Water Crisis: Challenges and development</h3>
              <img src="https://static1.squarespace.com/static/63bd810bc84e6c4c5f396e08/63eabee4a3e9b53b3b9f2cf1/642c60ff8d16c438969fb04c/1692112742869/%2359+Water+Scarcity%3AGlobal+Water+Crisi+-+HEAL+THE+PLANET.jpg?format=1500w" alt="" />
              <p>Since 1984, the "Guidelines for Drinking-water Quality" by the World Health Organization (WHO) defines clean water as water that is safe, acceptable, and accessible for human consumption and use. </p>
            </Link>
          </div>
          <div className="">
            <Link to='/articles/water-crisis'>
              <h3>The Global Water Crisis: Challenges and development</h3>
              <img src="https://static1.squarespace.com/static/63bd810bc84e6c4c5f396e08/63eabee4a3e9b53b3b9f2cf1/642c60ff8d16c438969fb04c/1692112742869/%2359+Water+Scarcity%3AGlobal+Water+Crisi+-+HEAL+THE+PLANET.jpg?format=1500w" alt="" />
              <p>Since 1984, the "Guidelines for Drinking-water Quality" by the World Health Organization (WHO) defines clean water as water that is safe, acceptable, and accessible for human consumption and use. </p>
            </Link>
          </div>
        </section>
    </main>
  )
}

export default Articles