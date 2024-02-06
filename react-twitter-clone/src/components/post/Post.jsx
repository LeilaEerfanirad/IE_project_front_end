import React from 'react'
import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
import { FaRetweet } from "react-icons/fa6";
import { RiDeleteBinLine } from "react-icons/ri";
import './post.scss';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
function Post(props) {
  const navigate = useNavigate();
  const username = JSON.parse(localStorage.getItem('user')) || [];
  
  const handleDelete = async (e) => {
    // window.alert('hello');
    e.preventDefault();
    console.log('here');
    let c = "aa";
    const a = await fetch(
        `http://localhost:3000/etweet?text=${props.item.text}&title=${props.item.title}&email=${props.item.email}`
        , {
        method: 'POST'
    })
    .then(response => response.json())
    .then(data => {
        c = data
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
    // localStorage.setItem('user',c.user)
    
};

const handleRetweet = async (e) => {
  e.preventDefault();
  console.log('here');
  let c = "aa";
  const a = await fetch(
      `http://localhost:3000/retweet?text=${props.item.text}&title=${props.item.title}&email=${props.item.email}`
      , {
      method: 'POST'
  })
  .then(response => response.json())
  .then(data => {
      c = data
      console.log(data);
  })
  .catch(error => {
      console.error('Error:', error);
  });
  // localStorage.setItem('user',c.user)
}
const handleLikeTweet = async (e) => {
  e.preventDefault();
  console.log('here');
  let c = "aa";
  const a = await fetch(
      `http://localhost:3000/like?text=${props.item.text}&title=${props.item.title}&email=${props.item.email}`
      , {
      method: 'POST'
  })
  .then(response => response.json())
  .then(data => {
      c = data
      console.log(data);
  })
  .catch(error => {
      console.error('Error:', error);
  });
  // localStorage.setItem('user',c.user)
}

  return (
    <div className='postContainer'>
        <h2>{props.item.title}</h2>
        <p>{props.item.text}</p>
        <div><NavLink className='postContainer__nav' to='/likes'>{props.item.likes.length}</NavLink> <FcLikePlaceholder onClick={handleLikeTweet}/></div>
        <div><NavLink className='postContainer__nav' to='/retweets'>{props.item.retweets.length}</NavLink> <FaRetweet onClick={handleRetweet} /></div>
        {(props.item.username == username.username) ? <RiDeleteBinLine onClick={handleDelete}/> : ''}
        
    </div>
  )
}

export default Post