import React from 'react'
import Image from 'next/image'
import styles from './CarChoice.module.scss'

export default function CarChoice({ chooseCar }) {
  return (
    <section className={styles.choice}>
      <div className={styles.title}>
        <h1>Nos Tarifs</h1>
      </div>
      <div className={styles.subtitle}>
        <p>Quel est la taillle de votre voiture ?</p>
      </div>
      <div className={styles.car_types}>
        <div className={styles.car} onClick={() => chooseCar('citadine')}>
          <Image src='/images/citadine.png' width='150' height='100'/>
          <p className={styles.car_name}>Petite citadine</p>
        </div>
        <div className={styles.car} onClick={() => chooseCar('berline')}>
          <Image src='/images/berline_compact.png' width='200' height='150'/>
          <p className={styles.car_name}>Berline & Compact</p>
        </div>
        <div className={styles.car} onClick={() => chooseCar('routiere')}>
          <Image src='/images/petite_routiere.png' width='200' height='150'/>
          <p className={styles.car_name}>Routières & petit SUV</p>
        </div>
        <div className={styles.car} onClick={() => chooseCar('suv')}>
          <Image src='/images/grosse_routiere.png' width='200' height='150'/>
          <p className={styles.car_name}>Grand SUV</p>
        </div>
      </div>
    </section>
  )
}