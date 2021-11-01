import React, { useState } from 'react';
import '../FormStyles.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const SlidesForm = () => {

    const [initialValues, setInitialValues] = useState({
        name: '',
        description: ''
    });

    const handleChange = (e) => {
        if(e.target.name === 'name'){
            setInitialValues({...initialValues, name: e.target.value})
        } /* if(e.target.name === 'description'){
            setInitialValues({...initialValues, description: e.target.value})
        } */
    }

    const handleEditorChange = (e, editor) => {
        const data = editor.getData();
        setInitialValues({...initialValues, description: data})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(initialValues);
    }

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <input className="input-field" type="text" name="name" value={initialValues.name} onChange={handleChange} placeholder="Slide Title"></input>
            <CKEditor 
                editor={ClassicEditor}
                onChange={handleEditorChange}
            />
            {/* <input className="input-field" type="text" name="description" value={initialValues.description} onChange={handleChange} placeholder="Write the description"></input> */}
            <button className="submit-btn" type="submit">Send</button>
        </form>
    );
}
 
export default SlidesForm;