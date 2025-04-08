import profile from '../assets/projects/profile2.avif';
import {motion} from "framer-motion";

const container=(delay)=>({
    hidden:{x:-100,opacity:0},
    visibility:{
        x:0,
        opacity:1,
        transition:{duration:0.5,delay:delay},
    },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      {/* Side-by-side layout on large screens */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-6">
        
        {/* Content on the LEFT */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 
            variants={container(0)}
            initial="hidden"
            animate="visibility"
            className="pb-10 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Gopika Sri
            </motion.h1>
            <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visibility"
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Full Stack Dev
            </motion.span>
            <motion.p 
            variants={container(1)}
            initial="hidden"
            animate="visibility"
            className="my-2 max-w-xl py-6 font-light tracking-tighter">
              I'm a passionate and results-driven Full Stack Developer with hands-on experience in building dynamic and responsive web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). I specialize in creating seamless user interfaces with HTML, CSS, and JavaScript, and developing scalable backend services.
            </motion.p>
          </div>
        </div>

        {/* Image on the RIGHT */}
        <div className="w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0">
          <motion.img
            initial={{x:100,opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration:1,delay:1.2}}
            src={profile}
            alt="me"
            className="rounded-full  w-90 h-90 object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
