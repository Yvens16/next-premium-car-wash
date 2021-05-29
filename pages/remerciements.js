import { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import SignupBox from 'components/signup/signupBox'
import styles from 'styles/affilié.module.scss'
import { useAuth } from '../firebase/use-auth'


export default function Affiliate () {
  return (
    <main>
      <Head>
        <title>
          Et si vous gagniez de l'argent ? 
        </title>
        <meta
          name='viewport'
          content='initial-scale=1.0, width=device-width initial-scale=1, maximum-scale=1, user-scalable=0'
        />
        <meta
          name='description'
          content="Créer sa propre page d'affilié et gagner de l'argent"
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1>Merci pour votre réservation !</h1>
      <style jsx>{`
        h1 {
          text-align: center;
        }
      `}</style>
      <SignupBox/>
    </main>
  )
}
