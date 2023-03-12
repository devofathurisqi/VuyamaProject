import React from 'react'
import { Box, Flex, Text } from "@chakra-ui/react"
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'

const FAQ = () => {
    return (
        <Box bg="#FCF9EF">
            <Navbar />
            <Box width="100%" height="max-content" marginTop="30px">
                <Flex>
                    <Flex flexDirection="column" width="50%" gap="5px" paddingLeft="150px">
                        <a href="#reseller">
                            <Text fontWeight="500" fontSize="12px" lineHeight="22px" textDecorationLine="underline" letterSpacing="0.05em" fontStyle="normal">Reseller</Text>
                        </a>
                        <Text fontWeight="500" fontSize="12px" lineHeight="22px" textDecorationLine="underline" letterSpacing="0.05em" fontStyle="normal">Pemesanan</Text>
                        <Text fontWeight="500" fontSize="12px" lineHeight="22px" textDecorationLine="underline" letterSpacing="0.05em" fontStyle="normal">Pembayaran</Text>
                        <Text fontWeight="500" fontSize="12px" lineHeight="22px" textDecorationLine="underline" letterSpacing="0.05em" fontStyle="normal">Pengiriman</Text>
                        <Text fontWeight="500" fontSize="12px" lineHeight="22px" textDecorationLine="underline" letterSpacing="0.05em" fontStyle="normal">Pengembalian</Text>

                    </Flex>
                    <Flex flexDirection="column" width="50%" gap="30px">
                        <Box paddingRight="160px" id='reseller'>
                            <Text fontWeight="500" fontSize="16px" lineHeight="22px" fontStyle="normal" textDecorationLine="underline" letterSpacing="0.05em">Reseller</Text>
                            <Text fontWeight="500" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal" marginTop="15px">Aliquam pellentesque dolor sit amet porta porttitor?</Text>
                            <Text fontWeight="300" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal">Mauris efficitur arcu ut fringilla tempor.</Text>
                            <Text fontWeight="500" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal" marginTop="15px">Nunc sed enim eu lorem congue maximus suscipit at dui?</Text>
                            <Text fontWeight="300" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal">Ut at eros eleifend, vehicula diam vel, vehicula velit.</Text>
                            <Text fontWeight="500" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal" marginTop="15px">Aliquam pellentesque dolor sit amet porta porttitor?</Text>
                            <Text fontWeight="300" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal">Mauris efficitur arcu ut fringilla tempor.</Text>
                            <Text fontWeight="500" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal" marginTop="15px">Aliquam pellentesque dolor sit amet porta porttitor?</Text>
                            <Text fontWeight="300" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal">Mauris efficitur arcu ut fringilla tempor.</Text>
                        </Box>
                        <Box paddingRight="160px">
                            <Text fontWeight="500" fontSize="16px" lineHeight="22px" fontStyle="normal" textDecorationLine="underline" letterSpacing="0.05em">Pemesanan</Text>
                            <Text fontWeight="500" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal" marginTop="15px">Aliquam pellentesque dolor sit amet porta porttitor?</Text>
                            <Text fontWeight="300" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal">Mauris efficitur arcu ut fringilla tempor.</Text>
                            <Text fontWeight="500" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal" marginTop="15px">Nunc sed enim eu lorem congue maximus suscipit at dui?</Text>
                            <Text fontWeight="300" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal">Ut at eros eleifend, vehicula diam vel, vehicula velit.</Text>
                            <Text fontWeight="500" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal" marginTop="15px">Aliquam pellentesque dolor sit amet porta porttitor?</Text>
                            <Text fontWeight="300" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal">Mauris efficitur arcu ut fringilla tempor.</Text>
                            <Text fontWeight="500" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal" marginTop="15px">Aliquam pellentesque dolor sit amet porta porttitor?</Text>
                            <Text fontWeight="300" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal">Mauris efficitur arcu ut fringilla tempor.</Text>
                        </Box>
                        <Box paddingRight="160px">
                            <Text fontWeight="500" fontSize="16px" lineHeight="22px" fontStyle="normal" textDecorationLine="underline" letterSpacing="0.05em">Pembayaran</Text>
                            <Text fontWeight="500" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal" marginTop="15px">Aliquam pellentesque dolor sit amet porta porttitor?</Text>
                            <Text fontWeight="300" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal">Mauris efficitur arcu ut fringilla tempor.</Text>
                            <Text fontWeight="500" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal" marginTop="15px">Nunc sed enim eu lorem congue maximus suscipit at dui?</Text>
                            <Text fontWeight="300" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal">Ut at eros eleifend, vehicula diam vel, vehicula velit.</Text>
                            <Text fontWeight="500" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal" marginTop="15px">Aliquam pellentesque dolor sit amet porta porttitor?</Text>
                            <Text fontWeight="300" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal">Mauris efficitur arcu ut fringilla tempor.</Text>
                            <Text fontWeight="500" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal" marginTop="15px">Aliquam pellentesque dolor sit amet porta porttitor?</Text>
                            <Text fontWeight="300" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal">Mauris efficitur arcu ut fringilla tempor.</Text>
                        </Box>
                        <Box paddingRight="160px">
                            <Text fontWeight="500" fontSize="16px" lineHeight="22px" fontStyle="normal" textDecorationLine="underline" letterSpacing="0.05em">Pengiriman</Text>
                            <Text fontWeight="500" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal" marginTop="15px">Aliquam pellentesque dolor sit amet porta porttitor?</Text>
                            <Text fontWeight="300" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal">Mauris efficitur arcu ut fringilla tempor.</Text>
                            <Text fontWeight="500" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal" marginTop="15px">Nunc sed enim eu lorem congue maximus suscipit at dui?</Text>
                            <Text fontWeight="300" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal">Ut at eros eleifend, vehicula diam vel, vehicula velit.</Text>
                            <Text fontWeight="500" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal" marginTop="15px">Aliquam pellentesque dolor sit amet porta porttitor?</Text>
                            <Text fontWeight="300" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal">Mauris efficitur arcu ut fringilla tempor.</Text>
                            <Text fontWeight="500" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal" marginTop="15px">Aliquam pellentesque dolor sit amet porta porttitor?</Text>
                            <Text fontWeight="300" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal">Mauris efficitur arcu ut fringilla tempor.</Text>
                        </Box>
                        <Box paddingRight="160px">
                            <Text fontWeight="500" fontSize="16px" lineHeight="22px" fontStyle="normal" textDecorationLine="underline" letterSpacing="0.05em">Pengembalian</Text>
                            <Text fontWeight="500" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal" marginTop="15px">Aliquam pellentesque dolor sit amet porta porttitor?</Text>
                            <Text fontWeight="300" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal">Mauris efficitur arcu ut fringilla tempor.</Text>
                            <Text fontWeight="500" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal" marginTop="15px">Nunc sed enim eu lorem congue maximus suscipit at dui?</Text>
                            <Text fontWeight="300" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal">Ut at eros eleifend, vehicula diam vel, vehicula velit.</Text>
                            <Text fontWeight="500" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal" marginTop="15px">Aliquam pellentesque dolor sit amet porta porttitor?</Text>
                            <Text fontWeight="300" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal">Mauris efficitur arcu ut fringilla tempor.</Text>
                            <Text fontWeight="500" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal" marginTop="15px">Aliquam pellentesque dolor sit amet porta porttitor?</Text>
                            <Text fontWeight="300" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal">Mauris efficitur arcu ut fringilla tempor.</Text>
                        </Box>
                    </Flex>
                </Flex>
            </Box>
            <Footer />
        </Box>
    )
}

export default FAQ
