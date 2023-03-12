import React from 'react'
import { Box, Flex, Text } from "@chakra-ui/react"
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'


const TermAndCondition = () => {
    return (
        <Box bg="#FCF9EF">
            <Navbar />
            <Box width="100%" height="max-content" marginTop="30px">
                <Flex>
                    <Flex flexDirection="column" width="50%" gap="5px" paddingLeft="150px">
                        <Text fontWeight="500" fontSize="12px" lineHeight="22px" textDecorationLine="underline" letterSpacing="0.05em" fontStyle="normal">General Conditions of Use</Text>
                        <Text fontWeight="500" fontSize="12px" lineHeight="22px" textDecorationLine="underline" letterSpacing="0.05em" fontStyle="normal">Terms & Conditions of Use of The Account Service</Text>
                        <Text fontWeight="500" fontSize="12px" lineHeight="22px" textDecorationLine="underline" letterSpacing="0.05em" fontStyle="normal">Terms & Conditions of Sale</Text>
                        <Text fontWeight="500" fontSize="12px" lineHeight="22px" textDecorationLine="underline" letterSpacing="0.05em" fontStyle="normal">Return Policy</Text>
                        <Text fontWeight="500" fontSize="12px" lineHeight="22px" textDecorationLine="underline" letterSpacing="0.05em" fontStyle="normal">Refund Times & Procedures</Text>
                        <Text fontWeight="500" fontSize="12px" lineHeight="22px" textDecorationLine="underline" letterSpacing="0.05em" fontStyle="normal">Identification Tag</Text>
                        <a href="#courier">
                            <Text fontWeight="500" fontSize="12px" lineHeight="22px" textDecorationLine="underline" letterSpacing="0.05em" fontStyle="normal">Courier</Text>
                        </a>
                        <a href="#consumer-mode">
                            <Text fontWeight="500" fontSize="12px" lineHeight="22px" textDecorationLine="underline" letterSpacing="0.05em" fontStyle="normal">Consumer Code</Text>
                        </a>
                    </Flex>
                    <Flex flexDirection="column" width="50%" gap="30px">
                        <Box paddingRight="160px">
                            <Text fontWeight="500" fontSize="16px" lineHeight="22px" fontStyle="normal" textDecorationLine="underline" letterSpacing="0.05em">General Conditions of Use</Text>
                            <Text fontWeight="300" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal" marginTop="5px">
                                Vestibulum aliquet nec metus id auctor. Integer a sollicitudin purus.
                                Vivamus sollicitudin mauris sed nibh vestibulum fermentum.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Etiam fermentum quis erat ut tempor. Aenean nec pharetra nisl,
                                id iaculis diam. Pellentesque sagittis, sem sed tristique lacinia,
                                metus lorem mollis urna, vel viverra enim risus eget odio.
                                Orci varius natoque penatibus et magnis dis parturient montes,
                                nascetur ridiculus mus. Morbi rutrum fringilla elementum.
                                Cras risus justo, posuere a mi id, sodales ullamcorper eros.
                                Ut placerat pretium libero, at volutpat ex gravida vitae.
                                Pellentesque eleifend justo et urna pellentesque,
                                nec egestas justo tincidunt.
                                Aenean porttitor ullamcorper nisi. Donec at cursus turpis.
                            </Text>
                        </Box>
                        <Box paddingRight="160px">
                            <Text fontWeight="500" fontSize="16px" lineHeight="22px" fontStyle="normal" textDecorationLine="underline" letterSpacing="0.05em">Terms & Conditions of Use of The Account Service</Text>
                            <Text fontWeight="300" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal" marginTop="5px">
                                Integer aliquam aliquet condimentum. Maecenas sit amet consequat tortor. Nulla id tempor erat, eu dignissim lacus. Donec luctus ipsum nulla, in finibus velit vulputate pulvinar.
                                Cras egestas nunc in consequat dignissim. Sed sit amet velit in magna rutrum tempus. Curabitur id purus tellus.
                            </Text>
                        </Box>
                        <Box paddingRight="160px">
                            <Text fontWeight="500" fontSize="16px" lineHeight="22px" fontStyle="normal" textDecorationLine="underline" letterSpacing="0.05em">Terms & Conditions of Sale</Text>
                            <Text fontWeight="300" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal" marginTop="5px">
                                Cras ut scelerisque felis, a consequat ligula. Nam eget est diam. Nulla ac convallis dui, ac suscipit sem. Nulla facilisi. Phasellus a diam at tellus mattis tempor quis et arcu.
                                Ut luctus dolor et mauris fermentum, at laoreet metus rhoncus. In non elementum arcu. Ut urna libero, varius ut ligula vitae, egestas finibus elit.
                            </Text>
                        </Box>
                        <Box paddingRight="160px">
                            <Text fontWeight="500" fontSize="16px" lineHeight="22px" fontStyle="normal" textDecorationLine="underline" letterSpacing="0.05em">Return Policy</Text>
                            <Text fontWeight="300" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal" marginTop="5px">
                                Proin dignissim libero eget purus mattis, et molestie arcu placerat. Nam viverra magna et libero ultrices tristique.
                                Nunc et quam ac magna cursus consequat. Donec a tortor quis tellus convallis consectetur. Donec ut augue vel dolor finibus ornare a nec ex. Cras ultricies sagittis molestie. Nam pretium vel ipsum vel condimentum. Donec aliquam purus eget odio tempus, eu pharetra orci mollis. Aenean luctus lectus nibh, at viverra odio tempus nec.
                            </Text>
                        </Box>
                        <Box paddingRight="160px">
                            <Text fontWeight="500" fontSize="16px" lineHeight="22px" fontStyle="normal" textDecorationLine="underline" letterSpacing="0.05em">Refund Times & Procedures</Text>
                            <Text fontWeight="300" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal" marginTop="5px">
                                Donec ultricies condimentum vestibulum. Ut porta leo diam, non lobortis lorem lobortis luctus. Sed libero ex, varius ut massa sodales,
                                molestie elementum dui. Ut sed aliquam risus. Nam a mollis ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec ac venenatis mauris.
                            </Text>
                        </Box>
                        <Box paddingRight="160px">
                            <Text fontWeight="500" fontSize="16px" lineHeight="22px" fontStyle="normal" textDecorationLine="underline" letterSpacing="0.05em">Identification Tag</Text>
                            <Text fontWeight="300" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal" marginTop="5px">
                                Sed facilisis ullamcorper diam, mattis molestie magna tempor ut. Morbi finibus vestibulum nunc laoreet aliquet.
                                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis sit amet ante dolor. Sed rhoncus sem eget arcu venenatis, quis posuere diam venenatis. Quisque posuere auctor urna et dictum. Praesent sem urna, condimentum quis tempus at, pharetra ac justo. Suspendisse tincidunt tellus at libero tincidunt mattis. Cras arcu ante, blandit sit amet sapien sit amet, volutpat hendrerit lectus. Cras fringilla sit amet dolor id pharetra. Integer quis sem ut justo consequat iaculis at consectetur libero. Aenean a ante dictum, lobortis erat ut, fermentum erat.
                            </Text>
                        </Box>
                        <Box paddingRight="160px" id='courier'>
                            <Text fontWeight="500" fontSize="16px" lineHeight="22px" fontStyle="normal" textDecorationLine="underline" letterSpacing="0.05em">Courier</Text>
                            <Text fontWeight="300" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal" marginTop="5px">
                                Sed bibendum enim magna, id iaculis ligula semper vel. Integer vulputate est mi,
                                et pellentesque quam pellentesque ac. Sed vehicula, sem ac maximus euismod, erat sapien posuere justo,
                                at egestas lorem sem eu ligula. Sed aliquam auctor nibh, nec feugiat turpis tristique at. Integer et odio laoreet, accumsan ligula vel, mollis orci. Ut quis gravida orci. Donec pharetra imperdiet est, vel pretium ligula egestas a. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque dignissim eu nisl a gravida.
                                Morbi volutpat id libero sit amet efficitur.
                            </Text>
                        </Box>
                        <Box paddingRight="160px" id="consumer-mode">
                            <Text fontWeight="500" fontSize="16px" lineHeight="22px" fontStyle="normal" textDecorationLine="underline" letterSpacing="0.05em">Consumer Code</Text>
                            <Text fontWeight="300" fontSize="14px" lineHeight="22px" letterSpacing="0.05em" fontStyle="normal" marginTop="5px">
                                In hac habitasse platea dictumst. Sed facilisis hendrerit lorem. Nullam scelerisque ipsum ac nulla consequat, quis ullamcorper ante auctor. Proin nulla urna, rutrum in mattis faucibus, placerat et nisi. Integer sit amet malesuada nibh. Maecenas erat sapien, sollicitudin eu cursus vel, condimentum id velit. Fusce fermentum felis auctor diam placerat consectetur id eget purus. Proin scelerisque
                                justo non dolor tincidunt tristique. Donec ut est id dui commodo ultricies.
                            </Text>
                        </Box>
                    </Flex>
                </Flex>
            </Box>
            <Footer />
        </Box>
    )
}

export default TermAndCondition
