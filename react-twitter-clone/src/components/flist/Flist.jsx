
import React from 'react'
import './flist.scss';
function Flist(props) {
  console.log(props)
  return (
    <div className='f_container'>
        {props.item.map(row => <l className='follow'>{row}</l>)
        }
    </div>
  )
}

export default Flist