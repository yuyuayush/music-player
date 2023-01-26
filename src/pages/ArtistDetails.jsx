import React from 'react'
import { useParams } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux';
import {DetailsHeader,Error,Loader,RelatedSongs} from '../components';
import { setActiveSong,playPause } from '../redux/features/playerSlice';
import {useGetSongRelatedQuery, useGetTopDetailsQuery,useGetArtistDetailsQuery, useGetAritstQuery} from '../redux/services/shazamCore';
const ArtistDetails = () => {

  const {id:artistId} =useParams();
  const {activeSong,isPlaying}    =useSelector((state)=>state.player);
  const {data:artistData ,isFetching: isFetchingArtistDetails, error}  = useGetArtistDetailsQuery(artistId);


  const {data:artist } = useGetAritstQuery(artistId);
  
  if (isFetchingArtistDetails) return <Loader title="Loading artist details..." />;

  if (error) return <Error />;


  const handlePlayClick=()=>{
    dispatch(setActiveSong({song,data,i}));
    dispatch(playPause(true));
      };
      const handlePauseClick=()=>{
        dispatch(playPause(false));
      };
      console.log(artistData);
      console.log(artist);
  return (
  
    <div className="flex flex-col">
 <DetailsHeader 
        artistId={artistId}
        artistData={artistData}
        artist={artist}
      />  
    <RelatedSongs
    artistId={artistId}
    data={artistData?.data}
    isPlaying ={isPlaying}
    activeSong ={activeSong}
    handlePauseClick={handlePauseClick}
    handlePlayClick ={handlePlayClick}
    
    />
    

 </div>
  );
    };


export default ArtistDetails