import { motion } from "framer-motion";
import ecommerceImg from "../assets/projects/project-1.jpg";
import portfolioImg from "../assets/projects/project-2.jpg";
import blogImg from "../assets/projects/project-3.jpg";

const Project = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Experience <span className="text-neutral-500">& Projects</span>
      </motion.h1>

      <div className="flex flex-col gap-24 px-6">

        {/* Project 1 */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row-reverse items-center justify-between gap-8"
        >
          <img
            src={ecommerceImg}
            alt="E-Commerce Project"
            className="w-60 h-40 rounded-lg object-cover shadow-md"
          />
          <div className="lg:w-2/3 text-left">
            <h2 className="text-2xl font-semibold mb-2">Expense Tracker</h2>
            <p className="text-sm text-neutral-400 mb-2">
              <strong>Tech Stack:</strong> React, Node.js, MongoDB, Express
            </p>
            <p>
            A simple and intuitive expense tracker built using React and Tailwind CSS. 
            It allows users to add, delete, and categorize expenses with a clean and responsive UI.
            </p>
          </div>
        </motion.div>

        {/* Project 2 */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col lg:flex-row-reverse items-center justify-between gap-8"
        >
          <img
            src={portfolioImg}
            alt="Portfolio Website"
            className="w-60 h-40 rounded-lg object-cover shadow-md"
          />
          <div className="lg:w-2/3 text-left">
            <h2 className="text-2xl font-semibold mb-2">Portfolio Website</h2>
            <p className="text-sm text-neutral-400 mb-2">
              <strong>Tech Stack:</strong> React, Tailwind CSS
            </p>
            <p>
              Designed and developed a personal portfolio showcasing my skills,
              technologies, and projects. Fully responsive with a modern UI.
            </p>
          </div>
        </motion.div>

        {/* Project 3 */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col lg:flex-row-reverse items-center justify-between gap-8"
        >
          <img
            src={blogImg}
            alt="Blog Platform"
            className="w-60 h-40 rounded-lg object-cover shadow-md"
          />
          <div className="lg:w-2/3 text-left">
            <h2 className="text-2xl font-semibold mb-2">Express CLI tool docs</h2>
            <p className="text-sm text-neutral-400 mb-2">
              <strong>Tech Stack:</strong> React, Tailwind CSS,Framer Motion
            </p>
            <p>
             A sleek, responsive documentation site for an Express.js CLI tool built with React, Tailwind CSS, and Framer Motion. 
             It features animated UI elements, dark theme aesthetics, and a smooth developer-friendly layout.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Project;
