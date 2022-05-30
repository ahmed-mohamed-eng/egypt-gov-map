import React from "react";

import { Flex, Image } from "@chakra-ui/react";

// Images Sources.
import mapImage from "../../../../images/Egypt_Provinces.jpg";

export const MapImage = () => {
  return (
    <Flex borderWidth="thin" borderColor="red.500" p="0.5rem">
      <Image mixBlendMode="multiply" src={mapImage.src} alt="Egypt Province Map" />
    </Flex>
  );
};
