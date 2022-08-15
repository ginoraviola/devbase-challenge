import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {FaChevronLeft} from "react-icons/fa";

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isNavigated, setIsNavigated] = useState(false);

    useEffect(() => {
        setIsNavigated(location.pathname.includes("person"))
    }, [location.pathname]);

    return (
        <div className="bg-black py-3 sticky flex">
        <>
            {isNavigated && (
                <div
                    className="text-white cursor-pointer font-normal text-xl px-4 flex items-center justify-start text-start content-start"
                    onClick={() => navigate('/')}>
                    <FaChevronLeft className="mr-2"/>
                    Back
                </div>
            )}

            <nav className="w-full flex items-center justify-center">
                <p className="text-2xl font-bold text-white text-center justify-center items-center">
                    Home
                </p>
            </nav>
        </>
        </div>
    );
}

export default Header;