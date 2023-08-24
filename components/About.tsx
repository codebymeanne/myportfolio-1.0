import React from 'react'
import { motion } from "framer-motion"
type Props = {}

function About({}: Props) {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1}}
    transition={{ duration: 1.5 }}
    className="flex flex-col relative h-screen text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        About <span className="text-[#F7AB0A]">Me</span>
        </h3>

    <motion.img
    initial={{
        x:-80,
        opacity: 0,
    }}
    transition={{
        duration: 1.2,
    }}
    whileInView={{opacity: 1, x:0 }}
    viewport={{once: true}}
    src="2.jpeg"
    className="-mb-20 md:mb-0 flex-shrink-0 w-36 h-36 rounded-full object-cover
    md:rounded-lg sm:w-73 sm:h-115 xl:w-[400px] xl:h-[500px]"
    />

    <div className="space-y-1 px-0 sm:px-2 md:px-10">
        <h4 className="text-sm md:text-2xl font-semibold">I am an Aspiring <span 
        className="underline decoration-[#F7AB0A]/50">
        Software Engineer</span> from Taytay Rizal, Philippines
        </h4>
        <p className="text-xs md:text-sm">
        I graduated with honors, earning the distinction of 
        <span className="text font-semibold"> Cum Laude </span>
        from the University of Rizal System, where I pursued a 
        Bachelor of Science degree in Information Technology. 
        I take pride in the fact that I successfully completed 
        my bachelor's degree while also working on corporate companies.
        <br />

        I have fallen in love with coding and programming throughout my academic journey 
        and what I love about it, is the challenge, enjoyment and satisfaction
        I get when constructing logics to solve problems
        and the contants learning I gain from it.
        <br /> 
        <br /> 

        I am now poised to follow my real passion as a software engineer, and
        I am confident in my ability to contribute to the success 
        of a business, team or organization.

        <br/> To explore my portfolio, please continue scrolling.

    </p>
    </div>
    </motion.div>
  );
}

export default About