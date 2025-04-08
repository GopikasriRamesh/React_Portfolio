import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar=()=>{
    return( <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center ">
            <div className="text-white text-6xl mx-7">GS</div>
            <div className="mx-280 flex items-center justify-center gap-4 text-2xl">
            <FaLinkedin/>
            <FaGithub/>
            <FaSquareTwitter/>
            <FaInstagram/>
            </div>
        </div>

        </nav>
    )
};

export default Navbar;