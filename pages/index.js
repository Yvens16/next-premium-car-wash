import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import Image from 'next/image'
import Signup from 'components/signup/signupBox'

export default function Home () {
  console.log('Deploy number 1')
  return (
    <div className={styles.container}>
      <Head>
        // TODO: Rewrite the title in a coopywritting way to entice peopple to
        click on the link
        <title>Nettoyage d'intérieur de voiture à Paris</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width initial-scale=1, maximum-scale=1, user-scalable=0'/>
        <meta
          name='description'
          content="Le nettoyage de l'intérieur de votre voiture à Paris"
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.home}>
        <div className={styles.home_hero}>
          <section className={styles.home_hero_mobile}>
            <div className={styles.logo}>
              <Image
                src='/svg/carwashlogominified.svg'
                width='50'
                height='50'
                alt='logo'
                priority={true}
              />
            </div>
            <Link href='/tarif-nettoyage-voiture-paris'>
              <a>
                <div className={`${styles.services} ${styles.clean}`}>
                  <Image
                    src='/images/car_interior_tiny.jpeg'
                    width='353'
                    height='300'
                    layout='responsive'
                    alt='Nettoyage de voiture'
                    priority={true}
                  />
                  <h1>
                    Nettoyage intérieur de votre voiture à domicile à Paris
                  </h1>
                </div>
              </a>
            </Link>
              <a href='https://calendly.com/contact-premiumcarwash/reservation-nettoyage-voiture' target='_blank'>
                <div className={`${styles.services} ${styles.no_dent}`}>
                <Image
                    src='/images/debosselage_2_tiny.jpeg'
                    width='308'
                    height='150'
                    layout='responsive'
                    alt='débosselage sans peinture'
                    priority={true}
                  />
                  <h2>Débosselage sans peinture à Paris </h2>
                </div>
              </a>
              <a href='https://calendly.com/contact-premiumcarwash/reservation-nettoyage-voiture' target='_blank'>
                <div className={`${styles.services} ${styles.phares}`}>
                <Image
                    src='/images/tinted_glass_small _tiny.jpeg'
                    width='308'
                    height='150'
                    layout='responsive'
                    alt='rénovation de phares'
                    priority={true}
                  />
                  <h2>Rénovation de phares à Paris</h2>
                </div>
              </a>
          </section>
          <section className={styles.home_hero_desktop}>
            <section className={`${styles.services} ${styles.clean}`}>
              <h1>Nettoyage intérieur de votre voiture à domicile à Paris</h1>
              <button>Nettoyer ma voiture</button>
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
                  périphérie afin de soigner votre carrosserie. Que ce soit une
                  rayure ou une bosse plus prononcée.
                </p>
                <button> Réservez un Débosselage</button>
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
                  conducteurs, car une visibilité réduite de nuit augmente le
                  risque d'accident d'au moins 60 %. Nous intervenons et rendons
                  leur splendeur à vos phares en moins de 45 min.
                </p>
                <button> Réservez une Rénovation</button>
              </div>
            </section>
          </section>
          <Signup/>
        </div>
      </main>
    </div>
  )
}
