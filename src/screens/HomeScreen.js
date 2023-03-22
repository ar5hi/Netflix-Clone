import React from 'react'
import Banner from '../Banner'
import './HomeScreen.css'
import Nav from '../Nav'
import requests from '../Requests'
import Row from '../Row'
function HomeScreen() {
  return (
    <div className="homescreen">
      <Nav />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="K-Dramas" fetchUrl={requests.fetchKoreanDramas} />
      <Row title="Upcoming" fetchUrl={requests.fetchUpcoming} />
      <Row title="Popular" fetchUrl={requests.fetchPopularMovies} />
      <Row title="TV Shows" fetchUrl={requests.fetchTVShows} />
      <Row title="Movies" fetchUrl={requests.fetchHorrorMovies} />
    </div>
  )
}

export default HomeScreen