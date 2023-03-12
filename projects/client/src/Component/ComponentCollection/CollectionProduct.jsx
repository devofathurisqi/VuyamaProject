/* eslint-disable react-hooks/exhaustive-deps */


import React, { useState, useEffect } from 'react'
import { Box, Flex, Image, Text, Menu, MenuList, MenuButton, MenuItem, Icon, useMediaQuery } from "@chakra-ui/react"
import axios from "axios"
import ReactPaginate from "react-paginate"
import { useSelector, useDispatch } from "react-redux"
import divider from "../../Asset/Rectangle.png"
import { AiOutlineDown } from "react-icons/ai"
import ProductNotFound from "../../Asset/Product-Not-Found.jpg"
import { setCategoryFromRedux } from '../../Redux/SearchCollection'
import { Link } from "react-router-dom"

import "../../Style/Pagination.css"

const CollectionProduct = () => {
    const [data, setData] = useState([])
    const [page, setPage] = useState(0)
    const [limit, setLimit] = useState(12)
    const [pages, setPages] = useState(0)
    const [rows, setRows] = useState(0)
    const [keyword, setKeyword] = useState("")
    const [category, setCategory] = useState("")
    const [finalResultMenu, setFinalResultMenu] = useState("Semua")
    const [scrollTop, setScrollTop] = useState(0);

    //redux
    let query = useSelector((state) => state.SearchCollection.query)
    const dispatch = useDispatch()


    const getData = async () => {
        try {
            const response = await axios.get(`http://localhost:2000/product/collection?search_query=${keyword}&page=${page}&limit=${limit}&category=${category}`)
            setData(response.data.result)
            setPage(response.data.page)
            // dispatch(setPageRedux(response.data.page))
            setPages(response.data.totalPage)
            setRows(response.data.totalRows)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, keyword, category])

    const convertData = () => {
        // setLimit(1)
        setFinalResultMenu("Semua")
        setKeyword(query)
        setCategory("")
        dispatch(setCategoryFromRedux(false))
        setPage(0)
    }

    const runWithCategory = () => {
        if (finalResultMenu !== "Semua") {
            // setLimit(1)
            setCategory(finalResultMenu)
            setKeyword("")
            setPage(0)
            dispatch(setCategoryFromRedux(true))
        } else {
            // setLimit(1)
            setCategory("")
            setKeyword("")
            setPage(0)
            dispatch(setCategoryFromRedux(false))
            // setKeyword(query)
        }
    }

    useEffect(() => {
        runWithCategory()
    }, [finalResultMenu])

    useEffect(() => {
        convertData()
    }, [query])

    const changePage = ({ selected }) => {
        setPage(selected)
        setScrollTop(0);
        window.scrollTo({ top: scrollTop, behavior: "smooth" });
    }

    const menuListCategory = [
        { id: 1, text: "Semua" },
        { id: 2, text: "Mukena" },
        { id: 3, text: "Ciput" },
        { id: 4, text: "Kerudung" },
        { id: 5, text: "Reseller" }
    ]

    const [isMobile] = useMediaQuery('(max-width: 481px)');

    return (
        <Box>
            {isMobile !== true ? (
                <Box marginTop="30px">
                    <Box display={data.length === 0 ? "none" : "block"}>
                        <Flex width="86%" height="40px" margin="auto" justifyContent="space-between" alignItems="center"
                        >
                            <Box>
                                <Flex gap="5px">
                                    <Text fontWeight="300" fontSize="12px" lineHeight="13.06px" color="black">VUYAMA</Text>
                                    <Text fontWeight="bold" fontSize="12px" lineHeight="13.06px">{">"}</Text>
                                    <Text fontWeight="600" fontSize="12px" lineHeight="13.06px">Collection</Text>
                                </Flex>
                            </Box>
                            <Box>
                                <Flex gap="5px" justifyContent="center" alignItems="center">
                                    <Text fontWeight="400" fontSize="12px" lineHeight="13.06px">{page + 1} / {pages}</Text>
                                    <Image src={divider} />
                                    <Text fontWeight="400" fontSize="12px" lineHeight="13.06px">Filter Berdasarkan : </Text>
                                    <Menu>
                                        <MenuButton>
                                            <Box bg="#FFE6c8" width="151px" height="30px" borderRadius="10px" cursor="pointer"
                                                position="relative"
                                            >
                                                <Flex gap="20px" alignItems="center" justifyContent="center">
                                                    <Text fontWeight="600" fontSize="12px" lineHeight="13.06px" position="absolute"
                                                        left="50%" top="50%" transform="translate(-50%, -50%)"
                                                    >{finalResultMenu}</Text>
                                                    <Icon as={AiOutlineDown} boxSize="18px" position="absolute" right="10px" top="7px"
                                                    />
                                                </Flex>
                                            </Box>
                                        </MenuButton>
                                        <MenuList>
                                            {menuListCategory.map((item) => (
                                                <MenuItem key={item.id} onClick={() => setFinalResultMenu(item.text)}>{item.text}</MenuItem>
                                            ))}
                                        </MenuList>
                                    </Menu>
                                </Flex>
                            </Box>
                        </Flex>
                    </Box>
                    {data.length === 0 ? (
                        <Box>
                            <Image src={ProductNotFound} width="50%" margin="auto" />
                        </Box>
                    ) : (
                        <Flex justifyContent="center" alignItems="center" gap="20px" flexWrap="wrap" marginTop="8px">
                            {data.map((item, index) => (
                                <Link to={`/collection/detail/${item.id}`}>
                                    <Box key={index} width="256px" height="350px" borderRadius="5px" cursor="pointer">
                                        <Image height="220px" width="256px" src={'http://localhost:2000/public/'+item.image} objectFit="cover" borderRadius="5px" />
                                        <Text fontWeight="600" fontSize="15px" lineHeight="22px" marginTop="5px">{item.name}</Text>

                                        <Text marginTop="1px" fontWeight="400" fontSize="15px" lineHeight="22px">
                                            {item.category}
                                        </Text>
                                        <Text marginTop="1px" fontWeight="400" fontSize="15px" lineHeight="22px">
                                            {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(item.price)}
                                        </Text>
                                    </Box>
                                </Link>
                            ))}
                        </Flex>
                    )}
                    <Box display={data.length === 0 ? "none" : "block"}>
                        <Flex justifyContent="center" alignItems="center" width="100%" height="50px" marginTop="20px"
                        // display={data.length === 0? "none" : "block"}
                        >
                            <ReactPaginate
                                previousLabel={"<"}
                                nextLabel={">"}
                                pageCount={Math.min(pages)}
                                onPageChange={changePage}
                                containerClassName={'pagination'}
                                subContainerClassName={'pages pagination'}
                            // activeClassName={'active'}
                            />
                        </Flex>
                    </Box>
                </Box>
            ) : (
                <Box marginTop="30px">
                    <Box display={data.length === 0 ? "none" : "block"}>
                        <Flex width="78%" height="40px" margin="auto" justifyContent="space-between" alignItems="center"
                        >
                            <Box>
                                <Flex gap="5px" justifyContent="center" alignItems="center">
                                    <Text fontWeight="600" fontSize="10px" lineHeight="10.88px" color="black" letterSpacing="0.1em">Collection</Text>
                                    <Image src={divider} />
                                    <Text fontWeight="400" fontSize="12px" lineHeight="13.06px">{page + 1} / {pages}</Text>
                                </Flex>
                            </Box>
                            <Box>
                                <Flex gap="5px" justifyContent="center" alignItems="center">
                                    <Menu>
                                        <MenuButton>
                                            <Box bg="#FFE6c8" width="151px" height="30px" borderRadius="10px" cursor="pointer"
                                                position="relative"
                                            >
                                                <Flex gap="20px" alignItems="center" justifyContent="center">
                                                    <Text fontWeight="600" fontSize="12px" lineHeight="13.06px" position="absolute"
                                                        left="50%" top="50%" transform="translate(-50%, -50%)"
                                                    >{finalResultMenu}</Text>
                                                    <Icon as={AiOutlineDown} boxSize="18px" position="absolute" right="10px" top="7px"
                                                    />
                                                </Flex>
                                            </Box>
                                        </MenuButton>
                                        <MenuList>
                                            {menuListCategory.map((item) => (
                                                <MenuItem key={item.id} onClick={() => setFinalResultMenu(item.text)}>{item.text}</MenuItem>
                                            ))}
                                        </MenuList>
                                    </Menu>
                                </Flex>
                            </Box>
                        </Flex>
                    </Box>
                    {data.length === 0 ? (
                        <Box>
                            <Image src={ProductNotFound} width="50%" margin="auto" />
                        </Box>
                    ) : (
                        <Flex justifyContent="center" alignItems="center" gap="20px" flexWrap="wrap" marginTop="8px">
                            {data.map((item, index) => (
                                <Link to={`/collection/detail/${item.id}`}>
                                    <Box width="150px" height="220px" borderRadius="5px">
                                        <Image src={'http://localhost:2000/public/'+item.image} objectFit="cover" width="100%" height="170px" borderRadius="5px" />
                                        <Text fontWeight="500" fontSize="12px" lineHeight="22px" marginTop="5px">{item.name}</Text>
                                        <Text marginTop="-3px" fontWeight="500" fontSize="12px" lineHeight="22px">
                                            {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(item.price)}
                                        </Text>
                                    </Box>
                                </Link>
                            ))}
                        </Flex>
                    )}
                    <Box display={data.length === 0 ? "none" : "block"}>
                        <Flex justifyContent="center" alignItems="center" width="100%" height="50px" marginTop="20px"
                        // display={data.length === 0? "none" : "block"}
                        >
                            <ReactPaginate
                                previousLabel={"<"}
                                nextLabel={">"}
                                pageCount={Math.min(pages)}
                                onPageChange={changePage}
                                containerClassName={'pagination'}
                                subContainerClassName={'pages pagination'}
                            // activeClassName={'active'}
                            />
                        </Flex>
                    </Box>
                </Box>
            )}
        </Box>
    )
}

export default CollectionProduct
