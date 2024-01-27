import React, { useState } from 'react'
import './explore.scss'
function Explore() {
  const [formData, setFormData] = useState({
    username: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value
    });
  };
  return (
    <div className='exploreContainer'>
      <div>
      <input
      placeholder='Search'
      className='exploreContainer__in'
      />
      </div>
      <div>
      <button className='exploreContainer__button'>Search</button>
      </div>
     
    </div>
  )
}

export default Explore