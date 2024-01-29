import React from 'react'
import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
import { FaRetweet } from "react-icons/fa6";
import './post.scss';
function Post(props) {
  return (
    <div className='postContainer'>
        <h2>{props.item.title}</h2>
        <p>{props.item.text}</p>
        <div>{props.item.likes.length} <FcLikePlaceholder /></div>
        <div>{props.item.retweets.length} <FaRetweet /></div>
    </div>
  )
}

export default Post