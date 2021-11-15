import dynamic from 'next/dynamic'
import Link from 'next/link'
import Head from 'next/head'

import React from 'react'

function MyApp () {
  return (
    <main>
      <Head>
        <title>Lavage de voiture écologique sans eau et à la vapeur</title>
        <meta
          name='viewport'
          content='initial-scale=1.0, width=device-width initial-scale=1, maximum-scale=1, user-scalable=0'
        />
        <meta
          name='description'
          content='Profitez des réductions des professionnels vous aussi'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='mx-auto container relative px-6 py-7 xl:px-0'>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 items-center'>
          <div className='xl:mt-8'>
            <Link href='/entreprises'>
              <button className='animate-bounce-custom focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal hover:opacity-90 flex items-center relative focus:outline-none justify-center mt-5 lg:mt-10 text-sm lg:text-base font-medium text-teal p-2 lg:p-2 bg-pastel rounded-md'>
                Je suis une entreprise
                <svg
                  className='ml-5'
                  xmlns='http://www.w3.org/2000/svg'
                  width={26}
                  height={17}
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M13 5l7 7-7 7M5 5l7 7-7 7'
                  />
                </svg>
              </button>
            </Link>
            <div className='text-3xl lg:text-6xl xl:text-8xl text-gray-800 tracking-1px font-extrabold'>
              <h1 className='lg:text-7xl leading-tight mt-3 lg:mt-4'>
                Lavage écologique à domicile
              </h1>
            </div>
            <h2 className='text-base lg:text-lg tracking-wide leading-9 lg:w-10/12 mt-2 lg:mt-6 text-gray-700'>
              Une voiture ultra propre et parfumée grâce à notre lavage
              écologique sans eau et notre traitement de toutes les surfaces à
              la vapeur.
            </h2>
            <div className='my-2'>
              <Link
                className='cursor-pointer'
                href='tarif-nettoyage-voiture-paris'
              >
                <button className='my-4 lg:my-8 lg:mb-0 bg-teal transition duration-150 ease-in-out hover:bg-teal-light focus:outline-none rounded text-white py-2 px-4  xl:px-8 xl:py-4 text-base xl:text-xl'>
                  Laver ma voiture
                </button>
              </Link>
            </div>
          </div>
          <div className='w-full custom-height mt-8 lg:mt-0 rounded-3xl relative'>
            <a tabIndex={-1} href='javascript:void(0)'>
              {/* https://internationalfleetworld.com/wp-content/uploads/2021/02/Renault-Zoe-electric-cars-fleet-Onto2.jpg */}
              {/* <img src="/images/hero_svg.svg" alt="Group-1" /> */}
              <img src='/images/hero_gif.gif' alt='' />
              {/* <video controls autoplay>
                <source src='/images/video_hero.mp4' type='video/mp4' />
                <source src='/images/video_hero.mp4' type='video/ogg' />
                Your browser does not support the video tag.
              </video> */}
            </a>
          </div>
        </div>
      </div>

      <section className='max-w-8xl mx-auto container bg-white'>
        <div className='flex flex-col md:flex-row'>
          <div className='w-full md:w-1/2 px-4 md:px-2 lg:px-12 flex items-center'>
            <img
              className='rounded max-h-full'
              src='/images/vapeur_gif.gif'
              alt
            />
          </div>
          <div className='flex flex-col justify-center w-full md:w-1/2 px-4 md:pr-12'>
            <div className='pl-4'>
              <h3 className='text-xl  xl:text-4xl font-bold lg:leading-tight text-gray-800'>
                Nettoyage vapeur
              </h3>
              <p className='text-base xl:text-xl text-gray-600 xl:leading-normal pt-4'>
                Nous utilisons la vapeur pour bien dégraisser et décontaminer
                toutes les surfaces.
              </p>
              <Link
                className='cursor-pointer'
                href='tarif-nettoyage-voiture-paris'
              >
                <button className='my-4 lg:my-8 lg:mb-0 bg-teal transition duration-150 ease-in-out hover:bg-teal-light focus:outline-none rounded text-white py-2 px-4  xl:px-8 xl:py-4 text-base xl:text-xl'>
                  Laver ma voiture
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className='max-w-8xl mx-auto container bg-white'>
        <div className='flex flex-col md:flex-row-reverse'>
          <div className='w-full md:w-1/2 px-4 md:px-2 lg:px-12 flex items-center'>
            <img
              className='rounded max-h-full'
              src='/images/exterior_gif.gif'
              alt
            />
          </div>
          <div className='flex flex-col justify-center w-full md:w-1/2 px-4 md:pr-12'>
            <div className='pl-4'>
              <h3 className='text-xl  xl:text-4xl font-bold lg:leading-tight text-gray-800'>
                Lavage extérieur sans eau
              </h3>
              <p className='text-base xl:text-xl text-gray-600 xl:leading-normal pt-4'>
                <ul>
                  <li>0 litre de consommation d'eau pour Premium Car Wash</li>
                  <li>
                    150 litres pour un lavage auto haute pression en station
                  </li>
                  <li>200 litres pour un particulier avec son kärcher</li>
                </ul>
              </p>
              <Link
                className='cursor-pointer'
                href='tarif-nettoyage-voiture-paris'
              >
                <button className='my-4 lg:my-8 lg:mb-0 bg-teal transition duration-150 ease-in-out hover:bg-teal-light focus:outline-none rounded text-white py-2 px-4  xl:px-8 xl:py-4 text-base xl:text-xl'>
                  Laver ma voiture
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className='dark:bg-gray-900'>
        <section className='mx-auto container w-full py-20'>
          <div className='flex justify-center items-center flex-col'>
            <div className>
              <h2 className='lg:text-6xl text-center md:text-5xl text-4xl font-black leading-10 text-gray-800 dark:text-white'>
                Ils utilisent notre service
              </h2>
            </div>
            <div className='mt-14'>
              <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 md:gap-x-10 gap-x-2 md:gap-y-10 gap-y-2 px-8 md:px-0'>
                <div className='w-full flex-1'>
                  <div className='flex items-center justify-center flex-1 h-full px-6 py-9 cursor-pointer hover:bg-gray-100 bg-white shadow'>
                    <img src='/svg/cartraderz.svg' alt='cartraderz' srcset='' />
                  </div>
                </div>
                <div className='w-full flex-1'>
                  <div className='flex items-center justify-center flex-1 h-full  px-6 py-9 cursor-pointer hover:bg-gray-100 bg-white shadow'>
                    <img src='/svg/carcityvo.svg' alt='carcityvo' srcset='' />
                  </div>
                </div>
                <div className='w-full flex-1'>
                  <div className='flex items-center justify-center flex-1 h-full  px-6 py-9 cursor-pointer hover:bg-gray-100 bg-white shadow'>
                    <img
                      src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_SMARTLOOK_CLOUDINARY_NAME}/image/upload/v1636671626/idealcars-removebg-preview.png`}
                      alt='carcityvo'
                      srcset=''
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default MyApp
