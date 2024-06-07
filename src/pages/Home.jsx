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
import Agents from "./Agents";
import { Helmet } from "react-helmet-async";

const Home = () => {
    const properties = useLoaderData();
    const [filteredProperties, setFilteredProperties] = useState(properties);
    const [propertyType, setPropertyType] = useState("");
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        AOS.init();
    }, []);

    const [agents, setAgents] = useState([]);
    useEffect(() => {
        fetch('/agents.json')
            .then(res => res.json())
            .then(data => setAgents(data));
    }, [])

    const handleSearch = () => {
        const lowerCaseQuery = searchText.toLowerCase();
        const filtered = properties.filter(property =>
            (propertyType ? property.status.toLowerCase() === propertyType.toLowerCase() : true) &&
            (property.name.toLowerCase().includes(lowerCaseQuery) ||
                property.price.toLowerCase().includes(lowerCaseQuery))
        );
        setFilteredProperties(filtered);
    };

    const sliderBreakpointForProperties = {
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
            <Helmet>
                <title>
                    Next Nest || Your trusted commercial place pertner
                </title>
            </Helmet>
            <HeroSlider
                propertyType={propertyType}
                setPropertyType={setPropertyType}
                searchText={searchText}
                setSearchText={setSearchText}
                onSearch={handleSearch}
            />
            {/* Properties */}
            <div className="container mx-auto p-5 lg:p-0 md:p-0" data-aos="fade-up">
                <div className="py-10">
                    <h2 className="text-2xl pb-5 text-center font-bold animate__animated animate__zoomInDown font-jost text-blue-500">Discover Our Latest Properties
                    </h2>
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={1}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={sliderBreakpointForProperties}
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


            {/* Agents */}
            <div className="container mx-auto p-5 lg:p-0 md:p-0" data-aos="fade-up">
                <div className="pb-10">
                    <h2 className="text-2xl pb-5 text-center font-bold animate__animated animate__zoomInDown font-jost text-blue-500">Meet Our Real Estate Agents
                    </h2>
                    <div className="grid lg:grid-cols-4 grid-cols-2 gri gap-3">
                    {
                        agents.map((agent, indx) =>

                            <Agents key={indx} agent={agent}></Agents>

                        )
                    }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;