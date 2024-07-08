import React from "react";
import Navbar from "../navbar/Navbar";
import { FaSearch } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { MdMilitaryTech } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Landingpage(){
    const navigate = useNavigate()
    return(
        <>
       
        <div
        className="w-full bg-center bg-cover h-[38rem] "
        >
        <div className="flex items-center justify-center w-full h-full bg-transparent">
            <div className="text-center">
            <h1 className="text-3xl font-semibold text-orange lg:text-4xl">
                Chat about your classes with <span className="text-orange-400">ITCC AI</span> Advisor
            </h1>
            <button className="w-full px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
            onClick={()=>navigate('/geminiadvisor')}
            >
                Ask away
            </button>
            </div>
        </div>
        </div>

        <section className="bg-transparent">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-black">
                How to <br/> join{" "}
                <span className="text-blue-500">ITCC</span>
                </h1>
                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
                <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
                    <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-black dark:bg-blue-500">   
                    <FaLink className="w-6 h-6"/>
                    </span>
                    <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                    Head to Triton Connect
                    </h1>
                    <p className="text-gray-500 dark:text-gray-300">
                    As a registered student, head over to triton connect appand login using your umsl school sso.
                    </p>
                    <a
                    href="https://tritonconnect.umsl.edu/"
                    className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                    >
                    <span className="mx-1">over here</span>
                    <svg
                        className="w-4 h-4 mx-1 rtl:-scale-x-100"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                        />
                    </svg>
                    </a>
                </div>
                <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
                    <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-black dark:bg-blue-500">
                    
                    <FaSearch className="w-6 h-6"/>
                    </span>
                    <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                    Search for ITCC
                    </h1>
                    <p className="text-gray-500 dark:text-gray-300">
                     Search for Information Technology &amp; Cybersecurity Club. Click join group.
                    </p>
                    
                </div>
                <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
                    <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-black dark:bg-blue-500">
                    
                    <MdMilitaryTech className="w-6 h-6"/>
                    </span>
                    <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                    Welcome to ITCC
                    </h1>
                    <p className="text-gray-500 dark:text-gray-300">
                    ITCC is glad to have you as a member.
                    </p>
                    
                </div>
                </div>
            </div>
        </section>

        </>
    )
}

export default Landingpage;