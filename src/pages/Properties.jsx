import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const Properties = ({ property }) => {
    const { thumbnail, name, price, status, details } = property;
    return (
        <>
            <Link to={`property/${name}`} data-aos="fade-up"
                data-aos-duration="2000" className="h-[500px]">
                <div className='border rounded-xl p-4 flex flex-col gap-4 relative'>
                    <p className="px-4 py-2 bg-blue-500 text-white font-medium absolute right-4 rounded-tr-xl">{status}</p>
                    <div className='flex-grow space-y-4'>
                        <img className='mx-w-full max-h-full object-cover rounded-xl' src={thumbnail} alt={name} />
                        <h2 className="text-xl font-medium font-jost">{name}</h2>
                    </div>
                    <div>
                        <div className='flex justify-between items-center'>
                            <p><span className='font-semibold'>Price:</span> {price}</p>
                            <p><span className='font-semibold'>Build Year:</span> {details.year_of_build}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
};

Properties.propTypes = {
    property: PropTypes.object
}

export default Properties;