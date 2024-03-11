'use client'

import { ArrowRight } from 'phosphor-react'

export default function ClaimUserNameForm() {
  return (
    <div className="grid grid-cols-1fr auto gap-2 md:grid-cols-1 mt-4">
      <div className="p-4 rounded-sm border-2 border-gray600 border-gray-900 flex items-center has-[:focus]:border-ignite300 has-[:disabled]:opacity-5 has-[:disabled]:cursor-not-allowed bg-gray800 gap-2 max-[600px]:text-2xl">
        <span className="text-sm text-gray400 font-regular">ignite.com/</span>
        <input
          type="text"
          className="font-default text-white text-sm font-regular bg-gray900 border-0 w-full focus:outline-none px-4 py-3"
          placeholder="seu-usuario"
        />
        <button
          type="submit"
          className="bg-ignite500 rounded-sm text-sm font-medium text-center min-w-[120px] disabled:cursor-not-allowed focus:shadow-custom px-2 py-3 flex items-center justify-around"
        >
          Reservar
          <ArrowRight width={18} height={18} />
        </button>
      </div>
    </div>
  )
}
