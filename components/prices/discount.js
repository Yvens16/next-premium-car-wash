import styles from './Discount.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function discount ({ price, goBack, affiliateInfo }) {
  console.log('price:', price)
  return (
    <section className={styles.discount}>
      <div className={styles.go_back} onClick={goBack}>
        <Image src='/svg/back.svg' width={40} height={40} />
      </div>
      <div className={styles.title}>
        <h1>Plus on est de fou, moins c'est chère</h1>
        <h3>
          Invitez des ami(e)s ou des collègues à faire nettoyer leur voiture et
          obtenez ainsi une réduction selon le nombre de personnes sur chaque
          forfait réserver. Dépendamment du modèle de chaque voiture évidemment.
        </h3>
      </div>
      <div className={styles.discounts_items}>
        <div className={styles.item}>
          <div className={styles.logo}>
            <Image src='/svg/person.svg' width={30} height={30} />
          </div>
          <div className={styles.discount_number}>
            <span>Prix initial</span>
          </div>
          <div className={styles.price}>
            <span>Soit {price}€</span>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.logo}>
            <Image src='/svg/goup_of_people.svg' width={30} height={30} />
            <span>x2</span>
          </div>
          <div className={styles.discount_number}>
            <span className={styles.span_discount}>-10%</span>
          </div>
          <div className={styles.price}>
            <span>Soit {price * 0.9}€</span>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.logo}>
            <Image src='/svg/goup_of_people.svg' width={30} height={30} />
            <span>x3</span>
          </div>
          <div className={styles.discount_number}>
            <span className={styles.span_discount}>-15%</span>
          </div>
          <div className={styles.price}>
            <span>Soit {price * 0.85}€</span>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.logo}>
            <Image src='/svg/goup_of_people.svg' width={30} height={30} />
            <span>x4</span>
          </div>
          <div className={styles.discount_number}>
            <span className={styles.span_discount}>-20%</span>
          </div>
          <div className={styles.price}>
            <span>Soit {price * 0.8}€</span>
          </div>
        </div>
      </div>
      <div className={styles.cta}>
        <button>
          <a
            rel="noreferrer"
            target='_blank'
            href={`https://calendly.com/contact-premiumcarwash/reservation-nettoyage-voiture?a4=${affiliateInfo?.name || ''}&a5=${affiliateInfo?.phoneNumber || ''}`}
          >
            Réserver un nettoyage
          </a>
        </button>
      </div>
    </section>
  )
}
