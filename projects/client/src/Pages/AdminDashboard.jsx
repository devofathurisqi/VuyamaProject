import React from 'react'
import {
    Box, Tabs, TabList, Tab,
    TabPanel, TabPanels, Text
} from "@chakra-ui/react"

//import component
import PostProduct from '../Component/ComponentDashboard/PostProduct'
import EditProduct from '../Component/ComponentDashboard/EditProduct'

const AdminDashboard = () => {
    return (
        <Box>
            <Tabs>
                <TabList>
                    <Tab>Post Product</Tab>
                    <Tab>Edit Product</Tab>
                    <Tab>Statistik Penjualan</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <PostProduct/>
                    </TabPanel>
                    <TabPanel>
                        <EditProduct/>
                    </TabPanel>
                    <TabPanel>
                        <Text>Coming Soon!</Text>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    )
}

export default AdminDashboard
