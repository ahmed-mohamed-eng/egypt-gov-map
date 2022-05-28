import { VStack } from "@chakra-ui/react";

// Custom Components.
import MapImage from "./MapImage";

export const MapArea = () => {
  return (
    <VStack w="full" spacing="0.5rem">
      <MapImage />
    </VStack>
  );
};
