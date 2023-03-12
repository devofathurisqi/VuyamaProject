import React from 'react'
import { Box, Flex, Text, OrderedList, ListItem, Image, useMediaQuery } from "@chakra-ui/react"

//import Component
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'

import logoWa from "../Asset/logo-wa.png"
import bgImage from "../Asset/bg-reseller.png"
import { Link } from 'react-router-dom'

const Reseller = () => {
    const [isMobile] = useMediaQuery('(max-width: 481px)');
    return (
        <Box>
            <Navbar />
            {isMobile !== true ? (
                <Box width="100%" height="max-content" marginTop="30px">
                    <Flex>
                        <Flex flex="1">
                            <Flex flexDirection="column" gap="30px">
                                <Box marginLeft="17%" width="70%">
                                    <Text fontWeight="700" fontSize="24px" lineHeight="26.11px" letterSpacing="0.1em" fontStyle="normal">Kenapa VUYAMA?</Text>
                                    <Text fontWeight="300" fontSize="14px" lineHeight="22px" marginTop="40px">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nisl purus,
                                        viverra sed velit at, mollis aliquet nisi. Quisque eros nulla, volutpat et viverra ac,
                                        convallis eu nunc. Cras quis nisl tristique, facilisis massa et, eleifend dui.
                                        Etiam nec laoreet elit. Aliquam commodo hendrerit vulputate. Aenean id ultrices orci.
                                        Vestibulum rhoncus tellus rhoncus aliquet viverra. Interdum et malesuada fames ac ante
                                        ipsum primis in faucibus. Morbi in risus velit. Nulla interdum libero in bibendum rutrum.
                                        Nullam et dolor est. Praesent a faucibus massa, nec dapibus mi. Phasellus dictum purus nec
                                        bibendum porttitor. Donec dignissim leo viverra arcu varius,
                                        a tincidunt ex tincidunt. Sed ultricies aliquet magna sit amet tempus.
                                    </Text>
                                </Box>
                                <Box marginLeft="17%" width="70%">
                                    <Text fontWeight="700" fontSize="24px" lineHeight="26.11px" letterSpacing="0.1em" fontStyle="normal">Apa keuntungan mengikuti program reseller?</Text>
                                    <OrderedList marginTop="40px">
                                        <ListItem>
                                            <Text fontWeight="300" fontSize="14px" lineHeight="22px">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, porro nemo ratione blanditiis quibusdam delectus suscipit ab quisquam cupiditate, voluptates dolorem, laborum architecto neque illum beatae. Non laboriosam a voluptates!
                                            </Text>
                                        </ListItem>
                                        <ListItem marginTop="10px">
                                            <Text fontWeight="300" fontSize="14px" lineHeight="22px">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, porro nemo ratione blanditiis quibusdam delectus suscipit ab quisquam cupiditate, voluptates dolorem, laborum architecto neque illum beatae. Non laboriosam a voluptates!
                                            </Text>
                                        </ListItem>
                                        <ListItem marginTop="10px">
                                            <Text fontWeight="300" fontSize="14px" lineHeight="22px">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, porro nemo ratione blanditiis quibusdam delectus suscipit ab quisquam cupiditate, voluptates dolorem, laborum architecto neque illum beatae. Non laboriosam a voluptates!
                                            </Text>
                                        </ListItem>
                                        <ListItem marginTop="10px">
                                            <Text fontWeight="300" fontSize="14px" lineHeight="22px">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, porro nemo ratione blanditiis quibusdam delectus suscipit ab quisquam cupiditate, voluptates dolorem, laborum architecto neque illum beatae. Non laboriosam a voluptates!
                                            </Text>
                                        </ListItem>
                                        <ListItem marginTop="10px">
                                            <Text fontWeight="300" fontSize="14px" lineHeight="22px">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, porro nemo ratione blanditiis quibusdam delectus suscipit ab quisquam cupiditate, voluptates dolorem, laborum architecto neque illum beatae. Non laboriosam a voluptates!
                                            </Text>
                                        </ListItem>
                                        <ListItem marginTop="10px">
                                            <Text fontWeight="300" fontSize="14px" lineHeight="22px">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, porro nemo ratione blanditiis quibusdam delectus suscipit ab quisquam cupiditate, voluptates dolorem, laborum architecto neque illum beatae. Non laboriosam a voluptates!
                                            </Text>
                                        </ListItem>
                                    </OrderedList>
                                </Box>
                            </Flex>
                        </Flex>
                        <Flex flex="1" position="relative">
                            <Flex flexDirection="column">
                                <Link to="https://linktr.ee/vuyama.id">
                                    <Box width="394px" height="80px" bg="#128C7E" position="absolute" top="10%" left="50%" transform="translate(-50%, -50%)" borderRadius="15px" cursor="pointer">
                                        <Flex justifyContent="center" alignItems="center" gap="20px" marginTop="21px">
                                            <Image src={logoWa} width="35px" objectFit="cover" />
                                            <Text color="white" fontWeight="600" fontSize="24px" lineHeight="26.11px" letterSpacing="0.1em">Join Reseller Group</Text>
                                        </Flex>
                                    </Box>
                                </Link>
                                <Box width="100%" position="absolute" top="23%" left="50%" transform="translate(-50%, -50%)">
                                    <Text fontWeight="600" fontSize="22px" textAlign="center">Ikut program reseller kami</Text>
                                    <Text fontWeight="600" fontSize="22px" textAlign="center">untuk mendapatkan berbagai keuntungan!</Text>
                                </Box>
                            </Flex>
                        </Flex>
                    </Flex>
                </Box>
            ) : (
                <Box width="100%">
                    <Box width="100%" height="254px" position="relative" >
                        <Image src={bgImage} width="100%" objectFit="cover" />
                        <Text color="black" fontWeight="500" lineHeight="22px" fontSize="12px"
                            fontStyle="normal" letterSpacing="0.05em" position="absolute" top="40%" left="50%" transform="translate(-50%, -50%)" textAlign="center">Ikut Program Reseller Kami</Text>
                        <Text color="black" fontWeight="500" lineHeight="22px" fontSize="12px"
                            fontStyle="normal" letterSpacing="0.05em" position="absolute" top="52%" left="50%" transform="translate(-50%, -50%)" textAlign="center">untuk mendapatkan berbagai keuntungan!</Text>
                        <Link to="https://linktr.ee/vuyama.id">
                            <Box position="absolute" top="82%" left="50%" transform="translate(-50%, -50%)" bg="#128C7E" width="220px" height="44px" borderRadius="15px" cursor="pointer">
                                <Flex justifyContent="center" alignItems="center" gap="15px" paddingTop="9px">
                                    <Image src={logoWa} />
                                    <Text color="white" fontWeight="600" fontSize="13px" lineHeight="14px" fontStyle="normal" letterSpacing="0.1em">Join Reseller Group</Text>
                                </Flex>
                            </Box>
                        </Link>
                    </Box>
                    <Box padding="0px 25px">
                        <Text fontWeight="500" fontSize="16px" lineHeight="17px" letterSpacing="0.1em" fontStyle="normal" marginTop="80px" textAlign="center">Kenapa Vuyama?</Text>
                        <Text lineHeight="16px" fontWeight="300" fontSize="12px" fontStyle="normal" letterSpacing="0.05em" marginTop="30px">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris nisl purus, viverra sed velit at, mollis aliquet nisi.
                            Quisque eros nulla, volutpat et viverra ac, convallis eu nunc.
                            Cras quis nisl tristique, facilisis massa et, eleifend dui.
                            Etiam nec laoreet elit. Aliquam commodo hendrerit vulputate.
                            Aenean id ultrices orci. Vestibulum rhoncus tellus rhoncus aliquet viverra.
                            Interdum et malesuada fames ac ante ipsum primis in faucibus.
                            Morbi in risus velit. Nulla interdum libero in bibendum rutrum.
                            Nullam et dolor est. Praesent a faucibus massa, nec dapibus mi. Phasellus dictum purus nec bibendum porttitor.
                            Donec dignissim leo viverra arcu varius, a tincidunt ex tincidunt. Sed ultricies aliquet magna sit amet tempus.
                        </Text>
                    </Box>
                    <Box padding="0px 25px">
                        <Text fontWeight="500" fontSize="16px" lineHeight="17px" letterSpacing="0.1em" fontStyle="normal" marginTop="80px" textAlign="center">Apa keuntungan mengikuti program reseller?</Text>
                        <OrderedList marginTop="40px">
                            <ListItem>
                                <Text fontWeight="300" fontSize="12px" lineHeight="16px" letterSpacing="0.05em">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, porro nemo ratione blanditiis quibusdam delectus suscipit ab quisquam cupiditate, voluptates dolorem, laborum architecto neque illum beatae. Non laboriosam a voluptates!
                                </Text>
                            </ListItem>
                            <ListItem>
                                <Text fontWeight="300" fontSize="12px" lineHeight="16px" letterSpacing="0.05em">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, porro nemo ratione blanditiis quibusdam delectus suscipit ab quisquam cupiditate
                                </Text>
                            </ListItem>
                            <ListItem>
                                <Text fontWeight="300" fontSize="12px" lineHeight="16px" letterSpacing="0.05em">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, porro nemo ratione blanditiis quibusdam delectus suscipi
                                </Text>
                            </ListItem>
                            <ListItem>
                                <Text fontWeight="300" fontSize="12px" lineHeight="16px" letterSpacing="0.05em">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, porro nemo ratione blanditiis
                                </Text>
                            </ListItem>
                            <ListItem>
                                <Text fontWeight="300" fontSize="12px" lineHeight="16px" letterSpacing="0.05em">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, porro nem
                                </Text>
                            </ListItem>
                            <ListItem>
                                <Text fontWeight="300" fontSize="12px" lineHeight="16px" letterSpacing="0.05em">
                                    Lorem ipsum dolor sit amet consectet
                                </Text>
                            </ListItem>
                        </OrderedList>
                    </Box>
                </Box>
            )}
            <Footer />
        </Box>
    )
}

export default Reseller
