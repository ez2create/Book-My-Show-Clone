import React, { useContext, useEffect, useState } from 'react'
import MovieLayout from '../Layouts/Movie.Layout'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { MovieContext } from '../context/context';
import Slider from 'react-slick';
import PosterSlider from '../Components/PsterSlider/PosterSliderComponent'
import { FaCcVisa, FaCcApplePay } from "react-icons/fa";
import { NextArrow, PrevArrow } from '../Components/HeroCaroucel/ArrowComponents';
import MovieHero from '../Components/movieHero/movieHero';
import Cast from '../Components/Cast/Cast.Component';




const MoviePage = () => {
  const {id}= useParams();
  const {movie, setMovie} = useContext(MovieContext);
  const [cast, setCast]= useState([])
  const[recommendedMovies,setrecommendedMovies]= useState([])
  const [similarMovies, setSimilarMovies] = useState([]);

    useEffect(()=> {

      const requestMovie = async () => {
      const getMovieData = await axios.get(`/movie/${id}`);
      setMovie(getMovieData.data);
      };
      requestMovie();
    },[id]);

   useEffect(()=>{

    const requestRecommendedMovies= async ()=>{
    const getRecommendedMovies= await axios.get(
       `/movie/${id}/recommendations`);
      setrecommendedMovies(getRecommendedMovies.data.results);
      }
      requestRecommendedMovies();
  },[id]);

   useEffect(() => {
    const requestSimilarMovies = async () => {
      const getSimilarMovies = await axios.get(`/movie/${id}/similar`);
      setSimilarMovies(getSimilarMovies.data.results);
    };
    requestSimilarMovies();
  }, [id]);

  const settingCast= {
    arrows: true,
    slidesToShow: 3,
    infinite: true,
    dots: true,
    // speed: 500,
    slidesToScroll: 1,

    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settings= {
    arrows: true,
    slidesToShow: 3,
    infinite: true,
    dots: true,
    // speed: 500,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return ( 
   <>
   <MovieHero/>
    <div className="my-12  px-4 lg:px-10 w-full">
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-gray-800 font-bold text-2xl">About the movie</h1>
          <p>{movie.overview}</p>
        </div>

        <div className="my-8 ">
          <hr/>
        </div>

        <div className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl mb-3">
            Applicable Offers
          </h2>
          <div className="flex flex-col gap-3 lg:flex-row">
            <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8">
                <FaCcVisa className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold">
                  Visa Stream Offer
                </h3>
                <p className="text-gray-600">
                  Get 50% off up to INR 150 on all RuPay card* on BookMyShow
                  Stream.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="w-8 h-8">
                <FaCcApplePay className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold">Film Pass</h3>
                <p className="text-gray-600">
                  Get 50% off up to INR 150 on all RuPay card* on BookMyShow
                  Stream.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-8">
          <hr />
        </div>

        {/* Cast & Crew */}
        <div className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl mb-4">
            Cast and Crew
          </h2>
          <Slider {...settingCast}>
            {cast.map((castData) => (
              <Cast
                images={castData.profile_path}
                castName={castData.original_name}
                role={castData.character}
              />
            ))}
          </Slider>
        </div>

        <div className="my-8">
          <hr />
        </div>

        <div className="my-8">
          <PosterSlider
            config={settings}
            title="Recommended Movies"
            posters={recommendedMovies}
            isDark={false}
          />
        </div>

        <div className="my-8">
          <hr />
        </div>

        {/* Movies */}
        
        <div className="my-8">
          <PosterSlider
            config={settings}
            title="BMS XCLUSICE"
            posters={similarMovies}
            isDark={false}
          />
        </div>
    

        <div className="my-8">
          <hr />
        </div>
      </div>
    </>
  );
};

export default MovieLayout(MoviePage);