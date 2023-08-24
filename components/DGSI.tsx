import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function ExperienceCard({}: Props) {
  return (
  <article className="flex flex-col rounded-lg items-center space-y-0 flex-shrink-0
  w-[450px] md:w-[500px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100
  opacity-40 cursort-pointer transition-opacity duration-200 overflow-hidden">
<motion.img
initial={{
    y: -100,
    opacity: 0,
}}
transition={{ duration: 1.2 }}
whileInView={{ opacity: 1, y:0}}
viewport={{ once: true }}

className="w-32 h-32 rounded-full xl:w-[150px] object-cover
object-center"
src="DGSI1.png"
alt="" />

<div className="px-0 md:px-10">
        <h4 className="text-sm md:text-2xl font-light">Quality Assurance Tester, Intern</h4>
        <p className="font-bold text:xs md:text-1xl mt-1">DYNAMIC GLOBAL SOFT INC</p>
        <div className="flex space-x-2 my-2">
            <img
            className="h-10 w-10 rounded-full"
            src="figma1.png"
            alt=""
            />
            <img
            className="h-10 w-10 rounded-full"
            src="python.png"
            alt=""
            />
            <img
            className="h-10 w-10 rounded-full"
            src="googlecollab.png"
            alt=""
            />
                {/*Tech used*/}
                {/*Tech used*/}
                {/*Tech used*/}
        </div>

    <p className="uppercase py-5 text-gray-300">FEBRUARY 2023 - APRIL 2023</p>

    <ul className="list-disc space-y-3 ml-5 text-xs md:text-sm">
        <li>I worked on different projects such as Property Management System,
            A Game projects containing modular learning for students and 
            Disaster Risk Reduction Management applications.
        </li>
        <li>As part of the QA Team I Identifies, logs and reports program defects and glitches
            as well as documents and evaluate test findings.
        </li>
        <li>I also involved on process and contributing projects ideas, concepts
            and updates on different projects. etc..
        </li>
    </ul>

</div>

</article>

);
}

export default ExperienceCard