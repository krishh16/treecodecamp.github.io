import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
export default function Signin() {
    const [credentials, setcredentials] = useState({ userName: '', email: '', password: '', techInterest: '', heardFrom: '', profilePhoto: '', profession:'', bio:'' })
    const navigate = useNavigate()
       const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        if (credentials.profilePhoto === ''){
            const response = await fetch('http://localhost:5000/api/createuser', {
            method: 'POST',
            headers: {
                'Content-type': "application/json"
            },
            body: JSON.stringify({ userName: credentials.userName, email: credentials.email, password: credentials.password, techInterest: credentials.techInterest, heardFrom: credentials.heardFrom, profilePhoto: credentials.profilePhoto, profession: credentials.profession, bio: credentials.bio })
        })
        const resJson = await response.json()
        console.log(resJson)
        if (resJson.hasOwnProperty('userExists') && resJson.userExists) {
            alert("The user already exists, please log in")
            return 
        } else if(resJson.hasOwnProperty('userNameExists') && resJson.userNameExists){
            alert("username not available")
            return
        } else if (!resJson.success) {
            alert('please enter valid user info')
            return
        } else if (resJson.success) {
            navigate('/login')
        }
    }
    }
        
    function onChange(e: { target: { name: any; value: any } }) {
        setcredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div>

            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
                    <div className="flex flex-col justify-center">
                        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">You are welcome to our loving community</h1>
                        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Join our community of over 40,000 people and make your dreams come true by getting that dream jobs!!</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                                Sign in to treeCodeCamp
                            </h2>
                            <div>
                                <label htmlFor="userName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">UserName</label>
                                <input value={credentials.userName} onChange={onChange} type="text" name="userName" id="userName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Doe" required />
                            </div>
                            <div>
                                <label htmlFor="profession" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Profession</label>
                                <input value={credentials.profession} onChange={onChange} type="text" name="profession" id="userName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Doe" required />
                            </div>
                            <div>
                                <label htmlFor="bio" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bio</label>
                                <input value={credentials.bio} onChange={onChange} type="text" name="bio" id='bio' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Doe" required />
                            </div>
                            <div>
                                <label htmlFor="techInterest" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Tech interest</label>
                                <input value={credentials.techInterest} onChange={onChange} type="text" name="techInterest" id="techInterest" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Web development" required />
                            </div>
                            <div>
                                <label htmlFor="heardFrom" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Where did you Hear about our community?</label>
                                <input value={credentials.heardFrom} onChange={onChange} type="text" name="heardFrom" id="heardFrom" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Google Search" />
                            </div>
                            <div>
                                <label htmlFor="profilePhoto" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Profile Photo URL</label>
                                <input value={credentials.profilePhoto} onChange={onChange} type="text" name="profilePhoto" id="profilePhot" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input value={credentials.email} onChange={onChange} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Create your password</label>
                                <input value={credentials.password} onChange={onChange} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>

                            <button type="submit" className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign up</button>
                            <div className="text-sm font-medium text-gray-900 dark:text-white">
                                Already a user? <Link to='/login' className="text-blue-600 hover:underline dark:text-blue-500">Log in</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </section>

        </div>
    )
}
