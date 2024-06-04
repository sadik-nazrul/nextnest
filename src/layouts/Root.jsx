import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";


const Root = () => {
    return (
        <div className="font-jost">
            <Header></Header>
            <div className="min-h-[calc(100vh-136px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;