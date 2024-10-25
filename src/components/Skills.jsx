import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import node from "../assets/node.png";
import tailwind from "../assets/tailwind.png";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"

    }
  }
})

const Skills = () => {
  const technologies = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
      variants: iconVariants(2)
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
      variants: iconVariants(3)
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
      variants: iconVariants(5)
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
      variants: iconVariants(2)
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
      variants: iconVariants(3)
    },
    {
      id: 6,
      src: node,
      title: "Node",
      style: "shadow-green-400",
      variants: iconVariants(5)
    },
  ];
  return (
    <div
      id="skills"
      className="w-full pt-20 lg:pt-0"
    >
      <div className="max-w-screen-lg min-h-screen m-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
        >
          <p className="text-3xl md:text-4xl font-bold border-b-4 border-stone-400 py-2 inline">
            Skills
          </p>
          <p className="py-4">{`These are the technologies I've worked with`}</p>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="w-full grid grid-cols-2 sm:grid-cols-3 gap-12 text-center p-8 sm:px-10">
          {technologies.map(({ id, src, title, style, variants }) => (
            <motion.div
            initial="initial"
            animate="animate"
            variants={variants}
              key={id}
              className={`shadow-md py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;