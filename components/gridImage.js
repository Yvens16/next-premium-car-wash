import React from 'react'
import Image from 'next/image'
import ImageGallery from 'react-image-gallery'
import { buildUrl } from 'cloudinary-build-url'

// require('./gridimage.scss')

function gridImage ({ goToPrices, setOpen }) {
  const links = [
    'Premium car Wash/IMG_0144',
    'Premium car Wash/IMG_0155',
    'Premium car Wash/IMG_0444',
    'Premium car Wash/IMG_0468',
    'Premium car Wash/IMG_8586',
    'Premium car Wash/IMG_8590',
    'Premium car Wash/IMG_8583'
  ]
  const images = links.map(link => {
    let url = buildUrl(link, {
      cloud: {
        cloudName: process.env.NEXT_PUBLIC_SMARTLOOK_CLOUDINARY_NAME
      },
      transformations: {
        resize: {
          type: 'scale',
          width: 700,
          height: 700
        }
      }
    })
    return {
      original: url,
      thumbnail: url
    }
  })
  return (
    <div className='w-4/6 my-0 mx-auto'>
      <div className='w-2/3 mx-auto'>
        <p className='text-xl text-center text-white leading-normal'>
          Résultats de nos interventions
        </p>
      </div>
      <ImageGallery items={images} lazyLoad={true} />
      <div className='md:w-2/4 my-0 mx-auto'>
        <h1 className='xl:text-xl text-xl text-center text-white mb-4 font-extrabold'>
          Voulez vous voir les tarifs ?
        </h1>
        <div className='flex justify-between'>
          <button className='focus:outline-none bg-teal transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-black px-6 py-2 text-sm'
          onClick={goToPrices}>
            Oui
          </button>
          <button onClick={() => setOpen(true)} className='focus:outline-none bg-teal transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-black px-6 py-2 text-sm'>
            Non
          </button>
        </div>
      </div>
      {/* <div className='flex flex-wrap -mx-4 overflow-hidden sm:-mx-3 md:-mx-4 lg:-mx-4 xl:-mx-4'>
        <div className='my-4 px-4 w-1/2 overflow-hidden sm:my-3 sm:px-3 md:my-4 md:px-4 md:w-1/3 lg:my-4 lg:px-4 lg:w-1/3 xl:my-4 xl:px-4 xl:w-1/3 flex justify-center'>
          <Image
            src={citadine}
            alt='Picture of the author'
            width='200'
            height='200'
            className='object-contain'
          ></Image>
        </div>

        <div className='my-4 px-4 w-1/2 overflow-hidden sm:my-3 sm:px-3 md:my-4 md:px-4 md:w-1/3 lg:my-4 lg:px-4 lg:w-1/3 xl:my-4 xl:px-4 xl:w-1/3 flex justify-center'>
          <Image
            src={'https://source.unsplash.com/random/1280x720'}
            alt='Picture of the author'
            width='200'
            height='200'
            className='object-contain'
          ></Image>
        </div>

        <div className='my-4 px-4 w-1/2 overflow-hidden sm:my-3 sm:px-3 md:my-4 md:px-4 md:w-1/3 lg:my-4 lg:px-4 lg:w-1/3 xl:my-4 xl:px-4 xl:w-1/3 flex justify-center'>
          <Image
            src={'https://source.unsplash.com/random/1280x720'}
            alt='Picture of the author'
            width='200'
            height='200'
            className='object-contain'
          ></Image>
        </div>

        <div className='my-4 px-4 w-1/2 overflow-hidden sm:my-3 sm:px-3 md:my-4 md:px-4 md:w-1/3 lg:my-4 lg:px-4 lg:w-1/3 xl:my-4 xl:px-4 xl:w-1/3 flex justify-center'>
          <Image
            src={'https://source.unsplash.com/random/1280x720'}
            alt='Picture of the author'
            width='200'
            height='200'
            className='object-contain'
          ></Image>
        </div>

        <div className='my-4 px-4 w-1/2 overflow-hidden sm:my-3 sm:px-3 md:my-4 md:px-4 md:w-1/3 lg:my-4 lg:px-4 lg:w-1/3 xl:my-4 xl:px-4 xl:w-1/3 flex justify-center'>
          <Image
            src={'https://source.unsplash.com/random/1280x720'}
            alt='Picture of the author'
            width='200'
            height='200'
            className='object-contain'
          ></Image>
        </div>

        <div className='my-4 px-4 w-1/2 overflow-hidden sm:my-3 sm:px-3 md:my-4 md:px-4 md:w-1/3 lg:my-4 lg:px-4 lg:w-1/3 xl:my-4 xl:px-4 xl:w-1/3 flex justify-center'>
          <Image
            src={'https://source.unsplash.com/random/1280x720'}
            alt='Picture of the author'
            width='200'
            height='200'
            className='object-contain'
          ></Image>
        </div>
      </div> */}
    </div>
  )
}

export default gridImage
