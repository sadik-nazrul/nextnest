import { Link } from "react-router-dom";
import PropTypes from 'prop-types';



const Agents = ({ agent }) => {
    const { agentName, agentImg, shortAbout } = agent;

    return (
        <Link to={`agent/${agentName}`} data-aos="fade-up"
            data-aos-duration="2000">
            <div className='border rounded-xl p-4 flex flex-col gap-4'>
                <div className='flex-grow space-y-4'>
                    <img className='mx-w-full max-h-full object-cover rounded-xl' src={agentImg} alt={agentName} />
                    <h2 className="text-xl font-medium font-jost">{agentName}</h2>
                </div>
                <div>
                    <div className='flex justify-between items-center'>
                        <p>{shortAbout}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

Agents.propTypes = {
    agent: PropTypes.object
}

export default Agents;