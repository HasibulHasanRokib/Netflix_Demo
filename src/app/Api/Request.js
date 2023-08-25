
const key='6c34d82ca8c355b2630a54279c589ed1';

const Request={
    requestPopular:`https://api.themoviedb.org/3/movie/popular?api_key=${key}?language=en-US&page=1`,
    requestTrending:`https://api.themoviedb.org/3/movie/popular?api_key=${key}?language=en-US&page=2`,
    requestTopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}?language=en-US&page=1`,
    requestUpcoming:`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}?language=en-US&page=1`,

}
export default Request