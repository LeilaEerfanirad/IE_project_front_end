import React ,{ useState, useEffect }from 'react'
import { useNavigate } from 'react-router-dom';

function Notification() {
    const recent = JSON.parse(localStorage.getItem('recent')) ||[];
    // const isLoggedin = JSON.parse(localStorage.getItem('isLogedin')) ||[];
    const navigate = useNavigate();
    useEffect(() => {
        let user = JSON.parse(localStorage.getItem('user')) || [];
        let logStatus = localStorage.getItem('isLogedin');
        console.log(logStatus);
        if (logStatus == "false") {
          window.alert('User not Log in');
          navigate('/');
        }
      }, []);
    return (
    <div>Notification</div>
  )
}

export default Notification