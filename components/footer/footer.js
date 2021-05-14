import Image from 'next/image'
import Link from 'next/link'
import styles from './Footer.module.scss'

export default function Footer () {
  return (
    <footer className={styles.footer}>
      <section className={styles.top}>
        <Image
          src='/svg/carwashlogominified.svg'
          width='40'
          height='40'
        ></Image>
        <h2>Préparation et esthétique automobile</h2>
      </section>
      <section className={styles.middle}>
        <Link href='/'>
          <a>Accueil</a>
        </Link>
        <Link href='/contact'>
          <a>Nous Contacter</a>
        </Link>
      </section>
      <section className={styles.bottom}>
        Copyright ® Premium Car Wash 2019 - Tous droits réservés
      </section>
    </footer>
  )
}