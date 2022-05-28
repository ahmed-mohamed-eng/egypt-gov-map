import { VStack } from "@chakra-ui/react";

import type { NextPage } from "next";
import Header from "../components/Header";

// Custom Components
import PageContainer from "../components/PageContainer";

const Home: NextPage = () => {
  return (
    <PageContainer>
      <Header headerTitle="اقاليم مصر"/>
      <VStack as="main">

      </VStack>
    </PageContainer>
  );
};

export default Home;
