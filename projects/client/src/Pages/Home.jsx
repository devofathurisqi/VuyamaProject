import React from 'react'
import { Box } from "@chakra-ui/react"

import Navbar from '../Component/Navbar'
import Caraousel from '../Component/Caraousel'
import WhyFuyama from '../Component/WhyFuyama'
import ScapperIg from '../Component/ScapperIg'
import Products from '../Component/Products'
import Footer from '../Component/Footer'

const Home = () => {
    return (
        <Box>
            <Navbar />
            <Caraousel/>
            <WhyFuyama/>
            <ScapperIg/>
            <Products/>
            <Footer/>
        </Box>
    )
}

export default Home
