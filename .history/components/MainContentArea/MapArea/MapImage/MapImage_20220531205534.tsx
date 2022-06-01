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

  const onClickArea = (area: MapAreas, index: number, event: any): void => {
    console.debug('The area you clicked is ', area);
  };

  return (
    <Flex w="fit-content">
      <ImageMapper
        src={props.mapImageSrc}
        width={props.mapImageWidth}
        height={props.mapImageHeight}
        onClick={onClickArea}
        map={MAP}
      />
    </Flex>
  );
};
