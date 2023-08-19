import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    directionLeft?: boolean;
};
    
function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
        <motion.img 
        initial={{
            x: directionLeft ? -200 : 200,
            opacity:0
        }}
        transition={{ duration: 1}}
        whileInView={{ opacity: 1, x:0 }}
        whileHover={{
            boxShadow: "1px 1px 20px rgb(128,128,128)"
        }}
        src="SkillWordpress.png"
        alt="Wordpress"
        className="rounded-full border border-gray-500 object-cover w-20 h-20 md:w-25
        md:h-25 xl:w-30 xl:h-30 "/>

    </div>

    
    
  );
}

export default Skill;