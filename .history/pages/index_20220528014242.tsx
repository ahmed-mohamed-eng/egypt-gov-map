import type { NextPage } from "next";

import { Box, Flex } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <Box>
      <Flex as="header">البشمهندس عمر</Flex>
      <Flex as="nav"></Flex>
      <Flex as="main"></Flex>
      <Flex as="footer"></Flex>
    </Box>
  );
};

export default Home;
