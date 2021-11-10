import { useState } from 'react'
import Image from 'next/image'
import Head from 'next/head'
const Airtable = require('airtable')
import { toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

const base = new Airtable({
  apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY
}).base(process.env.NEXT_PUBLIC_AIRTABLE_BASE)
import styles from '../styles/Contact.module.scss'

export default function Contact () {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const submit = event => {
    event.preventDefault()
    base('Contact_Us').create(
      [
        {
          fields: {
            Name: name,
            Email: email,
            Phone: phone,
            Notes: message
          }
        }
      ],
      function (err, records) {
        if (err) {
          console.error(err)
          toast.error(
            "Nous avons eu un petit problème avec l'envoi de votre msg !",
            {
              position: toast.POSITION.TOP_CENTER
            }
          )
          return
        }
        toast.success('Nous avons bien reçu votre message Merci !', {
          position: toast.POSITION.TOP_CENTER
        })
        resetForm()
        records.forEach(function (record) {
          console.log(record.getId())
        })
      }
    )
  }

  const resetForm = () => {
    setName('')
    setPhone('')
    setEmail('')
    setMessage('')
  }
  return (
    <>
      <main className='container mx-auto flex justify-center items-center'>
        <div className='my-20 lg:py-24'>
          <h1 className='text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-800 lg:px-16 text-center uppercase'>
            Nous contacter
          </h1>
          <div className='mt-10 md:mt-16 w-full h-full px-4 sm:px-0'>
            <input
              type='name'
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder='Jean Dujardin'
              className='my-2 bg-gray-100 rounded w-full p-4 text-base leading-none text-gray-600 focus:outline-none border  border-transparent focus:border-gray-600'
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type='email'
              placeholder='jean.dujardin@gmail.com'
              className='my-2 bg-gray-100 rounded w-full p-4 text-base leading-none text-gray-600 focus:outline-none border  border-transparent focus:border-gray-600'
            />
            <input
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
              type='phone'
              placeholder='06 27 26 94 73'
              className='my-2 bg-gray-100 rounded w-full p-4 text-base leading-none text-gray-600 focus:outline-none border  border-transparent focus:border-gray-600'
            />
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              type='text'
              aria-label='Votre message'
              placeholder='Votre message'
              className='my-2 bg-gray-100 rounded text-base leading-none text-gray-600 mt-4 w-full h-64 pt-4 pl-4 resize-none focus:outline-none border border-2 border-transparent focus:border-gray-600'
              defaultValue={''}
            />
            <button onClick={(e) => submit(e)} disabled={message == ''|| email == '' || name == '' || phone == ''} className='disabled:opacity-50 bg-teal-light hover:bg-teal rounded text-base font-medium leading-none text-white py-4 w-full mt-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700'>
              Envoyer
            </button>
          </div>
        </div>
      </main>
    </>
  )
}
