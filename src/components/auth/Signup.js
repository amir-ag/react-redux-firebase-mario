import React, {useState} from 'react';

const Signup = () => {

    const [state, setState] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: ''
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
                <h5 className="grey-text text-darken-3">Crate New Project</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' onChange={handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' onChange={handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id='firstName' onChange={handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id='lastName' onChange={handleChange}/>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
                </div>
            </form>
        </div>
    );
};

export default Signup;
