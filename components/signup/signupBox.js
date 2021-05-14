import { useState } from 'react'
import Image from 'next/image'
import styles from './Signup.module.scss'
import Snackbar from '@material-ui/core/Snackbar'
import { useAuth } from '../../pages/use-auth'

export default function Signup () {
  const auth = useAuth()
  const [mail, setmail] = useState('')
  const [open, setOpen] = useState(false)
  const [error, setError] = useState(false)
  const [errorMsg, setErrorMsg] = useState(false)
  const [state, setState] = useState({
    vertical: 'top',
    horizontal: 'center'
  })
  const { vertical, horizontal } = state
  const handleClick = (error, code) => {
    setOpen(true)
    if (error) {
      setError(error)
      if ((code = 'auth/invalid-email')) {
        setErrorMsg("L'email entrez n'a pas un bon format")
      }
    }
  }

  const handleClose = (event, reason) => {
    console.log('reason:', reason)
    if (reason === 'clickaway') {
      setOpen(false)
    }
  }
  const createAccount = () => {
    console.log('mail:', mail)
    auth
      .signupWithMagicLink(mail)
      .then(() => handleClick())
      .catch(err => handleClick(true, err))
  }
  return (
    <section className={styles.signup}>
      <Image src='/svg/lydia_blue.svg' width='40' height='40' />
      <div className={styles.title}>
        <h2>Peut-on vous payer ?</h2>
        <p>
          Pour notre lancement, recevez un <span>lydia de 10€</span> pour chaque
          client prenant un nettoyage de sa voiture chez nous. Ainsi qu'un
          réduction de 15% (non cummulable) pour votre propre voiture
        </p>
      </div>
      <div className={styles.input}>
        <input
          autoComplete="email"
          type='email'
          placeholder='Votre email'
          name='email_signup'
          id={styles.email_signup}
          value={mail}
          onChange={e => setmail(e.target.value)}
        />
        <button onClick={createAccount} className={styles.signup_btn}>
          S'inscrire
        </button>
      </div>
      <div className={styles.description}>
        <p>L'argent est transférer sur</p>
        <p>* votre compte lydia</p>
        <p>* sur votre compte bancaire si vous n'avez pas lydia</p>
      </div>
      <Snackbar
        className={error ? styles.snack_error : styles.snack}
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message={
          error
            ? errorMsg
            : "Sur cet appareil, cliquez sur le lien dans l'email et l'ouvrir dans ce navigateur pour terminer votre inscription"
        }
        key={vertical + horizontal}
      />
    </section>
  )
}
