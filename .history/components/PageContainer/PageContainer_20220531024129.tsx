import { Center, Flex, VStack } from "@chakra-ui/react";

// import bgImage from "../../images/backgroundImage.png";

export const PageContainer = (props: any) => {
  return (
    <Flex backgroundImage={`url(/images/backgroundImage.png)`}>
      <Center w="full" h="full" py="1.5rem">
        <VStack
          bgColor="white"
          width={["76vw"]}
          minH="95vh"
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
