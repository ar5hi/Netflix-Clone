// import axios from './axios'
// import React, { useEffect, useState } from 'react'
// import './Row.css'
// import YouTube from 'react-youtube'
// // import movieTrailer from "movie-trailer"
// function Row({ title, fetchUrl, isLargeRow = false }) {
//   const [movies, setMovies] = useState([])
//   const [trailerUrl, setTrailerUrl]=useState("")
//   const base_url = 'https://image.tmdb.org/t/p/original/'
//   const youtube_API = 'AIzaSyDQBv8dRA6c0Xl0pgU5qbrMrpkCsU4w7aA'
//   useEffect(() => {
//     async function fetchData() {
//       const request = await axios.get(fetchUrl)
//       setMovies(request.data.results)
//       return request
//     }
//     fetchData()
//   }, [fetchUrl])
//   console.log(movies)
//   const clickHandler = (movie) => {
//     if (trailerUrl) {
//       setTrailerUrl("")
//     }
//     else {
//       movieTrailer(movie?.name || "")
//         .then((url) => {
//           const urlParams = new URLSearchParams(URL(url).search)
//           setTrailerUrl(urlParams.get('v'))
//         })
//       .catch(err=>console.log(SyntaxError))
//     }
//   }
//   return (
//     <div className="row">
//       <h2>{title}</h2>
//       <div className="row__posters">
//         {movies?.map(
//           (movie) =>
//             ((isLargeRow && movie.poster_path) ||
//               (!isLargeRow && movie.backdrop_path)) && (
//               <img
//                 className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
//                 key={movie.id}
//                 onClick={()=>clickHandler(movie)}
//                 src={`${base_url}${
//                   isLargeRow ? movie.poster_path : movie.backdrop_path
//                 }`}
//                 alt={movie.name}
//               />
//             )
//         )}
//       </div>
//      {trailerUrl && <YouTube
//         videoId={trailerUrl}
//         opts={{
//           height: '390',
//           width: '100%',
//           playerVars: {
//             autoplay: 1,
//           },
//         }}
//       />}
//     </div>
//   )
// }

// export default Row









// import axios from './axios'
// import React, { useEffect, useState } from 'react'
// import './Row.css'
// import YouTube from 'react-youtube'

// function Row({ title, fetchUrl, isLargeRow = false }) {
//   const [movies, setMovies] = useState([])
//   const [trailerUrl, setTrailerUrl] = useState('')
//   const base_url = 'https://image.tmdb.org/t/p/original/'

//   const youtube_API = 'AIzaSyDQBv8dRA6c0Xl0pgU5qbrMrpkCsU4w7aA'

//   useEffect(() => {
//     async function fetchData() {
//       const request = await axios.get(fetchUrl)
//       setMovies(request.data.results)
//       return request
//     }
//     fetchData()
//   }, [fetchUrl])

//   // const clickHandler = async (movie) => {
//   //   setTrailerUrl('')
//   //   if (trailerUrl) {
//   //     setTrailerUrl('')
//   //   } else {
//   //     const response = await axios.get(
//   //       'https://www.googleapis.com/youtube/v3/search',
//   //       {
//   //         params: {
//   //           key: youtube_API,
//   //           q: `{${movie.name} || ${movie.original_name} } official trailer`,
//   //           part: 'snippet',
//   //           maxResults: 1,
//   //           type: 'video',
//   //           videoDefinition: 'high',
//   //           videoType: 'movie',
//   //         },
//   //       }
//   //     )
//   //     console.log(response)
//   //     setTrailerUrl(response.data.items[0].id.videoId)
//   //   }
//   //   console.log(trailerUrl)
//   // }


//   const clickHandler = async function (movie) {
//      setTrailerUrl('')
//     if (trailerUrl) {
//       setTrailerUrl('')
//     } else {
//      try {
//        const response = await axios.get(
//          'https://www.googleapis.com/youtube/v3/search',
//          {
//            params: {
//              key: youtube_API,
//              q: `${movie.name} official trailer`,
//              part: 'snippet',
//              maxResults: 1,
//              type: 'video',
//              videoDefinition: 'high',
//              videoType: 'movie',
//            },
//          }
//        )
//        if (response.data.items.length > 0) {
//          const trailerId = response.data.items[0].id.videoId
//          const trailerUrl = `https://www.youtube.com/watch?v=${trailerId}`
//          return trailerUrl
//        } else {
//          console.log(`No trailer found for ${movie.name}`)
//          return null
//        }
//      } catch (error) {
//        console.log(error)
//        return null
//      }
//   }
// }


//   return (
//     <div className="row">
//       <h2>{title}</h2>
//       <div className="row__posters">
//         {movies?.map(
//           (movie) =>
//             ((isLargeRow && movie.poster_path) ||
//               (!isLargeRow && movie.backdrop_path)) && (
//               <img
//                 className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
//                 key={movie.id}
//                 onClick={() => clickHandler(movie)}
//                 src={`${base_url}${
//                   isLargeRow ? movie.poster_path : movie.backdrop_path
//                 }`}
//                 alt={movie.name}
//               />
//             )
//         )}
//       </div>
//       {trailerUrl && (
//         <YouTube
//           videoId={trailerUrl}
//           opts={{
//             height: '390',
//             width: '100%',
//             playerVars: {
//               autoplay: 1,
//             },
//           }}
//         />
//       )}
//     </div>
//   )
// }

// export default Row












import axios from './axios'
import React, { useEffect, useState } from 'react'
import './Row.css'
import YouTube from 'react-youtube'
// import movieTrailer from "movie-trailer"
function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([])
  const [trailerUrl, setTrailerUrl] = useState("")
  const base_url = 'https://image.tmdb.org/t/p/original/'
  const API_KEY = 'f81980ff410e46f422d64ddf3a56dddd'

  const youtube_API = 'AIzaSyDQBv8dRA6c0Xl0pgU5qbrMrpkCsU4w7aA'
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results)
      return request
    }
    fetchData()
  }, [fetchUrl])
  console.log(movies)
let trailerId=""
  const clickHandler = async function (movie) {
  // let result1 = movie.name.toLowerCase().replace(/\s+/g, '')
  // let result2 = movie.title.toLowerCase().replace(/\s+/g, '')
  setTrailerUrl('')
  // if (trailerUrl) {
  //   setTrailerUrl('')
  // } else {
  
    try {
      const response = await axios.get(
        'https://www.googleapis.com/youtube/v3/search',
        {
          params: {
            key: youtube_API,
            q: `${movie.name.toLowerCase().replace(/\s+/g, '')}officialtrailer`,
            part: 'snippet',
            maxResults: 1,
            type: 'video',
            // channelId: 'UCWOA1ZGywLbqmigxE4Qlvuw',
            videoDefinition: 'high',
            videoType: 'movie',
          },
        }
      )
      console.log(movie.name, response)
      if (response.data.items.length > 0) {
        trailerId = response.data.items[0].id.videoId
        const trailerUrl = `https://www.youtube.com/watch?v=${trailerId}`
        setTrailerUrl(trailerUrl)
      }
    } catch (error) {
      console.error(error)
    // }
  }
  console.log(trailerUrl)
  }


  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies?.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
                key={movie.id}
                onClick={()=>clickHandler(movie)}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </div>
     {trailerUrl && <YouTube
        videoId={trailerId}
        opts={{
          height: '390',
          width: '100%',
          playerVars: {
            autoplay: 1,
          },
        }}
      />}
    </div>
  )
}

export default Row