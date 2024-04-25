import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import errorbg from "../../public/images/404/404.gif"

const ErrorPage = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="mt-5">
                <Link to="/" ><i className="text-purple-800 font-semibold flex items-center justify-center gap-1"> <FaArrowLeft /> Back to home</i></Link>
            </div>
            <div className="flex items-center justify-center">
                <img src={errorbg} alt=""  className="bg-no-repeat bg-cover bg-center"/>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;