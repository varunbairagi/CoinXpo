import React from 'react'
import { NavLink } from 'react-router-dom'
const Usercard = () => {
  return (  <>

    <div className='usr-main'>
    <NavLink to="/order">
        <p>Your Orders</p></NavLink>
        <NavLink to="/user"> <p>Your Profile</p></NavLink>
        <NavLink to="/logout"> <p>Logout</p></NavLink>
    </div>

  </>
  )
}

export default Usercard