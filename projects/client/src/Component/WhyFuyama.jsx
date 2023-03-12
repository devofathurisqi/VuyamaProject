import React, { useState } from 'react'
import { Box, Flex, Spacer, Text, Image, useMediaQuery } from "@chakra-ui/react"
import VectorWa from "../Asset/VectorWa.png"
import VectorWaIn from "../Asset/VectorWaIn.png"
import logoWa from "../Asset/logo-wa.png"
import { Link } from 'react-router-dom'

const WhyFuyama = () => {
    const [scrollTop, setScrollTop] = useState(0);

    const handleBoxClick = () => {
        setScrollTop(0);
        window.scrollTo({ top: scrollTop, behavior: "smooth" });
    };

    //for responsive
    const [isMobile] = useMediaQuery('(max-width: 481px)');

    return (
        <Box>
            {isMobile !== true ? (
                <Flex justifyContent="center" alignItems="center" marginTop="35px">
                    <Box height="300px" width="400px" marginLeft="150px">
                        <Text fontStyle="normal" fontWeight="500" fontSize="24px" lineHeight="26.11px">Kenapa VUYAMA?</Text>
                        <Text fontWeight="300" fontSize="14px" lineHeight="22px" marginTop="20px">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, nesciunt impedit,
                            nulla neque maiores suscipit unde nam facilis ullam repellat rem sapiente libero.
                            Reprehenderit provident sapiente magni asperiores neque maxime.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eos minima ad maiores iste expedita non nisi,
                            quo error quia nemo qui repudiandae debitis inventore? Sapiente laboriosam nemo ab ullam.
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe nam vitae quidem ab molestias ea illum, eos iusto,
                            voluptates itaque quasi incidunt id ipsam aspernatur blanditiis eaque aliquam eum soluta!
                        </Text>
                    </Box>
                    <Box flex="1" height="300px" position="relative">
                        <Link to="/reseller">
                            <Box width="350px" height="80px" backgroundColor="#128C7E" borderRadius="15px"
                                position="absolute" top="30%" left="36%" cursor="pointer" onClick={handleBoxClick}
                            >
                                <Box top="27%" position="absolute" width="100%">
                                    <Flex justifyContent="center" alignItems="center" gap="20px" position="relative">
                                        <Image src={VectorWaIn} position="absolute" left="50px" />
                                        <Image src={VectorWa} />
                                        <Text color="white" fontWeight="600" fontSize="24px" lineHeight="26.11%">Join Reseller Group</Text>
                                    </Flex>
                                </Box>
                            </Box>
                        </Link>
                        <Box position="absolute" top="65%" left="40%">
                            <Text textAlign="center" fontWeight="600" fontSize="16px" lineHeight="22px">Ikut program reseller kami</Text>
                            <Text textAlign="center" fontWeight="600" fontSize="16px" lineHeight="22px">untuk mendapatkan berbagai keuntungan</Text>
                        </Box>
                    </Box>
                </Flex>
            ) : (
                <Box marginTop="50px">
                    <Text fontStyle="normal" fontWeight="500" fontSize="24px" lineHeight="26.11px" textAlign="center">Kenapa VUYAMA?</Text>
                    <Text fontWeight="300" fontSize="14px" lineHeight="16px" marginTop="10px" padding="0px 20px" letterSpacing="0.05em">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, nesciunt impedit,
                        nulla neque maiores suscipit unde nam facilis ullam repellat rem sapiente libero.
                        Reprehenderit provident sapiente magni asperiores neque maxime.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eos minima ad maiores iste expedita non nisi,
                        quo error quia nemo qui repudiandae debitis inventore? Sapiente laboriosam nemo ab ullam.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe nam vitae quidem ab molestias ea illum, eos iusto,
                        voluptates itaque quasi incidunt id ipsam aspernatur blanditiis
                    </Text>
                    <Box bg="#128C7E" borderRadius="15px" margin="auto" width="220px" height="44px" marginTop="70px">
                        <Flex justifyContent="space-evenly" alignItems="center" padding="0 10px" paddingTop="8px">
                            <Image src={logoWa} />
                            <Text color="white" fontWeight="600" fontSize="13px" lineHeight="14.14px" letterSpacing="0.1em">Join Reseller Group</Text>
                        </Flex>
                    </Box>
                    <Text fontWeight="500" fontSize="14px" lineHeight="22px" fontStyle="normal" color="black" textAlign="center" marginTop="40px">Ikut program reseller kami</Text>
                    <Text fontWeight="500" fontSize="14px" lineHeight="22px" fontStyle="normal" color="black" textAlign="center">untuk mendapatkan berbagai keuntungan!</Text>
                </Box>
            )}
        </Box>
    )
}

export default WhyFuyama
