import Banner from './Components/Banner'
import Row from './Components/Row'
import Request from './Api/Request'
import Header from './Components/Header'


const page = () => {

  return (
    <>
      <Header/>
      <main>
        <Banner />
        <section>
        <Row title="Upcoming" fetchUrl={Request.requestUpcoming} />
        <Row title="Trending" fetchUrl={Request.requestTrending} />
        <Row title="TopRated" fetchUrl={Request.requestTopRated} />
        <Row title="Popular" fetchUrl={Request.requestPopular} />
        </section>
      </main>
      {/* modal */}
    </>
  )
}

export default page
