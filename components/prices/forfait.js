import { useEffect, useState } from 'react'
import 'tailwindcss/tailwind.css'
import styles from './Forfait.module.scss'
import Image from 'next/image'
import { SpeakerphoneIcon, XIcon } from '@heroicons/react/outline'
const forfaitDescInter = {
  // bronze: [
  //   { text: 'Nettoyage vitres intérieures', url: '/images/car_windows.jpeg' },
  //   {
  //     text: 'Aspiration "Express" habitacle et coffre',
  //     url: '/images/car_vacuuming.jpeg'
  //   },
  //   {
  //     text: 'Dépoussiérage des plastiques intérieurs',
  //     url: '/images/car_interior.jpeg'
  //   }
  // ],
  argent: [
    { text: 'Nettoyage vitres intérieures', url: '/images/car_windows.jpeg' },
    {
      text: 'Aspiration habitacle et coffre en profondeur',
      url: '/images/car_vacuuming.jpeg'
    },
    {
      text: 'Nettoyage des plastiques intérieurs',
      url: '/images/car_interior.jpeg'
    },
    { text: 'Nettoyage passage de portes', url: '/images/car_door_sill.jpeg' },
    {
      text: 'Traitement anti-odeur/ antibactérien',
      url: '/images/steam_seats.webp'
    },
    { text: 'Traitement:  cuir / tissu', url: '/images/shampoo.jpeg' }
  ],
  or: [
    {
      text:
        'Shampoing complet habitacle(siège auto, tapis, moquettes et contre-porte)',
      url: '/images/shampoo.jpeg'
    },
    { text: 'Nettoyage vitres intérieures', url: '/images/car_windows.jpeg' },
    {
      text: 'Aspiration habitacle et coffre en profondeur',
      url: '/images/car_vacuuming.jpeg'
    },
    {
      text: 'Nettoyage des plastiques intérieurs',
      url: '/images/car_interior.jpeg'
    },
    { text: 'Nettoyage passage de portes', url: '/images/car_door_sill.jpeg' },
    {
      text: 'Traitement anti-odeur/ antibactérien',
      url: '/images/steam_seats.webp'
    },
    { text: 'Traitement:  cuir / tissu', url: '/images/shampoo.jpeg' }
  ]
}

const forfaitDescExter = {
  // bronze: [
  //   { text: 'Lavage carrosserie' },
  //   {
  //     text: 'Nettoyage jantes'
  //   },
  //   {
  //     text: 'Nettoyage vitres extérieures'
  //   }
  // ],
  argent: [
    { text: 'Lavage carrosserie' },
    {
      text: 'Nettoyage jantes'
    },
    {
      text: 'Nettoyage vitres extérieures'
    }
  ],
  or: [
    {
      text: 'Démoustiquage carrosserie'
    },
    { text: 'Lavage & lustrant déperlant carrosserie' },
    {
      text: 'Nettoyage & décrassage jantes'
    },
    {
      text: 'Nettoyage vitres extérieures'
    },
    { text: 'Nettoyage passage de portes' }
  ]
}

