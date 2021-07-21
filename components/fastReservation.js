import React, { useState, useEffect } from 'react'
import Toggle from 'react-toggle'
import 'tailwindcss/tailwind.css'
import 'react-toggle/style.css'

function fastReservation () {
  const [price, setPrice] = useState(55)
  const [toggles, setToggles] = useState({
    shampoing: { isToggled: false },
    suv: { isToggled: false },
    espace: { isToggled: false },
    exter: { isToggled: false },
    sale: { isToggled: false }
  })

  const features = [
    {
      description: 'Détachage de tous les sièges + 10€',
      tog: true,
      name: 'shampoing',
      isToggled: false,
      value: '10'
    },
    {
      description: 'Voiture type SUV + 10€',
      tog: true,
      name: 'suv',
      isToggled: false,
      value: '10'
    },
    {
      description: 'Voiture type Espace (+ de 5 places) + 20€',
      tog: true,
      name: 'espace',
      isToggled: false,
      value: '20'
    },
    {
      description: 'Extérieur + 30€',
      tog: true,
      name: 'exter',
      isToggled: false,
      value: '30'
    },
    {
      description: 'Véhicule très sale + 10€',
      tog: true,
      name: 'sale',
      isToggled: false,
      value: '10'
    },
    {
      description: 'Nettoyage vitres intérieures'
    },
    {
      description: 'Aspiration habitacle et coffre'
    },
    {
      description: 'Nettoyage des plastiques'
    },
    {
      description: 'Nettoyage passage de portes'
    },
    {
      description: 'Traitement anti-odeur/ antibactérien'
    },
    {
      description: 'Traitement:  cuir / tissu'
    }
  ]
  const handleToggle = e => {
    setToggles(prevState => {
      prevState[e.target.name].isToggled = !prevState[e.target.name].isToggled
      return {
        ...prevState
      }
    })
    setPrice(
      toggles[e.target.name].isToggled
        ? price + Number(e.target.value)
        : price - Number(e.target.value)
    )
  }
  return (
    <>
      <div className='container mx-auto pt-16'>
        <div className='w-4/5 mx-auto pb-12'>
          <h1 className='xl:text-4xl text-3xl text-center text-gray-800 mb-4 font-extrabold'>
            Intervention à domicile <br /> Val d'oise (95) et Villes limitrophes
          </h1>
          <p className='text-xl text-center text-gray-600 leading-normal'>
            Pour une remise à neuf de l'habitacle ainsi que de l'extérieur de
            votre véhicule. Retrouver une bonne odeur et le plaisir de conduire
            une voiture ultra propre.
          </p>
        </div>
        <div className='flex flex-wrap justify-between'>
          <div className='w-11/12 xl:w-1/3 lg:w-1/2 sm:w-5/12 md:w-5/12 mx-auto mb-4 max-w-sm shadow rounded-lg border-4 border-indigo-700 bg-white'>
            <div className='pt-8 px-8 pb-6'>
              <h4 className='text-2xl text-center text-gray-800 pb-3 font-bold'>
                Nettoyage intérieur et extérieur
              </h4>
              <p className='text-sm text-center text-gray-600 pb-5 leading-normal px-10'>
                Pour une remise à neuf de votre voiture
              </p>
              <p className='text-base text-center text-gray-600 font-bold'>
                <span className='text-teal text-2xl'>Prix</span> <br />
                <span className='text-4xl text-indigo-700 font-medium px-2'>
                  {price} €
                </span>
              </p>
            </div>
            <div className='pt-6 pr-8 pl-8'>
              <ul className='flex flex-col items-start'>
                {features.map(feature => (
                  <li key={feature.name} className='flex items-center mb-8'>
                    {feature.tog ? (
                      <label>
                        <Toggle
                          name={feature.name}
                          defaultChecked={feature.isToggled}
                          value={feature.value}
                          onChange={e => handleToggle(e)}
                        />
                      </label>
                    ) : null}
                    <div className='h-1 w-1 rounded-full bg-indigo-700' />
                    <p className='pl-2 text-gray-600 text-base'>
                      {feature.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className='flex justify-center pb-8'>
              <a
                href={`https://calendly.com/contact-premiumcarwash/reservation-premium-car-wash-clone?a2=${price}`}
              >
                <button className='focus:outline-none bg-teal transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-black px-6 py-2 text-sm'>
                  Réserver
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default fastReservation
