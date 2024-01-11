import React from 'react'
import {Link} from 'react-router-dom'

const Poster = (props) => {
  return (
    <Link to={`/Movies/${props.id}`} >
      <div className='gap-5 px-4'>
        <div className=''>
          <img src={`https://image.tmdb.org/t/p/original${props.poster_path}`} alt="Movie poster" 
          className='w-52 h-full rounded-md'/>
        </div><br />
        <h3 className={`text-sm font-sans text-slate-800 ${props.isDark ?"text-white": "text-black"}`}>
          {props.original_title}
        </h3>
      </div>
    
    </Link>
  )
}

export default Poster;