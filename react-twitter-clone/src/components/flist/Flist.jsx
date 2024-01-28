
import React from 'react'
import './flist.scss';
function Flist(props) {
  let print = [];
  let user = JSON.parse(localStorage.getItem('user')) || [];
  const btn_value = [];
  if (props.item == 'followers'){
    print = user.followers;
  }
  if (props.item == 'followings'){
    print = user.followings;
  }
  print.forEach(element => {
    btn_value.push(user.followings.includes(element) ? "unfollow" : "follow");
  });
  // if (props.item == 'search'){
    
  // }
  const handleAction = (req_v,row) => {
    // e.preventDefault();
    const c = "";
    fetch(
        `http://localhost:3000/${req_v}?email=${user.email}&otherEmail=${row}`
        , {
        method: 'POST'
      })
      .then(response => response.json())
      .then(data => {
        c = data;
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
      console.log(req_v);

  }
  return (
    <div className='f_container'>
        {print.map(row => 
        
          <l>
            <div className='follow'>
            <p>{row}</p> <button onClick={() => handleAction(btn_value[print.indexOf(row)], row)}>{btn_value[print.indexOf(row)]}
            </button>
            </div>
          </l>
        )
        }
    </div>
  )
}

export default Flist