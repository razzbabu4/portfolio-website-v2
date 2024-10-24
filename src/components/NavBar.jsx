import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [navOption, setNavOption] = useState(false);
    const [activeSection, setActiveSection] = useState(1);
    const navLinks = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'skills'
        },
        {
            id: 3,
            link: 'projects'
        },
        {
            id: 4,
            link: 'education'
        },
        {
            id: 5,
            link: 'contact'
        },
    ]
    return (
        <nav className='fixed flex justify-between items-center w-full px-4 py-5 text-white bg-stone-950/30 backdrop-blur-md lg:px-16 z-10'>
            <div className='flex gap-2 items-center'>
                <h1 className='text-2xl font-medium ml-2 flex items-center gap-2 uppercase'>Md. Tareq Masud</h1>
            </div>

            <ul className='hidden md:flex'>
                {
                    navLinks.map(({ id, link }) =>
                        <li key={id} className='lg:px-4 md:px-2 cursor-pointer capitalize font-medium text-lg text-white hover:scale-105 duration-300 hover:text-stone-400 relative'>
                            <Link
                                to={link}
                                spy={true}
                                smooth={true}
                                duration={750}
                                onSetActive={() => setActiveSection(id)}
                                className={`cursor-pointer text-white p-2 transition-colors duration-500 ${activeSection === id ? 'text-stone-500' : ''
                                    }`}
                            >{link}</Link>
                            {activeSection === id && (
                                <motion.div
                                    layoutId="activeUnderline"
                                    className="absolute top-8 bottom-0 left-0 right-0 h-1 rounded-full bg-green-400"
                                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                />
                            )}
                        </li>
                    )
                }
            </ul>

            <div onClick={() => setNavOption(!navOption)} className='cursor-pointer z-10 pr-4 md:hidden text-gray-500'>
                {
                    navOption ? <FaTimes size={25} /> : <FaBars size={25} />
                }
            </div>

            {
                navOption && (
                    <ul className='md:hidden flex flex-col justify-center items-center absolute top-0 left-0 w-full min-h-screen bg-stone-950/90 backdrop-blur-xl'>
                        {
                            navLinks.map(({ id, link }) =>
                                <li key={id} className='px-4 py-4 cursor-pointer capitalize text-2xl font-medium text-white transition hover:scale-105 duration-300 hover:text-stone-400'>
                                    <Link
                                        onClick={() => setNavOption(!navOption)}
                                        to={link}
                                        smooth={true}
                                        duration={750}>
                                        {link}
                                    </Link>
                                </li>
                            )
                        }
                    </ul>
                )
            }

        </nav>
    );
};

export default Navbar;