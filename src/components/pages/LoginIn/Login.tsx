import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
export default function Login() {
    const [credentials, setcredentials] = useState({ email: '', password: ''})
    const navigate = useNavigate()
       const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
            const response = await fetch('http://localhost:5000/api/loginuser', {
            method: 'POST',
            headers: {
                'Content-type': "application/json"
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        })
        const resJson = await response.json()
        console.log(resJson)
        if (resJson.hasOwnProperty('success') && !resJson.success) {
            alert("Please type correct user info")
            return 
        } else if(resJson.hasOwnProperty('noSuchUser') && resJson.noSuchUser){
            alert("No such user")
            return
        } else if (resJson.success) {
            localStorage.setItem('authToken', resJson.authToken)
            localStorage.setItem('userName', resJson.userName)
            localStorage.setItem('profession', resJson.profession)
            localStorage.setItem('bio', resJson.bio)
            alert('Login successful! Happy learning')
            navigate('/')
        }
       }
        
    function onChange(e: { target: { name: any; value: any } }) {
        setcredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div style={{width:'100%', height:'100%'}}>

            <form onSubmit={handleSubmit} className="bg-gray-50 dark:bg-gray-900" style={{width:'100%', height:'100%'}}>
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
                    <div className="flex flex-col justify-center">
                        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We are happy to see you back!!</h1>
                        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Log in with your usual account to check out your progress in the courses.</p>
                    </div>
                    <div>
                        <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                                Log in to treeCodeCamp
                            </h2>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input onChange={onChange} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                                <input onChange={onChange} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" name="remember" type="checkbox" className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"/>
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="remember" className="font-medium text-gray-500 dark:text-gray-400">Remember this device</label>
                                </div>
                                <a href="#" className="ml-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Lost Password?</a>
                            </div>
                            <button type="submit" className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                            <div className="text-sm font-medium text-gray-900 dark:text-white">
                                Not registered yet? <Link to='/signup' className="text-blue-600 hover:underline dark:text-blue-500">Create account</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    )
}
