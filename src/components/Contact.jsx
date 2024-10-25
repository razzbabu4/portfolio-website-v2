import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full text-white pt-20 lg:pt-5"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg min-h-screen m-auto w-full h-full">
        <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1 }} className="pb-4">
          <p className="text-3xl md:text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-4">Submit the form below to get in touch with me</p>
        </motion.div>

        <div className="text-gray-50">
          <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
            <div className="py-6 md:py-0 md:px-6">
              <motion.h1 whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -30 }} transition={{ duration: 0.5 }} className="text-4xl font-bold pb-4">Get in touch</motion.h1>
              <div className="space-y-4">
                <motion.p whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -30 }} transition={{ duration: 1 }} className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Mirpur 1, Dhaka City</span>
                </motion.p>
                <motion.p whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -30 }} transition={{ duration: 0.5 }} className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  <span>+8801679-529807</span>
                </motion.p>
                <motion.p whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -30 }} transition={{ duration: 1 }} className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  <span>tareqraz07@gmail.com</span>
                </motion.p>
              </div>
            </div>
            {/* Form star here */}
            <form action="https://getform.io/f/bwnggqma" method="POST" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
              <motion.label whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 30 }} transition={{ duration: 1 }}  className="block">
                <span className="mb-1">Full name</span>
                <input type="text" name="name" placeholder="Leroy Jenkins" className="p-2 block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 bg-gray-800" />
              </motion.label>
              <motion.label whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 30 }} transition={{ duration: 0.5 }}  className="block">
                <span className="mb-1">Email address</span>
                <input type="email" name="email" placeholder="leroy@jenkins.com" className="p-2 block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 bg-gray-800" />
              </motion.label>
              <motion.label whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 30 }} transition={{ duration: 1 }}  className="block">
                <span className="mb-1">Message</span>
                <textarea rows="3" type='text' name="message" className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 bg-gray-800"></textarea>
              </motion.label>
              <motion.button whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 30 }} transition={{ duration: 1 }}  type="submit" className="px-6 py-2 self-center text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:scale-110">Send</motion.button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
