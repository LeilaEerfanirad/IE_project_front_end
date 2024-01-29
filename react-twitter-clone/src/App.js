import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import { LeftPane , Profile , Login , Signup , Flist , Edit , Explore ,Tweet , Home , Notification } from './components'
import './App.scss';
import React, { useEffect, useState } from 'react';

const App = () => {
  
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
          <Route path="/notifications" element={<Notification/>}>Home</Route>
          <Route path="/explore" element={<Explore/>}>Home</Route>
          <Route path="/profile" element={<Profile />}>Home</Route>
          <Route path="/tweet" element={<Tweet />}>Home</Route>
          <Route path="/home" element={<Home />}>Home</Route>
          
        </Routes>
        {/* <div>
          Right Pane
        </div> */}
      </div>
    </BrowserRouter>
    
  );
}

export default App;
