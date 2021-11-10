import React from 'react'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { firebaseAnalytics } from '../firebase/firebase'
import Head from 'next/head'
import CarChoice from '../components/prices/CarChoice'
import Forfaits from '../components/prices/forfait'
import Discount from '../components/prices/discount'
import prices from '../utils/pricev2.json'

export default function Tarifs () {
  const chooseCarType = carType => {
    if (process.env.NODE_ENV === 'production') {
      firebaseAnalytics().logEvent('select_car_type', { name: carType })
    }
  }

  const logBoughtEvent = () => {
    if (process.env.NODE_ENV === 'production') {
      firebaseAnalytics().logEvent('select_forfait_to_be_bought', {
        name: forfait
      })
    }
  }

  return (
    <main className='mx-auto container py-12 px-4 md:px-6 lg:px-12 xl:px-20'>
      <Head>
        <title>Vous aussi profitez des tarifs de pro</title>
        <meta
          name='description'
          content='Choisissez votre modèle de voiture pour avoir le prix'
        />
      </Head>
      <div className='flex justify-center items-center'>
        <div className='mt-14 grid-cols-1 grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-6 2xl:gap-x-20 2xl:flex 2xl:flex-wrap justify-between gap-y-20'>
          <Link href='/voitures/citadine'>
            <div className='group flex jusitfy-center flex-col cursor-pointer'>
              <div className='relative sm:w-96 h-80 sm:h-96 flex flex-shrink-0 slider'>
                <img
                  className='w-full h-full object-center object-cover cld-responsive'
                  src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_SMARTLOOK_CLOUDINARY_NAME}/image/upload/q_auto,f_auto,fl_progressive,w_auto,c_scale/v1636468820/Premium%20car%20Wash/IMG_0881.jpg`}
                  alt='watch-3'
                />
              </div>
              <div className='mt-6 flex justify-between'>
                <div>
                  <p className='text-2xl font-semibold leading-6 text-gray-800'>
                    Petite Citadine
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <Link href='/voitures/berline'>
            <div className='group flex jusitfy-center flex-col cursor-pointer'>
              <div className='flex jusitfy-center flex-col cursor-pointer'>
                <div className='relative sm:w-96 h-80 sm:h-96 flex flex-shrink-0 slider'>
                  <img
                    className='w-full h-full object-center object-cover cld-responsive'
                    src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_SMARTLOOK_CLOUDINARY_NAME}/image/upload/q_auto,f_auto,fl_progressive,w_auto,c_scale/v1636468820/Premium%20car%20Wash/IMG_1683.jpg`}
                    alt='watch-3'
                  />
                </div>
                <div className='mt-6 flex justify-between'>
                  <div>
                    <p className='text-2xl font-semibold leading-6 text-gray-800'>
                      Berline & Compact
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link href='/voitures/routiere'>
            <div className='group flex jusitfy-center flex-col cursor-pointer'>
              <div className='flex jusitfy-center flex-col cursor-pointer'>
                <div className='relative sm:w-96 h-80 sm:h-96 flex flex-shrink-0 slider'>
                  <img
                    className='w-full h-full object-center object-cover cld-responsive'
                    src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_SMARTLOOK_CLOUDINARY_NAME}/image/upload/q_auto,f_auto,fl_progressive,w_auto,c_scale/v1636468820/Premium%20car%20Wash/IMG_2026.jpg`}
                    alt='watch-3'
                  />
                </div>
                <div className='mt-6 flex justify-between'>
                  <div>
                    <p className='text-2xl font-semibold leading-6 text-gray-800'>
                      Routière
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link href='/voitures/suv'>
            <div className='flex jusitfy-center flex-col cursor-pointer'>
              <div className='relative sm:w-96 h-80 sm:h-96 flex flex-shrink-0 slider'>
                <img
                  className='w-full h-full object-center object-cover cld-responsive'
                  src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_SMARTLOOK_CLOUDINARY_NAME}/image/upload/q_auto,f_auto,fl_progressive,w_auto,c_scale/v1636468823/Premium%20car%20Wash/IMG_2099.jpg`}
                  alt='watch-3'
                />
              </div>
              <div className='mt-6 flex justify-between'>
                <div>
                  <p className='text-2xl font-semibold leading-6 text-gray-800'>
                    SUV
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <Link href='/voitures/familiale'>
            <div className='flex jusitfy-center flex-col cursor-pointer'>
              <div className='relative sm:w-96 h-80 sm:h-96 flex flex-shrink-0 slider'>
                <img
                  className='w-full h-full object-center object-cover cld-responsive'
                  src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_SMARTLOOK_CLOUDINARY_NAME}/image/upload/q_auto,f_auto,fl_progressive,w_auto,c_scale/v1636470809/Premium%20car%20Wash/peugeot_5008.jpg`}
                  alt='watch-4'
                />
              </div>
              <div className='mt-6 flex justify-start items-start'>
                <p className='text-2xl font-semibold leading-6 text-gray-800'>
                  Familiale 7 places
                </p>
              </div>
              <div className='mt-6 flex justify-between w-full'>
                <div></div>
              </div>
            </div>
          </Link>
          <Link href='/voitures/van'>
            <div className='flex jusitfy-center flex-col cursor-pointer'>
              <div className='relative sm:w-96 h-80 sm:h-96 flex flex-shrink-0 slider'>
                <img
                  className='w-full h-full object-center object-cover cld-responsive'
                  src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_SMARTLOOK_CLOUDINARY_NAME}/image/upload/q_auto,f_auto,fl_progressive,w_auto,c_scale/v1636469957/Premium%20car%20Wash/van.jpg`}
                  alt='watch-5'
                />
              </div>
              <div className='mt-6 flex justify-start items-start'>
                <p className='text-2xl font-semibold leading-6 text-gray-800'>
                  Van
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  )
}
