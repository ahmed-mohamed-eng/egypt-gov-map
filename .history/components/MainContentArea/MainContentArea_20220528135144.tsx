import { VStack } from "@chakra-ui/react";

// Custom Components.
import MapArea from "./MapArea";
import QuickNavigationArea from "./QuickNavigationArea";

export const MainContentArea = () => {
  return (
    <VStack
      as="main"
      w="full"
      spacing="1rem"
      p="0.5rem"
      borderWidth="medium"
      borderColor="gray.400"
    >
      <MapArea />
      <QuickNavigationArea />
    </VStack>
  );
};
