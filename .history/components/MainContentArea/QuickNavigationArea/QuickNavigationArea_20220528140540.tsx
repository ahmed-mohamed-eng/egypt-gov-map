import { v4 as uuidV4 } from "uuid";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

export type BreadcrumbElement = {
  url: string;
  text: string;
};

export interface QuickNavigationAreaProps {
  breadcrumbItems: Array<BreadcrumbElement>;
}

export const QuickNavigationArea = (props: QuickNavigationAreaProps) => {
  const breadcrumbItems = props.breadcrumbItems.map((item) => {
    return (
      <BreadcrumbItem key={uuidV4()}>
        <BreadcrumbLink href={item.url}>{item.text}</BreadcrumbLink>
      </BreadcrumbItem>
    );
  });

  return <Breadcrumb w="full">{breadcrumbItems}</Breadcrumb>;
};
