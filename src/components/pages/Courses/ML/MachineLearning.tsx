import React from 'react'
import SubCourses from '../SubCourses'

export default function MachineLearning() {
    const courses = [['Basics of Machine learning','Machine learning is less about how much efficient code you write, and more about how much better the efficiency of the model you can make so that is generalizes well with the real world data, which requires logical skills. In this course, You will get hands on experience with necessary libraries which will get you up and running with learning the core about Machine learnign','/basic-ml'],
                     ['Scikit-learn for machine learning','Scikit-learn is the library that you will play around with most to make models, You will learn how to tweek your hyperperameters in a way that it does well on the test data without overfitting or underfitting it', '/sklearn-ml'],
                    ['Make your Own models', 'Now it is time you start applying the things that you learnt on real world data, and get insights to increase the business value.','apply-sklearn' ]]
  return (
    <div>
      <SubCourses  title='Machine learning with scikit-learn' subTitle='Machine learning has been there with us for a Long time. In the era of big data, making use of the collected data becomes very important when it has the power of potentially increasing business productivity because machines are more efficient than human, and can get insights much more quickly then the us human.' subCourses={courses}/>
    </div>
  )
}
