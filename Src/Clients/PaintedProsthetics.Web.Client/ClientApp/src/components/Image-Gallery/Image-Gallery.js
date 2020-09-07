import * as React from 'react';
import "./carousel.css";
import { Carousel } from 'react-responsive-carousel';

export default class ImageGallery extends React.Component {
        state = { clicked: true }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    onClickItemEvent = () => {
        this.setState({ clicked: !this.state.clicked });
    }

    render() {
        return (
            <div>
                <h2>Painted Prosthetics</h2>
                <Carousel transitionTime="500" infiniteLoop 
                    onClickItem={this.onClickItemEvent} >
                    <div>
                        <img src="https://picsum.photos/700/400?img=1" />
                        <p className={this.state.clicked ? 'legend': "legend-hide"} >My Classic Still 1</p>
                    </div>
                    <div>
                        <img src="https://picsum.photos/700/400?img=2" />
                        <p className={this.state.clicked ? 'legend': "legend-hide"}>My Classic Still 2</p>
                    </div>
                    <div>
                        <img src="https://picsum.photos/700/400?img=3" />
                        <p className={this.state.clicked ? 'legend': "legend-hide"}>My Classic Still 3</p>
                    </div>
                </Carousel>
            </div>
        )
    };
}