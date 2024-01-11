import React, { useEffect } from 'react'
import { useState } from 'react'
import DefaultLayoutHOC from '../Layouts/Default.layout'
import HeroCaroucel from '../Components/HeroCaroucel/HeroCaroucelComponent'
import EntertenmentCardSlider from '../Components/entertenment/EntertenmentCardComponents'
import PosterSlider from '../Components/PsterSlider/PosterSliderComponent'
import axios from 'axios'




const HomePage = () => {
  const[recommendedMovies,setrecommendedMovies]= useState([])
  const [premiumMovies,setpremiumMovies]= useState([])
  const[onlineStreamingMovies,setonlineStreamingMovies]=useState([])

  useEffect(()=>{

    const requestRecommendedMovies= async ()=>{
    const getRecommendedMovies= await axios.get(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=8d901cdd2cbe025215a71567913f90a5");
      setrecommendedMovies(getRecommendedMovies.data.results);
      }
      requestRecommendedMovies();
  },[]);
    useEffect(()=>{

    const requestpremiumMovies= async ()=>{
    const getpremiumMovies= await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=8d901cdd2cbe025215a71567913f90a5");
      setpremiumMovies(getpremiumMovies.data.results);
      }
      requestpremiumMovies();
  },[]);
  useEffect(()=>{

    const requestonlineStreamingMovies= async ()=>{
    const getonlineStreamingMovies= await axios.get(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=8d901cdd2cbe025215a71567913f90a5");
      setonlineStreamingMovies(getonlineStreamingMovies.data.results);
      }
      requestonlineStreamingMovies();
  },[]);



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
        subTitle="List Of Recommended Movies"
        posters={recommendedMovies}
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
        subTitle="Brand New Release Every Friday"
        posters={premiumMovies}
        isDark={true}/>
          </div>
        </div>
      </div>
       <div className='container mx-auto px-4 md:px-12 my-8'>
        <PosterSlider 
        title="Online Streaming Movies"
        subTitle="Online Streaming Events"
        posters={onlineStreamingMovies}
        isDark={false}
        />
      </div>
    </>
  )
}

export default DefaultLayoutHOC(HomePage); 