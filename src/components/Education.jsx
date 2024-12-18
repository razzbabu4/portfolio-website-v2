import { motion } from "framer-motion";

const Education = () => {
    return (
        <div
            id="education"
            className="w-full p-4 pt-16 lg:pt-5"
        >
            <div className="max-w-screen-lg min-h-screen m-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 1 }}
                    className='mb-12'>
                    <p className="text-3xl md:text-4xl font-bold border-b-4 border-gray-500 py-2 inline">
                        Education
                    </p>
                    <p className="py-4">Checkout of my educational background right here</p>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}

                    className='mb-[20px] text-white bg-gray-700/20 p-4 rounded-3xl w-full text-center md:max-w-[600px] mx-auto'>
                    <p>Daffodil International University</p>
                    <p>Bachelor of Science in CSE</p>
                    <p>(2016-2020)</p>
                </motion.div>

                <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -30 }} transition={{ duration: 1 }} className='h-12 w-0.5 bg-slate-400 my-1 mx-auto'></motion.div>
                
                <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:100}}
                transition={{duration:1}}
                className='mb-[20px] text-white bg-gray-700/20 p-4 rounded-3xl w-full text-center md:max-w-[600px] mx-auto'>
                    <p>Uttara Town College</p>
                    <p>Higher Secondary School Certificate</p>
                    <p>(2013-2014)</p>
                </motion.div>
                <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -30 }} transition={{ duration: 1 }} className='h-12 w-0.5 bg-slate-400 my-1 mx-auto'></motion.div>
                <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:-100}}
                transition={{duration:1}}
                className=' text-white bg-gray-700/20 p-4 rounded-3xl w-full text-center md:max-w-[600px] mx-auto'>
                    <p>Mahmudpur High School</p>
                    <p>Secondary School Certificate</p>
                    <p>(2011-2012)</p>
                </motion.div>
            </div>
        </div>
    );
};

export default Education;