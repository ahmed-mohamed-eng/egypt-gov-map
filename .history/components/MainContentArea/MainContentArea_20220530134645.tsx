import { VStack } from "@chakra-ui/react";

// Custom Components.
import MapArea from "./MapArea";
import QuickNavigationArea from "./QuickNavigationArea";

export const MainContentArea = () => {
  return (
    <VStack
      as="main"
      w="full"
      p="0.5rem"
      spacing="1rem"
      flex="14"
    >
      <MapArea />
      <QuickNavigationArea />
    </VStack>
  );
};
