import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Link } from "react-scroll";
import heroImg from '../assets/my-profile-picture.png';
import { motion } from 'framer-motion';

const ContainerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.5
        }
    }
}
const childVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
        }
    }
}

const Hero = () => {
    return (
        <div
            id='home'
            className='w-full pt-16 lg:pt-10'>
            <div className='max-w-screen-lg min-h-screen m-auto flex flex-col-reverse gap-6 md:flex-row items-center justify-between px-4 py-6'>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={ContainerVariants}
                    className='flex flex-col justify-center items-center md:items-start h-full w-full md:w-1/2'>
                    <motion.h2
                        variants={childVariants}
                        className='text-4xl lg:text-6xl font-bold tracking-tighter pb-2'>Md. Tareq Masud</motion.h2>
                    <motion.span
                        variants={childVariants}
                        className="text-3xl bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-transparent tracking-tight">Junior Web Developer</motion.span>
                    <motion.p
                        variants={childVariants}
                        className='text-stone-400 py-6 tracking-tighter leading-relaxed text-lg'>
                        Hello! I am a passionate Junior Web Developer skilled in crafting responsive and dynamic web applications. With expertise in HTML, CSS, and Tailwind CSS, I create visually appealing interfaces that enhance user experience. I am proficient in JavaScript and React, enabling me to build interactive components that engage users effectively. My backend knowledge includes Express and MongoDB, allowing me to develop robust server-side applications.
                    </motion.p>
                    <motion.div variants={childVariants} className="flex gap-4">
                        <button className=' text-stone-900 px-4 py-3 w-fit my-2 rounded-full flex items-center gap-2 bg-gradient-to-r from-stone-300 to-stone-500 font-semibold tracking-tight'>
                            <a
                                href='Md_Tareq_Masud_Front_End_Developer_Resume.pdf'
                                download>
                                Download Resume
                            </a>
                        </button>
                        <Link to='projects' smooth={true} duration={500} className='group text-stone-900 px-4 py-3 w-fit my-2 rounded-full flex items-center gap-2 bg-gradient-to-r from-stone-300 to-stone-500 font-semibold tracking-tight'>
                            Portfolio
                            <span className='group-hover:rotate-90 duration-300'>
                                <MdOutlineArrowRightAlt size={25} />
                            </span>
                        </Link>
                    </motion.div>
                </motion.div>
                <div className="m-8 md:m-0 md:w-1/2 md:flex justify-end">
                    <motion.img
                        src={heroImg}
                        alt="profile"
                        className='rounded-2xl lg:w-3/4'
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;