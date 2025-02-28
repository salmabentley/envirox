import React from 'react'
import {Link} from 'react-router';

const Navbar = () => {
  return (
    <nav>
      {/* <img src="" alt="" /> */}
      <Link style={{float: 'left', cursor: 'pointer', fontWeight: 'bold', margin: 0}} to='/'>EnviroX</Link>
      <ul>
        <Link to='/aboutus' style={{marginRight: '0%'}}>About Us</Link>
        {/* <Link to='/articles'  style={{marginRight: '0%'}}>Articles</Link> */}
      </ul>
    </nav>
  )
}

export default Navbar