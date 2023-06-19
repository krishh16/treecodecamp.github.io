import NavBar from '../../NavBar'
import CoursesList from '../../CoursesList'

export default function Courses() {
    return (
        <div className='dark:bg-gray-900'>
            <NavBar />
            <h1 className='text-white text-center font-bold my-5' style={{fontSize: '30px'}}>Welcome to treeCodeCamp's curriculum</h1>
            <h2  className='text-white text-center font-bold my-5' style={{fontSize: '25px'}}>Please slow down and read this.</h2>
            <p className="text-white text-center font-medium" style={{width: '70%', margin:'auto', fontSize:'20px'}}>freeCodeCamp is a proven path to your first software developer job.

                More than 40,000 people have gotten developer jobs after completing this – including at big companies like Google and Microsoft.

                If you are new to programming, we recommend you start at the beginning and earn these certifications in order.

                To earn each certification, build its 5 required projects and get all their tests to pass.

                You can add these certifications to your résumé or LinkedIn. But more important than the certifications is the practice you get along the way.

                If you feel overwhelmed, that is normal. Programming is hard.

                Practice is the key. Practice, practice, practice.

                And this curriculum will give you thousands of hours of hands-on programming practice.

                And if you want to learn more math and computer science theory, we also have thousands of hours of video courses on freeCodeCamp's YouTube channel.

                If you want to get a developer job or freelance clients, programming skills will be just part of the puzzle. You also need to build your personal network and your reputation as a developer.

                You can do this on LinkedIn and GitHub, and also on the freeCodeCamp forum.

                Happy coding!

                - Quincy Larson, the teacher who founded freeCodeCamp.org</p>
            <CoursesList />
        </div>
    )
}
