import React from 'react'
import Image from 'next/image'
import styles from './CarChoice.module.scss'
import { buildUrl } from 'cloudinary-build-url';

export default function CarChoice({ chooseCar }) {
  const citadine = buildUrl('Premium car Wash/citadine', {
    cloud: {
      cloudName: process.env.NEXT_PUBLIC_SMARTLOOK_CLOUDINARY_NAME,
    },
    transformations: {
      resize: {
        type: 'scale',
        width: 150,
        height: 100,
      }
    }
  });
  const berline = buildUrl('Premium car Wash/berline_compact', {
    cloud: {
      cloudName: process.env.NEXT_PUBLIC_SMARTLOOK_CLOUDINARY_NAME,
    },
    transformations: {
      resize: {
        type: 'scale',
        width: 200,
        height: 150,
      }
    }
  });
  const routiere = buildUrl('Premium car Wash/petite_routiere', {
    cloud: {
      cloudName: process.env.NEXT_PUBLIC_SMARTLOOK_CLOUDINARY_NAME,
    },
    transformations: {
      resize: {
        type: 'scale',
        width: 200,
        height: 150,
      }
    }
  });
  const suv = buildUrl('Premium car Wash/grosse_routiere', {
    cloud: {
      cloudName: process.env.NEXT_PUBLIC_SMARTLOOK_CLOUDINARY_NAME,
    },
    transformations: {
      resize: {
        type: 'scale',
        width: 200,
        height: 150,
      }
    }
  });
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
          <Image alt='Citadine' src={citadine} width='150' height='100'/>
          <p className={styles.car_name}>Petite citadine</p>
        </div>
        <div className={styles.car} onClick={() => chooseCar('berline')}>
          <Image alt='Berline et compact' src={berline} width='200' height='150'/>
          <p className={styles.car_name}>Berline & Compact</p>
        </div>
        <div className={styles.car} onClick={() => chooseCar('routiere')}>
          <Image alt='Routière' src={routiere} width='200' height='150'/>
          <p className={styles.car_name}>Routières & petit SUV</p>
        </div>
        <div className={styles.car} onClick={() => chooseCar('suv')}>
          <Image alt='SUV' src={suv} width='200' height='150'/>
          <p className={styles.car_name}>Grand SUV</p>
        </div>
      </div>
    </section>
  )
}