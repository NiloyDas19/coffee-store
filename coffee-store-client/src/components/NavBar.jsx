import logo from "../../public/images/icons/5.png"
import navbg from "../../public/images/more/navbg.png"

const NavBar = () => {
    return (
        <div className="h-16 flex items-center justify-center" style={{ backgroundImage: `url(${navbg})` }} >
            <div className="flex gap-1 justify-center items-center">
                <div>
                    <img src={logo} className="h-10" alt="" />
                </div>
                <div>
                    <h2 className="text-xl font-bold text-white">Espresso Emporium</h2>
                </div>
            </div>
        </div>
    );
};

export default NavBar;