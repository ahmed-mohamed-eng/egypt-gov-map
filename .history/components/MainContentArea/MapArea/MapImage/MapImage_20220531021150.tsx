import { v4 as uuid } from "uuid";

import { Flex, Image } from "@chakra-ui/react";

import ImageMapper , {MapAreas, Map} from "react-img-mapper";

export type MapArea = {
  areaElCoords: string;
  areaElUrl: string;
};
export interface MapImageProps {
  mapImageSrc: string;
  mapAreas: Array<MapArea>;
}

export const MapImage = (props: MapImageProps) => {
  const areasOnImage = props.mapAreas.map((area) => {
    return (
      <area
        key={uuid()}
        target="_self"
        shape="poly"
        coords={area.areaElCoords}
        href={area.areaElUrl}
      />
    );
  });

  return (
    <Flex w="full">
      <Image
        useMap="#mapinfo"
        mixBlendMode="multiply"
        src={props.mapImageSrc}
        alt="Egypt Province Map"
      />
      <map name="mapinfo">{areasOnImage}</map>
    </Flex>
  );
};
