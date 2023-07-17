import React from 'react'
import { AppBar,Box,InputBase,Toolbar,styled }from '@mui/material'
import { AccountCircleOutlined, AppsOutlined, HelpOutlineOutlined, Menu as MenuIcon, Search, SettingsOutlined, Tune} from '@mui/icons-material'
import { gmailLogo } from '../constants/constant'

const StyledAppBar = styled(AppBar)({
background:'#F5F5F5',
boxShadow:'none'
})

const SearchWrapper = styled(Box)({
    background:'#EAF1FB',
    marginLeft:80,
    borderRadius:8,
    minWidth:690,
    maxWidth:720,
    height:48,
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    padding:'0 20px',
    '& > div':{
        width:'100%',
        padding:'0 10px'
    }
})

const OptionWrapper = styled(Box)({
    width:'100%',
    display:'flex',
    justifyContent:'end',
    '& > svg':{
        marginLeft:20,
    }

})


const Header = ({toggleDrawer}) => {
  return (
    <StyledAppBar position='static'>
        <Toolbar>
           <MenuIcon color='action' onClick = {toggleDrawer} />
              <img src={gmailLogo} alt='logo' style={{ width:30, marginLeft: '15px' }} /><span style={{ width:50, marginLeft: '10px', color:'black' }}>MailGo</span>
           <SearchWrapper>
            <Search color='action'/>
            <InputBase  placeholder='Search mails'/>
            <Tune color='action'/>
           </SearchWrapper>
           <OptionWrapper>
            <HelpOutlineOutlined color='action'/>
            <SettingsOutlined color='action' />
            <AppsOutlined color='action' />
            <AccountCircleOutlined color='action' />
           </OptionWrapper>
        </Toolbar>
    </StyledAppBar>
  )
}

export default Header;
