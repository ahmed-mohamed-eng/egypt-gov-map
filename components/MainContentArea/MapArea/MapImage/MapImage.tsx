import { Flex, useBreakpointValue } from "@chakra-ui/react";

import { useRouter } from "next/router";

import ImageMapper, { MapAreas, Map } from "react-img-mapper";

// Enums
import { ProvincesNames } from "constants/provinces/mainArea";
export interface MapImageProps {
  mapImageSrc: string;
  mapAreas: Array<MapAreas>;
  mapImageWidth: number;
  mapImageHeight: number;
}

export const MapImage = (props: MapImageProps) => {
  const router = useRouter();

  const MAP: Map = {
    name: "EgyptProvinces",

    areas: props.mapAreas,
  };

  const onClickArea = (area: MapAreas, index: number, event: any): void => {
    switch (area.id) {
      case ProvincesNames.ALEX:
        router.push("/provinces/alexandra");
    }
  };

  const imageWidth = useBreakpointValue({ base: 235, md: 688, xl: 618, });
  const imageHeights = useBreakpointValue({ base: 204.25, md: 597.967, xl: 537.133, });

  return (
    <Flex w="fit-content">
      <ImageMapper
        src={props.mapImageSrc}
        width={imageWidth}
        height={imageHeights}
        onClick={onClickArea}
        map={MAP}
      />
    </Flex>
  );
};
