import { VStack } from "@chakra-ui/react";

// Custom Components.
import MapImage from "./MapImage";
import MapInfoDisplayedLinks from "./MapInfoDisplayedLinks";

// Interfaces.
import { MapImageProps } from "./MapImage/MapImage";
import { MapInfoDisplayedLinksProps } from "./MapInfoDisplayedLinks/MapInfoDisplayedLinks";

export interface MapAreaProps
  extends MapImageProps,
    MapInfoDisplayedLinksProps {}

export const MapArea = (props: MapAreaProps) => {
  return (
    <VStack
      borderWidth="thin"
      borderColor="red.500"
      boxShadow="0 1px 3px 0 #b5b5b5"
      border="1px solid #DDD"
      borderBottom="4px solid #ef3636"
      p="0.5rem"
      w="full"
      h={[null, null, null, null, "70vh"]}
      spacing="0.5rem"
    >
      <MapImage
        mapImageHeight={props.mapImageHeight}
        mapImageWidth={props.mapImageWidth}
        mapAreas={props.mapAreas}
        mapImageSrc={props.mapImageSrc}
      />
      <MapInfoDisplayedLinks breadcrumbItems={props.breadcrumbItems} />
    </VStack>
  );
};
