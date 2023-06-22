import SubCourses from '../SubCourses'

export default function PythonSubModules() {
    const courses= [['Basics','In this course, you\'ll get familier with the syntax of python, You will learn basic concepts about python and along the way, You\'ll build scripts which will save you significant amount of time', '/basic-python'],
                    ['Build Stuff', 'in this course, you will be solving problems, and by problem, I do not ask you to give me a derivative of a mathematics eqation, instead, You will be solving your own problems by writing code that automate stuff', '/automate-stuff']]
  return (
    <div>
      <SubCourses title='Python for everyone' subTitle='In this course you will learn about python, It is one of the most popular language which is beginner friendly, and has many use cases Including doing Machine learning and deep learning or automation of tasks in Cybersecurity.' subCourses={courses} />
    </div>
  )
}
