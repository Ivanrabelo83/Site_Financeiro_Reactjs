import React from "react"

const Newsletter = () => {
  return (
    <div className="w-full py-16  text-white px-4">
      <div className="max-w-[1240px] mx-auto grid  lg:grid-cols-3">
        <div className="lg:col-span-2 my-5">
          <h1 className="md:text-5xl sm:text-3xl text-xl font-bold">
            Dicas e truques para otimizar seu fluxo.
          </h1>
          <p> Assine a newsletter e mantenha-se atualizado</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 flex w-full  text-black"
              type="email"
              placeholder="Digite seu email"
            />
            <button className="bg-[#00df9a] w-[200px]  font-medium my-6 mx-auto py-3 text-black">
              Notify
            </button>
          </div>
          <p>
            Seus dados sempre protegidos.
            <span className="text-[#00df9a]"> Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
