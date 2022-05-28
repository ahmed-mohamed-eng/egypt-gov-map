import { VStack } from "@chakra-ui/react";
import MapArea from "./MapArea";

export const MainContentArea = () => {
  return (
    <VStack as="main" w="full" spacing="1rem">
      <MapArea />
    </VStack>
  );
};
