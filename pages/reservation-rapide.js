import Head from 'next/head'
import { useState } from 'react'
import ReactPlayer from 'react-player'
import Image from 'next/image'
import { firebaseAnalytics } from '../firebase/firebase';
import styles from '../styles/rapid_reservation.module.scss'

export default function RapidReservation () {
  const [price, setprice] = useState(null)
  // console.log(
  //   typeof window != 'undefined' && window.matchMedia('min-width: 600')
  // )

  const checkPrice = (e) => {
    setprice(e.target.value)
    if (process.env.NODE_ENV === 'production') {
      firebaseAnalytics().logEvent('select_price_rapid_reservation', {name: e.target.value})
    }
  }

  const logPlayEvent = () => {
    if (process.env.NODE_ENV === 'production') {
      firebaseAnalytics().logEvent('video_playing')
    }
  }

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
          onPlay={() => logPlayEvent()}
          url='https://res.cloudinary.com/djwtktmre/video/upload/v1622724614/inside_only_tiny.mp4'
          // playing={true}
          // muted={true}
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
        Payez le prix qui vous semble le plus raisonnable
        </h1>
        <p>
          Pour une remise à neuf de l'intérieur de votre voiture + un traitement
          anti odeur à domicile
        </p>
        <div className={styles.inputs}>
          <div className={price === '55€' ? styles.selected : null}>
            <input
              type='radio'
              id='subscribeNews'
              name='subscribe'
              value='55€'
              onClick={e => checkPrice(e)}
            />
            <label htmlFor='subscribeNews'>55€</label>
          </div>
          <div className={price === '60€' ? styles.selected : null}>
            <input
              type='radio'
              id='subscribeNews'
              name='subscribe'
              value='60€'
              onClick={e => checkPrice(e)}
            />
            <label htmlFor='subscribeNews'>60€</label>
          </div>
          <div className={price === '70€' ? styles.selected : null}>
            <input
              type='radio'
              id='subscribeNews'
              name='subscribe'
              value='70€'
              onClick={e => checkPrice(e)}
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
            Prendre un rdv
          </a>
        </button>
      </section>
    </main>
  )
}
