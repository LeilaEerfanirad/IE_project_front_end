import './home.scss'
import React, { useEffect, useState } from 'react';
import Post from '../post/Post.jsx';
import { useNavigate } from 'react-router-dom';
function Home() {
    const navigate = useNavigate();
    let posts = [];
    posts = JSON.parse(localStorage.getItem('homeValue')) || [];
    posts = posts.values
    useEffect(() => {
        let user = JSON.parse(localStorage.getItem('user')) || [];
        let logStatus = localStorage.getItem('isLogedin');
        console.log(logStatus);
        if (logStatus == "false") {
          window.alert('User not Log in');
          navigate('/');
        }
        if(posts==[]){
            window.alert('no Tweets');
          navigate('/');
        }
      }, []);
    return (
    <div>
        {posts.map(row => row.tweet.map(r => <Post item={r}/>))}
    </div>
  )
}

export default Home