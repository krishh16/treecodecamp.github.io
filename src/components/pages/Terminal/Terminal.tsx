import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { okaidia } from '@uiw/codemirror-theme-okaidia';


export default function Terminal() {
  const onChange = React.useCallback((value:String) => {
    console.log('value:', value);
    val = value
  }, []);
  var val:String = ''
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    console.log(val)
  }
  return (
    <form onSubmit={handleSubmit} className='bg-white border-gray-200 dark:bg-gray-900' style={{width:'100vw', height:'100vh'}}>
    <CodeMirror
      value="//add your code here"
      height="100px"
      width='50vw'
      extensions={[javascript({ jsx: true })]}
      onChange={onChange}
      theme={okaidia}
      basicSetup={true}
    />
    <button type='submit'>Submit</button>
    </form>
  );
}
