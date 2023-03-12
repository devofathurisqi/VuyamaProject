import React from 'react'
import { Box, Image, useBreakpointValue } from "@chakra-ui/react"
import notFound from "../Asset/not-found.jpg"

const NotFound = () => {
    const width = useBreakpointValue({
        base : "100%",
        md : "80%",
        lg : "80%"
    })
    const marginToppp = useBreakpointValue({
        base : "0px",
        md : "20px",
        lg : "20px"
    })
    return (
        <Box width={width} height="100vh" bg="blue" margin="auto" marginTop={marginToppp}>
            <Image src={notFound} objectFit="cover" width="100%" height="100%"/>
        </Box> 
    )
}

export default NotFound
