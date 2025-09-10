import React from 'react'
import { Helmet } from 'react-helmet'

const Aboutus = () => {
  return (
    <main>
        <Helmet>
            <title>About Us</title>
            <meta name="description" content="EnviroX is a society dedicated to propagating news or ideas about the environment, focusing on issues like climate change, conservation, and sustainability, while inspiring actions and solutions through education, media outreach, and community engagement." />
            <meta property="og:title" content="EnviroX" />
            <meta property="og:description" content="EnviroX is a society dedicated to propagating news or ideas about the environment, focusing on issues like climate change, conservation, and sustainability, while inspiring actions and solutions through education, media outreach, and community engagement." />
            <link rel="canonical" href="https://envirox-ac901.web.app/aboutus" />
        </Helmet>
        <section className='about'>
            <h2 style={{fontSize: '2rem', marginBottom: '10vh'}}>Who are we?</h2>
            <div className="cards">
                <div className="card">
                    <div className="header">
                        <h3>What is EnviroX?</h3>
                    </div>
                    <div className="about-text">
                        <img src="" alt="" />
                        <p>EnviroX is a society dedicated to propagating news or ideas about the environment, focusing on issues like climate change, conservation, and sustainability, while inspiring actions and solutions through education, media outreach, and community engagement.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="header" style={{backgroundColor: '#057C9E'}}>
                        <h3>Why Us?</h3>
                    </div>
                    <div className="about-text">
                        <img src="" alt="" />
                        <p>We represent the voices of the new generation, tackling environmental issues with a fresh, intersectional approach. By examining connections between the environment, economy, education, and humanities, we deliver innovative, inclusive solutions that align with the needs of today and tomorrow.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="header" style={{backgroundColor: '#01BAEF'}}>
                        <h3>Our Approach</h3>
                    </div>
                    <div className="about-text">
                        <img src="" alt="" />
                        <p>We address environmental challenges by examining how they intersect with various aspects. By combining research, advocacy, and action, we develop solutions that are practical, equitable, and sustainable, ensuring they meet the needs of both people and the planet in a rapidly changing world.</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Aboutus