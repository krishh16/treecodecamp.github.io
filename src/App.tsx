import './App.css';
import {  
  BrowserRouter as Router,
  Routes,
  Route

} from 'react-router-dom'
import Home from './components/pages/Home/Home';
import Signup from './components/pages/Signup/Signup';
import Login from './components/pages/LoginIn/Login';
import Courses from './components/pages/Courses/Courses';
import Profile from './components/pages/profile/profile';
import Terminal from './components/pages/Terminal/Terminal';
import JsSubCourses from './components/pages/Courses/JS DSA/JsSubCourses';
import MachineLearning from './components/pages/Courses/ML/MachineLearning';
import PythonSubModules from './components/pages/Courses/Python/PythonSubModules';
import Syntax from './components/pages/Courses/JS DSA/Basic js/syntax';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/js-dsa" element={<JsSubCourses/>}/>
        <Route path="/basic-js" element={<Syntax/>}/>
        <Route path="/js-dsa/es6" element={<JsSubCourses/>}/>
        <Route path="/js-dsa/js-algorithms" element={<JsSubCourses/>}/>
        <Route path="/ml-courses" element={<MachineLearning/>}/>
        <Route path="/ml-courses/basic-ml" element={<MachineLearning/>}/>
        <Route path="/ml-courses/sklearn-ml" element={<MachineLearning/>}/>
        <Route path="/ml-courses/apply-sklearn" element={<MachineLearning/>}/> 
        <Route path="/python-courses" element={<PythonSubModules/>}/>
        <Route path="/python-courses/basic-python" element={<PythonSubModules/>}/>
        <Route path="/python-courses/automate-stuff" element={<PythonSubModules/>}/>
      </Routes>
    </Router>
  );
}

export default App;
