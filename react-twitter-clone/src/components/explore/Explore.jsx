import React from 'react'
import './explore.scss'
function Explore() {
  return (
    <div className='exploreContainer'>
      <input
      placeholder='search'
      className='exploreContainer__in'
      />
      <button className='exploreContainer__button'>Search</button>
    </div>
  )
}

export default Explore