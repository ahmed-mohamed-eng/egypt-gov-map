import { VStack, Heading } from "@chakra-ui/react";

export const QuickNavigationArea = () => {
  return (
    <VStack w="full" px="0.25rem">
      <Heading
        w="full"
        h="fit-content"
        borderRadius="0.25rem"
        color="white"
        bg="red.500"
        p="0.25rem"
        textAlign="center"
      >
        اقاليم مصر
      </Heading>
    </VStack>
  );
};
