
import React, { useState, useEffect } from 'react'
import { Box, Center, Image, Text, Icon, Spinner, useMediaQuery } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import axios from "axios"
import Slider from 'react-slick'
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md"
import ImageForReelsIg from "../Asset/IgReels.jpg"

const ScapperIg = () => {

    const [dataMedia, setDataMedia] = useState([])
    const [load, setLoad] = useState(true)
    const accessToken = process.env.REACT_APP_ACCESS_TOKEN_INSTAGRAM
    // console.log(accessToken)

    const getData = async () => {
        try {
            const response = await axios.get(`https://graph.facebook.com/v16.0/17841446929885436?fields=media&access_token=${accessToken}`)
            const data = response.data.media.data
            let count = 0
            for (let i = 0; i < data.length; i++) {
                if (count >= 6) {
                    break
                }
                const response = await axios.get(`https://graph.facebook.com/v16.0/${data[i].id}`, {
                    params: {
                        fields: 'media_url,permalink,caption',
                        access_token: accessToken
                    }
                })
                setDataMedia((prevData) => [...prevData, response.data])
                count++
            }
            setLoad(false)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <Icon as={MdOutlineArrowForwardIos}
                boxSize="30px"
                color="black"
                onClick={onClick}
                cursor="pointer"
                style={{
                    position: "absolute",
                    right: "-75px",
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
                color="black"
                onClick={onClick}
                cursor="pointer"
                style={{
                    position: "absolute",
                    left: "-75px",
                    top: "calc(50% - 20px)",
                    zIndex: 1,
                    opacity: 1
                }}
            />
        );
    };


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: < NextArrow />,
        prevArrow: < PrevArrow />
    }

    //for responsive website
    const [isMobile] = useMediaQuery('(max-width: 481px)');

    return (
        <Box overflow="hidden" width="100%" height="auto" position="relative" marginTop="30px" display={isMobile? "none" : "block"}>
            <Center >
                <Box width="70%" height="auto">
                    {load ?
                        <Center>
                            <Spinner />
                        </Center>
                        : (
                            <Slider {...settings}>
                                {dataMedia && dataMedia.map((item, index) => (
                                    <Box key={index} marginLeft="6px">
                                        {item.media_url && item.media_url.startsWith("https://video") ? (
                                            <Link to={item.permalink}>
                                                <Box position="relative" cursor="pointer">
                                                    <Image src={ImageForReelsIg} width="206px" height="250px" borderRadius="5px" />
                                                </Box>
                                            </Link>

                                        ) : (
                                            <Link to={item.permalink}>
                                                <Image src={item.media_url} width="206px" height="250px" borderRadius="5px" />
                                            </Link>
                                        )}
                                    </Box>
                                ))}
                            </Slider>
                        )}
                </Box>
            </Center>
            <Box width="100%" marginTop="30px" marginBottom="30px">
                <Text fontWeight="300" fontSize="16px" lineHeight="17.41px" textAlign="center">Find us on Instagram</Text>
                <Text fontWeight="600" fontSize="20px" lineHeight="21.76px" textAlign="center" marginTop="5px">@vuyama.id</Text>
            </Box>
        </Box>
    )
}

export default ScapperIg
