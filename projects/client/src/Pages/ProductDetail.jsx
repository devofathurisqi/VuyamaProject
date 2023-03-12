import React, { useState, useEffect } from 'react'
import { Box, Flex, Image, Text, Icon, useMediaQuery } from "@chakra-ui/react"
import axios from "axios"
import { useParams } from "react-router-dom"
import LogoWa from "../Asset/logo-wa.png"

//import component
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'


//import icons

import { MdNavigateNext, MdNavigateBefore } from "react-icons/md"

const ProductDetail = () => {
    const { id } = useParams()
    const currentId = parseInt(id)
    const [data, setData] = useState([])
    const [prev, setPrev] = useState(true)
    const [next, setNext] = useState(true)
    const [checkId, setCheckId] = useState([])
    const [changeId, setChangeId] = useState(currentId)
    const [productName, setProductName] = useState("Baju");
    const [productPrice, setProductPrice] = useState("Rp 100.000");
    const [productImage, setProductImage] = useState("")
    const [productQuantity, setProductQuantity] = useState("1");
    const [isMobile] = useMediaQuery('(max-width: 481px)');


    const message = `Saya ingin memesan ${productName} seharga ${productPrice} sebanyak ${productQuantity} \n\n${productImage}`;
    const phone = "6282113294501";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    const handleClick = (item) => {
        console.log(item)
        setProductName(item.name)
        setProductPrice(item.price)
        setProductImage(item.image)
        window.open(url, "_blank");
    };

    const getDataById = async () => {
        try {
            const response = await axios.get(`http://localhost:2000/product/productdetail/${changeId}`)
            setData(response.data.Products)
            const checkIndexId = response.data.checkId
            setCheckId(checkIndexId)
            let index = checkIndexId.indexOf(changeId)
            if (index >= checkIndexId.length - 1) {
                setNext(false)
                setPrev(true)
            } else if (index <= 0) {
                setPrev(false)
            } else if (index <= checkIndexId.length - 1) {
                setNext(true)
                setPrev(true)
            }
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getDataById()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [changeId])

    const nextSlideProduct = () => {
        let nextSlide = checkId.indexOf(changeId) + 1
        setChangeId(checkId[nextSlide])

    }
    const prevSlideProduct = () => {
        let prevSlide = checkId.indexOf(changeId) - 1
        setChangeId(checkId[prevSlide])

    }

    return (
        <Box>
            <Navbar />
            {data && data.map((item, index) => (
                isMobile !== true ? (
                    <Box width="85%" height="540px" margin="auto" marginTop="20px">
                        <Box>
                            <Flex gap="5px">
                                <Text fontWeight="300" fontSize="12px" lineHeight="13.06px"
                                    marginBottom="20px">
                                    VUYAMA {">"} Collection {">"}
                                </Text>
                                <Text fontWeight="600" fontSize="12px" lineHeight="13.06px">{item.name}</Text>
                            </Flex>
                            <Flex key={index}>
                                <Flex flex="1" height="500px" position="relative">
                                    <Image src={'http://localhost:2000/public/'+item.image} width="90%" height="100%" borderRadius="5px" />
                                    <Box display={prev ? "block" : "none"}>
                                        <Icon as={MdNavigateBefore} color="white" position="absolute" left="2px" top="200px"
                                            boxSize="62px" cursor="pointer" onClick={prevSlideProduct} />
                                    </Box>
                                    <Box display={next ? "block" : "none"}>
                                        <Icon as={MdNavigateNext} color="white" position="absolute" right="60px" top="200px"
                                            boxSize="62px" cursor="pointer" onClick={nextSlideProduct} />
                                    </Box>
                                </Flex>
                                <Flex flex="1" height="500px" flexDirection="column" marginLeft="20px">
                                    <Text fontWeight="600" fontSize="24px" lineHeight="22px" marginTop="60px">{item.name}</Text>
                                    <Text fontWeight="300" fontSize="12px" lineHeight="18px" marginTop="20px">{item.description}</Text>
                                    <Text marginTop="60px" fontSize="40px" lineHeight="22px">
                                        {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(item.price)}
                                    </Text>
                                    <Box bg="#128c7E" borderRadius="10px" width="256px" height="40px" marginTop="60px" cursor="pointer" onClick={() => handleClick(item)}>
                                        <Flex justifyContent="center" alignItems="center" paddingTop="6px" gap="10px">
                                            <Image src={LogoWa} />
                                            <Text color="white" fontWeight="300" fontSize="16px" lineHeight="17.41px">Pesan Produk</Text>
                                        </Flex>
                                    </Box>
                                    <Flex justifyContent="space-between" alignItems="center" marginTop="60px">
                                        <Text fontWeight="300" fontSize="10px" lineHeight="18px">Baca lebih lanjut Term & Condition terkait produk.</Text>
                                        <Text fontWeight="300" fontSize="10px" lineHeight="18px">Laporkan</Text>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Box>
                    </Box>
                ) : (
                    <Box width="100%">
                        <Image src={'http://localhost:2000/public/'+item.image} width="100%" height="360px" objectFit="cover" />
                        <Flex marginTop="80px">
                            <Flex flex="1" padding="0 15px">
                                <Flex flexDirection="column" gap="7px">
                                    <Text fontWeight="500" fontSize="18px" lineHeight="22px" letterSpacing="0.05em">{item.name}</Text>
                                    <Text fontWeight="600" fontSize="22px" lineHeight="22px" letterSpacing="0.05em">{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(item.price)}</Text>
                                    <Box width="160px" height="60px" borderRadius="10px" bg="#128C7E" marginTop="20px">
                                        <Flex justifyContent="center" alignItems="center" gap="10px" marginTop="15px">
                                            <Image src={LogoWa} width="28px"/>
                                            <Text color="white" fontWeight="300" fontSize="15px" lineHeight="13px" letterSpacing="0.1em">Pesan Produk</Text>
                                        </Flex>
                                    </Box>
                                    <Text marginTop="20px" fontWeight="400" fontSize="10px" lineHeight="14px" letterSpacing="0.05em" fontStyle="normal">Baca lebih lanjut Term & Condition Terkait Produk</Text>
                                </Flex>
                            </Flex>
                            <Flex flex="1" paddingRight="10px">
                                <Text fontWeight="300" fontSize="12px" letterSpacing="0.05em">{item.description}</Text>
                            </Flex>
                        </Flex>
                    </Box>
                )
            ))}
            <Footer />
        </Box>
    )
}

export default ProductDetail


