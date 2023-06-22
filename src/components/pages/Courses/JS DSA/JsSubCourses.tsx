import SubCourses from '../SubCourses.jsx'

export default function JsSubCourses() {
    const courses = [['Basic JS', 'In this module, You will get a basic understanding of the syntax of js, create reusable functions, do some common math problems and much much more!!!','/basic-js'],
                     ['ES6', 'ES6 or ECMA6 (its just the original name of javascript) helps us write get more done in less lines of code. This helps you write more readable code which in terms give you more overall productivity', 'es6'],
                     ['Algorithms', 'It is a famouse saying that the best way to learn something is by doing it. it is time you start applying what you have learned in solving problems.','js-algorithms']]
  return (
    <div>
      <SubCourses  title='Java Script Data Structure and Algorithms' subTitle='In this course You will get a basic Idea of what the syntax of javascript looks like so to get you started on your journey to reading javascript code and even make your own programms!!!' subCourses={courses}/>
    </div>
  )
}
