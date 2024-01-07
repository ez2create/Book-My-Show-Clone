import React from 'react'
import NavbarComponents from '../Components/navbar/Navbar.components'

const DefaultLayoutHOC = 
(Component) => 
({ ...props })=>
{
  return (
    <div>
        <NavbarComponents />
        <Component {...props} />
        <div>Footer</div>
    </div>
  )
}

export default DefaultLayoutHOC;