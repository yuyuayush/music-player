import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux';
import Controls from '../components/MusicPlayer/Controls'
import {DetailsHeader,Error,Loader,RelatedSongs} from '../components';
import { setActiveSong,playPause } from '../redux/features/playerSlice';
import {useGetSongRelatedQuery, useGetTopDetailsQuery} from '../redux/services/shazamCore';
const SongDetails = () => {
const dispatch =useDispatch();
  const {songid} =useParams();
  const {data,isFetching:isFetchingSongDetails,error} = useGetTopDetailsQuery({songid});
  const da = data?.hub;
  const dat = da?.actions[0].id;
  let Song = new Audio(da?.actions[1]?.uri)
console.log(songid)
console.log(da?.actions[1]?.uri);
  const {activeSong,isPlaying} = useSelector((state)=>state.player);
  return (
    <div className='flex flex-col'>
        <DetailsHeader artistId="" songData={data}/>
      <div className="mb-10">
        <h2 className="text-white text-3xl font-bold">
          Lyrics:
        </h2>
        <div className="mt-5">
    <Controls Song={Song}/>
    {/* <p onClick={Song.play()}>play</p>
    {
      console.log(data?.url)
    } */}
   

   
{data?.sections[1]?.text.map((line,i)=>
  <p key={i} className='text-gray-400 text-base my-1'>{line}</p>
  )

}
  </div>
      </div>
     
      <RelatedSongs 
      dat={dat}
      isPlaying={isPlaying}
      activeSong={activeSong}
      />
    </div>
  )
}

export default SongDetails