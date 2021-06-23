import Image from 'next/image'
import styles from 'styles/Home.module.scss'
import { useRouter } from 'next/router'

export default function DesktopHome () {
  const router = useRouter()
  const goToPrices = e => {
    e.preventDefault()
    router.push({
      pathname: '/tarif-nettoyage-voiture-paris',
    })
  }
  return (
    <section className={styles.home_hero_desktop}>
      <section className={`${styles.services} ${styles.clean}`}>
        <h1>Nettoyage intérieur de votre voiture à domicile à Paris</h1>
        <button onClick={e => goToPrices(e)}>Nettoyer ma voiture</button>
      </section>
      <section className={styles.ohter_services}>
        <div className={styles.picture_no_dent}>
          <Image
            src='/images/debosselage_2_tiny.jpeg'
            width='308'
            height='150'
            layout='responsive'
            alt='services'
          />
        </div>
        <div className={styles.content}>
          <h2>Débosselage sans peinture à Paris </h2>
          <p>
            Notre équipe de professionnel se déplace à travers Paris et sa
            périphérie afin de soigner votre carrosserie. Que ce soit une rayure
            ou une bosse plus prononcée.
          </p>
          <button>
            <a
              href='https://calendly.com/contact-premiumcarwash/reservation-nettoyage-voiture'
              target='_blank'
            >
              {' '}
              Réservez un Débosselage
            </a>
          </button>
        </div>
      </section>
      <section className={styles.ohter_services}>
        <div className={styles.picture_phares}>
          <Image
            src='/images/tinted_glass_tiny.jpeg'
            width='353'
            height='300'
            layout='responsive'
            alt='services'
          />
        </div>
        <div className={styles.content}>
          <h2>Rénovation de phares à Paris</h2>
          <p>
            Des phares abîmés ou trop opaques sont un danger pour les
            conducteurs, car une visibilité réduite de nuit augmente le risque
            d'accident d'au moins 60 %. Nous intervenons et rendons leur
            splendeur à vos phares en moins de 45 min.
          </p>
          <button>
            <a
              href='https://calendly.com/contact-premiumcarwash/reservation-nettoyage-voiture'
              target='_blank'
            >
              Réservez une Rénovation
            </a>
          </button>
        </div>
      </section>
    </section>
  )
}
