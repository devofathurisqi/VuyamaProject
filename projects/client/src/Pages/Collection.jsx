import React from 'react'
import { Box, Text } from "@chakra-ui/react"
import Navbar from '../Component/Navbar'
import CollectionProduct from '../Component/ComponentCollection/CollectionProduct'
import Footer from "../Component/Footer"

const Collection = () => {
    return (
        <Box>
            <Navbar />
            <CollectionProduct/>
            <Footer/>
        </Box>
    )
}

export default Collection
