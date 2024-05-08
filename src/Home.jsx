import { Outlet } from "react-router-dom";
import FooterMain from "./Footer/FooterMain";
import NavBar from "./Header/NavBar";

const Home = () => {
    return (
        <div>

            <div className="">
                <NavBar></NavBar>

                <Outlet></Outlet>
            </div>

            <FooterMain></FooterMain>


        </div>
    );
};

export default Home;