import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import { useAuth } from '../firebase/use-auth'
import Head from 'next/head'
import styles from '../styles/Affiliation.module.scss'
import Image from 'next/image'
import Snackbar from '@material-ui/core/Snackbar'

/*
TODO: Logique to sign up, with email
  - Add a photo
  - Name, forname, email
  - Phone number
  /invitation?invitedby=yvensbelaston_1MxE
*/
// https://stackoverflow.com/users/3732271/akrun
export default function Affiliation () {
  const auth = useAuth()
  const [{ selectedFile, selectedFileUrl }, setSelectedFile] = useState({
    selectedFile: null,
    selectedFileUrl: null
  })
  const [name, setName] = useState('')
  const [affiliateId, setAffiliateId] = useState('')
  const [phone, setPhone] = useState('')
  const [affiliateInfo, setAffiliateInfo] = useState(null)
  const [state, setState] = useState({
    vertical: 'top',
    horizontal: 'center'
  })
  const [open, setOpen] = useState(false)
  const [error, setError] = useState(false)
  const [msg, setMsg] = useState('')
  const [errorMsg, setErrorMsg] = useState(false)
  const { vertical, horizontal } = state
  const onFileChange = e => {
    setSelectedFile({
      selectedFile: e.target.files[0],
      selectedFileUrl: URL.createObjectURL(e.target.files[0])
    })
  }
  const createAffiliateId = () => {
    setAffiliateId(`${name.replace(/ /g, '').toLowerCase()}_${nanoid(4)}`)
    console.log(
      'Loose Focus',
      `${name.replace(/ /g, '').toLowerCase()}_${nanoid(4)}`
    )
  }

  const createAccount = () => {
    return auth
      .finishSignup_inWithMagicLink(name, phone, affiliateId)
      .then(res => {
        return auth.uploadProfilePictureToStorage(
          selectedFile,
          res.user,
          res.affiliateId
        )
      })
      .then(() => {
        showCreatedAccount()
      })
      .catch(err => console.log('createAccount', err))
  }

  const showCreatedAccount = () => {
    auth.getAffiliate(affiliateId).then(result => {
      if (result.exists) {
        setAffiliateInfo(result.doc)
      }
    })
  }

  const showAccountCreation = () => {
    return (
      <section className={styles.affiliation}>
        <section className={styles.with_lydia}>
          <div className='title'>
            <h1>Inscrivez-vous en 3 clics</h1>
          </div>
          <div className={styles.form}>
            <div className={styles.photo}>
              <label htmlFor='file' className={styles.photo_container}>
                <input
                  type='file'
                  name='file'
                  id='file'
                  accept='.png, .jpg, .jpeg'
                  onChange={onFileChange}
                ></input>
                {selectedFile === null ? (
                  <Image src='/svg/plus.svg' width='40' height='40' />
                ) : (
                  <img
                    className={styles.user_photo}
                    src={selectedFileUrl}
                    width='150'
                    height='150'
                  />
                )}
              </label>
              <h3>Cliquer sur l'icône pour ajouter une photo</h3>
            </div>
            <div className={styles.inputs}>
              <input
                value={name}
                onBlur={() => createAffiliateId()}
                onChange={e => setName(e.target.value)}
                placeholder='Prénom Nom'
                type='text'
                name='name'
                id='name'
              />
              {/* <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' type='email' name='email' id='email' /> */}
              <input
                value={phone}
                onChange={e => setPhone(e.target.value)}
                placeholder='06 24 26 34 78'
                type='tel'
                name='tel'
                id='tel'
              />
              <button
                disabled={
                  phone.replace(/ /g, '').length < 10 || name.length < 4
                }
                className={styles.create_account}
                onClick={() => createAccount()}
              >
                {' '}
                <span>Créer mon compte</span>{' '}
                <Image src='/svg/lydia.svg' width='25' height='25'></Image>
              </button>
            </div>
          </div>
        </section>
      </section>
    )
  }

  const copyToClipboard = () => {
    var copyText = document.getElementById('clipboard')

    copyText.select()
    copyText.setSelectionRange(0, 99999) /* For mobile devices */

    document.execCommand('copy')
    setMsg('Votre lien à été copié')
    setOpen(true)
  }

  const shareLink = () => {
    if (navigator.share) {
      navigator
        .share({
          title:
            'Si tu veux faire nettoyer ta voiture et me faire gagner 10€ ahah',
          url:
            process.env.NODE_ENV === 'development'
              ? `http://localhost:3000/invitation?invitedby=${affiliateId}`
              : `https://premiumcarwash.fr/invitation?invitedby=${affiliateId}`
        })
        .then(() => {
          console.log('Thanks for shraing')
        })
        .catch(console.error)
    }
  }

  const accountCreated = () => {
    console.log(auth.user)
    return (
      <section className={styles.account_created}>
        <div className={styles.picture_affiliate}>
          <img src={affiliateInfo?.photoUrl} alt='profil' />
        </div>
        <div className={styles.description}>
          <h1>
            Présentez PremiumCarWash à votre famille, vos amis et vos followers{' '}
          </h1>
          <p>
            Vous recevrez un lydia de 10€ ainsi qu'une réduction de 15% sur
            votre prochaine réservation
          </p>
          <p>Vos ami(e)s recevrons une réduction de 10%</p>
        </div>
        <div className={styles.affiliate_link}>
          <input
            type='text'
            defaultValue={
              process.env.NODE_ENV === 'development'
                ? `http://localhost:3000/invitation?invitedby=${affiliateId}`
                : `https://premiumcarwash.fr/invitation?invitedby=${affiliateId}`
            }
            id='clipboard'
          />
          <button onClick={copyToClipboard}>Copier mon lien</button>
          {navigator?.share ? (
            <button onClick={shareLink}>Partager mon lien</button>
          ) : null}
        </div>
      </section>
    )
  }
  const handleClose = (event, reason) => {
    console.log('reason:', reason)
    if (reason === 'clickaway') {
      setOpen(false)
    }
  }
  return (
    <main>
      <Head>
        <title>
          Nettoyage d'intérieur de voiture à Paris au même prix que les pro
        </title>
        <meta
          name='viewport'
          content='initial-scale=1.0, width=device-width initial-scale=1, maximum-scale=1, user-scalable=0'
        />
        <meta
          name='description'
          content="Gagnez 10€ à chaque fois que quelqu'un réserve à partir de votre lien"
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {affiliateInfo ? accountCreated() : showAccountCreation()}{' '}
      <Snackbar
        className={error ? styles.snack_error : styles.snack}
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message={error ? errorMsg : msg}
        key={vertical + horizontal}
      />
    </main>
  )
}

// Please fill out this form, and we'll send you a welcome email so you can verify your email address and sign in.
{
  /* <div className={styles.content}>
          <h1>Peut-on vous payer ?</h1>
          <p>
            Pour notre lancement, recevez un <span>lydia de 10€</span> pour
            chaque client prenant un nettoyage de sa voiture chez nous. Ainsi
            qu'un réduction de 15% (non cummulable) pour votre propre voiture
          </p>
        </div>
        <div className={styles.ctas}>
          <button className={styles.has_lydia}>
            {' '}
            <span>J'ai déja Lydia</span>{' '}
            <Image src='/svg/lydia.svg' width='25' height='25'></Image>
          </button>
          <button className={styles.has_not_lydia}>
            {' '}
            <span>Je n'ai pas Lydia</span>{' '}
            <Image src='/svg/lydia_blue.svg' width='25' height='25'></Image>
          </button>
        </div> */
}

{
  /* <div className={styles.title}>
        <h1>Et bien vous gagnerez quand même de l'argent !</h1>
        <p>
          Vous recevez un lien de la part de  <span>lydia</span> par sms et/ou email pour vous
          permettre de récupéré votre argent en 2 clics.
        </p>
      </div> */
}
