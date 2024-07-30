import React from 'react'
import Banner from './banner'
import Card from './Card'
import ProductCard from './ProductCard'
import About from './About'
import OurVision from './OurVision'
import Enjoy from './Enjoy'

const Home = () => {
    return (
        <div>
            <Banner />
            <Card />
            <ProductCard />

            <About />
            <OurVision />
            <Enjoy />
        </div>
    )
}

export default Home
