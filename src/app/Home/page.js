import React from 'react'
import Main from '../Components/Main'
import Row from '../Components/Row'
import Request from '../Api/Request'

const Home = () => {
  return (
    <>
     <Main/>
     <Row title="Upcoming" fetchUrl={Request.requestUpcoming}/>
     <Row title="Trending" fetchUrl={Request.requestTrending}/>
     <Row title="TopRated" fetchUrl={Request.requestTopRated}/>
     <Row title="Popular" fetchUrl={Request.requestPopular}/>
    </>
  )
}

export default Home
