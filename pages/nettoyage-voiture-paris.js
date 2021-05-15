import Image from 'next/image'
import styles from '../styles/NettoyageBlogPost.module.scss'
import Link from 'next/link'
import Head from 'next/head'

export default function NettoyageVoitureParis () {
  return (
    <main>
      <Head>
        <title>
          Nettoyage d'intérieur de voiture à Paris au même prix que les pro
        </title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width initial-scale=1, maximum-scale=1, user-scalable=0'/>
        <meta
          name='description'
          content='Profitez des réductions des professionnels vous aussi'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section className={styles.nettoyage}>
        <div className={styles.hero}>
          <div className={styles.title}>
            <h1>Nettoyage intérieur de voiture dans Paris et sa banlieu</h1>
            <h2>À domicile ou au bureau</h2>
            <button>
              <Link href='/tarifs'>
                <a>
              Nettoyer sa voiture

                </a>
              </Link>
            </button>
          </div>
        </div>
        <div className={styles.post}>
          <section className={styles.part}>
            <h2>Pourquoi nettoyer sa voiture à domicile ou au bureau ? </h2>
            <p>
              {' '}
              Lorsque l'on travaille à Paris, il n'est pas facile d'aller
              attendre une heure dans un garage pour faire nettoyer sa voiture.{' '}
            </p>
            <p>
              Pour ceux qui viennent de loin et qui passent beaucoup de temps
              sur l'autoroute avoir un intérieur propre aura un effet positif
              sur votre morale.
            </p>
            <p>
              Pour ceux qui travaillent énormément et qui veulent se reposer le
              weekend.{' '}
            </p>
            <picture>
              <source
                srcSet='/images/parking_small.jpeg 640w,
                /images/parking_medium.jpeg 1920w,'
                sizes='(min-width: 1280px) 500px,
                (min-width: 768px) 80vw,
                90vw'
              />
              <img src='/images/parking_medium.jpeg' alt='Parking lot'></img>
            </picture>
          </section>
          <section className={styles.part}>
            <h2>Un gros gain de temps</h2>
            <p>
              Le lavage de l'extérieur peut prendre quelques minutes au rouleau
              dans un centre de lavage à Paris, par contre le nettoyage de
              l'intérieur de la voiture est un tâche ardu est compliqué pour un
              résultat passable, il faut dire... D'ou le besoin d'un nettoyeurs
              professionnel.
            </p>
          </section>
          <section className={styles.part}>
            <h2>Nos équipes de nettoyeurs </h2>
            <p>
              Nos équipes de nettoyeurs automobile reçoivent régulièrement des
              formations afin d'assurer une qualité irréprochable sur le
              nettoyage de votre véhicule, Notre équipe est basé au coeur de la
              ville de Paris ce qui lui permet d'intervenir rapidement.
            </p>
          </section>
          <section className={styles.part}>
            <h2>Désinfection de l'intérieur de votre voiture à Paris</h2>
            <p>
              {' '}
              Sur demande, nous désinfectons l'habitacle de votre voiture afin
              d'éliminer toutes bactéries (efficace Covid-19). Afin de
              rafraîchir l'intérieur de votre voiture, éliminer les odeurs
              tenace ou nettoyer l'intérieur des grilles d'aérations.{' '}
            </p>
            <picture>
              <source
                srcSet='/images/injector_extractor_tiny.jpeg 640w,
                /images/injector_extractor.jpeg 1920w,'
                sizes='(min-width: 1280px) 1200px,
                (min-width: 768px) 100vw,
                60vw'
              />
              <img
                src='/images/injector_extractor_tiny.jpeg'
                alt='Parking lot'
              ></img>
            </picture>
          </section>
          <div className={styles.cta_bottom}>
            <button>
              <Link href='/tarifs'>
                <a>
              Nettoyer sa voiture

                </a>
              </Link>
            </button>
          </div>
          <section className={styles.part}>
            <h2>Pour acheter ou revendre votre véhicule d'occasion à Paris</h2>
            <p>
              {' '}
              Paris, notre capital est connu pour avoir l'un des marchés de la
              voiture d'occasion le plus compétitif de France. Alors il serait
              dommage de manquer un vente de votre véhicule parce qu'il n'était
              pas présentable. Notre offre "je revend mon auto est la pour ça".{' '}
            </p>
          </section>
          <section className={styles.part}>
            <h2>Les bienfaits d'un nettoyage régulier </h2>
            <p>
              Nous savons que tous va très vite à Paris. Le Parisien est
              toujours très occupé et c'est la, la beauté de notre chère
              capital. Et ce rythme de vie peut nous mené à délaisser certaines
              choses comme notre intérieur de voiture. Notre équipe d'expert
              vous recommande de nettoyer l'intérieure votre voiture au moins
              une fois par semaine. Et de la faire nettoyer et désinfecter par
              un pro au moins 3 fois par an.{' '}
            </p>
          </section>
          <div className={styles.cta_bottom}>
            <button>
              <Link href='/tarifs'>
                <a>
              Nettoyer sa voiture

                </a>
              </Link>
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
