import React, { useState, useRef, useEffect } from 'react'
const Airtable = require('airtable')
import { toast, ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
const base = new Airtable({
  apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY
}).base(process.env.NEXT_PUBLIC_AIRTABLE_BASE)

function entreprises () {
  const [email, setEmail] = useState('');
  let [absolHeight, setAblsolHeight] = useState(null)
  let absoluteDivHeight = useRef(null)
  const handleLoadImage = () => {
    const imageHeight = absoluteDivHeight.current?.clientHeight;
    setAblsolHeight(imageHeight)
  }
  useEffect(() => {
    if (absoluteDivHeight.current?.complete) {
      handleLoadImage()
    }
  }, [])

  const submit = event => {
    event.preventDefault()
    base('beta').create(
      [
        {
          fields: {
            email,
          }
        }
      ],
      function (err, records) {
        console.log('records:', records)
        if (err) {
          console.error(err)
          toast.error(
            "Nous avons eu un petit problème avec l'enregistrement de votre email, veuillez réessayer svp",
            {
              position: toast.POSITION.TOP_CENTER
            }
          )
          return
        }
        toast.success('votre email à bie été enregistrer, Merci !', {
          position: toast.POSITION.TOP_CENTER
        })
        setEmail('');
        records.forEach(function (record) {
          console.log(record.getId())
        })
      }
    )
  }
  return (
    <>
      <div>
        <div className='w-full px-6'>
          <div className='mt-8 relative rounded-lg bg-teal-light container mx-auto flex flex-col items-center pt-12 sm:pt-24 pb-24 sm:pb-32 md:pb-48 lg:pb-56 xl:pb-64'>
            <svg
              className='mr-2 lg:mr-12 mt-2 lg:mt-12 absolute right-0 top-0'
              width='104px'
              height='95px'
              viewBox='0 0 104 95'
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
            >
              <g
                id='Work-in-Progress'
                stroke='none'
                strokeWidth={1}
                fill='none'
                fillRule='evenodd'
                opacity='0.122837612'
              >
                <g
                  transform='translate(-1139.000000, -175.000000)'
                  fill='#FFFFFF'
                >
                  <g
                    id='Group-5'
                    transform='translate(1139.000000, 175.000000)'
                  >
                    <path
                      d='M1.99948119,4 C0.897535668,4 0,3.10246433 0,1.99948119 C0,0.896498054 0.897535668,0 1.99948119,0 C3.10350195,0 4,0.896498054 4,1.99948119 C4,3.10246433 3.10350195,4 1.99948119,4'
                      id='Fill-46'
                    />
                    <path
                      d='M22,4 C20.8973029,4 20,3.10246433 20,1.99948119 C20,0.896498054 20.8973029,0 22,0 C23.1037344,0 24,0.896498054 24,1.99948119 C24,3.10246433 23.1037344,4 22,4'
                      id='Fill-47'
                    />
                    <path
                      d='M42,4 C40.8962656,4 40,3.10246433 40,1.99948119 C40,0.896498054 40.8962656,0 42,0 C43.1016598,0 44,0.896498054 44,1.99948119 C44,3.10246433 43.1016598,4 42,4'
                      id='Fill-48'
                    />
                    <path
                      d='M62.0005188,4 C60.8964981,4 60,3.10246433 60,1.99948119 C60,0.896498054 60.8964981,0 62.0005188,0 C63.1024643,0 64,0.896498054 64,1.99948119 C64,3.10246433 63.1024643,4 62.0005188,4'
                      id='Fill-49'
                    />
                    <path
                      d='M81.9984436,4 C80.8964981,4 80,3.10246433 80,1.99948119 C80,0.896498054 80.8964981,0 81.9984436,0 C83.1024643,0 84,0.896498054 84,1.99948119 C84,3.10246433 83.1024643,4 81.9984436,4'
                      id='Fill-50'
                    />
                    <path
                      d='M102,4 C100.89834,4 100,3.10246433 100,1.99948119 C100,0.896498054 100.89834,0 102,0 C103.103734,0 104,0.896498054 104,1.99948119 C104,3.10246433 103.103734,4 102,4'
                      id='Fill-51'
                    />
                    <path
                      d='M1.99948119,22 C0.897535668,22 0,21.1024643 0,19.9994812 C0,18.8964981 0.897535668,18 1.99948119,18 C3.10350195,18 4,18.8964981 4,19.9994812 C4,21.1024643 3.10350195,22 1.99948119,22'
                      id='Fill-52'
                    />
                    <path
                      d='M22,22 C20.8973029,22 20,21.1024643 20,19.9994812 C20,18.8964981 20.8973029,18 22,18 C23.1037344,18 24,18.8964981 24,19.9994812 C24,21.1024643 23.1037344,22 22,22'
                      id='Fill-53'
                    />
                    <path
                      d='M42,22 C40.8962656,22 40,21.1024643 40,19.9994812 C40,18.8964981 40.8962656,18 42,18 C43.1016598,18 44,18.8964981 44,19.9994812 C44,21.1024643 43.1016598,22 42,22'
                      id='Fill-54'
                    />
                    <path
                      d='M62.0005188,22 C60.8964981,22 60,21.1024643 60,19.9994812 C60,18.8964981 60.8964981,18 62.0005188,18 C63.1024643,18 64,18.8964981 64,19.9994812 C64,21.1024643 63.1024643,22 62.0005188,22'
                      id='Fill-55'
                    />
                    <path
                      d='M81.9984436,22 C80.8964981,22 80,21.1024643 80,19.9994812 C80,18.8964981 80.8964981,18 81.9984436,18 C83.1024643,18 84,18.8964981 84,19.9994812 C84,21.1024643 83.1024643,22 81.9984436,22'
                      id='Fill-56'
                    />
                    <path
                      d='M102,22 C100.89834,22 100,21.1024643 100,19.9994812 C100,18.8964981 100.89834,18 102,18 C103.103734,18 104,18.8964981 104,19.9994812 C104,21.1024643 103.103734,22 102,22'
                      id='Fill-57'
                    />
                    <path
                      d='M1.99948119,40 C0.897535668,40 0,39.1026971 0,38 C0,36.8973029 0.897535668,36 1.99948119,36 C3.10350195,36 4,36.8973029 4,38 C4,39.1026971 3.10350195,40 1.99948119,40'
                      id='Fill-58'
                    />
                    <path
                      d='M22,40 C20.8973029,40 20,39.1026971 20,38 C20,36.8973029 20.8973029,36 22,36 C23.1037344,36 24,36.8973029 24,38 C24,39.1026971 23.1037344,40 22,40'
                      id='Fill-59'
                    />
                    <path
                      d='M42,40 C40.8962656,40 40,39.1026971 40,38 C40,36.8973029 40.8962656,36 42,36 C43.1016598,36 44,36.8973029 44,38 C44,39.1026971 43.1016598,40 42,40'
                      id='Fill-60'
                    />
                    <path
                      d='M62.0005188,40 C60.8964981,40 60,39.1026971 60,38 C60,36.8973029 60.8964981,36 62.0005188,36 C63.1024643,36 64,36.8973029 64,38 C64,39.1026971 63.1024643,40 62.0005188,40'
                      id='Fill-61'
                    />
                    <path
                      d='M81.9984436,40 C80.8964981,40 80,39.1026971 80,38 C80,36.8973029 80.8964981,36 81.9984436,36 C83.1024643,36 84,36.8973029 84,38 C84,39.1026971 83.1024643,40 81.9984436,40'
                      id='Fill-62'
                    />
                    <path
                      d='M102,40 C100.89834,40 100,39.1026971 100,38 C100,36.8973029 100.89834,36 102,36 C103.103734,36 104,36.8973029 104,38 C104,39.1026971 103.103734,40 102,40'
                      id='Fill-63'
                    />
                    <path
                      d='M1.99948119,59 C0.897535668,59 0,58.1026971 0,57 C0,55.8973029 0.897535668,55 1.99948119,55 C3.10350195,55 4,55.8973029 4,57 C4,58.1026971 3.10350195,59 1.99948119,59'
                      id='Fill-64'
                    />
                    <path
                      d='M22,59 C20.8973029,59 20,58.1026971 20,57 C20,55.8973029 20.8973029,55 22,55 C23.1037344,55 24,55.8973029 24,57 C24,58.1026971 23.1037344,59 22,59'
                      id='Fill-65'
                    />
                    <path
                      d='M42,59 C40.8962656,59 40,58.1026971 40,57 C40,55.8973029 40.8962656,55 42,55 C43.1016598,55 44,55.8973029 44,57 C44,58.1026971 43.1016598,59 42,59'
                      id='Fill-66'
                    />
                    <path
                      d='M62.0005188,59 C60.8964981,59 60,58.1026971 60,57 C60,55.8973029 60.8964981,55 62.0005188,55 C63.1024643,55 64,55.8973029 64,57 C64,58.1026971 63.1024643,59 62.0005188,59'
                      id='Fill-67'
                    />
                    <path
                      d='M81.9984436,59 C80.8964981,59 80,58.1026971 80,57 C80,55.8973029 80.8964981,55 81.9984436,55 C83.1024643,55 84,55.8973029 84,57 C84,58.1026971 83.1024643,59 81.9984436,59'
                      id='Fill-68'
                    />
                    <path
                      d='M102,59 C100.89834,59 100,58.1026971 100,57 C100,55.8973029 100.89834,55 102,55 C103.103734,55 104,55.8973029 104,57 C104,58.1026971 103.103734,59 102,59'
                      id='Fill-69'
                    />
                    <path
                      d='M1.99948119,77 C0.897535668,77 0,76.1026971 0,75 C0,73.8973029 0.897535668,73 1.99948119,73 C3.10350195,73 4,73.8973029 4,75 C4,76.1026971 3.10350195,77 1.99948119,77'
                      id='Fill-70'
                    />
                    <path
                      d='M22,77 C20.8973029,77 20,76.1026971 20,75 C20,73.8973029 20.8973029,73 22,73 C23.1037344,73 24,73.8973029 24,75 C24,76.1026971 23.1037344,77 22,77'
                      id='Fill-71'
                    />
                    <path
                      d='M42,77 C40.8962656,77 40,76.1026971 40,75 C40,73.8973029 40.8962656,73 42,73 C43.1016598,73 44,73.8973029 44,75 C44,76.1026971 43.1016598,77 42,77'
                      id='Fill-72'
                    />
                    <path
                      d='M62.0005188,77 C60.8964981,77 60,76.1026971 60,75 C60,73.8973029 60.8964981,73 62.0005188,73 C63.1024643,73 64,73.8973029 64,75 C64,76.1026971 63.1024643,77 62.0005188,77'
                      id='Fill-73'
                    />
                    <path
                      d='M81.9984436,77 C80.8964981,77 80,76.1026971 80,75 C80,73.8973029 80.8964981,73 81.9984436,73 C83.1024643,73 84,73.8973029 84,75 C84,76.1026971 83.1024643,77 81.9984436,77'
                      id='Fill-74'
                    />
                    <path
                      d='M102,77 C100.89834,77 100,76.1026971 100,75 C100,73.8973029 100.89834,73 102,73 C103.103734,73 104,73.8973029 104,75 C104,76.1026971 103.103734,77 102,77'
                      id='Fill-75'
                    />
                    <path
                      d='M1.99948119,95 C0.897535668,95 0,94.1024643 0,92.9994812 C0,91.8964981 0.897535668,91 1.99948119,91 C3.10350195,91 4,91.8964981 4,92.9994812 C4,94.1024643 3.10350195,95 1.99948119,95'
                      id='Fill-76'
                    />
                    <path
                      d='M22,95 C20.8973029,95 20,94.1024643 20,92.9994812 C20,91.8964981 20.8973029,91 22,91 C23.1037344,91 24,91.8964981 24,92.9994812 C24,94.1024643 23.1037344,95 22,95'
                      id='Fill-77'
                    />
                    <path
                      d='M42,95 C40.8962656,95 40,94.1024643 40,92.9994812 C40,91.8964981 40.8962656,91 42,91 C43.1016598,91 44,91.8964981 44,92.9994812 C44,94.1024643 43.1016598,95 42,95'
                      id='Fill-78'
                    />
                    <path
                      d='M62.0005188,95 C60.8964981,95 60,94.1024643 60,92.9994812 C60,91.8964981 60.8964981,91 62.0005188,91 C63.1024643,91 64,91.8964981 64,92.9994812 C64,94.1024643 63.1024643,95 62.0005188,95'
                      id='Fill-79'
                    />
                    <path
                      d='M81.9984436,95 C80.8964981,95 80,94.1024643 80,92.9994812 C80,91.8964981 80.8964981,91 81.9984436,91 C83.1024643,91 84,91.8964981 84,92.9994812 C84,94.1024643 83.1024643,95 81.9984436,95'
                      id='Fill-80'
                    />
                    <path
                      d='M102,95 C100.89834,95 100,94.1024643 100,92.9994812 C100,91.8964981 100.89834,91 102,91 C103.103734,91 104,91.8964981 104,92.9994812 C104,94.1024643 103.103734,95 102,95'
                      id='Fill-81'
                    />
                    <polyline id='Fill-82' points='75 87 13 26 75 26 75 87' />
                  </g>
                </g>
              </g>
            </svg>
            <svg
              className='ml-2 lg:ml-12 mb-2 lg:mb-12 absolute bottom-0 left-0'
              width='104px'
              height='95px'
              viewBox='0 0 104 95'
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
            >
              <g
                id='Work-in-Progress'
                stroke='none'
                strokeWidth={1}
                fill='none'
                fillRule='evenodd'
                opacity='0.122837612'
              >
                <g
                  transform='translate(-206.000000, -596.000000)'
                  fill='#FFFFFF'
                >
                  <g
                    id='Group-5'
                    transform='translate(258.000000, 643.500000) scale(-1, -1) translate(-258.000000, -643.500000) translate(206.000000, 596.000000)'
                  >
                    <path
                      d='M1.99948119,4 C0.897535668,4 0,3.10246433 0,1.99948119 C0,0.896498054 0.897535668,0 1.99948119,0 C3.10350195,0 4,0.896498054 4,1.99948119 C4,3.10246433 3.10350195,4 1.99948119,4'
                      id='Fill-46'
                    />
                    <path
                      d='M22,4 C20.8973029,4 20,3.10246433 20,1.99948119 C20,0.896498054 20.8973029,0 22,0 C23.1037344,0 24,0.896498054 24,1.99948119 C24,3.10246433 23.1037344,4 22,4'
                      id='Fill-47'
                    />
                    <path
                      d='M42,4 C40.8962656,4 40,3.10246433 40,1.99948119 C40,0.896498054 40.8962656,0 42,0 C43.1016598,0 44,0.896498054 44,1.99948119 C44,3.10246433 43.1016598,4 42,4'
                      id='Fill-48'
                    />
                    <path
                      d='M62.0005188,4 C60.8964981,4 60,3.10246433 60,1.99948119 C60,0.896498054 60.8964981,0 62.0005188,0 C63.1024643,0 64,0.896498054 64,1.99948119 C64,3.10246433 63.1024643,4 62.0005188,4'
                      id='Fill-49'
                    />
                    <path
                      d='M81.9984436,4 C80.8964981,4 80,3.10246433 80,1.99948119 C80,0.896498054 80.8964981,0 81.9984436,0 C83.1024643,0 84,0.896498054 84,1.99948119 C84,3.10246433 83.1024643,4 81.9984436,4'
                      id='Fill-50'
                    />
                    <path
                      d='M102,4 C100.89834,4 100,3.10246433 100,1.99948119 C100,0.896498054 100.89834,0 102,0 C103.103734,0 104,0.896498054 104,1.99948119 C104,3.10246433 103.103734,4 102,4'
                      id='Fill-51'
                    />
                    <path
                      d='M1.99948119,22 C0.897535668,22 0,21.1024643 0,19.9994812 C0,18.8964981 0.897535668,18 1.99948119,18 C3.10350195,18 4,18.8964981 4,19.9994812 C4,21.1024643 3.10350195,22 1.99948119,22'
                      id='Fill-52'
                    />
                    <path
                      d='M22,22 C20.8973029,22 20,21.1024643 20,19.9994812 C20,18.8964981 20.8973029,18 22,18 C23.1037344,18 24,18.8964981 24,19.9994812 C24,21.1024643 23.1037344,22 22,22'
                      id='Fill-53'
                    />
                    <path
                      d='M42,22 C40.8962656,22 40,21.1024643 40,19.9994812 C40,18.8964981 40.8962656,18 42,18 C43.1016598,18 44,18.8964981 44,19.9994812 C44,21.1024643 43.1016598,22 42,22'
                      id='Fill-54'
                    />
                    <path
                      d='M62.0005188,22 C60.8964981,22 60,21.1024643 60,19.9994812 C60,18.8964981 60.8964981,18 62.0005188,18 C63.1024643,18 64,18.8964981 64,19.9994812 C64,21.1024643 63.1024643,22 62.0005188,22'
                      id='Fill-55'
                    />
                    <path
                      d='M81.9984436,22 C80.8964981,22 80,21.1024643 80,19.9994812 C80,18.8964981 80.8964981,18 81.9984436,18 C83.1024643,18 84,18.8964981 84,19.9994812 C84,21.1024643 83.1024643,22 81.9984436,22'
                      id='Fill-56'
                    />
                    <path
                      d='M102,22 C100.89834,22 100,21.1024643 100,19.9994812 C100,18.8964981 100.89834,18 102,18 C103.103734,18 104,18.8964981 104,19.9994812 C104,21.1024643 103.103734,22 102,22'
                      id='Fill-57'
                    />
                    <path
                      d='M1.99948119,40 C0.897535668,40 0,39.1026971 0,38 C0,36.8973029 0.897535668,36 1.99948119,36 C3.10350195,36 4,36.8973029 4,38 C4,39.1026971 3.10350195,40 1.99948119,40'
                      id='Fill-58'
                    />
                    <path
                      d='M22,40 C20.8973029,40 20,39.1026971 20,38 C20,36.8973029 20.8973029,36 22,36 C23.1037344,36 24,36.8973029 24,38 C24,39.1026971 23.1037344,40 22,40'
                      id='Fill-59'
                    />
                    <path
                      d='M42,40 C40.8962656,40 40,39.1026971 40,38 C40,36.8973029 40.8962656,36 42,36 C43.1016598,36 44,36.8973029 44,38 C44,39.1026971 43.1016598,40 42,40'
                      id='Fill-60'
                    />
                    <path
                      d='M62.0005188,40 C60.8964981,40 60,39.1026971 60,38 C60,36.8973029 60.8964981,36 62.0005188,36 C63.1024643,36 64,36.8973029 64,38 C64,39.1026971 63.1024643,40 62.0005188,40'
                      id='Fill-61'
                    />
                    <path
                      d='M81.9984436,40 C80.8964981,40 80,39.1026971 80,38 C80,36.8973029 80.8964981,36 81.9984436,36 C83.1024643,36 84,36.8973029 84,38 C84,39.1026971 83.1024643,40 81.9984436,40'
                      id='Fill-62'
                    />
                    <path
                      d='M102,40 C100.89834,40 100,39.1026971 100,38 C100,36.8973029 100.89834,36 102,36 C103.103734,36 104,36.8973029 104,38 C104,39.1026971 103.103734,40 102,40'
                      id='Fill-63'
                    />
                    <path
                      d='M1.99948119,59 C0.897535668,59 0,58.1026971 0,57 C0,55.8973029 0.897535668,55 1.99948119,55 C3.10350195,55 4,55.8973029 4,57 C4,58.1026971 3.10350195,59 1.99948119,59'
                      id='Fill-64'
                    />
                    <path
                      d='M22,59 C20.8973029,59 20,58.1026971 20,57 C20,55.8973029 20.8973029,55 22,55 C23.1037344,55 24,55.8973029 24,57 C24,58.1026971 23.1037344,59 22,59'
                      id='Fill-65'
                    />
                    <path
                      d='M42,59 C40.8962656,59 40,58.1026971 40,57 C40,55.8973029 40.8962656,55 42,55 C43.1016598,55 44,55.8973029 44,57 C44,58.1026971 43.1016598,59 42,59'
                      id='Fill-66'
                    />
                    <path
                      d='M62.0005188,59 C60.8964981,59 60,58.1026971 60,57 C60,55.8973029 60.8964981,55 62.0005188,55 C63.1024643,55 64,55.8973029 64,57 C64,58.1026971 63.1024643,59 62.0005188,59'
                      id='Fill-67'
                    />
                    <path
                      d='M81.9984436,59 C80.8964981,59 80,58.1026971 80,57 C80,55.8973029 80.8964981,55 81.9984436,55 C83.1024643,55 84,55.8973029 84,57 C84,58.1026971 83.1024643,59 81.9984436,59'
                      id='Fill-68'
                    />
                    <path
                      d='M102,59 C100.89834,59 100,58.1026971 100,57 C100,55.8973029 100.89834,55 102,55 C103.103734,55 104,55.8973029 104,57 C104,58.1026971 103.103734,59 102,59'
                      id='Fill-69'
                    />
                    <path
                      d='M1.99948119,77 C0.897535668,77 0,76.1026971 0,75 C0,73.8973029 0.897535668,73 1.99948119,73 C3.10350195,73 4,73.8973029 4,75 C4,76.1026971 3.10350195,77 1.99948119,77'
                      id='Fill-70'
                    />
                    <path
                      d='M22,77 C20.8973029,77 20,76.1026971 20,75 C20,73.8973029 20.8973029,73 22,73 C23.1037344,73 24,73.8973029 24,75 C24,76.1026971 23.1037344,77 22,77'
                      id='Fill-71'
                    />
                    <path
                      d='M42,77 C40.8962656,77 40,76.1026971 40,75 C40,73.8973029 40.8962656,73 42,73 C43.1016598,73 44,73.8973029 44,75 C44,76.1026971 43.1016598,77 42,77'
                      id='Fill-72'
                    />
                    <path
                      d='M62.0005188,77 C60.8964981,77 60,76.1026971 60,75 C60,73.8973029 60.8964981,73 62.0005188,73 C63.1024643,73 64,73.8973029 64,75 C64,76.1026971 63.1024643,77 62.0005188,77'
                      id='Fill-73'
                    />
                    <path
                      d='M81.9984436,77 C80.8964981,77 80,76.1026971 80,75 C80,73.8973029 80.8964981,73 81.9984436,73 C83.1024643,73 84,73.8973029 84,75 C84,76.1026971 83.1024643,77 81.9984436,77'
                      id='Fill-74'
                    />
                    <path
                      d='M102,77 C100.89834,77 100,76.1026971 100,75 C100,73.8973029 100.89834,73 102,73 C103.103734,73 104,73.8973029 104,75 C104,76.1026971 103.103734,77 102,77'
                      id='Fill-75'
                    />
                    <path
                      d='M1.99948119,95 C0.897535668,95 0,94.1024643 0,92.9994812 C0,91.8964981 0.897535668,91 1.99948119,91 C3.10350195,91 4,91.8964981 4,92.9994812 C4,94.1024643 3.10350195,95 1.99948119,95'
                      id='Fill-76'
                    />
                    <path
                      d='M22,95 C20.8973029,95 20,94.1024643 20,92.9994812 C20,91.8964981 20.8973029,91 22,91 C23.1037344,91 24,91.8964981 24,92.9994812 C24,94.1024643 23.1037344,95 22,95'
                      id='Fill-77'
                    />
                    <path
                      d='M42,95 C40.8962656,95 40,94.1024643 40,92.9994812 C40,91.8964981 40.8962656,91 42,91 C43.1016598,91 44,91.8964981 44,92.9994812 C44,94.1024643 43.1016598,95 42,95'
                      id='Fill-78'
                    />
                    <path
                      d='M62.0005188,95 C60.8964981,95 60,94.1024643 60,92.9994812 C60,91.8964981 60.8964981,91 62.0005188,91 C63.1024643,91 64,91.8964981 64,92.9994812 C64,94.1024643 63.1024643,95 62.0005188,95'
                      id='Fill-79'
                    />
                    <path
                      d='M81.9984436,95 C80.8964981,95 80,94.1024643 80,92.9994812 C80,91.8964981 80.8964981,91 81.9984436,91 C83.1024643,91 84,91.8964981 84,92.9994812 C84,94.1024643 83.1024643,95 81.9984436,95'
                      id='Fill-80'
                    />
                    <path
                      d='M102,95 C100.89834,95 100,94.1024643 100,92.9994812 C100,91.8964981 100.89834,91 102,91 C103.103734,91 104,91.8964981 104,92.9994812 C104,94.1024643 103.103734,95 102,95'
                      id='Fill-81'
                    />
                    <polyline id='Fill-82' points='75 87 13 26 75 26 75 87' />
                  </g>
                </g>
              </g>
            </svg>
            <div className='w-11/12 sm:w-2/3 mb-5 sm:mb-10'>
              <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white font-bold leading-tight'>
                Gagnez du temps dans la gestion de votre parc automobile
              </h1>
              <h1 className='text-base lg:text-lg tracking-wide leading-9 mt-2 lg:mt-6 text-white text-center'>
              Un lavage écologique et une remontée de l'état de vos véhicules en temps réel depuis votre bureau, alliant propreté et sécurité
              </h1>
            </div>
            <div className='flex justify-center items-center mb-10 sm:mb-20'>
              <div>
                <a href="https://calendly.com/contact-premiumcarwash/demo-nettoyage" target='_blank'>
                  <button className='hover:text-white hover:bg-transparent hover:border-white border bg-white transition duration-150 ease-in-out focus:outline-none  rounded text-teal-light px-4 sm:px-8 py-1 sm:py-3 text-sm'>
                    Réserver une démo gratuite
                  </button>
                </a>
                {/* <button className='hover:bg-white hover:text-indigo-600 hover:border-indigo-600 ml-3 sm:ml-6 bg-transparent transition duration-150 ease-in-out focus:outline-none hover:bg-teal-light-800 rounded border border-white text-white px-4 sm:px-8 py-1 sm:py-3 text-sm'>
                  Learn More
                </button> */}
              </div>
            </div>
          </div>
          <div className='container mx-auto h-full flex justify-center md:-mt-56 -mt-20 sm:-mt-40'>
            <div className='relative sm:w-2/3 w-11/12'>
              <img
                ref={absoluteDivHeight}
                src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_SMARTLOOK_CLOUDINARY_NAME}/image/upload/v1637164965/Premium%20car%20Wash/ecccopartners.jpg`}
                alt
                className='absolute'
                onLoad={handleLoadImage}
              />
              <div className='blankDiv'></div>
            </div>
          </div>
        </div>
      </div>
      <div className='relative pt-16 px-4'>
        <img
          src='https://cdn.tuk.dev/assets/components/111220/fs-22/background.png'
          className='absolute top-0 left-0 h-image flex-no-shrink flex -mt-2 z-0'
        />
        <div className='w-full lg:flex-row flex flex-col-reverse items-center justify-between mx-auto container relative z-20 xl:px-0 px-4'>
          <div className='lg:w-1/2 mt-16 lg:flex'>
            <div className='flex flex-col'>
              <div className='rounded mb-8 bg-white px-4 xl:px-8 shadow-md'>
                <div className='mt-8'>
                  <svg
                    width={80}
                    height={80}
                    viewBox='0 0 80 80'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M49.1666 32.6666V27.1666C49.1666 26.6804 48.9734 26.214 48.6296 25.8702C48.2858 25.5264 47.8195 25.3333 47.3333 25.3333H28.9999C28.0275 25.3333 27.0948 25.7196 26.4072 26.4072C25.7196 27.0948 25.3333 28.0275 25.3333 28.9999M25.3333 28.9999C25.3333 29.9724 25.7196 30.905 26.4072 31.5926C27.0948 32.2803 28.0275 32.6666 28.9999 32.6666H50.9999C51.4862 32.6666 51.9525 32.8597 52.2963 33.2036C52.6401 33.5474 52.8333 34.0137 52.8333 34.4999V39.9999M25.3333 28.9999V50.9999C25.3333 51.9724 25.7196 52.905 26.4072 53.5926C27.0948 54.2803 28.0275 54.6666 28.9999 54.6666H50.9999C51.4862 54.6666 51.9525 54.4734 52.2963 54.1296C52.6401 53.7858 52.8333 53.3195 52.8333 52.8332V47.3333'
                      stroke='#1A202C'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M54.6667 40V47.3333H47.3334C46.361 47.3333 45.4283 46.947 44.7407 46.2594C44.0531 45.5718 43.6667 44.6391 43.6667 43.6667C43.6667 42.6942 44.0531 41.7616 44.7407 41.0739C45.4283 40.3863 46.361 40 47.3334 40H54.6667Z'
                      stroke='#1A202C'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <circle cx={40} cy={40} r='39.5' stroke='#1A202C' />
                  </svg>
                </div>
                <div>
                  <h1 className='font-semibold text-2xl f-m-m pt-10'>
                    Lavage écologique
                    <br />
                    Sans Eau
                  </h1>
                  <p className='text-base font-normal f-m-m leading-loose py-8'>
                  Nos équipes interviennent sur tout le territoire français pour nettoyer, lustrer et désinfecter les véhicules de vos flottes et maintenir leur état neuf.
                  </p>
                </div>
              </div>
              <div className='rounded bg-teal-light px-4 xl:px-8 mb-8 lg:mb-0 shadow-md'>
                <div className='mt-8'>
                  <svg
                    width={80}
                    height={81}
                    viewBox='0 0 80 81'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M30.8333 38.1666V52.8333C30.8333 53.3195 30.6402 53.7858 30.2964 54.1296C29.9525 54.4734 29.4862 54.6666 29 54.6666H25.3333C24.8471 54.6666 24.3808 54.4734 24.037 54.1296C23.6932 53.7858 23.5 53.3195 23.5 52.8333V39.9999C23.5 39.5137 23.6932 39.0474 24.037 38.7036C24.3808 38.3597 24.8471 38.1666 25.3333 38.1666H30.8333ZM30.8333 38.1666C32.7783 38.1666 34.6435 37.394 36.0188 36.0187C37.3941 34.6434 38.1667 32.7782 38.1667 30.8333V28.9999C38.1667 28.0275 38.553 27.0948 39.2406 26.4072C39.9282 25.7196 40.8609 25.3333 41.8333 25.3333C42.8058 25.3333 43.7384 25.7196 44.4261 26.4072C45.1137 27.0948 45.5 28.0275 45.5 28.9999V38.1666H51C51.9725 38.1666 52.9051 38.5529 53.5927 39.2405C54.2804 39.9282 54.6667 40.8608 54.6667 41.8333L52.8333 50.9999C52.5697 52.1246 52.0695 53.0904 51.4082 53.7517C50.7469 54.413 49.9602 54.7341 49.1667 54.6666H36.3333C34.8746 54.6666 33.4757 54.0871 32.4442 53.0557C31.4128 52.0242 30.8333 50.6253 30.8333 49.1666'
                      stroke='white'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <circle cx={40} cy='40.0044' r='39.5' stroke='white' />
                  </svg>
                </div>
                <div>
                  <h1 className='text-white font-semibold text-2xl f-m-m pt-10'>
                    Notre Application <br />
                  </h1>
                  <p className='text-base text-white font-normal f-m-m leading-loose py-8'>
                    Grâce à notre application obtenez une vérification visuelle
                    en temps réel de vos véhicules depuis l'ordinateur de
                    votre bureau ou depuis votre smartphone.
                  </p>
                </div>
              </div>
              <div className='rounded bg-white px-4 xl:px-8 mt-8 lg:mb-0 shadow-md'>
                <div className='mt-8'>
                  <svg
                    width={80}
                    height={81}
                    viewBox='0 0 80 81'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M30.8333 38.1666V52.8333C30.8333 53.3195 30.6402 53.7858 30.2964 54.1296C29.9525 54.4734 29.4862 54.6666 29 54.6666H25.3333C24.8471 54.6666 24.3808 54.4734 24.037 54.1296C23.6932 53.7858 23.5 53.3195 23.5 52.8333V39.9999C23.5 39.5137 23.6932 39.0474 24.037 38.7036C24.3808 38.3597 24.8471 38.1666 25.3333 38.1666H30.8333ZM30.8333 38.1666C32.7783 38.1666 34.6435 37.394 36.0188 36.0187C37.3941 34.6434 38.1667 32.7782 38.1667 30.8333V28.9999C38.1667 28.0275 38.553 27.0948 39.2406 26.4072C39.9282 25.7196 40.8609 25.3333 41.8333 25.3333C42.8058 25.3333 43.7384 25.7196 44.4261 26.4072C45.1137 27.0948 45.5 28.0275 45.5 28.9999V38.1666H51C51.9725 38.1666 52.9051 38.5529 53.5927 39.2405C54.2804 39.9282 54.6667 40.8608 54.6667 41.8333L52.8333 50.9999C52.5697 52.1246 52.0695 53.0904 51.4082 53.7517C50.7469 54.413 49.9602 54.7341 49.1667 54.6666H36.3333C34.8746 54.6666 33.4757 54.0871 32.4442 53.0557C31.4128 52.0242 30.8333 50.6253 30.8333 49.1666'
                      stroke='#1A202C'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <circle cx={40} cy='40.0044' r='39.5' stroke='#1A202C' />
                  </svg>
                </div>
                <div>
                  <h1 className='font-semibold text-2xl f-m-m pt-10'>
                    Des Alertes <br />
                    Pour réagir plus vite
                  </h1>
                  <p className='text-base font-normal f-m-m leading-loose py-8'>
                  Soyez alerté des niveaux des fluides, de la pression et de l'usure des pneus, du voyant moteur, du niveau de l'adblue, des feux, etc... Tous ces points vous permettront d'anticiper d'éventuelle panne ou problème de sécurité suite à un mauvais entretien.
                  </p>
                </div>
              </div>
            </div>
            <div className='flex flex-col lg:ml-10 ml-0 lg:mt-10 mt-0'>
              <div className='rounded bg-white lg:mt-20 mt-0 px-4 xl:px-8 box-shadow-light'>
                <div className='mt-8'>
                  <svg
                    width={80}
                    height={80}
                    viewBox='0 0 80 80'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M40.0002 50.5417L28.6849 56.4909L30.8464 43.8904L21.6797 34.9676L34.3297 33.1342L39.9874 21.6704L45.645 33.1342L58.295 34.9676L49.1284 43.8904L51.2899 56.4909L40.0002 50.5417Z'
                      stroke='#1A202C'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <circle cx={40} cy={40} r='39.5' stroke='#1A202C' />
                  </svg>
                </div>
                <div>
                  <h1 className='font-semibold text-2xl f-m-m pt-10 text-base'>
                    Vos Factures <br />
                  </h1>
                  <p className='text-base font-normal f-m-m leading-loose py-8'>
                    Vos factures se créeront et seront exportables directement depuis l'application pour un gain de temps pour une gestion locale ou nationale.
                  </p>
                </div>
              </div>
              <div className='rounded bg-white lg:mt-8 mt-8 px-4 xl:px-8 shadow-md'>
                <div className='mt-8'>
                  <svg
                    width={80}
                    height={80}
                    viewBox='0 0 80 80'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M49.1666 32.6666V27.1666C49.1666 26.6804 48.9734 26.214 48.6296 25.8702C48.2858 25.5264 47.8195 25.3333 47.3333 25.3333H28.9999C28.0275 25.3333 27.0948 25.7196 26.4072 26.4072C25.7196 27.0948 25.3333 28.0275 25.3333 28.9999M25.3333 28.9999C25.3333 29.9724 25.7196 30.905 26.4072 31.5926C27.0948 32.2803 28.0275 32.6666 28.9999 32.6666H50.9999C51.4862 32.6666 51.9525 32.8597 52.2963 33.2036C52.6401 33.5474 52.8333 34.0137 52.8333 34.4999V39.9999M25.3333 28.9999V50.9999C25.3333 51.9724 25.7196 52.905 26.4072 53.5926C27.0948 54.2803 28.0275 54.6666 28.9999 54.6666H50.9999C51.4862 54.6666 51.9525 54.4734 52.2963 54.1296C52.6401 53.7858 52.8333 53.3195 52.8333 52.8332V47.3333'
                      stroke='#1A202C'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M54.6667 40V47.3333H47.3334C46.361 47.3333 45.4283 46.947 44.7407 46.2594C44.0531 45.5718 43.6667 44.6391 43.6667 43.6667C43.6667 42.6942 44.0531 41.7616 44.7407 41.0739C45.4283 40.3863 46.361 40 47.3334 40H54.6667Z'
                      stroke='#1A202C'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <circle cx={40} cy={40} r='39.5' stroke='#1A202C' />
                  </svg>
                </div>
                <div>
                  <h1 className='font-semibold text-2xl f-m-m pt-10'>
                    Facile et évolutif<br />
                  </h1>
                  <p className='text-base font-normal f-m-m leading-loose py-8'>
                  Notre logiciel ne nécessite pas de formation et nous utilisons les remontées des gestionnaires de flotte pour mettre à jour notre logiciel. Mise à jour ne nécessitant aucune intervention de votre part étant un software-as-a-service (saas).
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='lg:w-1/2 lg:pl-40 xl:pl-56'>
            <h1 className='lg:text-5xl text-3xl f-m-w text-teal-light font-bold'>
              Pourquoi vous devriez nous choisir ?
            </h1>
            <p className='lg:text-base text-sm f-m-m leading-loose mt-3 mb-8'>
            Nous proposons un service simple et efficace de lavage automobile sur site avec un contrôle visuel de sécurité du véhicule.
Vous aussi, réduisez de 90 % vos aléas sur votre flotte de véhicules.
            </p>
            <button className=' hover:opacity-90 text-base font-bold bg-teal-light rounded f-m-m md:py-4 py-2 px-4 md:px-8 foucus:outline-none text-white'>
              Réserver une démo gratuite
            </button>
          </div>
        </div>
      </div>
      <style>
        {`.blankDiv {
                height:${absolHeight}px;
              }
              `}
      </style>
      <div className="flex items-center justify-center py-12">
            <div className="mx-4 md:w-10/12 flex items-center justify-center relative bg-teal">
                {/* <img className="hidden lg:block w-full h-full absolute rounded-md" src="https://i.ibb.co/hRFzFwd/Group-184.png" alt="background" />
                <img className="hidden sm:block lg:hidden w-full h-full absolute rounded-md" src="https://i.ibb.co/nBfFP0h/i-Pad-mini-01-1.png" alt="background" />
                <img className="sm:hidden w-full h-full absolute rounded-md" src="https://i.ibb.co/d5F32YJ/bg-small.png" alt="background" /> */}
                <div className="relative z-10 w-full">
                    <div className="flex flex-col justify-start py-8 lg:px-10 md:px-6 px-4">
                        <h1 className="lg:text-5xl md:text-4xl text-2xl font-semibold text-white">Construisons ensemble la dernière appli de gestion de flotte</h1>
                        <p className="pt-6 pb-10 md:pt-4 md:pb-12 text-base font-medium leading-none text-gray-200">Rejoignez notre communauté composée de contrôleur de gestion et de gestionnaire de flotte. En tant que premiers utilisateurs gagnez 1 an d'utilisation gratuite de la licence.</p>
                        <div className="pb-6 md:pb-4 flex flex-col justify-center items-center md:flex-row md:justify-start gap-6 md:gap-4">
                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="jeandujardin@gmail.com" className="placeholder-gray-300 border rounded-md p-4 h-12 w-80 focus:outline-none " />
                            <button onClick={submit} className="flex items-center justify-center w-80 md:w-28 h-12 bg-pastel rounded-md text-white font-medium text-base focus:outline-none focus:ring-2 focus:ring-teal-light focus:ring-opacity-50 hover:bg-teal-light">Devenir bêta testeur</button>
                        </div>
                        <p className="text-base font-medium leading-none text-gray-200">
                            On ne vous spamera jamais, vous pouvez immédiatement vous désinscrire.{" "}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <ToastContainer/>
    </>
  )
}

export default entreprises
