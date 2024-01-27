import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import { LeftPane , Profile , Login , Signup , Flist , Edit , Explore } from './components'
import './App.scss';
import React, { useEffect, useState } from 'react';

const App = () => {
  const userr = {
    firstname : "leila",
    followings : [
      {
        username : "@darya"
      },
      {
        username : "@ghazal"
      },
      {
        username : "@mahsa"
      }
    ],
    followers : [
      {
        username : "@darya1"
      },
      {
        username : "@ghazal1"
      }
    ],
    lastname : "erfani",
    email : "leila.erfanirad@gmail.com",
    username : "aaa",
    password : "1112"
};
let user = JSON.parse(localStorage.getItem('user')) || [];
console.log(user);
if (user == null){
  user = userr;
}
  return (
    <BrowserRouter>
      <div className="app">
        <LeftPane />
        <Routes>
          <Route path="/" exact></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/followers" element={<Flist item='followers'/>} />
          <Route path="/followings" element={<Flist item='followings'/>} />
          <Route path="/edit" element={<Edit />}></Route>
          <Route path="/notifications">Home</Route>
          <Route path="/explore" element={<Explore/>}>Home</Route>
          <Route path="/profile" element={<Profile />}>Home</Route>
          
        </Routes>
        {/* <div>
          Right Pane
        </div> */}
      </div>
    </BrowserRouter>
    
  );
}

export default App;
