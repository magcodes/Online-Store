import React from "react";
import { Box, Text, Heading, Image } from "gestalt";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="around"
    height={70}
    color="inverse"
    padding={1}
    shape="roundedBottom"
    rounding={1}
  >
    <NavLink activeClassName="active" to="/signin">
      <Text size="400" color="light">
        Sign In
      </Text>
    </NavLink>

    <NavLink activeClassName="active" exact to="/">
      <Box display="flex" alignItems="center">
        <Box margin={2} height={50} width={50}>
          <Image
            alt="MagHaha"
            naturalHeight={1}
            naturalWidth={1}
            src="./icons/logo.png"
          />
        </Box>

        <Heading size="600" color="warning">
          MagHaha
        </Heading>
      </Box>
    </NavLink>

    <NavLink activeClassName="active" to="/signup">
      <Text size="400" color="light">
        Sign up
      </Text>
    </NavLink>
  </Box>
);

export default Navbar;