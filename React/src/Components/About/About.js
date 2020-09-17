import React, { Component } from 'react';
import './About.css'

class About extends Component {
    render() {
        return (
        <div className='home-container'>
            <div className='text-container'>
                <h1 className='title'>About text</h1>
                <p className='title-text'>Brownie ice cream brownie cookie fruitcake gummies muffin tiramisu chupa chups. Chocolate cake cheesecake liquorice jelly-o topping cotton candy. Pudding chocolate cake chupa chups. Chocolate cheesecake candy canes marzipan. Cake macaroon gummi bears pie wafer jujubes halvah marzipan. Jujubes chocolate cake cake pastry fruitcake tart jelly. Cotton candy sugar plum jujubes pastry jujubes. Gummies danish sweet roll candy tiramisu. Wafer bear claw croissant sweet roll bonbon. Brownie carrot cake biscuit chocolate bonbon powder jelly. Topping sweet roll cotton candy lollipop croissant sweet roll. Sweet roll candy canes bonbon cake jelly beans gingerbread liquorice. Gummi bears topping ice cream cake. Icing fruitcake lollipop sweet.</p>
                <div className='cta-container'>
                    <h2 className='cta'>Want to help with the project? Check the donate page or send me a e-mail:</h2>
                </div>
                <a className="contact-button btn btn--large" href="mailto:support@example.com" rel="noopener noreferrer">
                    Contact
                </a>
            </div>
        </div>
      )
    }
}
export default About