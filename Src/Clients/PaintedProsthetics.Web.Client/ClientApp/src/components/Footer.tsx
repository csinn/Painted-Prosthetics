import * as React from 'react';
import './Footer.css'

class Footer extends React.Component {

    render() {
        return (
            <div className="footer-container">
                <a href="https://github.com/csinn" target="_blank" rel="noopener noreferrer">
                    <p className='created-by'>Created By: <img className='CSINN' src='/47311935.png' alt='' /></p>
                </a>

            </div>
        )

    }
}

export default Footer