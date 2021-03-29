import {useState, useEffect} from 'react'
import {Navbar, Footer} from '../subscript/universal'

const About = () => {
    return (  
        <div className="Login">
             <div id="page-container">
                <div id="content-wrap">
                    <Navbar />
                    <h1>Login</h1>
                    <h2>Email</h2>
                    <form > 
                        <input
                        type = "email"
                        required
                        //value {email}
                        //onChange={(e) => setEmail(e.target.value)}
                        />
                        <h2>Password</h2>
                        <input
                        type = "password"
                        required
                        //value {password}
                        //onChange={(e) => setPassword(e.target.value)}
                        />
                        <h2></h2>
                        <button>Login</button>
                    </form>
                    <h2></h2>
                    <h2></h2>
                    <a href="/Sign Up">Create An Account</a>
                </div>
                <Footer />
            </div>
        </div>
    );
}
 
export default About;