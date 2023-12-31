import React from 'react'
import {Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from '@/components/BackgroundCircles'
import Image from 'next/image'
import Profile from '..public/1.jpeg'

type Props = {}

export default function Hero({}: Props) {
    const [text, count ] = useTypewriter({
        words : [
            "Hello world!",
            "I am Meanne Del Rosario",
            "I am a Designer",
            "I am a Developer",
            "I am Meanne Del Rosario"
        ],
    loop: true,
    delaySpeed: 2000,
    })
  return (
    <div className="h-screen flex flex-col space-y-8 items-center
    justify-center text-center overflow-hidden">
        
        <BackgroundCircles />
        <img 
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="1.jpeg"
        alt="Picture of the author" 
        />
        <div className="z-20">
            <h2 className="text-xs md:text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
                SOFTWARE ENGINEER</h2>
            <h1 className="text-xl md:text-4xl font-semibold px-10">
            <span className="mr-3">{text}</span>
            <Cursor cursorColor ="#F7AB0A"/>
            </h1>

            <div className="pt-5">
           <a href="#about">
                <button className="heroButton">about</button>
           </a>
            <a href="#experience">
            <button className="heroButton">experience</button>
            </a>
            <a href="#skills">
            <button className="heroButton">skills</button>
            </a>
            <a href="#projects">
            <button className="heroButton">projects</button>
            </a>
            </div>

        </div>

    </div>
  )
}