export default function Forfait ({
  selectForfait,
  selectedForfait,
  priceInter,
  priceExter,
  priceInterExter,
  goToDiscount,
  goBack,
  scrollRef,
  ville
}) {
  const [min, setMin] = useState()
  const [hour, setHour] = useState()
  const [day, setDay] = useState()
  useEffect(() => {
    let countDownDate = new Date('Sep 27, 2021 00:00:00').getTime()

    // Update the count down every 1 second
    let x = setInterval(function () {
      // Get today's date and time
      let now = new Date().getTime()
  
      // Find the distance between now and the count down date
      let distance = countDownDate - now
  
      // Time calculations for days, hours, minutes and seconds
      let days = Math.floor(distance / (1000 * 60 * 60 * 24))
      setDay(days)
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      setHour(hours)
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      setMin(minutes)
      // let seconds = Math.floor((distance % (1000 * 60)) / 1000)
  
      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x)
        // document.getElementById('demo').innerHTML = 'EXPIRED'
      }
    }, 1000)
  }, [])
  return (
    <section className={styles.forfait}>
      {/* <div className='bg-indigo-600'>
        <div className='max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between flex-wrap'>
            <div className='w-0 flex-1 flex items-center'>
              <span className='flex p-2 rounded-lg bg-indigo-800'>
                <SpeakerphoneIcon
                  className='h-6 w-6 text-white'
                  aria-hidden='true'
                />
              </span>
              <p className='ml-3 font-medium text-white truncate'>
                <span className='md:hidden'>Intér/Extér à 65€ !</span>
                <span className='hidden md:inline'>
                  Intérieur et Extérieur à 65€ !
                </span>
              </p>
            </div>
            <div className='order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto'>
              <h1 className='text-center mb-3 font-extralight'>Dans le 95 seulement sauf si 2 voitures</h1>
              <div className='text-center flex w-full items-center justify-center'>
                <div className='w-24 mx-1 p-2 bg-white text-indigo-600 rounded-lg'>
                  <div className='font-mono leading-none' x-text='days'>
                    {day}
                  </div>
                  <div className='font-mono uppercase text-sm leading-none'>
                    Jours
                  </div>
                </div>
                <div className='w-24 mx-1 p-2 bg-white text-indigo-600 rounded-lg'>
                  <div className='font-mono leading-none' x-text='hours'>
                    {hour}
                  </div>
                  <div className='font-mono uppercase text-sm leading-none'>
                    Heures
                  </div>
                </div>
                <div className='w-24 mx-1 p-2 bg-white text-indigo-600 rounded-lg'>
                  <div className='font-mono leading-none' x-text='minutes'>
                    {min}
                  </div>
                  <div className='font-mono uppercase text-sm leading-none'>
                    Minutes
                  </div>
                </div>
              </div>
            </div>
            <div className='order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto'>
              <a
                href='https://calendly.com/contact-premiumcarwash/nettoyage-a-domicile-95-et-alentours-web-clone'
                target='_blank'
                className='flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50'
              >
                Réserver
              </a>
            </div>
            <div className='order-2 flex-shrink-0 sm:order-3 sm:ml-3'>
              <button
                type='button'
                className='-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2'
              >
                <span className='sr-only'>Dismiss</span>
                <XIcon className='h-6 w-6 text-white' aria-hidden='true' />
              </button>
            </div>
          </div>
        </div>
      </div> */}
      <div className={styles.go_back} onClick={goBack}>
        <Image
          alt='boutton retour'
          src='/svg/back.svg'
          width={40}
          height={40}
        />
      </div>
      <div className={styles.title}>
        <h1 className='text-xl lg:text-xl tracking-tighter leading-relaxed lg:leading-snug f-f-l font-black text-center'>
          Les Forfaits
        </h1>
        <h3 className='text-xl lg:text-xl tracking-tighter leading-relaxed lg:leading-snug f-f-l font-black pb-2 text-center'>
          Intervention à domicile <br /> {ville}
        </h3>
      </div>
      <div className={styles.select_forfait}>
        {/* <div
          className={`${styles.selector} ${
            selectedForfait === 'bronze' ? styles.selected : ''
          }`}
          onClick={() => selectForfait('bronze')}
        >
          Forfait Bronze
        </div> */}
        {/* <div
          className={`${styles.selector} ${
            selectedForfait === 'argent' ? styles.selected : ''
          }`}
          onClick={() => selectForfait('argent')}
        >
          Forfait Argent
        </div> */}
        <div
          className={`${styles.selector} ${
            selectedForfait === 'or' ? styles.selected : ''
          }`}
          onClick={() => selectForfait('or')}
        >
          Forfait Or
        </div>
      </div>
      <div className={styles.container}>
        <h2 className='text-xl lg:text-xl tracking-tighter leading-relaxed lg:leading-snug f-f-l'>
          Intérieur
        </h2>
        <div className={styles.description}>
          {console.log('selectedForfait:', selectedForfait)}
          {forfaitDescInter[selectedForfait].map((el, index) => (
            <div key={index} className={styles.description_item}>
              {/* <Image alt='type de service' src={el.url} width={70} height={70} /> */}
              <p>{el.text}</p>
            </div>
          ))}
        </div>
        <div ref={scrollRef} className={styles.price}>
          <p>Prix: {priceInter}€</p>
        </div>
        <div className={styles.cta}>
          <button onClick={() => goToDiscount('inter')}>
            Voir réductions et réserver
          </button>
          <a
            href='https://www.instagram.com/premiumcarwash_fr/'
            target='_blank'
          >
            <button>Voir photos clients</button>
          </a>
        </div>
        <div className='mx-auto px-4 xl:px-0 container pt-10 lg:pt-10'>
          <div className='text-color f-f-l'>
            <h1 className='text-white text-base lg:text-xl tracking-tighter leading-relaxed lg:leading-snug f-f-l font-black text-center'>
              "Prestation réalisée à domicile, véhicule impeccable et l'odeur
              tout simplement agréable. Excellent accueil. Je recommande."
            </h1>
            <a
              href='https://bit.ly/témoignages_pcw'
              className='text-teal text-xl lg:text-xl tracking-tighter leading-relaxed lg:leading-snug f-f-l font-black text-center pt-5 lg:pt-20'
            >
              <h1>- Stéphanie Losse</h1>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <h2 className='text-xl lg:text-xl tracking-tighter leading-relaxed lg:leading-snug f-f-l'>
          Extérieur
        </h2>
        <div className={styles.description}>
          {forfaitDescExter[selectedForfait].map((el, index) => (
            <div key={index} className={styles.description_item}>
              {/* <Image alt='type de service' src={el.url} width={70} height={70} /> */}
              <p>{el.text}</p>
            </div>
          ))}
        </div>
        <div className={styles.price}>
          <p>Prix: {priceExter}€</p>
        </div>
        <div className={styles.cta}>
          <button onClick={() => goToDiscount('exter')}>
            Voir réductions et réserver
          </button>
          <a
            href='https://www.instagram.com/premiumcarwash_fr/'
            target='_blank'
          >
            <button>Voir photos clients</button>
          </a>
        </div>
        <div className='mx-auto px-4 xl:px-0 container pt-10 lg:pt-10'>
          <div className='text-color f-f-l'>
            <h1 className='text-base lg:text-xl tracking-tighter leading-relaxed lg:leading-snug f-f-l font-black text-center'>
              "Très bonne prestation <br /> j'ai récuperer ma voiture très
              propre. travail de pro. Merci à bientôt."
            </h1>
            <a
              href='https://bit.ly/témoignages_pcw'
              className='text-teal text-xl lg:text-xl tracking-tighter leading-relaxed lg:leading-snug f-f-l font-black text-center pt-5 lg:pt-20'
            >
              <h1>- Pascal Delbecq</h1>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <h2 className='text-xl lg:text-xl tracking-tighter leading-relaxed lg:leading-snug f-f-l'>
          Intérieur et Extérieur
        </h2>
        {/* <div className={styles.description}>
          {forfaitDescInter[selectedForfait].map((el, index) => (
            <div key={index} className={styles.description_item}>
              <Image alt='type de service' src={el.url} width={70} height={70} />
              <p>{el.text}</p>
            </div>
          ))}
        </div> */}
        <div className={styles.price}>
          <p>Prix: {priceInterExter}€</p>
        </div>
        <div className={styles.cta}>
          <button onClick={() => goToDiscount('both')}>
            Voir réductions et réserver
          </button>
          <a
            href='https://www.instagram.com/premiumcarwash_fr/'
            target='_blank'
          >
            <button>Voir photos clients</button>
          </a>
        </div>
        <div className='mx-auto px-4 xl:px-0 container pt-10 lg:pt-10'>
          <div className='text-color f-f-l'>
            <h1 className='text-white text-base tracking-tighter leading-relaxed lg:leading-snug f-f-l font-black text-center'>
              "Très bonne prestation, voiture impeccable. Personne agréable et
              sympathique,. Je vous le conseil."
            </h1>
            <a
              href='https://bit.ly/témoignages_pcw'
              className='text-teal text-xl lg:text-xl tracking-tighter leading-relaxed lg:leading-snug f-f-l font-black text-center pt-5 lg:pt-20'
            >
              <h1>- Nico Chanat</h1>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
