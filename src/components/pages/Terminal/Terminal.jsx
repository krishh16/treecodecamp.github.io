import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { okaidia } from '@uiw/codemirror-theme-okaidia';


export default function Terminal() {
  const onChange = React.useCallback((value, viewUpdate) => {
    console.log('value:', value);
  }, []);
  return (
    <div className='bg-white border-gray-200 dark:bg-gray-900' style={{width:'100vw', height:'100vh'}}>
    <CodeMirror
      value="//add your code here"
      height="100px"
      width='50vw'
      extensions={[javascript({ jsx: true })]}
      onChange={onChange}
      theme='dark'
      basicSetup={true}
    />
    </div>
  );
}
