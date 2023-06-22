import NavBar from '../../NavBar'
import { Link } from 'react-router-dom';
import Footer from '../../Footer';

export default function SubCourses(props) {
    const subCourseList = props.subCourses.map((item) => {
        return (<div className='flex my-5 items-center py-5 justify-center '>
        <Link to={item[2]} className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item[0]}</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">{item[1]}</p>
        </Link>
    </div>)
    })
  return (
    <div className='bg-white border-gray-200 dark:bg-gray-800 w-full h-full'>
    <div className='bg-white border-gray-200 dark:bg-gray-800 w-full h-full'>
      <NavBar/>
      <h1 className='text-center font-bold my-2 text-white py-5' style={{fontSize: '30px'}}>{props.title}</h1>
      <h3 className='text-center font-bold text-white py-10' style={{fontSize:'20px', width:'70%', margin: 'auto'}}>{props.subTitle}</h3>
      {subCourseList}
    </div>
    <Footer/>
    </div>
  )
}
