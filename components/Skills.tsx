import React from 'react'
import { motion } from "framer-motion"
import SkillPhotoshop from './SkillPhotoshop';
import SkillHTML from './SkillHTML'
import SkillCSS from './SkillCSS'
import SkillTailwindCSS from './SkillTailwindCSS'
import SkillJS from "./SkillJS"
import SkillFramermotion from './SkillFramermotion'
import SkillBootstrap from './SkillBootstrap'
import SkillTypescript from './SkillTypescript'
import SkillNextJS from './SkillNextJS'
import SkillReact from './SkillReact'
import SkillPhp from './SkillPhp'
import SkillVBNET from './SkillVBNET'
import SkillMSQL from './SkillMySQL'
import SkillCSharp from './SkillC#'
import SkillFigma from './SkillFigma'
import SkillGithub from './SkillGithub'
import SkillWordpress from './SkillWordpress'
import SkillUnity from './SkillUnity'

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div 
    initial={{ opacity: 0}}
    whileInView={{ opacity: 1}}
    transition={{ duration: 1.5}}
    className="flex relative flex-col text-center md:text-left
    xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 
    mx-auto items-center">
        <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        skills
        </h3>
    
    <div className="grid grid-cols-4 gap-3">
        <SkillHTML />
        <SkillCSS />
        <SkillJS/>
        <SkillTailwindCSS />
        <SkillFramermotion />
        <SkillBootstrap />
        <SkillTypescript />
        <SkillNextJS />
        <SkillReact />
        <SkillPhp />
        <SkillCSharp />
        <SkillVBNET />
        <SkillMSQL />
        <SkillUnity />
        <SkillWordpress />
        <SkillFigma />
        <SkillPhotoshop />
        <SkillGithub />
        
        

    </div>


    </motion.div>
  );
}

export default Skills