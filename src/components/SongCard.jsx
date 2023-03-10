import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

const SongCard = ({ song, isPlaying, activeSong, data, i }) => {
 const [playing, setPlaying] = useState(false);
  const dispatch = useDispatch();
  let Song= new Audio(song?.hub?.actions[1]?.uri);
  const handlePauseClick = () => {
    dispatch(playPause(false));
    if(playing){
      Song.paused();
      setPlaying(false);
    }
  };

  const handlePlayClick = () => {
  
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
    if(!playing){
      Song.play();
      setPlaying(true);
    }
  };
 
  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.title === song.title ? 'flex bg-black bg-opacity-70' : 'hidden'}`}>
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        <img alt="song_img" src={song.images?.coverart} className="w-full h-full rounded-lg" />
      </div>

      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-white truncate">
          <Link to={`/songs/${song?.key}`}>
            {song.title}
          </Link>
        </p>
        <p className="text-sm truncate text-gray-300 mt-1">
          <Link to={song.artists ? `/artists/${song?.key}` : '/top-artists'}>
            {song.subtitle}
          </Link>
        </p>
        
        <a href={`${song?.hub?.actions[1]?.uri
}`}>
 <p className="text-xl font-bold text-green-800 " 
 >download </p>
</a>




      </div>
    </div>
  );
};

export default SongCard;
