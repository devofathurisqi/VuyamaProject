import React, { useState, useEffect } from 'react'
import { Box, Center, Flex, Image, useMediaQuery, Text } from "@chakra-ui/react"
import axios from "axios"
import Slider from 'react-slick'
import '../Style/Products.css';

const Products = () => {
    const [data, setData] = useState([])
    const [dataForMobile, setDataForMobile] = useState([])

    const getData = async () => {
        try {
            const response = await axios.get("http://localhost:2000/product/get")
            setData(response.data)
        } catch (err) {
            console.log(err)
        }
    }

    const getDataForMobile = async () => {
        try {
            const response = await axios.get("http://localhost:2000/product/getForMobile")
            setDataForMobile(response.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getData()
        getDataForMobile()
    }, [])

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        // centerMode: true,
        // variableWidth: true // Add variableWidth setting
    }

    const [isMobile] = useMediaQuery('(max-width: 481px)');

    return (
        <Box>
            {isMobile !== true ? (
                <Box marginTop="50px" marginBottom="10px" overflow="hidden" width="100%">
                    <Slider {...settings} className="slider"> {/* Add custom class name */}
                        {data.map((item, index) => (
                            <Box key={index}>
                                <Image
                                    src={'http://localhost:2000/public/'+item.image}
                                />
                            </Box>
                        ))}
                    </Slider>
                </Box>
            ) : (
                <Box width="100%" marginTop="70px">
                    <Flex flexWrap="wrap" justifyContent="center" alignItems="center" gap="20px">
                        {dataForMobile.map((item, index) => (
                            <Box key={index}>
                                <Image src={'http://localhost:2000/public/'+item.image} width="150px" height="170px" borderRadius="5px" />
                                <Text fontSize="12px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal" fontWeight="500">{item.name}</Text>
                            </Box>
                        ))}
                    </Flex>
                </Box>
            )}
        </Box>
    )
}

export default Products
