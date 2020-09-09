import * as React from "react";
import "./carousel.css";
import { Carousel } from "react-responsive-carousel";
import images from "./GalleryImages";

export default class ImageGallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images : images,
            clicked: true
        }
    }
    
    onClickItemEvent() {
        this.setState({ clicked: !this.state.clicked });
    }
    
    render() {
        if (this.state.images.length === 0) {
            return (<div><h1>Images not found</h1></div>);
        }
        
        const images_list = this.state.images.map( (element) => {
            return (
                <div>
                    <img src={element.ImageUrl} />
                    <p className={this.state.clicked ? 'legend': "legend-hide"} >{element.Title}</p>
                </div>
            );
        });
        return (
            <div>
                <h2>Painted Prosthetics</h2>
                <Carousel transitionTime="500" infiniteLoop 
                    onClickItem={() => {this.onClickItemEvent()}}
                    >
                    {images_list}
                </Carousel>
            </div>
        )
    };
}