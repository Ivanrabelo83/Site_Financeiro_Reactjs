import React from "react"
import Laptop from "../assets/laptop.jpg"

const Analytcs = () => {
  return (
    <div className="w-full  bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src={Laptop} alt="/" className="w-[500px] mx-auto my-4" />
        <div className=" flex  flex-col  justify-center">
          <p className="text-[#00df9a] font-bold ">DATA ANALYTICSE DASHBOARD</p>
          <h1 className="md:text-4xl sm-text-3xl text-2x-l font-bold py-2">
            Gerencie a análise de dados de forma centralizadaz
          </h1>
          <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus,
            repudiandae pariatur. Accusantium, quas quod. Odit sed enim corrupti
            officiis odio incidunt
          </p>
          <button className="bg-black  text-[#00df9a] w-[200px] rounded-md font-medium my-6  mx-auto md:mx-0 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default Analytcs
