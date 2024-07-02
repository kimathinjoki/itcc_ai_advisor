import React from "react";
import Navbar from "../navbar/Navbar";

function Landingpage(){
    return(
        <>
        <Navbar/>
        <div
        className="w-full bg-center bg-cover h-[38rem] "
        >
        <div className="flex items-center justify-center w-full h-full bg-transparent">
            <div className="text-center">
            <h1 className="text-3xl font-semibold text-orange lg:text-4xl">
                Chat about your classes with <span className="text-orange-400">ITTC AI </span> Advisor
            </h1>
            <button className="w-full px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                Ask away
            </button>
            </div>
        </div>
        </div>
        </>
    )
}

export default Landingpage;