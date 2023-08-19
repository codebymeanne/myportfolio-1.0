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
src="EMEA.png"
alt="" />

<div className="px-0 md:px-10">
        <h4 className="text-2xl font-light">Marketing Assistant</h4>
        <p className="font-bold text-1xl mt-1">EMEA REALTY CORPORATION</p>
        <div className="flex space-x-2 my-2">
            <img
            className="h-10 w-10 rounded-full"
            src="microsoft.png"
            alt=""
            />
            <img
            className="h-10 w-10 rounded-full"
            src="photoShop1.png"
            alt=""
            />
                {/*Tech used*/}
                {/*Tech used*/}
                {/*Tech used*/}
        </div>

    <p className="uppercase py-5 text-gray-300">JULY 2019 - JUNE 2022</p>

    <ul className="list-disc space-y-4 ml-5 text-sm">
        <li>Work on this corporate company for three years.
            Wherein I specialized in helping the company, real estate agent,
            and clients.
        </li>
        <li>I undertook comprehensive preparations essential for the 
            company's requirements, encompassing activities like 
            planning, organizing, marketing, and proficiently 
            managing a multitude of transactions, including 
            commission disbursement and sales monitoring.
        </li>
        <li>I also played a part in contributing to the company's logo, 
            which was designed from the perspective of the owner wherein 
            this logo was represent the collaboration of EMEA Realty and 
            EMEA Construction.</li>
    </ul>

</div>

</article>

);
}

export default ExperienceCard