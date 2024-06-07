import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import PropTypes from 'prop-types';
import 'animate.css';

const HeroSlider = ({ propertyType, setPropertyType, searchText, setSearchText, onSearch }) => {
    

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        onSearch();
    }

    return (
        <div className='relative'>
            
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[EffectFade, Autoplay, Pagination]}
                className='h-[calc(100vh-68px)]'
            >
                <SwiperSlide className="bg-[url('https://demo28.houzez.co/wp-content/uploads/2020/04/multifamily-05-1170x785.jpg')] bg-cover bg-center">
                </SwiperSlide>
                <SwiperSlide className="bg-[url('https://demo28.houzez.co/wp-content/uploads/2020/04/office-03-1170x785.jpg')] bg-cover bg-center">
                </SwiperSlide>
                <SwiperSlide className="bg-[url('https://demo28.houzez.co/wp-content/uploads/2020/04/multifamily-01-1170x785.jpg')] bg-cover bg-center">
                </SwiperSlide>
                <SwiperSlide className="bg-[url('https://demo28.houzez.co/wp-content/uploads/2020/04/office-02-1170x785.jpg')] bg-cover bg-center">
                </SwiperSlide>
            </Swiper>
            <div className='flex flex-col justify-center items-center z-10 absolute lg:top-[40%] top-[30%] w-full animate__animated animate__fadeInUp'>
                <div className='p-10 bg-white lg:w-2/4 text-center rounded-xl shadow-lg' >
                    <h2 className='lg:text-4xl text-xl font-bold text-blue-500 font-jost'>Search For Commercial Properties!</h2>
                    <form onSubmit={handleSearchSubmit} className='flex flex-col sm:flex-row mt-4 lg:gap-0 gap-4 items-center'>
                        <select 
                            value={propertyType}
                            onChange={(e) => setPropertyType(e.target.value)}
                            className='lg:py-[11px] md:py-[11px] lg:px-4 md:px-4 border lg:border-l-2 md:border-l-2 lg:border-y-2 md:border-y-2 lg:rounded-l-lg md:rounded-l-lg px-4 py-2 w-full lg:w-auto md:w-auto'
                        >
                            <option value="">All Types</option>
                            <option value="sale">Sale</option>
                            <option value="rent">Rent</option>
                        </select>
                        <input 
                            type="text"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                            placeholder="Search properties..."
                            className='lg:border-y-2 md:border-y-2 border p-[10px] lg:rounded-none flex-grow w-full lg:w-auto'
                        />
                        <button type="submit" className='bg-blue-500 text-white p-2 lg:rounded-r-lg md:rounded-r-lg lg:px-5 py-[11px] w-full lg:w-auto md:w-auto'>
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

HeroSlider.propTypes = {
    propertyType: PropTypes.string,
    setPropertyType: PropTypes.func,
    searchText: PropTypes.string,
    setSearchText: PropTypes.func,
    onSearch: PropTypes.func
}
export default HeroSlider;