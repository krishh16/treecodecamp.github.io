import {useEffect, useState} from 'react'
interface Item {
    userName: string;
    bio: string;
    profession: string;
  }
export default function Profile() {
    const [user, setUser] = useState<Item>({userName:'', bio:'', profession:''});
    useEffect(() => {
      const authToken = localStorage.getItem('authToken');
  
      if (authToken) {
        fetchUser(authToken);
      }
    }, []);
  
    const fetchUser = (authToken: String) => {
      fetch('http://localhost:5000/api/profile', {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
        method: 'GET'
      })
        .then((response) => response.json())
        .then((user) => {
          setUser(user); // Update user user in state
        })
        .catch((error) => {
          console.error(error);
          alert('invalid authToken')
        })};
    return (
        <div className='flex items-center bg-gray-50 dark:bg-gray-900 justify-center min-h-screen  from-gray-700 via-gray-800 to-gray-900 bg-gradient-to-br'>
            <div className="relative w-full group max-w-md min-w-0 mx-auto mt-6 mb-6 break-words bg-white border shadow-2xl dark:bg-gray-800 dark:border-gray-700 md:max-w-sm rounded-xl">
                <div className="pb-6">
                    <div className="flex flex-wrap justify-center">
                        <div className="flex justify-center w-full">
                            <div className="relative">
                                <img src="https://source.unsplash.com/jmURdhtm7Ng/120x120" alt='ajg' className="dark:shadow-xl border-white dark:border-gray-800 rounded-full align-middle border-8 absolute -m-16 -ml-18 lg:-ml-16 max-w-[150px]" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-2 mt-20 text-center">
                        <h3 className="mb-1 text-2xl font-bold leading-normal text-gray-700 dark:text-gray-300">{user.userName}</h3>
                        <div className="flex flex-row justify-center w-full mx-auto space-x-2 text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
                            </svg>
                            <div className="text-sm font-bold tracking-wide text-gray-600 dark:text-gray-300 font-mono text-xl">{user.profession}</div>
                        </div>
                        <div className="w-full text-center">
                            <div className="flex justify-center pt-8 pb-0 lg:pt-4">
                            </div>
                        </div>
                    </div>
                    <div className="pt-6 mx-6 mt-6 text-center border-t border-gray-200 dark:border-gray-700/50">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full px-6">
                                <p className="mb-4 font-light leading-relaxed text-gray-600 dark:text-gray-400">
                                    {user.bio }
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-6 overflow-hidden translate-y-6 rounded-b-xl">
                        <div className="absolute flex -space-x-12 rounded-b-2xl">
                            <div className="w-36 h-8 transition-colors duration-200 delay-75 transform skew-x-[35deg] bg-amber-400/90 group-hover:bg-amber-600/90 z-10"></div>
                            <div className="w-28 h-8 transition-colors duration-200 delay-100 transform skew-x-[35deg] bg-amber-300/90 group-hover:bg-amber-500/90 z-20"></div>
                            <div className="w-28 h-8 transition-colors duration-200 delay-150 transform skew-x-[35deg] bg-amber-200/90 group-hover:bg-amber-400/90 z-30"></div>
                            <div className="w-28 h-8 transition-colors duration-200 delay-200 transform skew-x-[35deg] bg-amber-100/90 group-hover:bg-amber-300/90 z-40"></div>
                            <div className="w-28 h-8 transition-colors duration-200 delay-300 transform skew-x-[35deg] bg-amber-50/90 group-hover:bg-amber-200/90 z-50"></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
