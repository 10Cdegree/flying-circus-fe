import { useState } from "react";

const UserForm = (props) => {
    const[email, setEmail] = useState();
    const[password, setPassword] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(email && password) {
            return props.onSubmit(email, password);
        }
    };

    const handeEmailChange  = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange  = (e) => {
        setPassword(e.target.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    placeholder="email" 
                    type="email" 
                    value={email} 
                    onChange={handeEmailChange}
                    disabled={props.loading}
                />
                <input 
                    placeholder="password" 
                    type="password" 
                    value={password} 
                    onChange={handlePasswordChange}
                    disabled={props.loading}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
};

export default UserForm