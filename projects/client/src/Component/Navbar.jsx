import React, { useEffect, useState } from 'react'
import {
    Box, Image, Flex, Text, Input, InputGroup, InputLeftElement, useMediaQuery,
    Icon, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerBody, DrawerHeader,
    DrawerCloseButton, 
} from "@chakra-ui/react"
import Vuyama_Logo from "../Asset/Vuyama-Logo.png"
import { BsSearch } from "react-icons/bs"
import { Link, useLocation } from "react-router-dom"
import { setQuery, setCategoryFromRedux } from '../Redux/SearchCollection'
import { useDispatch, useSelector } from "react-redux"
import { MdMenu } from "react-icons/md"

const Navbar = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    const query = useSelector((state) => state.SearchCollection.query)
    const categoryIsRun = useSelector((state) => state.SearchCollection.categoryIsRun)
    const [searchCollection, setSearchCollection] = useState("")
    const { isOpen, onOpen, onClose } = useDisclosure()

    const searchData = (e) => {
        e.preventDefault()
        // dispatch(setCategoryFromRedux(false))
        dispatch(setQuery(searchCollection))
    }

    const categoryRun = () => {
        if (categoryIsRun === true) {
            setSearchCollection("")
        } else if (searchCollection !== "") {
            dispatch(setCategoryFromRedux(false))
        }
    }

    useEffect(() => {
        categoryRun()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categoryIsRun])

    //for responsive website
    const [isMobile] = useMediaQuery('(max-width: 481px)');


    return (
        <Box position='sticky' top={0} zIndex={2} bg="#FFFFFF">
            {isMobile !== true ? (
                <Flex width="100%" height="80px" justifyContent="space-between" alignItems="center">
                    <Image src={Vuyama_Logo} marginLeft="100px" width="215px" height="25px" />
                    <Box display="flex" justifyContent="center" alignItems="center" gap="20px" height="25px">
                        <Link to="/collection">
                            <Text fontStyle="normal" fontWeight={location.pathname === "/collection" ? "600" : "400"} fontSize="14px"
                                lineHeight="15.23px" letterSpacing="0.1em" cursor="pointer">Collection</Text>
                        </Link>
                        <Text fontStyle="normal" fontWeight="400" fontSize="14px"
                            lineHeight="15.23px" letterSpacing="0.1em">Join Reseller</Text>
                    </Box>
                    <Box marginRight="100px">
                        <form onSubmit={searchData}>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents="none"
                                    marginLeft="4px"
                                    width="25px"
                                    height="25px"
                                    marginTop="4px"
                                    children={<BsSearch />}
                                />
                                <Input type='text' placeholder='Search' bg="#FFE6C8"
                                    onChange={(e) => setSearchCollection(e.target.value)}
                                    value={searchCollection}
                                    width="215px"
                                    height="35px"
                                    borderRadius="10px"
                                    textAlign="center"
                                    _placeholder={{
                                        display: "flex",
                                        lineHeight: "13px",
                                        letterSpacing: "0.1em",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        marginBottom: "2px",
                                        fontWeight: "400",
                                        fontSize: "14px",
                                        height: "35px",
                                        textAlign: "center",
                                        color: "black",
                                    }}
                                />
                            </InputGroup>
                        </form>
                    </Box>
                </Flex>
            ) : (
                <Flex width="100%" height="80px" justifyContent="space-between" alignItems="center">
                    <Image src={Vuyama_Logo} width="129px" height="20px" marginLeft="20px" />
                    <Icon as={MdMenu} boxSize="24px" marginRight="20px" onClick={onOpen} />
                    <Drawer
                        isOpen={isOpen}
                        placement='right'
                        onClose={onClose}
                    >
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerCloseButton />
                            <DrawerHeader fontSize="14px" fontWeight="400" lineHeight="15.23px" letterSpacing="0.1em">Vuyama Navigation</DrawerHeader>
                            <DrawerBody marginTop="40px">
                                <Flex flexDirection="column" gap="20px">
                                    <Link to="/">
                                        <Text fontStyle="normal" fontSize="14px" fontWeight={location.pathname === "/" ? "700" : "400"}
                                            lineHeight="15.23px" letterSpacing="0.1em" cursor="pointer">Home</Text>
                                    </Link>
                                    <Link to="/collection">
                                        <Text fontStyle="normal" fontWeight={location.pathname === "/collection" ? "700" : "400"} fontSize="14px"
                                            lineHeight="15.23px" letterSpacing="0.1em" cursor="pointer">Collection</Text>
                                    </Link>
                                    <Text fontStyle="normal" fontWeight="400" fontSize="14px"
                                        lineHeight="15.23px" letterSpacing="0.1em">Join Reseller</Text>
                                </Flex>
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                </Flex>
            )}
        </Box>

    )
}

export default Navbar
