import { Box, IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Box display="flex" alignItems="center"  height="10vh" bg={'black'} px={4} justifyContent="flex-end">
    
      <Box display={{ base: 'none', md: 'flex' }} alignItems="center" >
      <Box padding={"10px"}>
            <Link to="/">Home</Link>
          </Box>
          <Box padding={"10px"}>
            <Link to="/form">Form</Link>
          </Box>
          <Box padding={"10px"}>
            <Link to="/cards" >Cards</Link>
          </Box>
        </Box>


      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
          
          display={{ base: 'block', md: 'none' }} 
        />

        <MenuList bg="black">
            <Link to="/">
          <MenuItem bg="black">
              Home
          </MenuItem>
            </Link>
            <Link to="/form">
          <MenuItem bg="black">
              Form
          </MenuItem>
            </Link>
            <Link to="/cards" >
          <MenuItem bg="black">
              Cards
          </MenuItem>
            </Link>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default Header;
