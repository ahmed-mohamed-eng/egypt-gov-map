import { VStack } from "@chakra-ui/react";

// Custom Components.
import MapImage from "./MapImage";
import MapInfoDisplayedLinks from "./MapInfoDisplayedLinks";

export const MapArea = () => {
  return (
    <VStack
      borderWidth="thin"
      borderColor="red.500"
      boxShadow="0 1px 3px 0 #b5b5b5"
      border="1px solid #DDD"
      borderBottom="4px solid #ef3636"
      p="0.5rem"
      w="full"
      spacing="0.5rem"
    >
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
