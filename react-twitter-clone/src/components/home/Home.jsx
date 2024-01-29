import './home.scss'
import React, { useEffect, useState } from 'react';
import Post from '../post/Post.jsx';

function Home() {

    const posts = localStorage.getItem('homeValue');
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
    <div>{posts.map(row => <Post item={row}/>)}</div>
  )
}

export default Home