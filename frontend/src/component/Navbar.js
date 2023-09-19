import React from 'react'
import {Link} from "react-router-dom"
import "../App.css"
function Navbar() {
  
  return (
    <div className='navbar'>
    
     <ul className='navbar-list'>
            <li ><Link to= "/">Products</Link></li>
            <li><Link to= "/add">Add Products</Link></li>
            <li><Link to= "/Sales">Sales</Link></li>
            <li><Link to= "/addDemand">Add Demand</Link></li>
            <li><Link to= "/demand">Your Demand</Link></li>
            </ul>
    </div>
  )
}

export default Navbar