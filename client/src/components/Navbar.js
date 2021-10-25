import React from 'react';
import { Box, Heading, Text, Image } from 'gestalt';
import { NavLink } from "react-router-dom";

const Navbar = () => (
    <Box
        display="flex"
        alignItems="center"
        justifyContent="around"
        height={70}
        color="midnight"
        padding={1}
        shape="roundedBottom"
    >  

    {/* {Sign In Link}   */}
    <NavLink to="/signin">
        <Text size="xl" color="white">
            Sign In
        </Text>

    </NavLink>

    <NavLink to="/">
        <Box display="flex" alignItems="center">
            <Box margin={2} height={50} width={50}>
                <Image 
                    alt="Magcodes Logo"
                    naturalHeight={1}
                    naturalWidth={1}
                    src="./icons/logo.svg"
                />
            </Box>

            <Heading size="xs" color="orange">
                Magcodes
            </Heading>
        </Box>
    </NavLink>

    {/* {Sign In Link}   */}
    <NavLink to="/signup">
        <Text size="xl" color="white">
            Sign Up
        </Text>

    </NavLink>

    </Box>
)

export default Navbar; 