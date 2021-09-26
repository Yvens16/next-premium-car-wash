import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { firebaseAnalytics } from '../firebase/firebase'
import Head from 'next/head'
import CarChoice from '../components/prices/CarChoice'
import Forfaits from '../components/prices/forfait'
import Discount from '../components/prices/discount'
import prices from '../utils/pricev2.json'


export default function Tarifs () {
  const [car, setCar] = useState({})
  const [pageIndex, setPageIndex] = useState(0)
  const [forfait, setForfait] = useState('or')
  const [priceInter, setPriceInter] = useState()
  const [priceExter, setPriceExter] = useState()
  const [priceInterExter, setPriceInterExter] = useState()
  const [whichDiscountPrice, setWhichDiscountPrice] = useState();
  const [affiliateInfo, setAffiliateInfo]  = useState(null)
  const scrollRef = useRef()
  const addNewCar = newCar => {
    setCar(newCar)
    setForfait('or')
    setPriceInter(newCar['or']['inter'])
    setPriceExter(newCar['or']['exter'])
    setPriceInterExter(newCar['or']['both'])
    setPageIndex(1)
  }
  const removeCar = index => {
    const newStateCars = car
    newStateCars.splice(index, 1)
    setCar(newStateCars)
  }
  const chooseCarType = carType => {
    if (process.env.NODE_ENV === 'production') {
      firebaseAnalytics().logEvent('select_car_type', { name: carType });
    }
    const newCar = prices[carType]
    addNewCar(newCar)
  }

  const logBoughtEvent = () => {
    if (process.env.NODE_ENV === 'production') {
      firebaseAnalytics().logEvent('select_forfait_to_be_bought', { name: forfait });
    }
  }

  const selectForfait = selectedForfait => {
    setForfait(selectedForfait)
    scrollRef.current.scrollIntoView({ behavior: 'smooth' })
    setPriceInter(car[selectedForfait]['inter'])
    setPriceExter(car[selectedForfait]['exter'])
    setPriceInterExter(car[selectedForfait]['both'])
  }

  const goToDiscount = (which) => {
    setWhichDiscountPrice(which);
    if (process.env.NODE_ENV === 'production') {
      firebaseAnalytics().logEvent('select_forfait', { name: forfait });
    }
    setPageIndex(2)
  }
  const goBack = () => {
    let newIndex = pageIndex - 1
    setPageIndex(newIndex)
  }

  useEffect(() => {
    if (
      new URLSearchParams(window.location.search).has('invitedby') &&
      new URLSearchParams(window.location.search).has('phoneNumber')
    ) {
      setAffiliateInfo({
        name: new URLSearchParams(window.location.search).get('invitedby'),
        phoneNumber : new URLSearchParams(window.location.search).get('phoneNumber')
      })
    }
  }, [])

  let choiceComponent = <CarChoice chooseCar={chooseCarType} />
  let forfaitComponent = (
    <Forfaits
      scrollRef={scrollRef}
      selectForfait={selectForfait}
      selectedForfait={forfait}
      priceInter={priceInter}
      goToDiscount={goToDiscount}
      goBack={goBack}
      priceExter={priceExter}
      priceInterExter={priceInterExter}
      ville={"Val d'oise (95) et Villes limitrophes"}
    />
  )
  let discountComponent = <Discount
  priceInter={priceInter} 
  priceExter={priceExter} priceInterExter={priceInterExter}
  goBack={goBack} affiliateInfo={affiliateInfo} logBoughtEvent={logBoughtEvent} whichDiscountPrice={whichDiscountPrice}/>
  return (
    <main>
      {console.log(affiliateInfo)}
      <Head>
        <title>Vous aussi profitez des tarifs de pro</title>
        <meta
          name='description'
          content='Choisissez votre modèle de voiture pour avoir le prix'
        />
      </Head>
      {pageIndex === 0 ? choiceComponent : null}
      {pageIndex === 1 ? forfaitComponent : null}
      {pageIndex === 2 ? discountComponent : null}
    </main>
  )
}