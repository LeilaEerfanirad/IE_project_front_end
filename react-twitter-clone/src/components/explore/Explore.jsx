import React, { useState } from 'react'
import './explore.scss'
import Flist from '../flist/Flist';
function Explore() {
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const s = document.getElementById('search_input').value;
    let result = "a";
    console.log(s);
    console.log("searchhhhh");
    await fetch(
        `http://localhost:3000/search?str=${s}`
        , {
        method: 'POST'
    })
    .then(response => response.json())
    .then(data => {
        result = data;
        // console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
    console.log(result.user);
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
        <button className='exploreContainer__button' onClick={handleSubmit}>Search</button>
      {/* <Flist item='/> */}
      </div>
     
    </div>
  )
}

export default Explore