import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"; // Import icons

export default function Foot() {
    return (
       <div className="footer"> <center>
           

            {/* Social media icons */}
           <div className="social-media-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook size={24} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter size={24} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={24} />
                </a>
               </div> </center>
        </div>
    );
}