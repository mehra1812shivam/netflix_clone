const API_KEY="fa7080cdcb81a2ae2c4c3d4b01021980";

const requests={
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    // fetchNetflixOriginals:`/dicover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_networks=213&with_watch_monetization_types=flatrate`,
    fetchTopRated:`movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchInTheaters:`movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
    fetchComedyMovies:`discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35&with_watch_monetization_types=flatrate`,
    fetchHorrorMovies:`discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27&with_watch_monetization_types=flatrate`,
    fetchRomanceMovies:`discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10749&with_watch_monetization_types=flatrate`,
    fetchDocumentaries:`discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=99&with_watch_monetization_types=flatrate`,
}
export default requests;