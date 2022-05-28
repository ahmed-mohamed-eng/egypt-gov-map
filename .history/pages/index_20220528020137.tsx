import { Flex, Heading } from "@chakra-ui/react";

import type { NextPage } from "next";
import Header from "../components/Header";

// Custom Components
import PageContainer from "../components/PageContainer";

const Home: NextPage = () => {
  return (
    <PageContainer>
      <Header headerTitle="اقاليم مصر"/>
      <Flex as="main"></Flex>
    </PageContainer>
  );
};

export default Home;
