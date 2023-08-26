'use client'

import { useEffect, useState } from "react"
import Request from "../Api/Request"
import Image from "next/image";
import {BsFillPlayFill} from 'react-icons/bs'
import {BiErrorCircle} from 'react-icons/bi'

const Banner =() => {

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
     <div className="md:h-[580px] h-[500px] w-full object-cover">
     <div className="w-full md:h-[580px] h-[500px] bg-[#141414]/60 absolute"></div>
     <Image src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} style={{width:"100%",height:"100%"}} width={800} height={500}/>
     <div className=" absolute top-[20%] md:top-[10%] lg:top-[20%] md:px-[4rem] px-4">
     <h1 className="font-bold text-3xl my-4 text-shadow-md">{movie?.title}</h1>
        <div>
          <button className="bg-white font-bold text-black py-2 my-3 px-2 border"><BsFillPlayFill className="inline-block" size={30}/>Play</button>
          <button className="py-2 my-3 px-1 border ml-2 font-semibold text-shadow-md"><BiErrorCircle className="inline-block" size={30}/>Watch Later</button>
        </div>
        <h5 className="text-gray-400 text-sm my-2 text-shadow-md">Released: {movie?.release_date}</h5>
       <div className="md:w-[50%] lg:w-[55%]">
        <p className="text-shadow-md">{movie?.overview.slice(0,230)}</p>
     </div>
     </div>
     </div>
    </section>
    </>
  )
}

export default Banner
