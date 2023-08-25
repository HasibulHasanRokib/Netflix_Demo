'use client'

import {BsPlayCircle} from 'react-icons/bs'
import Image from 'next/image'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { useEffect, useState } from 'react'

const Row = ({title,fetchUrl}) => {

const[movies,setMovies]=useState([])

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YzM0ZDgyY2E4YzM1NWIyNjMwYTU0Mjc5YzU4OWVkMSIsInN1YiI6IjY0ZTcwNTcwNTk0Yzk0MDBhY2FmNTI5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jheqORE8tJA6XuADBujg7sSAymYDHGYPOmgAqI7N4Yc'
    }
  };

const getData=async()=>{
try {
    let res=await fetch(fetchUrl,options);
    let data=await res.json();
    setMovies(data.results)
} catch (error) {
    console.log(error)
}
}
useEffect(()=>{
    getData();
})

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};


  return (
    <>
    <section className='p-6'>
     <h2 className='mx-2 font-semibold font-xl my-2'>{title}</h2>
     <Carousel responsive={responsive}>
    {movies.map((movie)=>{
    return<div key={movie.id} className='md:w-[15rem] w-[10rem] h-[9rem] relative'>
    <Image className='hover:border  w-[100%] h-[100%]' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} width={500} height={500}/> 
    <div className="absolute hover:z-[100] top-0 w-[100%] h-[100%] flex items-center justify-center cursor-pointer opacity-0 hover:opacity-100 ease-in duration-300 bg-black/60">
    <a href="#"><BsPlayCircle size={40}/></a>
    </div>
    </div>
    })}
    </Carousel>
    </section>
    </>
  )
}

export default Row
