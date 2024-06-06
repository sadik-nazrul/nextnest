import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import PropTypes from 'prop-types';

const HeroSlider = ({ propertyType, setPropertyType, searchText, setSearchText, onSearch }) => {
    

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        onSearch();
    }

    return (
        <div className='relative'>
            <div className='flex flex-col justify-center items-center z-10 absolute top-[40%] w-full'>
                <div className='p-5 bg-white w-3/4 text-center rounded-xl shadow-lg'>
                    <h2 className='text-2xl font-bold text-blue-500'>Transform Your Business with Prime Commercial Real Estate</h2>
                    <p>Explore premier properties and seize opportunities tailored to your needs. Your ideal space awaits—lets make it yours.</p>
                    <form onSubmit={handleSearchSubmit} className='flex flex-col sm:flex-row gap-4 mt-4'>
                        <select 
                            value={propertyType}
                            onChange={(e) => setPropertyType(e.target.value)}
                            className='border p-2 rounded-lg'
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
                            className='border p-2 rounded-lg flex-grow'
                        />
                        <button type="submit" className='bg-blue-500 text-white p-2 rounded-lg'>
                            Search
                        </button>
                    </form>
                </div>
            </div>
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