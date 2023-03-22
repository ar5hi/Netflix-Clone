const API_KEY = "f81980ff410e46f422d64ddf3a56dddd"
const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&with_networks=213&language=en-US&sort_by=popularity.desc&page=1`,

  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&language=en-US&sort_by=popularity.desc&page=1`,

  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&with_networks=213&language=en-US&sort_by=popularity.desc&page=1`,
  
  fetchKoreanDramas: `/discover/tv?api_key=${API_KEY}&with_original_language=ko&sort_by=popularity.desc`,

  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_networks=213&language=en-US&sort_by=popularity.desc&page=1`,

  fetchTVShows: `/tv/popular?api_key=${API_KEY}&with_networks=213&language=en-US&sort_by=popularity.desc&page=1`,

  fetchUpcoming: `/movie/upcoming?api_key=${API_KEY}&with_networks=213&language=en-US&sort_by=popularity.desc&page=1`,

  fetchPopularMovies: `/movie/popular?api_key=${API_KEY}&with_networks=213&language=en-US&sort_by=popularity.desc&page=1`,
}
export default requests