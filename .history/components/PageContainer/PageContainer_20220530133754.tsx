import { Center, Flex, VStack } from "@chakra-ui/react";

// import bgImage from "../../images/backgroundImage.png";

export const PageContainer = (props: any) => {
  return (
    <Flex backgroundImage={`url(../../images/backgroundImage.png)`}>
      <Center w="full" h="full" py="2rem">
        <VStack
          width={["300px"]}
          minH="100vh"
          boxShadow="0 0 5px #CACACA"
          py="1rem"
          px="0.5rem"
          spacing="1rem"
        >
          {props.children}
        </VStack>
      </Center>
    </Flex>
  );
};