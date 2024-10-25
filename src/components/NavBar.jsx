import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [navOption, setNavOption] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const navLinks = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'skills',
            offset: 30
        },
        {
            id: 3,
            link: 'projects',
            offset: 20  
        },
        {
            id: 4,
            link: 'education'
        },
        {
            id: 5,
            link: 'contact',
            offset: 30
        },
    ]
    return (
        <nav className='fixed flex justify-between items-center w-full px-4 py-5 text-white lg:px-16 z-10 bg-stone-950/30 backdrop-blur-md'>
            <div className='flex gap-2 items-center'>
                <h1 className='text-xl font-medium ml-2 flex items-center gap-2 uppercase'>Md. Tareq Masud</h1>
            </div>

            <ul className='hidden md:flex'>
                {
                    navLinks.map(({ id, link, offset }) =>
                        <li key={id} className='lg:px-4 md:px-2 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-300 hover:text-stone-400 relative'>
                            <Link
                                to={link}
                                spy={true}
                                smooth={true}
                                duration={750}
                                offset={offset}
                                onSetActive={() => setActiveSection(link)}
                                className={`cursor-pointer px-2 py-2 text-white transition-colors duration-500 ${activeSection === link ? 'text-stone-500' : ''
                                    }`}
                            >{link}</Link>
                            {activeSection === link && (
                                <motion.div
                                    layoutId="activeUnderline"
                                    className="absolute top-7 bottom-0 left-0 right-0 h-1 rounded-full bg-green-400"
                                    transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                                />
                            )}
                        </li>
                    )
                }
            </ul>

            <div onClick={() => setNavOption(!navOption)} className='cursor-pointer z-10 pr-4 md:hidden text-stone-400'>
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
                                        onClick={() => setNavOption(false)}
                                        to={link}
                                        smooth={true}
                                        duration={750}
                                    >
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