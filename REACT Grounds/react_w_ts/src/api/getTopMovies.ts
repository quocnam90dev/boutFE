import axios from 'axios'

const topMovieIds = [
  'tt0111161',
  'tt0068646',
  'tt0071562',
  'tt0468569',
  'tt0050083',
  'tt0108052',
  'tt0167260',
  'tt0110912',
]

const topMoviesInfo = topMovieIds.map(id => axios.get(`http://www.omdbapi.com/?i=${id}&apikey=fe5a9562`))

export default topMoviesInfo