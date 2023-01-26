import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import {Error,Loader,SongCard} from '../components';
import {genres} from '../assets/constants';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

import { useState } from 'react';
import Controls from '../components/MusicPlayer/Controls';
import Player from '../components/MusicPlayer/Player';
import Seekbar from '../components/MusicPlayer/Seekbar';
const Discover = () => {
  const dispatch = useDispatch();
  const {activeSong,isPlaying} = useSelector((state)=>state.player);
  const genreTitle = 'Pop';
  const { data,isFetching,error} = useGetTopChartsQuery('pop');
  if(isFetching)return <Loader title="loading songs..." /> 
  if(error)return <Error/>;
  const d=data.tracks;

console.log(data);
  return (
    <div className='flex flex-col'>
      <div className="w-full justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className='font-bold text-3xl text-white text-left '>Discover {genreTitle}</h2>
    <select onChange={()=>{}} value="" className='bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5'>
      {genres.map((genre)=>(
        <option key={genre.value} value={genre.value}>
          {genre.title}
        </option>
      ))}
    </select>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
       
        {d?.map((song,index)=>(
       <SongCard key={index} song={song} i={index} isPlaying={isPlaying} activeSong={activeSong} data={d} />
        ))}
    {/* <Controls/>
    <Player activeSong={activeSong} isPlaying={isPlaying} />
    <Seekbar/>
    <Track isPlaying={isPlaying} activeSong={activeSong}/> */}

      </div>
    </div>
  )
}

export default Discover; 