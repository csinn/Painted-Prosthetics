import * as React from "react";
import "./carousel.css";
import { Carousel } from "react-responsive-carousel";
import images from "./GalleryImages";
import { config } from "../../Helpers/config"

export default class ImageGallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images : [],
            clicked: true
        }
    }
    componentDidMount() {
        fetch(config.apiUrl + "/api/Images")
            .then(res => res.json())
            .then((data) => {
                this.setState({ images: data });
                { console.log(data) }
            })
            .catch(console.log)
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