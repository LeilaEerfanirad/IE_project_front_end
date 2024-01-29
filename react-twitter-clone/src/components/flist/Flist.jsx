import Frow from '../frow/Frow.jsx';
import React from 'react'
import './flist.scss';
function Flist(props) {
  let print = [];
  let user = JSON.parse(localStorage.getItem('user')) || [];
  // const btn_value = [];
  if (props.item == 'followers'){
    print = user.followers;
  }
  if (props.item == 'followings'){
    print = user.followings;
  }
  // print.forEach(element => {
  //   btn_value.push(user.followings.includes(element) ? "unfollow" : "follow");
  // });
  // if (props.item == 'search'){
    
  // }
  console.log(print);
  return (
    <div className='f_container'>
      <p className='head'><strong>{props.item}</strong></p>
        {print.map(row => <Frow item={row}/>)}
    </div>
  )
}

export default Flist