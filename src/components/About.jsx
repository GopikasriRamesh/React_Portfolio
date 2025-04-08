import aboutimg from '../assets/projects/about me.webp';
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h1>

      <div className="flex flex-wrap items-center">
        {/* Left: Image */}
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8 flex justify-center"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-full w-64 h-64 object-cover" src={aboutimg} alt="About me" />
          </div>
        </motion.div>

        {/* Right: Text */}
        <motion.div  
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 px-6"
        >
          <p className="my-2 max-w-xl py-6 text-lg leading-relaxed">
            I’m Gopika Sri, a passionate Full Stack Developer who enjoys building interactive,
            user-focused web applications. With strong hands-on experience in the MERN stack
            (MongoDB, Express.js, React.js, Node.js), I love crafting efficient backend systems while
            also delivering smooth and responsive frontend experiences using HTML, CSS, and JavaScript.
            <br /><br />
            I’m driven by creativity and logic — from designing clean UI interfaces to solving complex
            backend problems. I strive to create applications that are both scalable and user-friendly.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
