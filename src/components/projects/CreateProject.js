import React, {useState} from 'react';

const CreateProject = () => {

    const [state, setState] = useState({
        title: '',
        content: ''
    });

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.id]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state);
    }

    return (
        <div className='container'>
            <form className='white' onSubmit={handleSubmit}>
                <h5 className="grey-text text-darken-3">Sign Up</h5>
                <div className="input-field">
                    <label htmlFor="title">Title</label>
                    <input type="text" id='title' onChange={handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="content">Project Content</label>
                    <textarea id="content" className="materialize-textareas" onChange={handleChange}/>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Create</button>
                </div>
            </form>
        </div>
    );
};

export default CreateProject;
