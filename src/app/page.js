"use client"

import { container, item } from "../../data/animations";
import { motion } from "framer-motion";
import Title from "./homepage/components/Title";
import Headline from "./homepage/components/Headline";
import ProjectContainer from "./homepage/components/ProjectContainer";
import ExperienceContainer from "./homepage/components/ExperienceContainer";
import EducationContainer from "./homepage/components/EducationContainer";

export default function Home() {
  return (
    <motion.main
      variants={container}
      initial="hidden"
      animate="visible"
      className="min-h-screen"
    >
      <Title />
      <motion.div variants={item}>
        <Headline />
      </motion.div>
      <motion.div variants={item}>
        <ProjectContainer />
      </motion.div>
      <motion.div variants={item} className="mt-10 mb-12 flex flex-col md:flex-row justify-center gap-8 mx-auto max-w-6xl">
        <div className="w-full md:w-1/2">
          <ExperienceContainer />
        </div>
        <div className="w-full md:w-1/2">
          <EducationContainer />
        </div>
      </motion.div>
    </motion.main>
  );
}
