import React from 'react'
import { Box, Flex, Image, Text, useMediaQuery, useToast } from "@chakra-ui/react"
import VuyamaLogo from "../Asset/VUYAMA-Logo-White.png"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setOpenModal, setLogout } from '../Redux/LoginAdmin'
import LoginAdmin from './LoginAdmin'


const Footer = () => {
    const toast = useToast()
    //for responsive website
    const [isMobile] = useMediaQuery('(max-width: 481px)');
    const dispatch = useDispatch()
    const usernameAdmin = localStorage.getItem("username");
    console.log(usernameAdmin)

    const logout = () => {
        localStorage.removeItem("username");
        toast({
            title: 'Logout success.',
            description: `Jangan lupa kembali lagi ya!`,
            status: 'success',
            duration: 5000,
            isClosable: true,
        })
        window.location.reload()
    }

    return (
        <Box>
            {isMobile !== true ? (
                <Box bg="#4D6073" width="100%" height="280px" marginTop="50px" p={20}>
                    <Flex justifyContent="center" alignItems="center" gap="140px">
                        <Flex flexDirection="column" gap="50px" height="150px">
                            <Image src={VuyamaLogo} width="256px" height="70px" />
                            <Text fontWeight="300px" fontSize="10px" lineHeight="10.88px" color="white" textAlign="center">© VUYAMA 2023 All rights reserved</Text>
                        </Flex>
                        <Flex flexDirection="column" gap="30px">
                            <Text fontWeight="600" fontSize="14px" lineHeight="15.23px" color="white">About</Text>
                            <Box>
                                <Text fontWeight="300" fontSize="14px" lineHeight="15.23px" color="white">Contact Us</Text>
                                <Link to="/term&condition">
                                    <Text fontWeight="300" fontSize="14px" lineHeight="15.23px" color="white" marginTop="5px">Term & Condition</Text>
                                </Link>
                            </Box>
                        </Flex>
                        <Flex flexDirection="column" gap="30px">
                            <Text fontWeight="600" fontSize="14px" lineHeight="15.23px" color="white">Customer Support</Text>
                            <Box>
                                <Text fontWeight="300" fontSize="14px" lineHeight="15.23px" color="white">Reseller Program</Text>
                                <Link to="/faq">
                                    <Text fontWeight="300" fontSize="14px" lineHeight="15.23px" color="white" marginTop="5px">FAQ</Text>
                                </Link>
                            </Box>
                        </Flex>
                        <Flex flexDirection="column" gap="30px" marginTop="19px">
                            <Text fontWeight="600" fontSize="14px" lineHeight="15.23px" color="white">Social</Text>
                            <Box>
                                <Text fontWeight="300" fontSize="14px" lineHeight="15.23px" color="white">Shopee</Text>
                                <Text fontWeight="300" fontSize="14px" lineHeight="15.23px" color="white" marginTop="5px">Instagram</Text>
                                <Text fontWeight="300" fontSize="14px" lineHeight="15.23px" color="white" marginTop="5px">Tiktok</Text>
                                <Text fontWeight="300" fontSize="14px" lineHeight="15.23px" color="white" marginTop="5px" cursor="pointer" onClick={() => dispatch(setOpenModal())} display={usernameAdmin !== null ? "none" : "block"} >Login Admin</Text>
                                <Text fontWeight="300" fontSize="14px" lineHeight="15.23px" color="white" marginTop="5px" cursor="pointer" onClick={logout} display={usernameAdmin !== null ? "block" : "none"}>Logout</Text>
                            </Box>
                        </Flex>
                    </Flex>
                </Box>
            ) : (
                <Box width="100%" height="420px" bg="#4D6073" marginTop="60px">
                    <Flex justifyContent="center" alignItems="center" flexDirection="column" gap="30px" paddingTop="20px">
                        <Text fontWeight="300" fontSize="14px" lineHeight="15.23px" color="#FFFFFF" letterSpacing="0.1em">Contact Us</Text>
                        <Text fontWeight="300" fontSize="14px" lineHeight="15.23px" color="#FFFFFF" letterSpacing="0.1em">Term & Condition</Text>
                        <Text fontWeight="300" fontSize="14px" lineHeight="15.23px" color="#FFFFFF" letterSpacing="0.1em">FAQ</Text>
                        <Text fontWeight="300" fontSize="14px" lineHeight="15.23px" color="#FFFFFF" letterSpacing="0.1em">Shopee</Text>
                        <Text fontWeight="300" fontSize="14px" lineHeight="15.23px" color="#FFFFFF" letterSpacing="0.1em">Instagram</Text>
                        <Text fontWeight="300" fontSize="14px" lineHeight="15.23px" color="#FFFFFF" letterSpacing="0.1em">TikTok</Text>
                        <Text fontWeight="300" fontSize="14px" lineHeight="15.23px" color="white" display={usernameAdmin !== null ? "none" : "block"} 
                            letterSpacing="0.1em" onClick={() => dispatch(setOpenModal())}>Login Admin</Text>
                        <Text fontWeight="300" fontSize="14px" lineHeight="15.23px" color="white" display={usernameAdmin !== null ? "block" : "none"}
                            letterSpacing="0.1em" onClick={logout}>Logout</Text>
                        <Text fontWeight="300" fontSize="10px" lineHeight="15.23px" color="#FFFFFF" letterSpacing="0.1em" marginTop="45px">© VUYAMA 2023 All rights reserved </Text>
                    </Flex>
                </Box>
            )}
            <LoginAdmin />
        </Box>
    )
}

export default Footer
