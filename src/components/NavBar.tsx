import { Link, useNavigate } from 'react-router-dom'
export default function NavBar() {
  const navigate = useNavigate()
  const handleLogOut = () => {
    localStorage.removeItem('authToken')
    navigate('/login')
  }
  return (
    <div>

      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <img src="data:image/png;base64,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" className="h-8 mr-0" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-center"><Link to='/'>treeCodeCamp</Link></span>

          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            {(localStorage.getItem('authToken') ?
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <Link to="/profile" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Profile</Link>
                </li>
                <li>
                  <button onClick={handleLogOut} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Log out</Link>
                </li>
              </ul> :
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <Link to="/signin" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Sign In</Link>
                </li>
                <li>
                  <Link to="/login" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Log in</Link>
                </li>
              </ul>)}
          </div>
        </div>
      </nav>

    </div>
  )
}
