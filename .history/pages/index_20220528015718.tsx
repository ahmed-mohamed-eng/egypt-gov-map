import { Box, Flex, Heading } from "@chakra-ui/react";

import type { NextPage } from "next";

// Custom Components
import PageContainer from "../components/PageContainer";

const Home: NextPage = () => {
  return (
    <PageContainer>
      <Flex as="header" justifyContent="center" alignItems="center" fontSize="1.5rem">
        <Heading as="h1">اقاليم مصر</Heading>
      </Flex>
      <Flex as="nav"></Flex>
      <Flex as="main"></Flex>
      <Flex as="footer"></Flex>
    </PageContainer>
  );
};

export default Home;
