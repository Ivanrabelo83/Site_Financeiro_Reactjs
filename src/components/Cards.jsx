import React from "react"
import Single from "../assets/single.png"
import Double from "../assets/double.png"
import Triple from "../assets/triple.png"

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 ">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rouded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Single}
            alt=""
          />
          <h2 className="text-2xl font-bold text-center py-8">Único usuário</h2>
          <p className="text-center text-4xl font-bold">R$ 140,90</p>
          <div className="text-center font-medium ">
            <p className="py-2 border-b mx-8 mt-8">200BG Armazenamento</p>
            <p className="py-2 border-b mx-8">1 Usuário</p>
            <p className="py-2 border-b mx-8">Send up to 2GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px]  font-medium my-6 mx-auto py-3 text-black">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rouded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src={Double}
            alt=""
          />
          <h2 className="text-2xl font-bold text-center py-8">Duplo usuário</h2>
          <p className="text-center text-4xl font-bold">R$ 240,90</p>
          <div className="text-center font-medium ">
            <p className="py-2 border-b mx-8 mt-8">500BG de Armazenamento</p>
            <p className="py-2 border-b mx-8">2 Usuários</p>
            <p className="py-2 border-b mx-8">Send up to 2GB</p>
          </div>
          <button className="bg-black w-[200px]  font-medium my-6 mx-auto py-3 text-white">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rouded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Triple}
            alt=""
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Triplo Usuário
          </h2>
          <p className="text-center text-4xl font-bold">R$ 340,90</p>
          <div className="text-center font-medium ">
            <p className="py-2 border-b mx-8 mt-8">100BG Armazenamento</p>
            <p className="py-2 border-b mx-8">Triplo usuário</p>
            <p className="py-2 border-b mx-8">Send up to 2GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px]  font-medium my-6 mx-auto py-3 text-black">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cards
