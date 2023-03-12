import React, { useState } from 'react'
import {
    Box, Text, FormControl, FormLabel, Input, FormHelperText, Select, Button,
    Flex, useToast, Spinner
} from "@chakra-ui/react"
import axios from "axios"

const PostProduct = () => {
    const toast = useToast()

    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState(null)
    const [image, setImage] = useState(null)
    const [description, setDescription] = useState("")
    const [msg, setMsg] = useState("")
    const [load, setLoad] = useState(false)

    const handlePictureChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('description', description);
            formData.append('file', image);
            formData.append('price', price);
            formData.append('category', category);

            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            };
            await axios.post("http://localhost:2000/product/postProduct", formData, config)
            setLoad(true)
            setImage(null)
            setPrice(null)
            setName("")
            setDescription("")
            toast({
                title: 'Post Product success.',
                description: `Setelah ini Product ${name} akan langsung ada di website vuyama!`,
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
            setLoad(false)
            window.location.reload()
        } catch (err) {
            console.log(err)
            if (err.response) {
                setMsg(err.response.data)
            }
        }
    }


    return (
        <Box width="350px" height="max-content" border="1px solid black" borderRadius="10px" margin="auto" padding="10px 0px">
            <Text textAlign="center">Post Product Vuyama!</Text>
            <FormControl marginTop="20px" padding="0px 20px">
                <FormLabel>Your product name</FormLabel>
                <Input type='text' onChange={(e) => setName(e.target.value)} />
            </FormControl>
            <FormControl marginTop="20px" padding="0px 20px">
                <FormLabel>Your Category Product</FormLabel>
                <Select placeholder='Select option' onChange={(e) => setCategory(e.target.value)}>
                    <option value='mukena'>Mukena</option>
                    <option value='ciput'>Ciput</option>
                    <option value='kerudung'>Kerudung</option>
                    <option value='reseller'>Reseller</option>
                </Select>
            </FormControl>
            <FormControl marginTop="20px" padding="0px 20px">
                <FormLabel>Your Description Product</FormLabel>
                <Input type='text' onChange={(e) => setDescription(e.target.value)} />
            </FormControl>
            <FormControl marginTop="20px" padding="0px 20px">
                <FormLabel>Your Price Product</FormLabel>
                <Input type='number' onChange={(e) => setPrice(e.target.value)} />
            </FormControl>
            <FormControl marginTop="20px" padding="0px 20px">
                <FormLabel>Your Price Product</FormLabel>
                <Input type='file' onChange={handlePictureChange} />
                <FormHelperText textAlign="center" color={msg !== "" ? "red.400" : "black"}>{msg !== "" ? msg : "Semua form wajib diisi!"}</FormHelperText>
            </FormControl>
            <Flex justifyContent="center" marginTop="20px">
                <Button variant="outline" colorScheme="facebook" onClick={handleSubmit}>{load ? <Spinner /> : "Post"}</Button>
            </Flex>
        </Box>
    )
}

export default PostProduct
