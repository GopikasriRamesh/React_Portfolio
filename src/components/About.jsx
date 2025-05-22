import aboutimg from '../assets/projects/about me.webp';
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h1>

      <div className="flex flex-wrap items-center">

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

        <motion.div  
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 px-6"
        >
          <p className="my-2 max-w-xl py-6 text-lg leading-relaxed">
            I’m Gopika Sri, a passionate and detail-oriented Frontend Developer with a strong focus on building engaging, responsive, and accessible web applications. I specialize in creating intuitive user interfaces using modern technologies such as React.js, Tailwind CSS, JavaScript, HTML, and CSS. My goal is always to blend design with functionality to deliver seamless digital experiences that users love.

Over the course of my learning and projects, I’ve developed a deep appreciation for clean code, reusable components, and performance optimization. I enjoy turning complex design challenges into elegant, maintainable solutions and believe that every pixel and interaction should serve a purpose.

While my core strength lies in frontend development, I also have working knowledge of backend integration and databases, including MySQL and MongoDB.

I’m continuously exploring new tools, frameworks, and best practices to stay updated in the ever-evolving world of web development. Whether it's improving performance, refining UI/UX, or learning a new library, I’m always eager to grow and push boundaries.
            <br /><br />
            When I’m not coding, you’ll find me brainstorming new ideas, sketching UI layouts, or diving into the latest trends in design and technology. I'm driven by creativity, curiosity, and the desire to build things that make an impact.

Let’s build something awesome together!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
