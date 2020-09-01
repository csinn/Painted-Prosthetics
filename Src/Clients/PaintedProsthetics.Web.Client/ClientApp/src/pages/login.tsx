import * as React from 'react';

export default class Login extends React.PureComponent {
    public render() {
        return (
            <div className='home-container'>
                <div className='text-container'>
                    <h1 className='title'>Login</h1>
                    <p className='title-text'>Login here</p>
                    <form>
                        <div>
                            <label htmlFor="username">Username</label>
                            <input id="username" name="username" />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input id="password" name="password" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}