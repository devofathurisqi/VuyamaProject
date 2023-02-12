import React from 'react'
import { Box, Image, Flex, Text, Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import Vuyama_Logo from "../Asset/Vuyama-Logo.png"
import { BsSearch } from "react-icons/bs"

const Navbar = () => {
    return (
        <Flex width="100%" height="80px" justifyContent="space-between" alignItems="center">
            <Image src={Vuyama_Logo} marginLeft="100px" width="215px" height="25px" />
            <Box display="flex" justifyContent="center" alignItems="center" gap="20px" height="25px">
                <Text fontStyle="normal" fontWeight="400" fontSize="14px" lineHeight="15.23px" letterSpacing="0.1em">Collection</Text>
                <Text fontStyle="normal" fontWeight="400" fontSize="14px" lineHeight="15.23px" letterSpacing="0.1em">Join Reseller</Text>
            </Box>
            <Box marginRight="100px">
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
            </Box>
        </Flex>
    )
}

export default Navbar
