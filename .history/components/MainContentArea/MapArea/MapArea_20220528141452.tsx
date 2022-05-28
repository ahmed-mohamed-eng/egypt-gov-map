import { VStack } from "@chakra-ui/react";

// Custom Components.
import MapImage from "./MapImage";
import MapInfoDisplayedLinks from "./MapInfoDisplayedLinks";

export const MapArea = () => {
  return (
    <VStack borderWidth="thin" borderColor="red.500" w="full" spacing="0.5rem">
      <MapImage />
      <MapInfoDisplayedLinks
        breadcrumbItems={[
          {
            text: "اقاليم مصر",
            url: "#",
          },
        ]}
      />
    </VStack>
  );
};
