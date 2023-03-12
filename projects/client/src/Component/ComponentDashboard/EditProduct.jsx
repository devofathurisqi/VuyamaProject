/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import {
    Box, Input, FormControl, FormLabel, FormHelperText,
    Flex, Image, Text, Textarea, Icon, Modal, ModalOverlay, ModalContent, ModalHeader,
    ModalCloseButton, ModalBody, ModalFooter, Button, useDisclosure, Select, useToast
} from "@chakra-ui/react"
import axios from "axios"
import { FiEdit } from "react-icons/fi"
import { RiDeleteBin6Line } from "react-icons/ri"

const EditProduct = () => {
    const toast = useToast()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [search, setSearch] = useState("")

    const [data, setData] = useState([])
    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState(null)
    const [description, setDescription] = useState("")
    const [image, setImage] = useState(null)
    const [msg, setMsg] = useState("")

    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            setSearch(e.target.value);
        }
    }

    const getData = async () => {
        try {
            const response = await axios.get(`http://localhost:2000/product/getproductbyname/${search}`)
            setData(response.data)
        } catch (err) {
            console.log(err)
        }
    }


    useEffect(() => {
        getData()
    }, [search])


    const openEditModal = async (item) => {
        const response = await axios.get(`http://localhost:2000/product/getproductbyid/${item.id}`)
        const data = response.data
        setName(data.name)
        setDescription(data.description)
        setCategory(data.category)
        setPrice(data.price)
        onOpen(true)
    }

    const handlePictureChange = (e) => {
        setImage(e.target.files[0]);
    };


    const handleEditProduct = async (item) => {
        // e.preventDefault()
        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('description', description);
            formData.append('file', image);
            formData.append('price', price);
            formData.append('category', category);

            console.log(formData)

            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            };
            await axios.patch(`http://localhost:2000/product/editproductbyid/${item.id}`, formData, config)
            setMsg("")
            toast({
                title: 'Edit Product success.',
                description: `Product Berhasil Di Update!`,
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
            window.location.reload()
        } catch (err) {
            console.log(err)
            if (err.response) {
                setMsg(err.response.data)
            }
        }
    }

    const handleDeleteProduct = async (item) => {
        try{
           await axios.delete(`http://localhost:2000/product/deleteproduct/${item.id}`)
           toast({
            title: 'Delete Product success.',
            description: `Product ${item.name} Berhasil Di Hapus!`,
            status: 'success',
            duration: 3000,
            isClosable: true,
        })
        getData()
        // window.location.reload()
        }catch(err){
            console.log(err)
        }
    }


    return (
        <Box>
            <Box margin="auto" width="70%">
                <FormControl>
                    <FormLabel>Your Name Product</FormLabel>
                    <Input type='text' onKeyDown={handleKeyDown} />
                    <FormHelperText textAlign="center">Tulis nama produk yang ingin kamu edit</FormHelperText>
                </FormControl>
            </Box>
            <Box marginTop="20px">
                <Flex justifyContent="center" alignItems="center" gap="20px" flexWrap="wrap">
                    {data.map((item, index) => (
                        <Box width="300px" height="370px" borderRadius="5px" border="2px solid black">
                            <Image src={'http://localhost:2000/public/'+item.image} width="300px" height="150px" borderTopRadius="5px" objectFit="cover"/>
                            <Text marginTop="10px" textAlign="center">{item.name}</Text>
                            <Flex justifyContent="center" marginTop="15px">
                                <Textarea value={item.description} width="90%" />
                            </Flex>
                            <Flex marginTop="15px" justifyContent="center" alignItems="center" gap="50px">
                                <Text>{item.category}</Text>
                                <Text>{item.price}</Text>
                            </Flex>
                            <Flex justifyContent="center" marginTop="15px" gap="180px" alignItems="center">
                                <Icon as={FiEdit} boxSize="24px" cursor="pointer" onClick={() => openEditModal(item)} />

                                {/* Modal */}
                                <Modal isOpen={isOpen} onClose={onClose}>
                                    <ModalOverlay />
                                    <ModalContent>
                                        <ModalHeader>Edit Form</ModalHeader>
                                        <ModalCloseButton />
                                        <ModalBody>
                                            <FormControl>
                                                <FormLabel>Your Product Name</FormLabel>
                                                <Input type='text' defaultValue={name} onChange={(e) => setName(e.target.value)} />
                                            </FormControl>
                                            <FormControl marginTop="5px">
                                                <FormLabel>Your Category Product</FormLabel>
                                                <Select placeholder='Select option' defaultValue={category} onChange={(e) => setCategory(e.target.value)}>
                                                    <option value='mukena'>Mukena</option>
                                                    <option value='ciput'>Ciput</option>
                                                    <option value='kerudung'>Kerudung</option>
                                                    <option value='reseller'>Reseller</option>
                                                </Select>
                                            </FormControl>
                                            <FormControl marginTop="5px">
                                                <FormLabel>Your Desc Product</FormLabel>
                                                <Input type='text' defaultValue={description} onChange={(e) => setDescription(e.target.value)} />
                                            </FormControl>
                                            <FormControl marginTop="5px">
                                                <FormLabel>Your Price Product</FormLabel>
                                                <Input type='text' defaultValue={price} onChange={(e) => setPrice(e.target.value)} />
                                            </FormControl>
                                            <FormControl marginTop="5px">
                                                <FormLabel>Your Product Image</FormLabel>
                                                <Input type='file' onChange={handlePictureChange} />
                                            </FormControl>
                                            <Text textAlign="center" marginTop="10px" color="red.400">{msg}</Text>
                                        </ModalBody>

                                        <ModalFooter>
                                            <Button colorScheme='blue' mr={3} onClick={onClose}>
                                                Close
                                            </Button>
                                            <Button colorScheme="facebook" variant="outline" onClick={() => handleEditProduct(item)}>Submit</Button>
                                        </ModalFooter>
                                    </ModalContent>
                                </Modal>
                                {/* Modal */}

                                <Icon as={RiDeleteBin6Line} boxSize="24px" cursor="pointer" onClick={() => handleDeleteProduct(item)} />
                            </Flex>
                        </Box>
                    ))}
                </Flex>
            </Box>
        </Box>
    )
}

export default EditProduct
