import React from 'react'
import { useRouter } from 'next/router'
import prices from '../../utils/pricev3.json'

function prix () {
  const router = useRouter()
  const { pid } = router.query
  const interText = [
    'Shampoing complet habitacle',
    'Dégraissage de toutes les surfaces à la vapeur',
    'Nettoyage vitres intérieures',
    'Aspiration habitacle et coffre en profondeur',
    'Nettoyage des plastiques intérieurs',
    'Nettoyage passage de portes',
    'Traitement anti-odeur/ antibactérien',
    'Traitement: cuir / tissu'
  ];
  const exterText = [
    'Démoustiquage carrosserie',
    'Nettoyage & décrassage jantes',
    'Nettoyage passage de portes',
    'Lavage & lustrant déperlant carrosserie',
    'Nettoyage vitres extérieures',
  ];
  return (
    <>
      <div className='f-f-p container mx-auto py-14 p-2'>
      <div className='mt-6 lg:mt-0'>
            <div className='flex items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width={188}
                height={3}
                viewBox='0 0 188 3'
                fill='none'
              >
                <line
                  x1='9.1809e-05'
                  y1='1.5'
                  x2='187.922'
                  y2='1.50003'
                  stroke='#96C7C1'
                  strokeWidth={3}
                />
              </svg>
              <svg
                className='ml-3'
                xmlns='http://www.w3.org/2000/svg'
                width={12}
                height={20}
                viewBox='0 0 12 20'
                fill='none'
              >
                <path
                  d='M10.7149 5.75045C10.5258 5.21393 10.1805 4.74627 9.72339 4.40767C9.26627 4.06906 8.71828 3.875 8.14994 3.85046L4.34998 3.85046C3.59412 3.85046 2.86921 4.15073 2.33474 4.6852C1.80026 5.21968 1.5 5.94458 1.5 6.70044C1.5 7.4563 1.80026 8.1812 2.33474 8.71568C2.86921 9.25015 3.59412 9.55042 4.34998 9.55042L8.14994 9.55042C8.9058 9.55042 9.63071 9.85068 10.1652 10.3852C10.6997 10.9196 10.9999 11.6445 10.9999 12.4004C10.9999 13.1563 10.6997 13.8812 10.1652 14.4156C9.63071 14.9501 8.9058 15.2504 8.14994 15.2504L4.34998 15.2504C3.78164 15.2258 3.23365 15.0318 2.77653 14.6932C2.31942 14.3546 1.97409 13.8869 1.785 13.3504'
                  fill='white'
                />
                <path
                  d='M10.7149 5.75045C10.5258 5.21393 10.1805 4.74627 9.72339 4.40767C9.26627 4.06906 8.71828 3.875 8.14994 3.85046L4.34998 3.85046C3.59412 3.85046 2.86921 4.15073 2.33474 4.6852C1.80026 5.21968 1.5 5.94458 1.5 6.70044C1.5 7.4563 1.80026 8.1812 2.33474 8.71568C2.86921 9.25015 3.59412 9.55042 4.34998 9.55042L8.14994 9.55042C8.9058 9.55042 9.63071 9.85068 10.1652 10.3852C10.6997 10.9196 10.9999 11.6445 10.9999 12.4004C10.9999 13.1563 10.6997 13.8812 10.1652 14.4156C9.63071 14.9501 8.9058 15.2504 8.14994 15.2504L4.34998 15.2504C3.78164 15.2258 3.23365 15.0318 2.77653 14.6932C2.31942 14.3546 1.97409 13.8869 1.785 13.3504'
                  stroke='#96C7C1'
                  strokeWidth={2}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M6.24986 1.00049L6.24986 3.85046L6.24986 1.00049ZM6.24986 15.2504L6.24986 18.1003L6.24986 15.2504Z'
                  fill='white'
                />
                <path
                  d='M6.24986 15.2504L6.24986 18.1003M6.24986 1.00049L6.24986 3.85046L6.24986 1.00049Z'
                  stroke='#96C7C1'
                  strokeWidth={2}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
            <h1 className='pr-2 mt-8 text-gray-800 text-2xl lg:text-5xl font-bold tracking-1px lg:w-10/12 leading-9'>
              Un travail d'artisan d'environ {pid ? prices[pid]['time'] : ''}{' '}
              sur votre {pid ? prices[pid]['modèle'] : ''} car tout est dans le
              détail
            </h1>
            <p className='w-10/12 lg:w-7/12 leading-8 text-gray-700 mt-5 mb-12'>
              Retrouvez votre voiture ultra propre et désinfectée suite à notre
              passage. Profitez de la bonne odeur de notre parfum conçu
              exclusivement par notre partenaire.
            </p>
          </div>
        <div className='xl:flex items-center'>
          <div className='lg:flex items-center'>
            <div className='flex-shrink-0 px-11 py-12 bg-gray-100 rounded-3xl mt-6 lg:mt-0'>
              <h1 className='text-3xl lg:text-4xl font-medium text-gray-800 pb-12 tracking-wider'>
                Intérieur
              </h1>
              <h2 className='text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-800 tracking-wider'>
                {pid ? prices[pid]['inter'] : null}€
              </h2>
              <div className='mt-12'>
                    {interText.map((text,id) => (
                <div key={id} className='flex items-center rtextative mt-8'>
                  <div className='bg-white border rounded-sm border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center relative'>
                    <input
                      defaultChecked
                      type='checkbox'
                      className='checkbox opacity-0 absolute cursor-pointer w-full h-full'
                    />
                    <div className='check-icon hidden bg-teal-light text-white rounded-sm'>
                      <svg
                        className='icon icon-tabler icon-tabler-check'
                        xmlns='http://www.w3.org/2000/svg'
                        width={20}
                        height={20}
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      >
                        <path stroke='none' d='M0 0h24v24H0z' />
                        <path d='M5 12l5 5l10 -10' />
                      </svg>
                    </div>
                  </div>
                  <p className='ml-3 text-base leading-4 font-normal text-teal-light'>
                    {text}
                  </p>
                </div>
                    ))}
              </div>
              <a href='https://calendly.com/contact-premiumcarwash/reservation-nettoyage-voiture' target='_blank'>
                <div className='mt-16 flex justify-start'>
                  <button className='py-3 lg:py-6 pl-6 lg:pl-12 pr-8 bg-teal-light rounded-3xl text-white focus:outline-none text-lg xl:text-2xl tracking-widerw-auto lg:w-full flex items-center justify-between'>
                    Réserver
                    <svg
                      className='ml-6 lg:ml-0 w-6 lg:w-auto'
                      xmlns='http://www.w3.org/2000/svg'
                      width={37}
                      height={32}
                      viewBox='0 0 37 32'
                      fill='none'
                    >
                      <path
                        d='M35 16L2 16'
                        stroke='white'
                        strokeWidth={3}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M35 16L20.8571 1.99999'
                        stroke='white'
                        strokeWidth={3}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M35 16L20.8571 30'
                        stroke='white'
                        strokeWidth={3}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </button>
                </div>
              </a>
            </div>
            <div className='px-11 py-12 bg-gray-100 rounded-3xl mt-6 lg:mt-0 lg:ml-8 flex-shrink-0'>
              <h1 className='text-3xl lg:text-4xl font-medium text-gray-800 pb-12 tracking-wider'>
                Extérieur
              </h1>
              <h2 className='text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-800 tracking-wider'>
                {pid ? prices[pid]['exter'] : null}€
              </h2>
              <div className='mt-12'>
                {exterText.map((text, id) => (
                <div key={id} className='flex items-center relative mt-8'>
                  <div className='bg-white border rounded-sm border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center relative'>
                    <input
                      defaultChecked
                      type='checkbox'
                      className='checkbox opacity-0 absolute cursor-pointer w-full h-full'
                    />
                    <div className='check-icon hidden bg-teal-light text-white rounded-sm'>
                      <svg
                        className='icon icon-tabler icon-tabler-check'
                        xmlns='http://www.w3.org/2000/svg'
                        width={20}
                        height={20}
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      >
                        <path stroke='none' d='M0 0h24v24H0z' />
                        <path d='M5 12l5 5l10 -10' />
                      </svg>
                    </div>
                  </div>
                  <p className='ml-3 text-base leading-4 font-normal text-teal-light'>
                    {text}
                  </p>
                </div>
                ))}
              </div>
              <a href='https://calendly.com/contact-premiumcarwash/reservation-nettoyage-voiture' target='_blank'>
                <div className='mt-16 flex justify-start'>
                  <button className='py-3 lg:py-6 pl-6 lg:pl-12 pr-8 bg-teal-light text-white rounded-3xl focus:outline-none text-lg xl:text-2xl tracking-wider w-auto lg:w-full flex items-center justify-between'>
                    Réserver
                    <svg
                      className='ml-6 lg:ml-0 w-6 lg:w-auto'
                      xmlns='http://www.w3.org/2000/svg'
                      width={37}
                      height={32}
                      viewBox='0 0 37 32'
                      fill='none'
                    >
                      <path
                        d='M35 16L2 16'
                        stroke='currentColor'
                        strokeWidth={3}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M35 16L20.8571 1.99999'
                        stroke='currentColor'
                        strokeWidth={3}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M35 16L20.8571 30'
                        stroke='currentColor'
                        strokeWidth={3}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </button>
                </div>
              </a>
            </div>
            <div className='px-11 py-12 bg-teal-light rounded-3xl mt-6 lg:mt-0 lg:ml-8 flex-shrink-0'>
              <h1 className='text-3xl lg:text-4xl font-medium text-white pb-12 tracking-wider'>
                Inter/Exter
              </h1>
              <h2 className='text-4xl lg:text-6xl xl:text-7xl font-bold text-white tracking-wider'>
                {pid ? prices[pid]['both'] : null}€
              </h2>
              <div className='mt-12'>
                <div className='flex items-center relative mt-8'>
                  <div className='bg-teal-light border rounded-sm border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center relative'>
                    <input
                      defaultChecked
                      type='checkbox'
                      className='checkbox opacity-0 absolute cursor-pointer w-full h-full'
                    />
                    <div className='check-icon hidden bg-white text-teal-light rounded-sm'>
                      <svg
                        className='icon icon-tabler icon-tabler-check'
                        xmlns='http://www.w3.org/2000/svg'
                        width={20}
                        height={20}
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      >
                        <path stroke='none' d='M0 0h24v24H0z' />
                        <path d='M5 12l5 5l10 -10' />
                      </svg>
                    </div>
                  </div>
                  <p className='ml-3 text-base leading-4 font-normal text-white'>
                    Tout ce qui est compris dans <br/> intérieur et extérieur
                  </p>
                </div>
              </div>
              <a href='https://calendly.com/contact-premiumcarwash/reservation-nettoyage-voiture' target='_blank'>
                <div className='mt-16 flex justify-start'>
                  <button className='py-3 lg:py-6 pl-6 lg:pl-12 pr-8 bg-white text-teal-light rounded-3xl focus:outline-none text-lg xl:text-2xl tracking-wider w-auto lg:w-full flex items-center justify-between'>
                    Réserver
                    <svg
                      className='ml-6 lg:ml-0 w-6 lg:w-auto'
                      xmlns='http://www.w3.org/2000/svg'
                      width={37}
                      height={32}
                      viewBox='0 0 37 32'
                      fill='none'
                    >
                      <path
                        d='M35 16L2 16'
                        stroke='currentColor'
                        strokeWidth={3}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M35 16L20.8571 1.99999'
                        stroke='currentColor'
                        strokeWidth={3}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M35 16L20.8571 30'
                        stroke='currentColor'
                        strokeWidth={3}
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </button>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`.checkbox:checked + .check-icon {
                display: flex;
            }`}
      </style>
    </>
  )
}

export default prix
