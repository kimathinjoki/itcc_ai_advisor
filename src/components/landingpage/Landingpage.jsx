import React from "react";
import Navbar from "../navbar/Navbar";
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
                Chat about your classes with <span className="text-orange-400">ITTC AI</span> Advisor
            </h1>
            <button className="w-full px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
            onClick={()=>navigate('/geminiadvisor')}
            >
                Ask away
            </button>
            </div>
        </div>
        </div>
        </>
    )
}

export default Landingpage;