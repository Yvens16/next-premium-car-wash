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
    <main className={styles.contact}>
      <Head>
        <title>Contactez-nous !</title>
        <meta
          name='description'
          content="Contactez-nous pour un nettoyage en profondeur !"
        />
      </Head>
      <h1>Contactez-nous</h1>
      <section className={styles.contact_us}>
        <section className={styles.infos}>
          <div className={styles.mail}>
            <Image alt='email' src='/svg/mail.svg' width='30' height='30' />
            <span>contact.premiumcarwash@gmail.com</span>
          </div>
          <div className={styles.phone}>
            <Image alt='téléphone' src='/svg/phone-call.svg' width='30' height='30' />
            <span>+33 6 27 26 94 73</span>
          </div>
        </section>
        <div className={styles.form}>
          <form onSubmit={submit}>
            <input
              value={name}
              type='text'
              name='name'
              placeholder='Nom'
              id='name'
              onChange={e => setName(e.target.value)}
            />
            <input
              value={phone}
              type='tel'
              name='tel'
              placeholder='+33 6 24 58 96 47'
              id='tel'
              onChange={e => setPhone(e.target.value)}
            />
            <input
              value={email}
              type='email'
              name='email'
              placeholder='Jean.dujardin@gmail.com'
              id='email'
              onChange={e => setEmail(e.target.value)}
            />
            <textarea
              value={message}
              name='description'
              placeholder='Votre message'
              id='description'
              cols='30'
              rows='10'
              onChange={e => setMessage(e.target.value)}
            ></textarea>
            <button type='submit'>Envoyer message</button>
          </form>
        </div>
      </section>
    </main>
  )
}
