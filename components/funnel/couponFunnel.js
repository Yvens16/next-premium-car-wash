import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { saveAs } from 'file-saver'
import { buildUrl } from 'cloudinary-build-url'
import emailjs from 'emailjs-com'
import 'tailwindcss/tailwind.css'
import { CheckIcon } from '@heroicons/react/outline'

function couponFunnel () {
  const [showThankYou, setShowThankYou] = useState(false)
  const downloadImage = () => {
    saveAs(
      'https://res.cloudinary.com/djwtktmre/image/upload/v1627462005/coupon.pdf',
      'coupon_réduction.jpg'
    )
  }
  const ThankYou = () => (
    <>
      <section className='text-white-600 body-font'>
        <div className='container px-5 py-2 mx-auto'>
          <div className='flex flex-col text-center w-full mb-12'>
            <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-white-900'>
              Merci ! Voici votre coupon !
            </h1>
            <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
              Veuillez nous prévenir du nombre de voitures à nettoyer pour qu'on
              puisse s'organiser.
            </p>
          </div>
          <div className='flex items-center lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 pb-2 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end'>
            <button
              onClick={downloadImage}
              className='w-full text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'
            >
              Téléchargez votre coupon.
            </button>
          </div>
          <span className='text-gray-500'>
            Il vous est aussi envoyez par email, montrez le pendant le rdv svp.{' '}
          </span>
        </div>
      </section>
      <section className='text-white-600 body-font overflow-hidden'>
        <div className='container px-5 mx-auto'>
          <div className='flex flex-col text-center w-full mb-10'>
            <h1 className='sm:text-4xl text-3xl font-medium title-font mb-2 text-white'>
              Réservez un rdv maintenant
            </h1>
            <p className='lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500'>
              Réservez en ligne n'importe quand, ou appelez nous entre lundi et
              samedi de 9 h à 20 h.
            </p>
          </div>
          <div className='flex flex-wrap -m-4'>
            <div className='p-4 xl:w-1/2 md:w-1/2 w-full'>
              <div className='h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden'>
                <h2 className='text-sm tracking-widest title-font mb-1 font-medium'></h2>
                <h1 className='text-2xl text-white-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200'>
                  <span>Réservez en ligne</span>
                </h1>
                <a
                  href='https://calendly.com/contact-premiumcarwash/reservation-premium-car-wash-clone'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button className='flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded'>
                    Voir Calendrier
                    <svg
                      fill='none'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      className='w-4 h-4 ml-auto'
                      viewBox='0 0 24 24'
                    >
                      <path d='M5 12h14M12 5l7 7-7 7'></path>
                    </svg>
                  </button>
                </a>
                <a target='_blank' href='https://bit.ly/PCW_photos'>
                  <p className='text-xs text-gray-500 mt-3 text-blue-300 underline'>
                    Cliquez ici pour voir nos avant/après de prestation à
                    domicile
                  </p>
                </a>
              </div>
            </div>
            <div className='p-4 xl:w-1/2 md:w-1/2 w-full'>
              <div className='h-full p-6 rounded-lg border-2 border-gray-500 flex flex-col relative overflow-hidden'>
                <h2 className='text-sm tracking-widest title-font mb-1 font-medium'></h2>
                <h1 className='text-2xl text-white-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200'>
                  <span>Prévoir un appel avec un conseiller</span>
                </h1>
                <a
                  href='https://calendly.com/contact-premiumcarwash/15min'
                  target='_blank'
                >
                  <button className='flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded'>
                    Appel de 10 min
                    <svg
                      fill='none'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      className='w-4 h-4 ml-auto'
                      viewBox='0 0 24 24'
                    >
                      <path d='M5 12h14M12 5l7 7-7 7'></path>
                    </svg>
                  </button>
                </a>
                <a target='_blank' href='https://bit.ly/PCW_photos'>
                  <p className='text-xs text-gray-500 mt-3 text-blue-300 underline'>
                    Cliquez ici pour voir nos avant/après de prestation à
                    domicile
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )

  const Coupon = ({ setShowThankYou }) => {
    const [mail, setMail] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const features = [
      {
        name: 'Shampoing complet habitacle',
        description:
          'Nous faisons un shampoing des tapis, de la moquettes et des contre-portes.'
      },
      {
        name: 'Nettoyage vitres intérieures',
        description:
          'Nous faisons briller toutes vos vitres, pare-brise, et vitre arrière inclus'
      },
      {
        name: 'Aspiration habitacle et coffre en profondeur',
        description:
          "NOus aspirons l'intégralité du véhicule, entre et sous les sièges pour un résultat impeccable"
      },
      {
        name: 'Nettoyage des plastiques intérieurs',
        description:
          'Toutes les surfaces seront nettoyer avec nos produit spéciaux et déinfecté à la machine à vapeur.'
      },
      {
        name: 'Nettoyage passage de portes',
        description:
          'Les passages de porte sont souvent négligés, mais pas chez nous, la porte recevra le même traitement de haut en bas.'
      },
      {
        name: 'Traitement anti-odeur/ antibactérien',
        description:
          "Nous vous offrons la désinfection à l'ozone pour tuer tous virus et bactéries dans l'air et sur les surfaces de l'habitacle."
      },
      {
        name: 'Traitement:  cuir / tissu',
        description:
          "Après le nettoyage, l'aspiration et la désinfection des sièges en cuir, nous appliquons une de protection en céramique couche pour éviter toutes dégradations ainsi que les futures tâches."
      },
      {
        name: "Écolavage de l'extèrieur sans eau",
        description:
          "Sur demande, nous effectuons le nettoyage de votre carrosserie sans eau ainsi, nous économisons 250 l d'eau par lavage."
      }
    ]
    let url = buildUrl('Premium car Wash/IMG_0468', {
      cloud: {
        cloudName: process.env.NEXT_PUBLIC_SMARTLOOK_CLOUDINARY_NAME
      },
      transformations: {
        resize: {
          type: 'scale',
          width: 400,
          height: 400
        }
      }
    })
    const sendEmailToMe = () => {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATEID
      const userId = process.env.NEXT_PUBLIC_EMAILJS_USERID

      const template = {
        from_name: name,
        contact_number: phone,
        message: 'Took a coupon for 25% off'
      }

      emailjs.send(serviceId, templateId, template, userId).then(
        result => {
          console.log(result.text)
        },
        error => {
          console.log(error.text)
        }
      )
    }
    const AddContactToList = () => {
      fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/addContactTomailchimp`, {
        method: 'POST',
        body: JSON.stringify({ mail, name, phone })
      }).then(res => {
        setShowThankYou(true)
        sendEmailToMe()
        return res.json().then(console.log('ACCOUNT ADDED TO MAILCHIMP'))
      })
    }
    return (
      <section className='text-white-600 body-font overflow-hidden'>
        <div className='container px-5 py-16 mx-auto'>
          <div className='lg:w-full mx-auto flex flex-wrap'>
            <h1 className='lg:hidden text-teal text-2xl mb-1 font-medium title-font'>
              Vous vous souvenez de cette odeur de voiture neuve ? Ressentez-le
              de nouveau encore, encore... et encore !
            </h1>
            <Image
              alt='voiture'
              width='400'
              height='400'
              className='lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded'
              src={url}
            />
            <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
              <h2 className='hidden lg:block text-teal text-2xl mb-1 font-medium title-font'>
                Vous vous souvenez de cette odeur de voiture neuve ?
                Ressentez-le de nouveau encore et encore !
              </h2>
              <h1 className='text-white-900 text-lg mb-1 font-medium title-font'>
                Télécharger votre coupon pour{' '}
                <span className='text-teal'>25% de réduction</span> sur votre
                lavage
              </h1>
              <p className='leading-relaxed mb-5 text-white-600'>
                Où devrions-nous envoyer ce coupon pour cette offre incroyable ?
              </p>
              <div className='relative mb-4' data-children-count='1'>
                <label
                  htmlFor='name'
                  className='leading-7 text-sm text-white-600'
                >
                  Nom Complet
                </label>
                <input
                  placeholder='Jean Dujardin'
                  type='text'
                  id='name'
                  autoComplete='given-name'
                  name='name'
                  className='text-black w-full bg-white rounded border border-white-300 focus:border-teal focus:ring-2 focus:ring-teal text-base outline-none text-white-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                  data-kwimpalastatus='alive'
                  data-kwimpalaid='1627120502348-13'
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </div>
              <div className='relative mb-4' data-children-count='1'>
                <label
                  htmlFor='email'
                  className='leading-7 text-sm text-white-600'
                >
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  placeholder='jean.dujardin@gmail.com'
                  name='email'
                  autoComplete='email'
                  className='text-black w-full bg-white rounded border border-white-300 focus:border-teal focus:ring-2 focus:ring-teal text-base outline-none text-white-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                  data-kwimpalastatus='alive'
                  data-kwimpalaid='1627120502348-14'
                  value={mail}
                  onChange={e => setMail(e.target.value)}
                />
              </div>
              <div className='relative mb-4' data-children-count='1'>
                <label
                  htmlFor='tel'
                  className='leading-7 text-sm text-white-600'
                >
                  Téléphone
                </label>
                <input
                  placeholder='06 27 24 25 96'
                  type='tel'
                  id='tel'
                  name='tel'
                  autoComplete='tel'
                  className='text-black w-full bg-white rounded border border-white-300 focus:border-teal focus:ring-2 focus:ring-teal text-base outline-none text-white-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                  data-kwimpalastatus='alive'
                  data-kwimpalaid='1627120502348-14'
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                />
              </div>
              <button
                disabled={mail.length < 3 || phone.length < 9 || name.length < 3}
                onClick={AddContactToList}
                className={`text-black bg-teal border-0 py-2 px-6 focus:outline-none hover:bg-teal rounded text-lg 
                ${mail.length < 3 || phone.length < 9 || name.length < 3 ? 'cursor-not-allowed' : null}`}
              >
                Obtenir mon coupon
              </button>
            </div>
          </div>
          <div className='mt-10'>
            <h1 className='text-white-900 text-2xl mb-1 font-medium title-font pb-5'>
              Notre prestation inclus
            </h1>
            <dl className='space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10'>
              {features.map(feature => (
                <div key={feature.name} className='relative'>
                  <dt>
                    <div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-teal text-black'>
                      <CheckIcon className='h-6 w-6' aria-hidden='true' />
                    </div>
                    <p className='ml-16 text-lg leading-6 font-medium text-white-500'>
                      {feature.name}
                    </p>
                  </dt>
                  <dd className='mt-2 ml-16 text-base text-gray-500'>
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <section className='text-white-600 body-font'>
            <div className='container px-5 py-24 mx-auto'>
              <h1 className='font-bold text-2xl pb-5'>Ce que disent nos clients</h1>
              <div className='flex flex-wrap -m-4'>
                <div className='lg:w-1/3 lg:mb-0 mb-6 p-4 border-2 border-gray-600'>
                  <div className='h-full text-center text-white'>
                    <p className='leading-relaxed'>
                      Très bonne prestation, voiture impeccable. Personne
                      agréable et sympathique,. Je vous le conseil.
                    </p>
                    <span className='inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4'></span>
                    <h2 className='text-white font-medium title-font tracking-wider text-sm'>
                      NICOLAT CHARNAT
                      <a
                        href='https://bit.ly/témoignages_pcw'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <br />
                        <span className='underline text-blue-500'>Cliquez ici pour voir les avis sur google</span>
                      </a>
                    </h2>
                  </div>
                </div>
                <div className='lg:w-1/3 lg:mb-0 mb-6 p-4 border-2 border-gray-600'>
                  <div className='h-full text-center'>
                    <p className='leading-relaxed text-white'>
                      Prestation réalisée à domicile, véhicule impeccable et
                      l'odeur tout simplement agréable. Excellent accueil. Je
                      recommande.
                    </p>
                    <span className='inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4'></span>
                    <h2 className='text-white font-medium title-font tracking-wider text-sm'>
                      STÉPHANIE LOSSE
                      <a
                        href='https://bit.ly/témoignages_pcw'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <br />
                        <span className='underline text-blue-500'>Cliquez ici pour voir les avis sur google</span>
                      </a>
                    </h2>
                  </div>
                </div>
                <div className='lg:w-1/3 lg:mb-0 p-4 border-2 border-gray-600'>
                  <div className='h-full text-center text-white'>
                    <p className='leading-relaxed'>
                      Très bonne prestation j'ai recuperer ma voiture très
                      propre. travail de pro. Merci à bientôt
                    </p>
                    <span className='inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4'></span>
                    <h2 className='text-white font-medium title-font tracking-wider text-sm'>
                      PASCAL DELBECQ
                      <a
                        href='https://bit.ly/témoignages_pcw'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <br />
                        <span className='underline text-blue-500'>Cliquez ici pour voir les avis sur google</span>
                      </a>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    )
  }
  return (
    <>
      {showThankYou ? (
        <ThankYou />
      ) : (
        <Coupon setShowThankYou={setShowThankYou} />
      )}
    </>
  )
}

export default couponFunnel
