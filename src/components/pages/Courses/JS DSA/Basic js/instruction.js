import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
export const Instruction = (
    <div style={{fontSize:"20px"}} className='bg-white border-gray-200 mx-6 dark:bg-gray-900 text-white'>
        <h1 >
            Let's Get started with the most basic. Declaring Variables. It's just like the variables you know about<br/>
            'They Hold a certain value that you provide them'.<br/>
            There are 3 ways to declare a variable<br/>
            1. var<br/>
            2. let<br/>
            3. const<br/>
            the main difference in all of the is reusability. If you declare variable with var, you can change the variable while if you use let, then the system will warn you about it.<br/>
            const is about making it immutable, meaning it's value remain the same.<br/>
            Here's how you will declare variable(I am using var coz it's unlikely I will use that variable more than once)
        </h1>
        <CodeMirror
        width='100%'
        height= '30px'
        extensions={[javascript({ jsx: true })]}
        theme= 'dark'
        editable={false}
        value='var a;'
        />
        <h1>
            If you wanna give it a value, you can use a = assignment operator
        </h1>
        <CodeMirror
        width='100%'
        height= '30px'
        extensions={[javascript({ jsx: true })]}
        theme= 'dark'
        editable={false}
        value='var a = 3;'
        />
        <h1>
            In this case the variable a has value 3
        </h1>
        <hr></hr>
        <h4>
            Make a variable myVar that has a value of 10 
        </h4>
    </div>
)
export const startCode = '//declare a variable named a with value 10'
export const syntaxTests = ['a should be equal to 3']
export const syntaxHeader = 'Declaring Variables'
