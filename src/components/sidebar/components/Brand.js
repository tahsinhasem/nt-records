import React from "react";

// Chakra imports
import { Flex, Heading, useColorModeValue } from "@chakra-ui/react";

// Custom components
import { HorizonLogo } from "components/icons/Icons";
import { HSeparator } from "components/separator/Separator";

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex align='center' direction='column'>
      <Heading as='h1' size='lg' color={logoColor} fontWeight={700} marginY={2}>NT HFT</Heading>
      <HSeparator mb='20px' />
    </Flex>
  );
}

export default SidebarBrand;
