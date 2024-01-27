
import React from 'react'
import './flist.scss';
function Flist(props) {
  let print = [];
  let user = JSON.parse(localStorage.getItem('user')) || [];
  console.log(user)
  if (props.item == 'followers'){
    print = user.followers;
    
  }
  if (props.item == 'followings'){
    print = user.followings;
  }
  // if (props.item == 'search'){
    
  // }
  console.log(props);
  console.log(print);
  return (
    <div className='f_container'>
        {print.map(row => <l className='follow'>{row}</l>)
        }
    </div>
  )
}

export default Flist