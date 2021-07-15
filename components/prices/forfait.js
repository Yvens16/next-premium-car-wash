import { useEffect } from 'react'
import 'tailwindcss/tailwind.css'
import styles from './Forfait.module.scss'
import Image from 'next/image'

const forfaitDescInter = {
  bronze: [
    { text: 'Nettoyage vitres intérieures', url: '/images/car_windows.jpeg' },
    {
      text: 'Aspiration "Express" habitacle et coffre',
      url: '/images/car_vacuuming.jpeg'
    },
    {
      text: 'Dépoussiérage des plastiques intérieurs',
      url: '/images/car_interior.jpeg'
    }
  ],
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
  bronze: [
    { text: 'Lavage carrosserie' },
    {
      text: 'Nettoyage jantes'
    },
    {
      text: 'Nettoyage vitres extérieures'
    }
  ],
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
  scrollRef
}) {
  return (
    <section className={styles.forfait}>
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
          Intervention à domicile
        </h3>
      </div>
      <div className={styles.select_forfait}>
        <div
          className={`${styles.selector} ${
            selectedForfait === 'bronze' ? styles.selected : ''
          }`}
          onClick={() => selectForfait('bronze')}
        >
          Forfait Bronze
        </div>
        <div
          className={`${styles.selector} ${
            selectedForfait === 'argent' ? styles.selected : ''
          }`}
          onClick={() => selectForfait('argent')}
        >
          Forfait Argent
        </div>
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
          <a href="https://www.instagram.com/premiumcarwash_fr/" target='_blank'>
            <button>
              Voir photos clients
            </button>
          </a>
        </div>
        <div className='mx-auto px-4 xl:px-0 container pt-10 lg:pt-10'>
          <div className='text-color f-f-l'>
            <h1 className='text-red-600 text-base lg:text-xl tracking-tighter leading-relaxed lg:leading-snug f-f-l font-black text-center'>
              "Prestation réalisée à domicile, véhicule impeccable et l'odeur
              tout simplement agréable. Excellent accueil. Je recommande.""
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
          <a href="https://www.instagram.com/premiumcarwash_fr/" target='_blank'>
            <button>
              Voir photos clients
            </button>
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
          <a href="https://www.instagram.com/premiumcarwash_fr/" target='_blank'>
            <button>
              Voir photos clients
            </button>
          </a>
        </div>
        <div className='mx-auto px-4 xl:px-0 container pt-10 lg:pt-10'>
          <div className='text-color f-f-l'>
            <h1 className='text-gray-600 text-base tracking-tighter leading-relaxed lg:leading-snug f-f-l font-black text-center'>
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
