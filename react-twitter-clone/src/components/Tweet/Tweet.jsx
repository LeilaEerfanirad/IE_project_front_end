import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './tweet.scss';

const Tweet = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    text: '',
  });
  let user = JSON.parse(localStorage.getItem('user')) || [];
  let logStatus = localStorage.getItem('isLogedin');
  console.log(logStatus);
  

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let c = "";
    if (logStatus == "false") {
        window.alert('User not Log in');
        navigate('/login');
        
    }else {
        fetch(`http://localhost:3000/tweet?title=${formData.title}&text=${formData.text}&email=${user.email}&username=${user.username}`, {
        method: 'POST'
        })
        .then((response) => response.json())
        .then((data) => {console.log(data);
        c = data;
        })
        .catch((error) => console.error('Error:', error));
        // localStorage.setItem('user',c.user);
        navigate('/profile'); 
    }
  };

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem('user')) || [];
    let logStatus = localStorage.getItem('isLogedin');
    console.log(logStatus);
    if (logStatus == "false") {
      window.alert('User not Log in');
      navigate('/');
    }
  }, []);

  return (
    <div className='tweet-container'>
      <h2>Add Tweet</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Title'
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <textarea
          placeholder='Text'
          name="text"
          value={formData.text}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Tweet</button>
      </form>
    </div>
  );
};

export default Tweet;