import type { NextPage } from "next";

import { Box, Flex, Heading } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <Box>
      <Flex as="header" justifyContent="center" alignItems="center">
        <Heading as="h1">اقاليم مصر</Heading>
      </Flex>
      <Flex as="nav"></Flex>
      <Flex as="main"></Flex>
      <Flex as="footer"></Flex>
    </Box>
  );
};

export default Home;
