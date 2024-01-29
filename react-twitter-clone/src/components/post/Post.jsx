import React from 'react'
import './post.scss';
function Post(props) {
  return (
    <div className='postContainer'>
        <h2>{props.item.title}</h2>
        <p>{props.item.text}</p>
        <div>{props.item.likes.length}</div>
        <div>{props.item.retweets.length}</div>
    </div>
  )
}

export default Post