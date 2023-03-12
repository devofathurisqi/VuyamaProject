import { createSlice } from "@reduxjs/toolkit"

const LoginAdmin = createSlice({
    name: 'DeleteProperty',
    initialState: {
        isOpen: false,
        usernameAdmin: ""
    },
    reducers: {
        setCloseModal: (state) => {
            state.isOpen = false
        },
        setOpenModal: (state) => {
            state.isOpen = true
        },
        setUsernameAdmin: (state, action) => {
            state.usernameAdmin = action.payload
        },
        setLogout: (state) => {
            state.usernameAdmin = ""
        }
    }
})

export const { setCloseModal, setOpenModal, setUsernameAdmin, setLogout } = LoginAdmin.actions
export default LoginAdmin.reducer