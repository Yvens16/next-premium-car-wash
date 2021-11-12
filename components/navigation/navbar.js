import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import { firebaseAnalytics } from '../../firebase/firebase'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Navbar.module.scss'

export default function Navbar () {
  const [displaySocial, setDisplaySocial] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const shareRef = useRef()
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      setShowMobileMenu(false)
    }
    const logEvent = url => {
      if (process.env.NODE_ENV === 'production') {
        firebaseAnalytics().setCurrentScreen(url)
        firebaseAnalytics().logEvent('sreen_view')
      }
    }
    logEvent(window.location.pathname) // For first load of the website
    router.events.on('routeChangeStart', handleRouteChange)
    router.events.on('routeChangeComplete', logEvent)
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
      router.events.off('routeChangeComplete', logEvent)
    }
  }, [])
  const [show, setShow] = useState(false)
  return (
    <div className='border-b-2 shadow-md'>
      <div className='mx-auto container relative px-6 xl:px-0'>
        <nav className>
          <div className='lg:flex justify-between w-full hidden items-center'>
            <Link
              className='focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-light'
              role='banner'
              href='/'
            >
              <img className='max-h-28' src='/images/logo_svg.svg' alt='Logo' />
            </Link>
            <div className='mt-2 lg:w-2/3 xl:w-1/2'>
              <ul className='font-normal text-lg flex justify-between items-center text-black font-medium'>
                <li className='hover:text-teal-light cursor-pointer'>
                  <Link
                    className='focus:outline-none focus:underline focus:text-teal'
                    href='/'
                  >
                    Accueil
                  </Link>
                </li>
                <li className='hover:text-teal-light cursor-pointer'>
                  <Link
                    className='focus:outline-none focus:underline focus:text-teal'
                    href='/contact'
                  >
                    Contact
                  </Link>
                </li>
                <li className='hover:text-teal-light cursor-pointer'>
                  <Link
                    className='focus:outline-none focus:underline focus:text-teal'
                    href='/entreprises'
                  >
                    Professionelles
                  </Link>
                </li>
                {/* <li className='hover:text-teal-light cursor-pointer underline font-bold'>
                  <Link
                    className='focus:outline-none focus:text-teal'
                    href='javascript:void(0)'
                  >
                    Recevoir grille tarifaire
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
        <nav className='lg:hidden'>
          <div className='flex justify-between items-center'>
            <div className='max-w-xs'>
              <Link className href='javascript:void(0)'>
                <img
                  className='max-h-16'
                  src='/images/logo_svg.svg'
                  alt='Logo'
                />
              </Link>
            </div>
            <div className='visible flex items-center'>
              {show && (
                <ul
                  id='list'
                  className='py-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-20 md:px-4 md:mt-20 z-20'
                >
                  <li className='flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-teal-light focus:text-teal focus:outline-none'>
                    <Link href='/'>
                      <span className='ml-2 font-bold'>Accueil</span>
                    </Link>
                  </li>
                  <li
                    className='flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-teal-light focus:text-teal focus:outline-none flex justify-center'
                    onclick='dropdownHandler(this)'
                  >
                    <Link href='/contact'>
                      <span className='ml-2 font-bold'>Contact</span>
                    </Link>
                  </li>
                  <li className='flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-teal-light flex items-center focus:text-teal focus:outline-none'>
                    <Link href='/entreprises'>
                      <span className='ml-2 font-bold'>Professionelles</span>
                    </Link>
                  </li>
                  {/* <li
                    className='flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-teal-light focus:text-teal focus:outline-none flex justify-center'
                    onclick='dropdownHandler(this)'
                  >
                    <Link href='javascript:void(0)'>
                      <span className='ml-2 font-bold underline'>
                        Recevoir grille tarifaire
                      </span>
                    </Link>
                  </li> */}
                </ul>
              )}
              <div className='xl:hidden' onClick={() => setShow(!show)}>
                {show ? (
                  <div className=' close-m-menu' onclick='MenuHandler(false)'>
                    <svg
                      aria-label='Close'
                      xmlns='http://www.w3.org/2000/svg'
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      <path stroke='none' d='M0 0h24v24H0z' />
                      <line x1={18} y1={6} x2={6} y2={18} />
                      <line x1={6} y1={6} x2={18} y2={18} />
                    </svg>
                  </div>
                ) : (
                  <svg
                    id='open'
                    onclick='MenuHandler(true)'
                    aria-haspopup='true'
                    aria-label='Main Menu'
                    xmlns='http://www.w3.org/2000/svg'
                    className='show-m-menu icon icon-tabler icon-tabler-menu'
                    width={28}
                    height={28}
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' />
                    <line x1={4} y1={8} x2={20} y2={8} />
                    <line x1={4} y1={16} x2={20} y2={16} />
                  </svg>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}
