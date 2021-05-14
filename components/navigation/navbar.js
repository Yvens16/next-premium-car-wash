import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Navbar.module.scss'

export default function Navbar () {
  const [displaySocial, setDisplaySocial] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const shareRef = useRef()
  const router = useRouter()
  const handleClick = e => {
    if (shareRef.current.contains(e.target)) {
      return
    }
    setDisplaySocial(false)
  }
  useEffect(() => {
    document.addEventListener('mousedown', handleClick)
    const handleRouteChange = (url, { shallow }) => {
      setShowMobileMenu(false)
    }

    router.events.on('routeChangeStart', handleRouteChange)
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
      document.removeEventListener('mousedown', handleClick)
    }
  }, [])

  return (
    <nav className={styles.nav}>
      <section className={`${showMobileMenu ? styles.no_show : styles.mobile}`}>
        <div
          className='mobile-menu'
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <Image src='/svg/menu.svg' width='25' height='25' alt='menu'/>
        </div>
        <div
          className={styles.share}
          onClick={() => setDisplaySocial(!displaySocial)}
          ref={shareRef}
        >
          <Image src='/svg/share.svg' width='25' height='25' alt='partager sur les réseaux' />
          <div className={displaySocial ? styles.show : styles.hide}>
            <Link href='/'>
              <a>
                <Image
                  src='/svg/instagram_white_svg_turquoise.svg'
                  width='30'
                  height='30'
                  alt='instagram'
                />
              </a>
            </Link>
            <Link href='/'>
              <a>
                <Image
                  src='/svg/facebook_svg_turquoise.svg'
                  width='30'
                  height='30'
                  alt='facebook'
                />
              </a>
            </Link>
          </div>
        </div>
        <Link href='tel:+33627269473'>
          <a>
            <div className='mobile-phone'>
              <Image src='/svg/phone-call.svg' width='25' height='25' />
            </div>
          </a>
        </Link>
        <Link href='/tarif-nettoyage-voiture-paris'>
          <a>
            <div className='mobile-price'>
              <Image src='/svg/euro.svg' width='25' height='25' alt='tarifs' />
            </div>
          </a>
        </Link>
      </section>
      <div
        className={`${showMobileMenu ? styles.mobile_menu : styles.desktop}`}
      >
        <div className='logo'>
          <Link href='/' className={showMobileMenu ? styles.mobile_top : ''}>
            <a>
              <Image
                src='/svg/carwashlogominified.svg'
                width='50'
                height='50'
                alt='logo'
              />
            </a>
          </Link>
        </div>
        <div className={styles.links}>
          <div className='accueil'>
            <Link href='/'>
              <a>Accueil</a>
            </Link>
          </div>
          <div className='contact'>
            <Link href='/contact'>
              <a>Contact</a>
            </Link>
          </div>
          {/* <div className='affiliation'>
            <Link href='/'>
              <a>Affiliation</a>
            </Link>
          </div> */}
          <Link href='/tarif-nettoyage-voiture-paris'>
            <a>
              <div className={styles.tarifs}>Nettoyer ma voiture</div>
            </a>
          </Link>
          {showMobileMenu ? (
            <Image
              src='/svg/close.svg'
              width='25'
              height='25'
              alt='fermer'
              onClick={() => setShowMobileMenu(false)}
              className={styles.cross}
            />
          ) : null}
          {/* <div className={styles.socials}>
            <Image src='/svg/instagram_white_svg_turquoise.svg' width='30' height='30'/>
            <Image src='/svg/facebook_svg_turquoise.svg' width='30' height='30'/>
            <Image src='/svg/instagram_white_svg_turquoise.svg' width='30' height='30'/>
          </div> */}
        </div>
      </div>
      <div />
    </nav>
  )
}