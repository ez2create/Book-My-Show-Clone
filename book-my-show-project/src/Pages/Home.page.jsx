import React from 'react'
import { useState } from 'react'
import DefaultLayoutHOC from '../Layouts/Default.layout'
import HeroCaroucel from '../Components/HeroCaroucel/HeroCaroucelComponent'
import EntertenmentCardSlider from '../Components/entertenment/EntertenmentCardComponents'
import PosterSlider from '../Components/PsterSlider/PosterSliderComponent'

const[recommendedMovies,setrecommendedMovies]= useState([])
const [premiumMovies,setpremiumMovies]= useState([])
const[onlineStreamingMovies,setonlineStreamingMovies]=useState([])


const HomePage = () => {
  return (
    <>
    <HeroCaroucel/>
      <div className='container mx-auto px-4 md:px-12 my-8'>
        <h1 className='text-2xl font-bold text-gray-800 sm:ml-3 my-3'>The Best Of Entertenment</h1>
        <EntertenmentCardSlider/>
      </div>
      <div className='container mx-auto px-4 md:px-12 my-8'>
        <PosterSlider 
        title="Recommended Movies"
        subject="List Of Recommended Movies"
        poster={recommendedMovies}
        isDark={false}/>
      </div>
      <div className='bg-premier-800 py-12'>
        <div className='Container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3'>
          <div className='hidden md:flex'>
            <img
            src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
            alt="rupay logo"
            className='w-full h-full' />
          </div>
          <div className='container mx-auto px-4 md:px-12 my-8'>
        <PosterSlider 
        title="Premium Movies"
        subject="Brand New Release Every Friday"
        poster={premiumMovies}
        isDark={true}/>
          </div>
        </div>
      </div>
       <div className='container mx-auto px-4 md:px-12 my-8'>
        <PosterSlider 
        title="Online Streaming Movies"
        subject="Online Streaming Events"
        poster={onlineStreamingMovies}
        isDark={false}
        />
      </div>
    </>
  )
}

export default DefaultLayoutHOC(HomePage);