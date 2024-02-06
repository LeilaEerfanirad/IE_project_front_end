import React from 'react'
import './frow.scss';
function Frow(props) {
  let user = JSON.parse(localStorage.getItem('user')) || [];
  let btn_value = user.followings.includes(props.item) ? "unfollow" : "follow";
  
  let method = "";
 
  if (btn_value == 'follow'){
    method = 'POST';
  }else{
    method = 'DELETE';
  }
  const handleAction = async (e) => {
    e.preventDefault();
    console.log('here');
    let c = "aa";
    const a = await fetch(
        `http://localhost:3000/${btn_value}?email=${user.email}&otherEmail=${props.item}`
        , {
        method: method
    })
    .then(response => response.json())
    .then(data => {
        c = data
        // console.log(data.user);
    })
    .catch(error => {
        console.error('Error:', error);
    });
    console.log("ffffffff")
    console.log(c.user);
    localStorage.setItem('user',JSON.stringify(c.user));
    
};
  
  return (
    <l>
      <div className='follow'>
        <p>{props.item}</p> <button onClick={handleAction}>{btn_value}
        </button>
      </div>
    </l>
  )
};

export default Frow