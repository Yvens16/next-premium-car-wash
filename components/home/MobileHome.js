import Image from 'next/image'
import Link from 'next/link'
import styles from 'styles/Home.module.scss'

export default function MobileHome () {
  return (
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
            <h1>Nettoyage intérieur de votre voiture à domicile à Paris</h1>
          </div>
        </a>
      </Link>
      <a
        href='https://calendly.com/contact-premiumcarwash/reservation-nettoyage-voiture'
        target='_blank'
      >
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
      <a
        href='https://calendly.com/contact-premiumcarwash/reservation-nettoyage-voiture'
        target='_blank'
      >
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
  )
}
