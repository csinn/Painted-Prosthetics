import React, { Component } from 'react';
import './Login.css'

class Login extends Component {
    render() {
        return (
        <div className='home-container'>
            <div className='text-container'>
                <h1 className='title'>Login</h1>
                <p className='title-text'>Login here</p>
                <form>
                    <div>
                        <label for="username">Username</label>
                        <input id="username" name="username" />
                    </div>
                    <div>
                        <label for="password">Password</label>
                        <input id="password" name="password"/>
                    </div>
                </form>
            </div>
        </div>
      )
    }
}
export default Login