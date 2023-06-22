import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import NavBar from '../../../../NavBar';
export default function Syntax(props: {}) {
  const onChange = React.useCallback((value: String) => {
    console.log('value:', value);
    val = value
  }, []);
  var val: String = ''
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    console.log(val)
  }
  return (
    <div>
      <NavBar />
      <div className='flex'>
        <div className='' style={{ width: '50%' }}>

        </div>
        <div>
          <CodeMirror
            width='50vw'
            height='50vh'
            theme='dark'
            extensions={[javascript({ jsx: true })]}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
}
