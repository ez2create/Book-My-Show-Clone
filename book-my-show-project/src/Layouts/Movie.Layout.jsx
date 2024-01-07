import React from 'react'
import MovieNavbarComponents from '../Components/navbar/MovieNavbar.components'

const MovieLayout = (Component) => ({...props})=>{
  return (
    <div>
        <MovieNavbarComponents />
        <Component {...props} />
        <div>Footer</div>
    </div>
    


  )
}

export default MovieLayout;