import React from "react";

import { Flex, Image } from "@chakra-ui/react";

// Images Sources.
import mapImage from "../../../../images/Egypt_Provinces.webp";

export const MapImage = () => {
  return (
    <Flex>
      <Image src={mapImage.src} alt="Egypt Province Map" />
    </Flex>
  );
};
