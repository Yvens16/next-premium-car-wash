import Head from 'next/head'
import { useState } from 'react'
import ReactPlayer from 'react-player'
import Image from 'next/image'
import styles from '../styles/rapid_reservation.module.scss'

export default function RapidReservation () {
  const [price, setprice] = useState(null)
  console.log(
    typeof window != 'undefined' && window.matchMedia('min-width: 600')
  )
  return (
    <main>
      <Head>
        <title>Nettoyage à domicile au même tarif que les pro</title>
        <meta
          name='viewport'
          content='initial-scale=1.0, width=device-width initial-scale=1, maximum-scale=1, user-scalable=0'
        />
        <meta
          name='description'
          content='Profitez des mêmes réductions que les pro'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section className={styles.header}>
        <Image
          src='/svg/carwashlogominified.svg'
          width='50'
          height='50'
          alt='logo'
        />
        <ReactPlayer
          url='/videos/inside_only_tiny.mp4'
          // playing={true}
          width={300}
          controls
          config={{
            file: {
              attributes: {
                controlsList: 'nodownload'
              }
            }
          }}
        />
      </section>
      <section className={styles.offer}>
        <h1>
          Choisissez votre prix, celui qui vous semble le plus raisonnable
        </h1>
        <p>
          Pour une remise à neuf de l'intérieur de votre voiture + un traitement
          anti odeur
        </p>
        <div className={styles.inputs}>
          <div>
            <input
              type='radio'
              id='subscribeNews'
              name='subscribe'
              value='55€'
              onClick={e => setprice(e.target.value)}
            />
            <label htmlFor='subscribeNews'>55€</label>
          </div>
          <div>
            <input
              type='radio'
              id='subscribeNews'
              name='subscribe'
              value='60€'
              onClick={e => setprice(e.target.value)}
            />
            <label htmlFor='subscribeNews'>60€</label>
          </div>
          <div>
            <input
              type='radio'
              id='subscribeNews'
              name='subscribe'
              value='70€'
              onClick={e => setprice(e.target.value)}
            />
            <label htmlFor='subscribeNews'>70€</label>
          </div>
        </div>
      </section>
      <section className={styles.cta}>
        <button>
          <a
            rel='noreferrer'
            target='_blank'
            href={`https://calendly.com/contact-premiumcarwash/reservation-premium-car-wash-clone?a2=${price}`}
          >
            {' '}
            Réservez un nettoyage
          </a>
        </button>
      </section>
    </main>
  )
}
