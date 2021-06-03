import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './Signup.module.scss'
const Snackbar = dynamic(() =>
import('@material-ui/core/Snackbar').then(Snackbar => Snackbar)
)
import { useAuth } from '../../firebase/use-auth'
import { useRouter } from 'next/router'
import Loader from 'react-loader-spinner'
import Spinner from 'react-bootstrap/Spinner'

export default function Signup () {
  const auth = useAuth()
  const router = useRouter()
  const [mail, setmail] = useState('')
  const [open, setOpen] = useState(false)
  const [error, setError] = useState(false)
  const [errorMsg, setErrorMsg] = useState(false)
  const [state, setState] = useState({
    vertical: 'top',
    horizontal: 'center'
  })
  const { vertical, horizontal } = state
  const [showSpinner, setshowSpinner] = useState(false)
  const checkEmailError = (error, code) => {
    setOpen(true)
    if (error) {
      setError(error)
      if ((code = 'auth/invalid-email')) {
        setErrorMsg("L'email entré n'a pas un bon format")
      }
    } else {
      setmail('')
    }
  }

  const handleClose = (event, reason) => {
    console.log('reason:', reason)
    if (reason === 'clickaway') {
      setOpen(false)
    }
  }
  const createAccount = () => {
    auth
      .signupWithMagicLink(mail)
      .then(() => {
        fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/addContactTomailchimp`, {
          method: 'POST',
          body: JSON.stringify({ mail })
        }).then(res => {
          return res.json().then(console.log('ACCOUNT ADDED TO MAILCHIMP'))
        })
      })
      .then(() => {
        checkEmailError()
      })
      .catch(err => checkEmailError(true, err))
  }

  const sendEmailToMailchimp = () => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/addContactTomailchimp`, {
      method: 'POST',
      body: JSON.stringify({ mail })
    })
    .then(res => {
      return res.json().then(console.log('ACCOUNT ADDED TO MAILCHIMP'))
    })
  }

  const createAccountv2 = () => {
    setshowSpinner(true)
    auth
      .signInAnonimously()
      .then(() => {
        sendEmailToMailchimp();
      })
      .then(() => {
        checkEmailError()
        setshowSpinner(false)
      })
      .catch(err => {
        setshowSpinner(false)
        checkEmailError(true, err)
      })
  }

  useEffect(() => {
    if (auth.user && router.pathname === 'remerciements') {
      router.push({ pathname: '/inscription-affiliation' })
    }
  }, [auth.user])

  return (
    <section className={styles.signup}>
      <div className={styles.logos}>
        <Image
          alt='logo lydia'
          src='/svg/lydia_blue.svg'
          width='40'
          height='40'
          laoding='lazy'
        />
        <Image
          src='/svg/carwashlogominified.svg'
          width='40'
          height='40'
          loading='lazy'
          alt='logo'
        />
      </div>
      <div className={styles.title}>
        <h2>Et si vous étiez payé vous aussi ?</h2>
        <p>
          Pour notre lancement, recevez un <span>lydia de 10€</span> pour chaque
          client prenant un nettoyage de sa voiture chez nous. Ainsi qu'une
          réduction de 15% (non cummulable) pour votre propre voiture
        </p>
      </div>
      <div className={styles.input}>
        <input
          autoComplete='email'
          type='email'
          placeholder='Votre email'
          name='email_signup'
          id={styles.email_signup}
          value={mail}
          onChange={e => setmail(e.target.value)}
        />
        <button onClick={createAccountv2} className={styles.signup_btn}>
          S'inscrire
        </button>
      </div>
      <div className={styles.description}>
        <p>L'argent est transféré sur</p>
        <p>* votre compte lydia</p>
        <p>* sur votre compte bancaire si vous n'avez pas lydia</p>
      </div>
      {showSpinner ? (
        <div className='loader_yve'>
          {/* <Loader
            type='Puff'
            color='#00BFFF'
            height={100}
            width={100}
            visible={showSpinner}
          /> */}
          {/* <Spinner animation="border" variant="primary" /> */}
          <Spinner animation="grow" />
          <style jsx>{`
            .loader_yve {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
            }
          `}</style>
        </div>
      ) : null}
      <Snackbar
        className={error ? styles.snack_error : styles.snack}
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message={
          error
            ? errorMsg
            : 'Vérifiez vos emails pour terminer votre inscription. Vous recevrez nos dernières chaque mois pour que vous puissiez gagner un maximum !'
        }
        key={vertical + horizontal}
      />
    </section>
  )
}
