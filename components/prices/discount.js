import styles from './Discount.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function discount ({
  priceInter,
  priceExter,
  priceInterExter,
  goBack,
  affiliateInfo,
  logBoughtEvent,
  whichDiscountPrice
}) {
  let price
  switch (whichDiscountPrice) {
    case 'inter':
      price = priceInter
      break
    case 'exter':
      price = priceExter
      break
    case 'both':
      price = priceInterExter
      break
  }
  return (
    <section className={styles.discount}>
      <div className={styles.go_back} onClick={goBack}>
        <Image
          alt='boutton retour'
          src='/svg/back.svg'
          width={40}
          height={40}
        />
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
            <Image alt='person' src='/svg/person.svg' width={30} height={30} />
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
            <Image
              alt='groupe de personne'
              src='/svg/goup_of_people.svg'
              width={30}
              height={30}
            />
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
            <Image
              alt='groupe de personne'
              src='/svg/goup_of_people.svg'
              width={30}
              height={30}
            />
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
            <Image
              alt='groupe de personne'
              src='/svg/goup_of_people.svg'
              width={30}
              height={30}
            />
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
        <a
          // rel="noreferrer"
          // target='_blank'
          href={`https://calendly.com/contact-premiumcarwash/reservation-nettoyage-voiture?a3=${affiliateInfo?.name ||
            ''}&a4=+33${affiliateInfo?.phoneNumber || ''}`}
        >
          <button onClick={logBoughtEvent}>Réserver un nettoyage</button>
        </a>
      </div>
    </section>
  )
}
