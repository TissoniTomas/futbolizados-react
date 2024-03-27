import React, { useCallback, useContext } from 'react'

import SignInForm from "../../components/SignInForm/SignInForm"
import { ModeContext } from '../../context/ModeContext'

const SignInPage = () => {

    const {mode} = useContext(ModeContext)




  return (
    <div className={`flex max-w-md flex-col gap-10 px-10  ${
        mode === "light" ? "bg-white" : "bg-gray-900"
      }`}>
        <h1  className={`font-MontserratBold text-3xl p-2 text-center ${
              mode === "light" ? "text-gray-900" : "text-gray-200"
            }`} >Registrese en Futbolizados</h1>
        <SignInForm/>

        
    </div>
  )
}

export default SignInPage