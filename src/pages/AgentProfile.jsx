import { Helmet } from "react-helmet-async";
import { FaLinkedin, FaTwitter } from "react-icons/fa6";
import { useLoaderData, useParams } from "react-router-dom";


const AgentProfile = () => {
    const agents = useLoaderData();
    const { nameOfAgent } = useParams();
    const agent = agents.find(agent => agent.agentName === nameOfAgent);
    console.log(agent);
    const { agentName, agentImg, serviceAreas, licenseNmbr, taxId, phone, email, linkedIn, twitter } = agent;
    return (
        <div className="container mx-auto p-5 lg:p-0 md:p-0">
            <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-col-1 lg:gap-10 md:gap-6 gap-4 p-5 rounded-xl justify-center">
                <Helmet>
                    <title>Agent || {agentName}</title>
                </Helmet>
                <div className="lg:border-r-2 md:border-r-2 border-black pr-5">
                    <img className="rounded-lg" src={agentImg} alt={agentName} />
                </div>
                <div className="lg:col-span-3 md:col-span-3">
                    <h2 className="text-xl font-medium font-jost pb-4 border-b">{agentName}</h2>
                    <div className="py-4 space-y-2">
                        <p><span className="font-medium">Agent Licence:</span> {licenseNmbr}</p>
                        <p><span className="font-medium">Taxt Id:</span> {taxId}</p>
                        <p><span className="font-medium">Service Area:</span> {serviceAreas}</p>
                    </div>
                    <div className="space-y-4 space-x-4">
                        <button className="px-5 py-2 bg-orange-500 text-white rounded hover:bg-transparent hover:text-orange-500 hover:border"><a href={phone} target="_blank" rel="noopener noreferrer"></a>Phone</button>
                        <button className="px-5 py-2 border hover:bg-orange-500 hover:text-white rounded"><a href={email} target="_blank" rel="noopener noreferrer"></a>Email</button>
                    </div>
                    <div className="py-5 flex gap-4">
                        <a href={linkedIn} target="_blank" rel="noopener noreferrer"><FaLinkedin></FaLinkedin></a>
                        <a href={twitter} target="_blank" rel="noopener noreferrer"><FaTwitter></FaTwitter></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AgentProfile;