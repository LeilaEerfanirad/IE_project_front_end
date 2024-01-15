import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import { LeftPane , Profile , Login } from './components'
import './App.scss';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <LeftPane />
        <Routes>
          <Route path="/" exact></Route>
          <Route path="/login" element={<Login />} />
          {/* <Route path="/signup" element={<SignUp />} /> */}
          {/* <Route path="/explore" element={<Profile />}>explore</Route> */}
          <Route path="/notifications">Home</Route>
          <Route path="/profile">Home</Route>
          
        </Routes>
        <div>
          Right Pane
        </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
