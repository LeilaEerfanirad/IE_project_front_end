import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import { LeftPane , Profile , Login , Signup , Flist } from './components'
import './App.scss';
import {useState} from 'react';

const App = () => {
  const user = {
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
  return (
    <BrowserRouter>
      <div className="app">
        <LeftPane />
        <Routes>
          <Route path="/" exact></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/followers" element={<Flist item={user.followers}/>} />
          <Route path="/followings" element={<Flist item={user.followings}/>} />
          {/* <Route path="/explore" element={<Profile />}>explore</Route> */}
          <Route path="/notifications">Home</Route>
          <Route path="/profile" element={<Profile item={user}  />}>Home</Route>
          
        </Routes>
        {/* <div>
          Right Pane
        </div> */}
      </div>
    </BrowserRouter>
    
  );
}

export default App;
