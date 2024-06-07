import { useLoaderData, useParams } from "react-router-dom";
import ImagesGallerySlider from "../components/ImagesGallerySlider";
import { FaChartArea, FaCheckCircle, FaCity } from "react-icons/fa";
import { FaCalendar, FaEarthAmericas, FaFlagUsa, FaRuler } from "react-icons/fa6";


const PropertyDetails = () => {
    const properties = useLoaderData();
    const { title } = useParams();
    const property = properties.find(property => property.name === title);
    const { details, features, gallery_images, location, name, price, status } = property;
    const { size, units, year_of_build } = details;
    const { area, city, country, state, zip_code } = location;
    return (
        <div className="px-10 py-10">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                <ImagesGallerySlider images={gallery_images}></ImagesGallerySlider>
                <div className="space-y-4">
                    <div>
                        <h2 className="text-xl font-semibold">{name}</h2>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-lg font-medium underline">Details</h2>
                        <div className="flex justify-between border p-2">
                            <p className="flex items-center gap-2"><FaRuler></FaRuler> <span>{size}(sqft)</span></p>
                            <p className="flex items-center gap-2"><span className=" text-base font-medium">Unit: </span>{units}</p>
                            <p className="flex items-center gap-2"><FaCalendar></FaCalendar> <span>{year_of_build}</span></p>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-lg font-medium underline">Features</h2>
                        <div>
                            {
                                features.map(
                                    (feature, indx) =>
                                        <ul key={indx}>
                                            <li className="flex items-center gap-2"><FaCheckCircle></FaCheckCircle>{feature}</li>
                                        </ul>)
                            }
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-lg font-medium underline">Location</h2>
                        <div className="flex justify-between border flex-wrap lg:flex-nowrap">
                            <p className="flex items-center gap-2 lg:border-r p-2"><FaCity></FaCity> <span>{city}</span></p>
                            <p className="flex items-center gap-2 lg:border-r p-2"><FaChartArea></FaChartArea> <span>{area}</span></p>
                            <p className="flex items-center gap-2 lg:border-r p-2"><FaEarthAmericas></FaEarthAmericas> <span>{country}</span></p>
                            <p className="flex items-center gap-2 lg:border-r p-2"><FaFlagUsa></FaFlagUsa> <span>{state}</span></p>
                            <p className="flex items-center gap-2 p-2"><span className=" text-base font-medium">Zip code:</span> <span>{zip_code}</span></p>
                        </div>

                        <div className="flex justify-between">
                            <h2><span className="font-medium">Price: </span> {price}</h2>
                            <h2><span className="font-medium">Satus: </span> {status}</h2>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default PropertyDetails;