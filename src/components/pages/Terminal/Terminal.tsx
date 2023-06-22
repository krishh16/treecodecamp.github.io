import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import NavBar from '../../NavBar';
import { startCode } from '../Courses/JS DSA/Basic js/instruction';
export default function Terminal(props: { test: string[]; instruction: JSX.Element; title: JSX.Element; startingCode: string }) {
  const onChange = React.useCallback((value: String) => {
    console.log('value:', value);
    val = value
  }, []);
  var val: String = ''
  const testList = props.test.map(item => {
    return (<ol className='text-white font-sans mx-6' style={{ fontSize: '20px' }}>
      <li id={item}>{item}</li>
    </ol>)
  })
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    console.log(val)
  }
  return (
    <div>
      <NavBar />
      <div className='flex'>
        <div className='bg-white border-gray-200 dark:bg-gray-900' style={{ minWidth: '50%', minHeight: '100%' }}>
          {props.title}
          <hr style={{margin: '20px'}} />
          {props.instruction}
          <hr></hr>
          {testList}
        </div>
        <form onSubmit={handleSubmit}>
          <CodeMirror
            width='50vw'
            height='50vh'
            theme='dark'
            extensions={[javascript({ jsx: true })]}
            onChange={onChange}
            value={startCode}
          />
          <div className='bg-white border-gray-200 dark:bg-gray-800' style={{ width: '100%', minHeight: '320px' }}>
            <button type="submit" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Click Here to submit code</button>
          </div>
        </form>
      </div>
    </div>
  );
}
