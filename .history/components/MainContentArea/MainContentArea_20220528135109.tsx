import { VStack } from "@chakra-ui/react";

// Custom Components.
import MapArea from "./MapArea";
import QuickNavigationArea from "./QuickNavigationArea";

export const MainContentArea = () => {
  return (
    <VStack
      borderWidth="medium"
      borderColor="gray.400"
      as="main"
      w="full"
      spacing="1rem"
    >
      <MapArea />
      <QuickNavigationArea />
    </VStack>
  );
};
