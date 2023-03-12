import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import {

    Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, ModalFooter,
    Button, Box, ModalHeader, FormControl, FormLabel, Input, FormHelperText,
    useToast, Spinner

} from "@chakra-ui/react"
import { setCloseModal, setUsernameAdmin } from '../Redux/LoginAdmin'
import axios from "axios"
import { useNavigate } from "react-router-dom"

const LoginAdmin = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isOpen = useSelector((state) => state.LoginAdmin.isOpen)
    const toast = useToast()

    //everything for validation
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [msg, setMsg] = useState("")
    const [load, setLoad] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:2000/admin/login", {
                username,
                password
            })
            setLoad(true)
            setTimeout(() => {
                setLoad(false)
                dispatch(setCloseModal())
                dispatch(setUsernameAdmin(username))
                localStorage.setItem("username", username);
                toast({
                    title: 'Login success.',
                    description: `Halo kamu yang sedang depan layar gadget kamu, semangat dagangnya! sekarang ayo edit apapun tentang produk kamu`,
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                })
            }, 3000)
            setTimeout(() => {
                navigate("/dashboard")
            }, 3000)

        } catch (err) {
            console.log(err)
            if (err.response) {
                setMsg(err.response.data)
            }
        }
    }
    return (
        <Box>
            <Modal isOpen={isOpen} onClose={() => dispatch(setCloseModal())}>
                <ModalOverlay
                    bg='none'
                    backdropFilter='auto'
                    backdropInvert='80%'
                    backdropBlur='2px' />
                <ModalContent>
                    <ModalHeader>Login Admin</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <form onSubmit={handleSubmit}>
                            <FormControl>
                                <FormLabel>Username</FormLabel>
                                <Input type='text' onChange={(e) => setUsername(e.target.value)} />
                            </FormControl>
                            <FormControl marginTop="5px">
                                <FormLabel>Password</FormLabel>
                                <Input type='password' onChange={(e) => setPassword(e.target.value)} />
                                <FormHelperText textAlign="center" color={msg !== "" ? "red.400" : "black"}>{msg !== "" ? msg : "Jangan sebarkan username dan password anda"}</FormHelperText>
                            </FormControl>
                        </form>
                    </ModalBody>

                    <ModalFooter>
                        <Button variant="ghost" mr={3} onClick={() => dispatch(setCloseModal())}>
                            Close
                        </Button>
                        <Button variant="outline" colorScheme="facebook" onClick={handleSubmit}>{load? <Spinner/> : "Continue"}</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}

export default LoginAdmin