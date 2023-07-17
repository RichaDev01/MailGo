import SideBarContent from './SideBarContent'
import { Drawer } from '@mui/material'
import React from 'react'

const SideBar = ({openDrawer}) => {
  return (
    <Drawer
        anchor = 'left' 
        open={openDrawer}
        hideBackdrop={true}
        ModalProps={{
            keepMounted:true
        }}
        variant='persistent'
        sx={{
            '& .MuiDrawer-paper':{
                marginTop:'64px',
                width:250,
                background:'#F5F5F5',
                border:'none',
                height:'calc(100vh-64px)'

            }
        }}
    >
    <SideBarContent />
    </Drawer>
  )
}

export default SideBar
