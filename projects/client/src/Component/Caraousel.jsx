import React from 'react'
import { Box, Image, Icon, useMediaQuery, useBreakpointValue } from "@chakra-ui/react"
import Pic1 from "../Asset/caraousel-1.png"
import Pic2 from "../Asset/caraousel-2.png"
import Pic3 from "../Asset/caraousel-3.png"
import Pic4 from "../Asset/caraousel-4.png"
import PicMobile from "../Asset/VuyamaBannerMobile.png"
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md"


//import peckage
import Slider from "react-slick";


const Caraousel = () => {
    //for responsive
    const [isMobile] = useMediaQuery('(max-width: 481px)');

    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <Icon as={MdOutlineArrowForwardIos}
                boxSize="30px"
                color="#FFE6C8"
                onClick={onClick}
                cursor="pointer"
                style={{
                    position: "absolute",
                    right: "75px",
                    top: "calc(50% - 20px)",
                    zIndex: 1,
                    opacity: 1
                }}
            />
        );
    };

    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
            <Icon as={MdOutlineArrowBackIosNew}
                boxSize="30px"
                color="#FFE6C8"
                onClick={onClick}
                cursor="pointer"
                style={{
                    position: "absolute",
                    left: "75px",
                    top: "calc(50% - 20px)",
                    zIndex: 1,
                    opacity: 1
                }}
            />
        );
    };

    const Dots = (props) => {
        const { onClick } = props
        return (
            <Box
                width="25px"
                height="3px"
                backgroundColor="#FFE6C8"
                onClick={onClick}
                cursor="pointer"
                borderRadius="3px"
                _hover={{
                    backgroundColor: "black"
                }}
                style={{
                    position: "absolute",
                    left: "calc(50% - 20px)",
                    bottom: "25px",
                    zIndex: 1,
                    opacity: 1
                }} />
        )
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: < NextArrow />,
        prevArrow: < PrevArrow />,
        customPaging: i => (
            <Dots />
        )
    }

    return (
        <Box>
            {isMobile ? (
                <Box width="100%" height="125px">
                    <Image src={PicMobile} objectFit="cover" width="100%"/>
                </Box>
            ) : (
                <Box position="relative">
                    <Slider {...settings}

                    >
                        <Box width="100%" height="300px">
                            <Image src={Pic1} />
                        </Box>
                        <Box width="100%" height="300px">
                            <Image src={Pic2} />
                        </Box>
                        {/* <Box width="100%" height="300px">
                    <Image src={Pic3} />
                </Box> */}
                        <Box width="100%" height="300px">
                            <Image src={Pic4} />
                        </Box>
                    </Slider>
                </Box>
            )}
        </Box>
    )
}

export default Caraousel
