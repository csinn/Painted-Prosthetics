import * as React from 'react';
import ImageGallery from "../components/Image-Gallery";

class Gallery extends React.PureComponent {
    render() {
        return (
            <div className='home-container'>
                <div className='text-container'>
                    <h1 className='title'>Gallery</h1>
                    <p className='title-text'>galery items</p>
                    <ImageGallery />
                </div>
            </div>
        )
    }
}
export default Gallery