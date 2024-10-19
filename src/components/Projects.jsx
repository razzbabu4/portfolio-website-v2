import healthQuest from '../assets/portfolio/health-quest-project.png';
import swapSeek from '../assets/portfolio/swap-seek-project.png';
import wanderWisely from '../assets/portfolio/wander-wisely-project.png'
import { FaGithub } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';
import { motion } from "framer-motion"

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Diagnostic Center Management',
            image: healthQuest,
            live: "https://diagnostic-center-manage-f4ff1.web.app",
            code: "https://github.com/razzbabu4/diagnostic-center-client",
            technology: ['HTML', 'CSS', 'JavaScript', 'React', 'Express', 'MongoDB'],
            description:
                "A full-stack application for diagnostic centers to manage appointments and patient records, featuring secure Stripe payment processing.",

        },
        {
            id: 2,
            image: swapSeek,
            title: 'Alternative Products Management',
            live: "https://alternative-product-info.web.app",
            code: "https://github.com/razzbabu4/alternative-product-information-client",
            technology: ['HTML', 'CSS', 'JavaScript', 'React', 'Express', 'MongoDB'],
            description:
                "A platform for users to view and recommend alternative products, with features for adding products and tracking recent queries.",
        },
        {
            id: 3,
            image: wanderWisely,
            title: 'Tourist Spots Management',
            live: "https://tourism-management-bd08e.web.app",
            code: "https://github.com/razzbabu4/tourism-management-client",
            technology: ['HTML', 'CSS', 'JavaScript', 'React', 'Express', 'MongoDB'],
            description:
                'Explore tourist spots in Southeast Asia with a user-friendly interface that includes detailed views of attractions.',
        },
    ];
    return (
        <div
            name="projects"
            className="w-full md:min-h-screen pt-20"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full min-h-screen text-white">
                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 1 }}

                    className="pb-6">
                    <p className="text-4xl font-bold inline border-b-4 py-2 border-stone-400">
                        Projects
                    </p>
                    <p className="py-4">Check out some of my work right here</p>
                </motion.div>
                {/* Projects */}
                <div>
                    {
                        projects.map(({ id, image, title, description, technology, live, code }) =>
                            <div key={id} className='mb-10 flex flex-wrap gap-4'>
                                {/* Image */}
                                <motion.div
                                    whileInView={{ opacity: 1, x: 0 }}
                                    initial={{ opacity: 0, x: -100 }}
                                    transition={{ duration: 1 }}
                                    className='w-full lg:w-1/3'>
                                    <img src={image}
                                        className='mb-2 rounded-xl'
                                        alt="thumbnail" />
                                </motion.div>
                                {/* Content */}
                                <motion.div
                                    whileInView={{ opacity: 1, x: 0 }}
                                    initial={{ opacity: 0, x: 100 }}
                                    transition={{duration:1.5}}
                                    className='max-w-xl w-full lg:w-3/4'>
                                    <h3 className='text-2xl font-semibold mb-1'>{title}</h3>
                                    <p className='text-stone-400 mb-2'>{description}</p>
                                    <div className='overflow-x-scroll md:overflow-hidden mb-4 py-2'>
                                        {
                                            technology.map((tech) => <span key={id} className='mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300'>{tech}</span>)
                                        }
                                    </div>
                                    <div className='flex gap-4 text-xl'>
                                        <a href={live} target='_blank'>
                                            <CgWebsite />
                                        </a>
                                        <a href={code} target='_blank'>
                                            <FaGithub />
                                        </a>
                                    </div>
                                </motion.div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;