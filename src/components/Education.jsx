
const Education = () => {
    return (
        <div
            name="education"
            className="w-full md:h-screen p-4 text-white pt-20"
        >
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div className='mb-12'>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 py-2 inline">
                        Education
                    </p>
                    <p className="py-4">Checkout of my educational background right here</p>
                </div>
                <div className='mb-[20px] text-white bg-gray-700/20 p-4 rounded-3xl w-full text-center md:max-w-[600px] mx-auto'>
                    <p>Daffodil International University</p>
                    <p>Bachelor of Science in CSE</p>
                    <p>(2016-2020)</p>
                </div>
                <div className='h-12 w-0.5 bg-slate-400 my-1 mx-auto'></div>
                <div className='mb-[20px] text-white bg-gray-700/20 p-4 rounded-3xl w-full text-center md:max-w-[600px] mx-auto'>
                    <p>Uttara Town College</p>
                    <p>Higher Secondary School Certificate</p>
                    <p>(2013-2014)</p>
                </div>
                <div className='h-12 w-0.5 bg-slate-400 my-1 mx-auto'></div>
                <div className=' text-white bg-gray-700/20 p-4 rounded-3xl w-full text-center md:max-w-[600px] mx-auto'>
                    <p>Mahmudpur High School</p>
                    <p>Secondary School Certificate</p>
                    <p>(2011-2012)</p>
                </div>
            </div>
        </div>
    );
};

export default Education;