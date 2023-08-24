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
src="CompanyLogoSutherlandBright.png"
alt="" />

<div className="px-0 md:px-10">
        <h4 className="text-sm md:text-2xl font-light">Billing Associate</h4>
        <p className="font-bold text:xs md:text-1xl mt-1">SUTHERLAND GLOBAL SERVICES</p>
        <div className="flex space-x-2 my-2">
            <img
            className="h-10 w-10 rounded-full"
            src="SAP.png"
            alt=""
            />
            <img
            className="h-10 w-10 rounded-full"
            src="excel.png"
            alt=""
            />
                {/*Tech used*/}
                {/*Tech used*/}

        </div>

    <p className="uppercase py-5 text-gray-300">JUNE 2022 - AUGUST 2023</p>

    <ul className="list-disc space-y-4 ml-5 text-xs md:text-sm">
        <li>During my fourth year in college, 
            I am also employed in this BPO Company in the Back Office department, 
            where my role primarily involves handling accounting tasks and 
            responsibilities.
        </li>
        <li> I've been a SAP user for 1 year. and by the third month of 
            my employment, I was assigned to a more advanced team.</li>
        <li>Worked on corrections of the accounts, also process the replication 
            error on the business partner's account.
        </li>
    </ul>

</div>

</article>

);
}

export default ExperienceCard