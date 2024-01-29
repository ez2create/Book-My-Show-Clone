import React from 'react'
import MovieNavbar from '../Components/navbar/MovieNavbar.components'


const MovieLayout = (Component) => ({...props})=>{
  return (
    <div>
        <MovieNavbar/>
        <Component {...props} />
        <div>Footer</div>
    </div>
    


  )
}

export default MovieLayout;