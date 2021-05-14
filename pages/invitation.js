import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import SignupBox from 'components/signup/signupBox'
import styles from 'styles/affilié.module.scss'
import { useAuth } from './use-auth'

export default function Affiliate () {
  const auth = useAuth()
  const router = useRouter()
  const [affiliateData, setAffiliateData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    if (
      new URLSearchParams(window.location.search).has('invitedby') &&
      new URLSearchParams(window.location.search).get('invitedby')
    ) {
      const urlParams = new URLSearchParams(window.location.search).get(
        'invitedby'
      )
      auth
        .getAffiliate(urlParams)
        .then(result => {
          if (result.exists) {
            setAffiliateData(result.doc)
          }
          setIsLoading(false)
        })
        .catch(err => console.log('auth.getAffiliate', err))
    } else {
      setIsLoading(false)
    }
  }, [])

  const Signup = () => {
    return (
      <main className={styles.signup}>
        <h1>Il semblerait que le lien que vous ayez reçu ne soit pas le bon</h1>
        <h3>N'hésitez pas à le demander à votre ami !</h3>
        <SignupBox />
      </main>
    )
  }

  const AffiliateInfo = () => {
    return (
      <section className={styles.affiliate}>
        <section className={styles.picture}>
          <img src={affiliateData.photoUrl} alt="Profil"/>
        </section>
        <section className={styles.affiliate_title}>
          <h1>{affiliateData.name} vous invite à faire nettoyer l'intérieur votre voiture à domicile par nos soins</h1>
          <p>Réservez à partir de cette page</p>
          <p>{affiliateData.name.split(" ")[0]} reçoit un  <span>lydia de 10€</span>.</p>
          <p>Vous obtenez une <span>réduction de 10%</span>.</p>
          <p>Ou alors rendez votre voiture indisponible pendant une demi journée dans un garage.</p>
        </section>
        <div className={styles.cta}>
          <button onClick={(e) => goToPrices(e)}>Nettoyer ma voiture</button>
        </div>
        {/* <section className={styles.signup_affiliate}>
          <h2>N'hésitez pas à créer votre propre lien pour gagner de l'argent !</h2>
          <SignupBox />
        </section> */}
      </section>
    )
  }

  const DataToShow = () => {
    return affiliateData ? AffiliateInfo() : Signup()
  }

  const Loader = () => {
    return <main className={styles.loader}>Your app is loading</main>
  }

  const goToPrices = (e) => {
    e.preventDefault();
    router.push({
      pathname: '/tarif-nettoyage-voiture-paris',
      query: { invitedby:  affiliateData.name, phoneNumber: affiliateData.phoneNumber}
    })
  }

  return (
    <main>
      {isLoading ? Loader() : DataToShow()}
    </main>
  )
}
