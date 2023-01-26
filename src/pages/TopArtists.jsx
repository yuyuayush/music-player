import React from 'react'
import { useGetTopAritstQuery } from '../redux/services/shazamCore'

const TopArtists = () => {
  const {data}=useGetTopAritstQuery({});
  return (
    <div>TopArtists</div>
  )
}

export default TopArtists