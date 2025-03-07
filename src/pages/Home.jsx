import React from 'react'
import Hero from '../component/Hero'
import SampleProduct from '../component/SampleProduct'
import NewArrival from '../component/NewArrival'
import CollectionHouses from '../component/CollectionHouses'

const Home = () => {
  return (
    <div>
        <Hero/>
        <SampleProduct/>
        <NewArrival/>
        <CollectionHouses/>
    </div>
  )
}

export default Home