
import React from 'react'
import ShowCard from './ShowCard'
import preload from '../data.json'

function Search() {
  return <div className="search">
    <div>
      {preload.shows.map((show) => <ShowCard key={show.imdbID} show={show} />)}
    </div>
  </div>
}

export default Search;
