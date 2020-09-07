import * as React from 'react';
import ImageGallery from "../components/Image-Gallery/Image-Gallery";

class Gallery extends React.PureComponent {
    render() {
        return (
            <div className='home-container'>
                <div className='text-container'>
                    <h1 className='title'>Gallery</h1>
                    <ImageGallery />
                </div>
            </div>
        )
    }
}
export default Gallery