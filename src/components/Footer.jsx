import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profile from '../assets/my-profile-picture.png'

const Footer = () => {
    return (
        <footer className="flex flex-col gap-6 md:flex-row justify-between items-center p-6 bg-stone-950/30 backdrop-blur-md">
            <aside className="flex items-center justify-center gap-3">
                <img className="rounded-full h-10 w-10" src={profile} alt="profile" />
                <p>Copyright © ${new Date().getFullYear()} - All right reserved</p>
            </aside>
            <div className="flex gap-4">
                <a href='https://www.linkedin.com/in/md-tareq-masud'
                    className='flex justify-between items-center w-full'
                    target='_blank'
                >
                    <FaLinkedin size={25} />
                </a>
                <a href='https://github.com/razzbabu4'
                    className='flex justify-between items-center w-full'
                    target='_blank'
                >
                    <FaGithub size={25} />
                </a>
                <a href='https://drive.google.com/file/d/1xlxxiijxviD2P5raQegkx8i_bOGPpEBV/view?usp=sharing'
                    className='flex justify-between items-center w-full'
                    target='_blank'
                    download={true}
                >
                    <BsFillPersonLinesFill size={25} />
                </a>
            </div>
        </footer>
    );
};

export default Footer;