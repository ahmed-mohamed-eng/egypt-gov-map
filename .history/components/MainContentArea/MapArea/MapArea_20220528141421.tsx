import { VStack } from "@chakra-ui/react";

// Custom Components.
import MapImage from "./MapImage";
import MapInfoDisplayedLinks from "./MapInfoDisplayedLinks";

export const MapArea = () => {
  return (
    <VStack w="full" spacing="0.5rem">
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
