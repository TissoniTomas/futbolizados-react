import React from 'react'
import InputText from '../../components/InputText/InputText'
import EmailNews from '../../components/EmailNews/EmailNews'

const ContactPage = () => {

    let textoContacto = "Desde futbolizados queremos ofrecerte el mejor servicio post-venta posible. Cualquier duda o consulta respecto a tu compra, devoluciones, reclamos, o simplemente dejarnos un comentario, este es tu lugar. Dejanos tu contacto y comentario y nos contactermos contigo a la brevedad."
  return (
    <div className='bg-gray-900'>
        <h1 className='text-2xl bg-gray-900 text-white text-center '>Comunicate con nosotros</h1>
        <p className='px-10 bg-gray-900'>{textoContacto}</p>
        <InputText label="Nombre" placeholder="Ingrese su nombre"/>
        <InputText label="Apellido" placeholder="Ingrese su apellido"/>
        <EmailNews/>

    </div>
  )
}

export default ContactPage