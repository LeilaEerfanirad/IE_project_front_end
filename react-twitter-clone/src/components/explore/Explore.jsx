import React, { useState, useEffect } from 'react';
import './explore.scss';
import Flist from '../flist/Flist';
import Frow from '../frow/Frow';

function Explore() {
  const [result, setResult] = useState("");

  useEffect(() => {
    console.log("result changed");
  }, [result]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const s = document.getElementById('search_input').value;

    console.log(s);
    console.log("searchhhhh");
    await fetch(
      `http://localhost:3000/search?str=${s}`,
      {
        method: 'GET'
      }
    )
    .then(response => response.json())
    .then(data => {
      setResult(data);
      console.log(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
    console.log(result);
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
        {result == "" ? "" : <Frow item={result.user.email}/>}
      </div>
    </div>
  )
}

export default Explore;