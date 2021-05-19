import dynamic from 'next/dynamic'
import Head from 'next/head'
import isMobile from 'utils/isMobile'
import styles from '../styles/Home.module.scss'
const MobileHome = dynamic(() => import('components/home/MobileHome'))
const DesktopHome = dynamic(() => import('components/home/DesktopHome'))
// const Signup = dynamic(() => import('components/signup/signupBox'))
import Signup from 'components/signup/signupBox'

export default function Home ({ isMobile }) {
  // const isMobileBrowser = isMobile();
  return (
    <div className={styles.container}>
      <Head>
        // TODO: Rewrite the title in a coopywritting way to entice peopple to
        click on the link
        <title>Nettoyage d'intérieur de voiture à Paris</title>
        <meta
          name='viewport'
          content='initial-scale=1.0, width=device-width initial-scale=1, maximum-scale=1, user-scalable=0'
        />
        <meta
          name='description'
          content="Le nettoyage de l'intérieur de votre voiture à Paris"
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.home}>
        <div className={styles.home_hero}>
          {/* {isMobile ? <MobileHome/> : <DesktopHome/>} */}
          <MobileHome/>
          <DesktopHome/>
          <Signup />
        </div>
      </main>
    </div>
  )
}