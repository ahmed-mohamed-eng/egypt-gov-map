import { v4 as uuidV4 } from "uuid";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

export type BreadcrumbElement = {
  url: string;
  text: string;
};

export interface MapInfoDisplayedLinksProps {
  breadcrumbItems: Array<BreadcrumbElement>;
}

export const MapInfoDisplayedLinks = (props: MapInfoDisplayedLinksProps) => {
  const breadcrumbItems = props.breadcrumbItems.map((item) => {
    return (
      <BreadcrumbItem key={uuidV4()}>
        <BreadcrumbLink
          _hover={{
            textDecoration: "none",
            fontWeight: "simibold",
          }}
          href={item.url}
        >
          {item.text}
        </BreadcrumbLink>
      </BreadcrumbItem>
    );
  });

  return (
    <Breadcrumb spacing="1px" separator="," w="full">
      {breadcrumbItems}
    </Breadcrumb>
  );
};
