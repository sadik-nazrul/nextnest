import PropTypes from 'prop-types';
import { Autoplay, EffectFlip } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper Css
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-flip';

const ImagesGallerySlider = ({ images, name }) => {

    return (
        <div>
            <Swiper
                effect={'flip'}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, EffectFlip]}
                className='w-full'
            >
                {
                    images.map((image, indx) =>
                        <SwiperSlide key={indx}>
                            <img className='w-full rounded-xl object-cover cursor-pointer' src={image} alt={name} />
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    );
};
ImagesGallerySlider.propTypes = {
    images: PropTypes.array,
    name: PropTypes.string
}
export default ImagesGallerySlider;