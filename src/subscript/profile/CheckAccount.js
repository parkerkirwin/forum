import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

const CheckAccount = () => {
    const[email, CheckEmail] = useState('');
    const[password, CheckPassword] = useState('');
    const [info, setInfo] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/account')
        .then(res => {
            return res.json();
        })
        .then(data => {
            setInfo(data);
        })
    }, [])

    const handleCheckAccount = (e) => {
        const EP = {email, password};

        {info.map(MU =>
            {if (MU.email === email && MU.password === password) {
                <Redirect to ="/Home" />
            }
            else{
                <a href="/Login"> <li className="li-login">Try again</li> </a>
            }})};
        
    }

    return (
        <form className="login-form" onSubmit={handleCheckAccount}> 
            <div className="input-field-container">
                <input
                className="input-field"
                type = "email"
                placeholder = "Email"
                required
                value = {email}
                onChange={(e) => CheckEmail(e.target.value)}
                />
            </div>

            <div className="login-divider" />

            <div className="input-field-container">
                <input
                className="input-field"
                type = "password"
                placeholder = "Password"
                required
                value = {password}
                onChange={(e) => CheckPassword(e.target.value)}
                />
            </div>
            <button className="login-button">Login</button>
        </form>
    );
}
export default CheckAccount;