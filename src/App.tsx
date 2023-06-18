import './App.css';
import {  
  BrowserRouter as Router,
  Routes,
  Route

} from 'react-router-dom'
import Home from './components/pages/Home/Home';
import Courses from './components/pages/Courses/Courses';
import Signin from './components/pages/SignIn/Signin';
import Login from './components/pages/LoginIn/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
