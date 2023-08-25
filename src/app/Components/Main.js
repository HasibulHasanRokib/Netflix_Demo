'use client'

import { useEffect, useState } from "react"
import Request from "../Api/Request"
import Image from "next/image";

const Main =() => {

const [movies,setMovies]=useState([]);

const movie=movies[Math.floor(Math.random()*movies.length)]

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YzM0ZDgyY2E4YzM1NWIyNjMwYTU0Mjc5YzU4OWVkMSIsInN1YiI6IjY0ZTcwNTcwNTk0Yzk0MDBhY2FmNTI5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jheqORE8tJA6XuADBujg7sSAymYDHGYPOmgAqI7N4Yc'
    }
  };
  const url=Request.requestPopular;
  const getData=async()=>{
  const res=await fetch(url,options);
  const data=await res.json();
  setMovies(data.results)
}
useEffect(()=>{
getData();
},[])


  return (
    <>
    <section>
     <div className="h-[580px] w-full object-cover">
     <div className="w-full h-[580px] bg-gradient-to-r from-black absolute"></div>
     <Image src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} style={{width:"100%",height:"580px"}} width={1024} height={500}/>
     <div className=" absolute top-[20%] md:top-[30%] md:px-[4rem] px-4">
     <h1 className="font-bold text-3xl my-4">{movie?.title}</h1>
        <div>
          <button className="bg-white text-black py-2 my-3 px-3 border">Play</button>
          <button className="py-2 my-3 px-3 border ml-2">Watch Later</button>
        </div>
        <h5 className="text-gray-500 text-sm my-2">Released: {movie?.release_date}</h5>
       <div className="md:w-[50%]">
        <p>{movie?.overview.slice(0,300)}...</p>
     </div>
     </div>
     </div>
    </section>
    </>
  )
}

export default Main
