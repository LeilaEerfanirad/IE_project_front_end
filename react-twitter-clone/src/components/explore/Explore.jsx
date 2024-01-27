import React, { useState } from 'react'
import './explore.scss'
import Flist from '../flist/Flist';
function Explore() {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const s = document.getElementById('search_input');
    const result = "a";
    fetch(
        `http://localhost:3000/search?str=${s}`
        , {
        method: 'POST'
    })
    .then(response => response.json())
    .then(data => {
        result = data;
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
    // navigate('/profile');
  };
  return (
    <div className='exploreContainer'>
      <div>
        <input
          placeholder='Search'
          className='exploreContainer__in'
          id='search_input'
        />
      </div>
      <div>
        <button className='exploreContainer__button'>Search</button>
      {/* <Flist item='/> */}
      </div>
     
    </div>
  )
}

export default Explore