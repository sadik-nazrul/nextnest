import PropTypes from 'prop-types';

import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const ImagesGallerySlider = ({ images }) => {
    const galleryImages = images.map(image => ({
        original: image,
        thumbnail: image,
    }));

    return (
        <ImageGallery items={galleryImages}
            showFullscreenButton={false}
            showNav={false}
            autoPlay={true}
            showPlayButton={false}
        />
    );
};
ImagesGallerySlider.propTypes = {
    images: PropTypes.array
}
export default ImagesGallerySlider;