import React from 'react'
import { PhoneIcon, MapPinIcon,EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    email: string;
};

type Props = {};

function ContactMe({}: Props) {
    const { register, handleSubmit, } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => 
 { window.location.href = 'mailto:it.meannedelrosario@gmail.com';
};

  return (
    <div className="h-screen flex relative flex-col md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
        </h3>
    
    <div className="flex flex-col space-y-10">
        <h4 className="text:lg md:text-xl font-semibold text-center">
        <span className="decoration-[#F7AB0A]/50 underline">Lets get in touch.{" "}</span>
            I have got just what you need.
        </h4>

        <div className="space-y-7">
        <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
            <p className="text:lg md:text-xl">+63 936 887 6460</p>
            </div>

            <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
            <p className="text:lg md:text-xl">it.meanndelrosario@gmail.com</p>
        </div>

        <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
            <p className="text:lg md:text-xl">Taytay Rizal, Philippines</p>
        </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} 
        className="flex flex-col space-y-2 w-fit mx-auto">
            <div className="flex space-x-1">
                <input {...register('email')} 
                placeholder="Enter your email" 
                className="contactInput" 
                type="Email"
                />
            </div>

            <button 
            type="submit"
            className="bg-[#F7AB0A] py-0.5 px-10 rounded-md
             text-black font-bold text-lg">Submit</button>
        </form>
    </div>

    </div>
    
  );
}

export default ContactMe;