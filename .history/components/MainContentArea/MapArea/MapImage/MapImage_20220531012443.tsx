import React from "react";

import { Flex, Image } from "@chakra-ui/react";

export type MapArea = {
  coords: string;
  url: string;
};
export interface MapImageProps {
  mapImageSrc: string;
  mapAreas: Array<MapArea>;
}

export const MapImage = (props: MapImageProps) => {
  return (
    <Flex w="full">
      <Image
        useMap="#mapinfo"
        mixBlendMode="multiply"
        src={props.mapImageSrc}
        alt="Egypt Province Map"
      />
      <map name="mapinfo"></map>
    </Flex>
  );
};
