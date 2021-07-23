import React, { useState, useEffect } from 'react'
import Toggle from 'react-toggle'
import 'tailwindcss/tailwind.css'
import 'react-toggle/style.css'
import GridImage from './gridImage'
import Modal from './modal'

const ReservationPart = ({price, features, setOpen, handleToggle}) => {
  return (
  <div className='container mx-auto pt-16'>
    <div className='w-4/5 mx-auto pb-12'>
      {/* <h1 className='xl:text-4xl text-3xl text-center text-white mb-4 font-extrabold'>
        Intervention à domicile <br /> Val d'oise (95) et Villes limitrophes
      </h1> */}
      <p className='text-xl text-center text-white leading-normal'>
        Pour une remise à neuf de l'habitacle ainsi que de l'extérieur de votre
        véhicule. Retrouver une bonne odeur et le plaisir de conduire une
        voiture ultra propre.
      </p>
    </div>
    <div className='flex flex-wrap justify-between'>
      <div className='w-11/12 xl:w-1/3 lg:w-1/2 sm:w-5/12 md:w-5/12 mx-auto mb-4 max-w-sm shadow rounded-lg border-4 border-gray-700 bg-black'>
        <div className='pt-8 px-8 pb-6'>
          <h4 className='text-2xl text-center text-white pb-3 font-bold'>
            Nettoyage intérieur de votre voiture
          </h4>
          <p className='text-sm text-center text-white pb-5 leading-normal px-10'>
            Pour une remise à neuf de votre voiture
          </p>
          <p className='text-base text-center text-gray-600 font-bold'>
            <span className='text-teal text-2xl'>Prix</span> <br />
            <span className='text-4xl font-medium px-2 text-white'>
              {price} €
            </span>
          </p>
        </div>
        <div className='pt-6 pr-8 pl-8'>
          <ul className='flex flex-col items-start'>
            {features.map(feature => (
              <li key={feature.id} className='flex items-center mb-8'>
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
                <div className='h-1 w-1 rounded-full' />
                <p className='pl-2 text-white text-base'>
                  {feature.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className='my-0 mx-auto'>
        <h1 className='xl:text-xl text-xl text-center text-white mb-4 font-extrabold'>
        Voulez-vous réserver et avoir une voiture nettoyer par un pro une fois pour toutes ? 
        </h1>
        <div className='w-3/4 mx-auto flex justify-between pb-2'>
        <a
            href={`https://calendly.com/contact-premiumcarwash/reservation-premium-car-wash-clone?a2=${price}`}
          >
            <button className='focus:outline-none bg-teal transition duration-150 ease-in-out hover:bg-teal-600 rounded text-black px-6 py-2 text-sm'>
              Oui
            </button>
          </a>
          <button onClick={() => setOpen(true)} className='focus:outline-none bg-teal transition duration-150 ease-in-out hover:bg-teal-600 rounded text-black px-6 py-2 text-sm'>
            Non
          </button>
        </div>
      </div>
      </div>
    </div>
  </div>
  );
}

function fastReservation () {
  const [isOpen, setOpen] = useState(false)
  const [price, setPrice] = useState(55)
  const [index, setIndex] = useState(0)
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
      value: '10',
      id: 1
    },
    {
      description: 'Voiture type SUV + 10€',
      tog: true,
      name: 'suv',
      isToggled: false,
      value: '10',
      id: 2
    },
    {
      description: 'Voiture type Espace (+ de 5 places) + 20€',
      tog: true,
      name: 'espace',
      isToggled: false,
      value: '20',
      id: 3
    },
    {
      description: 'Extérieur + 30€',
      tog: true,
      name: 'exter',
      isToggled: false,
      value: '30',
      id: 4
    },
    {
      description: 'Véhicule très sale + 10€',
      tog: true,
      name: 'sale',
      isToggled: false,
      value: '10',
      id: 5
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
      setPrice(
        prevState[e.target.name].isToggled
          ? price + Number(e.target.value)
          : price - Number(e.target.value)
      )
      return {
        ...prevState
      }
    })
  }
  const goToPrices = () => {
    setIndex(1);
  }
  return (
    <>
    {index === 0 ? <GridImage goToPrices={goToPrices} setOpen={setOpen}/> : ReservationPart({price, features, setOpen, handleToggle})}
    <Modal isOpen={isOpen} setOpen={setOpen}/>
    </>
  )
}

export default fastReservation
