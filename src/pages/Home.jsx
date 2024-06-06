import { useLoaderData } from "react-router-dom";
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/autoplay';
import { useEffect, useState } from "react";
import Properties from "./Properties";
import HeroSlider from "../components/HeroSlider";

const Home = () => {
    const properties = useLoaderData();
    const [filteredProperties, setFilteredProperties] = useState(properties);
    const [propertyType, setPropertyType] = useState("");
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        AOS.init();
    }, []);

    const handleSearch = () => {
        const lowerCaseQuery = searchText.toLowerCase();
        const filtered = properties.filter(property => 
            (propertyType ? property.status.toLowerCase() === propertyType.toLowerCase() : true) &&
            (property.name.toLowerCase().includes(lowerCaseQuery) || 
             property.price.toLowerCase().includes(lowerCaseQuery))
        );
        setFilteredProperties(filtered);
    };

    const sliderBreakpoint = {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    }

    return (
        <div>
            <HeroSlider 
                propertyType={propertyType}
                setPropertyType={setPropertyType}
                searchText={searchText}
                setSearchText={setSearchText}
                onSearch={handleSearch}
            />
            <div className="container mx-auto">
                <div className="py-10">
                    <h2 className="text-2xl pb-5 text-center font-bold animate__animated animate__zoomInDown">Properties</h2>
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={1}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={sliderBreakpoint}
                        modules={[Autoplay]}
                    >
                        {
                            filteredProperties.map((property, indx) =>
                                <SwiperSlide key={indx}>
                                    <Properties property={property}></Properties>
                                </SwiperSlide>
                            )
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Home;