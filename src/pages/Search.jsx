import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import {Error,Loader,SongCard} from '../components';
import {genres} from '../assets/constants';
import {  useGetSearchQuery } from '../redux/services/shazamCore';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import SongCards from '../components/SongCards';
const Search = () => {
  const {search} = useParams();
  const {activeSong,isPlaying} = useSelector((state)=>state.player);
 
  const { data,isFetching,error} = useGetSearchQuery(search);
  if(isFetching)return <Loader title="loading songs..." /> 
  if(error)return <Error/>;
  const d=data?.tracks.hits;
console.log(data);
console.log(d);
  return (
    <div className='flex flex-col'>
      <div className="w-full justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className='font-bold text-3xl text-white text-left '>Showing Results for  <span className='font-black'></span> {search} </h2>
   
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
       
        {d?.map((song,index)=>(
       <SongCards key={index} song={song} i={index} isPlaying={isPlaying} activeSong={activeSong} data={d} />
        ))}
     
      </div>
    </div>
  )
}

export default Search; 