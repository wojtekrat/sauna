'use client'

import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

const ContactMe = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs.send('service_aq7153w', 'template_t7hhnab',
      {
        from_name: form.name,
        to_name: 'Wojtek',
        from_email: form.email,
        to_email: 'wojciech.ratajczak92@gmail.com',
        message: form.message
      },
      'BAxwAX3FroUVJr_Ir'
    ).then(() => {
      alert('Dziękuję za wiadomość, odezwę się jak najszybciej!')
      // eslint-disable-next-line no-unused-expressions
      setForm({
        name: '',
        email: '',
        message: ''
      // eslint-disable-next-line no-sequences
      }), (error) => {
        console.log(error)
        alert('Coś poszło nie tak')
      }
    })
  }

  return (
    <div className='m-auto w-[100%] sm:w-[80%] mt-[20px] md:mt-[40px] flex md:flex-row flex-wrap items-center justify-center '>
        <div className='bg-orange-400 h-fit w-fit p-5 rounded-xl z-8 sm:mb-[0px] relative'>
                <div className='text-[20px] md:text-[30px] text-white'>
                  <h2 className='font-bangers'>
                    Masz pytania?
                  </h2>
                </div>
                <div>
                    <form className='flex flex-col w-[300px]' ref={formRef} onSubmit={handleSubmit}>
                        <label className='flex flex-col'>Twoje imię:
                        <input className='' placeholder='Twoje imię' type='name' name='name' value={form.name} onChange={handleChange} ></input>
                        </label>
                        <label className='flex flex-col'>Twój email:
                        <input className='' placeholder='Twój email' type='email' name='email' value={form.email} onChange={handleChange}></input>
                        </label>
                        <label className='flex flex-col'>Treść:
                        <textarea rows="7" name="message" value={form.message} className='p-2 m-2 text-white resize-none' placeholder='Treść wiadomości' onChange={handleChange}></textarea>
                        </label>
                        <button type='submit' className='text-white p-2 m-2 bg-orange-300 w-[290px] hover:text-white hover:bg-orange-600'>Wyślij wiadomość</button>
                    </form>
                </div>
            </div>

    </div>
  )
}

export default ContactMe
