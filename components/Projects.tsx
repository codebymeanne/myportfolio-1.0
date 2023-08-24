import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function Projects({}: Props) {
    /*const projects: any[] =
    ([1, 2, 3, 4, 5]);*/
  return (
    <motion.div
    initial={{ opacity:0}}
    whileInView={{ opacity: 1}}
    transition={{ duration: 1.5}}
    className="h-screen relative flex over-flow-hidden flex-col text-left
    md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
        <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
        </h3>

        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden
        snap-x snap-mandatory z-20
        scrollbar-thin scrollbar-track-gray-400/20px
        scrollbar-thumb-[#F7AB0A]/80">
                <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-0 items-center justify-center p-20 h-screen">
                    <motion.img 
                   initial={{
                    y: -200,
                    opacity: 0
                   }}
                   transition={{duration: 1.2}}
                   whileInView={{ opacity: 1, y:0}}
                   viewport={{once: true}}
                    src="MISZURI2.png"
                    alt="PICTURE OF PROJECT"
                    />
                    <div className="space-y-5 px-0 md:px-10 max-w-6xl">
                        <h4 className="text-sm md:text-xl font-semibold text-center">MIS for Zuri Residences
                        </h4>

                        <p className="text-xs md:text-sm text-center md:text-left">
                        The project focused on the design and development of 
                        Management Information System for Zuri Residence located 
                        at Dolores Taytay. 
                        The developed system applied Visual Studio 2013 and 
                        MySQL Workbench 8.0.22 for managing database 
                        Visual Basic .NET (VB.NET) 
                        is used as the programming language.
                        The Management Information System have a 
                        specific features design to help Zuri Residences 
                        in managing their financial statements and reports, 
                        as well as other services the community has to offer.

                        </p>
                    </div>
                </div>

                <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-0 items-center justify-center p-20 h-screen">
                    <motion.img 
                   initial={{
                    y: -200,
                    opacity: 0
                   }}
                   transition={{duration: 1.2}}
                   whileInView={{ opacity: 1, y:0}}
                   viewport={{once: true}}
                    src="MyportfolioVersion1.png"
                    alt="PICTURE OR PROJECT"
                    />
                    <div className="space-y-5 px-0 md:px-10 max-w-6xl">
                        <h4 className="text-sm md:text-xl font-semibold text-center">My portfolio Version 1
                        </h4>

                        <p className="text-xs md:text-sm text-center md:text-left">
                        My portfolio website version1 is one of my frontend
                        projects, 
                        <br /> develop using NEXT JS, Typescript, Framermotion, 
                        Tailwind CSS and React.
                        </p>
                    </div>
                </div>

                <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-0 items-center justify-center p-20 h-screen">
                    <motion.img 
                   initial={{
                    y: -200,
                    opacity: 0
                   }}
                   transition={{duration: 1.2}}
                   whileInView={{ opacity: 1, y:0}}
                   viewport={{once: true}}
                    src="TaytayRizalBlogWebsite.png"
                    alt="PICTURE OR PROJECT"
                    />
                    <div className="space-y-5 px-0 md:px-10 max-w-6xl">
                        <h4 className="text-sm md:text-xl font-semibold text-center">My Hometown Blog Website
                        </h4>

                        <p className="text-xs md:text-sm text-center md:text-left">
                        The focused of this website project was to showcase My hometown
                        "Taytay Rizal" - such as how it is famous, about its modernity,
                        how beautiful, great monuments and whats makes My hometown special.
                        The website was developed using freely available WordPress plugins, 
                        incorporating features like galleries to effectively 
                        convey the essence of my hometown.
                        </p>
                    </div>
                </div>

                <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-0 items-center justify-center p-20 h-screen">
                    <motion.img 
                   initial={{
                    y: -200,
                    opacity: 0
                   }}
                   transition={{duration: 1.2}}
                   whileInView={{ opacity: 1, y:0}}
                   viewport={{once: true}}
                    src="Kingoftheroadwar1.png"
                    alt="PICTURE OR PROJECT"
                    />
                    <div className="space-y-5 px-0 md:px-10 max-w-6xl">
                        <h4 className="text-sm md:text-xl font-semibold text-center">King of the Road War
                        </h4>

                        <p className="text-xs md:text-sm text-center md:text-left">
                        The simple game entitled "King of the Road War" is an endless 
                        2D racing game created using Unity. "King of the Road" is 
                        known as the Jeepney transportation in the Philippines. 
                        The fun fact about the game concept is that it depicts 
                        the actual events that occurred on the roadway, which is the 
                        racing of jeepnies.
                        </p>
                    </div>
                </div>

        </div>
        <div className="w-full absolute top-(30%) bg-[#F7AB0A]/10 left-0 h-[300px]
        -skew-y-12">
        </div>
    </motion.div>

    
  )
}

export default Projects