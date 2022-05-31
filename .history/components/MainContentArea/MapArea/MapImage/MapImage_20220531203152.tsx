import { Flex } from "@chakra-ui/react";

import ImageMapper, { MapAreas, Map } from "react-img-mapper";

export interface MapImageProps {
  mapImageSrc: string;
  mapAreas: Array<MapAreas>;
  mapImageWidth: number;
  mapImageHeight: number;
}

export const MapImage = (props: MapImageProps) => {
  const MAP: Map = {
    name: "EgyptProvinces",
    areas: props.mapAreas,
  };

  return (
    <Flex w="fit-content">
      <ImageMapper src={props.mapImageSrc} width={props.mapImageWidth} height={204.25} map={MAP} />
    </Flex>
  );
};
