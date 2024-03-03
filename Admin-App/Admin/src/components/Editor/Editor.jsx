/* eslint-disable react/prop-types */
import { useState } from 'react';
import ReactQuill from 'react-quill';
import EditorToolbar, { modules, formats } from './EditorToolbar';
import 'react-quill/dist/quill.snow.css';

export const Editor = ({ placeholder, setFieldValue, name }) => {
   const [state, setState] = useState({ value: null });
   const handleChange = (value) => {
      setState({ value });
      setFieldValue(name, value);
   };
   return (
      <div className='text-editor'>
         <EditorToolbar />
         <ReactQuill
            theme='snow'
            value={state.value}
            onChange={handleChange}
            placeholder={placeholder || 'Write something awesome...'}
            modules={modules}
            formats={formats}
         />
      </div>
   );
};

export default Editor;
