import './App.css';
import {  
  BrowserRouter as Router,
  Routes,
  Route

} from 'react-router-dom'
import Home from './components/pages/Home/Home';
import Signin from './components/pages/Signup/Signup';
import Login from './components/pages/LoginIn/Login';
import Courses from './components/pages/Courses/Courses';
import Profile from './components/pages/profile/profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </Router>
  );
}

export default App;
