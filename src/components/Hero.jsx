import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Link } from "react-scroll";
import heroImg from '../assets/my-profile-picture.png'

const Hero = () => {
    return (
        <div name='home' className='min-h-screen md:h-screen w-full pt-16 lg:pt-10'>
            <div className='max-w-screen-lg m-auto flex flex-col-reverse gap-6 md:flex-row items-center justify-between px-4 h-full py-6'>
                <div className='flex flex-col justify-center items-center md:items-start h-full w-full md:w-1/2'>
                    <h2 className='text-4xl lg:text-6xl font-bold tracking-tighter pb-2'>Md. Tareq Masud</h2>
                    <span className="text-3xl bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-transparent tracking-tight">Junior Web Developer</span>
                    <p className='text-stone-400 py-6 tracking-tighter leading-relaxed text-lg'>
                        Hello! I am a passionate Junior Web Developer skilled in crafting responsive and dynamic web applications. With expertise in HTML, CSS, and Tailwind CSS, I create visually appealing interfaces that enhance user experience. I am proficient in JavaScript and React, enabling me to build interactive components that engage users effectively. My backend knowledge includes Express and MongoDB, allowing me to develop robust server-side applications.
                    </p>
                    <div className="flex gap-4">
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

                    </div>
                </div>
                <div className="m-8 md:m-0 md:w-1/2 md:flex justify-end">
                    <img
                        src={heroImg}
                        alt="profile"
                        className='rounded-2xl lg:w-3/4'
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;