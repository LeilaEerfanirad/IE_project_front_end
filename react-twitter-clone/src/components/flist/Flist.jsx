
import React from 'react'

function Flist(props) {
  return (
    <div>
        {props.item.map(row => <div>{row.username}</div>)
        }
    </div>
  )
}

export default Flist