import { Flex, VStack } from "@chakra-ui/react";

import bgImage from "../../images/backgroundImage.png";

export const PageContainer = (props: any) => {
  return (
    <Flex>
      <VStack

        minH="100vh"
        backgroundImage={`url(../../images/backgroundImage.png)`}
        boxShadow="0 0 5px #CACACA"
        py="1rem"
        px="0.5rem"
        spacing="1rem"
      >
        {props.children}
      </VStack>
    </Flex>
  );
};
