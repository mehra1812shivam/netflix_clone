import React, { useState,useEffect } from 'react';
import YouTube from 'react-youtube';
import axios from './axios';
import movieTrailer from "movie-trailer";
import "./Row.css";
const baseurl="https://image.tmdb.org/t/p/original/";
function Row({title,fetchUrl,isLargeRow}){
    const [movies,setMovies]=useState([]);
    const [trailerUrl,setTrailerUrl]=useState("");

    useEffect(()=>{
        //if[],run once when the row loads and dont run again
        //will run only if condtion changes
        async function fetchData(){
            const request=await axios.get(fetchUrl);
            //this will append the fetched url in base url
            console.log(request);
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    },[fetchUrl]);
       //will only reload if fetchurl changes that is it becomes a dependency
       const opts = {
        height: '390',
        width: "100%",
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
    const handleClick=(movie)=>{
        if(trailerUrl){
            setTrailerUrl("");
        }else{
            movieTrailer(movie?.name || "").then((url)=>{
                const urlParams=new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get("v"));

            }).catch(error=>console.log(error));
        }
    };
    console.log(movies);
    return(
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map(movie =>(
                    <img key={movie.id} 
                    onClick={()=>handleClick(movie)}
                    className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                    src={`${baseurl}${isLargeRow? movie.poster_path:movie.backdrop_path}`} alt={movie.name}/>
                ))}

            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}


        </div>

    )
}
export default Row;