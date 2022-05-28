import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

export type BreadcrumbElement = {
  url: string;
  text: string;
};

export interface QuickNavigationAreaProps {
  breadcrumbItems: Array<BreadcrumbElement>;
}

export const QuickNavigationArea = (props: QuickNavigationAreaProps) => {
  const breadcrumbItems = props.breadcrumbItems.map((item, index) => {
    return (
      <BreadcrumbItem key={index}>
        <BreadcrumbLink href={item.url}>{item.text}</BreadcrumbLink>
      </BreadcrumbItem>
    );
  });

  return <Breadcrumb>{breadcrumbItems}</Breadcrumb>;
};
