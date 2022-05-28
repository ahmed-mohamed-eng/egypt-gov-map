import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";

export type BreadcrumbElement = {
    url: string;
    text: string;
}

export interface QuickNavigationAreaProps {
    breadcrumbItems: Array<BreadcrumbElement>;
}

export const QuickNavigationArea = (props: QuickNavigationAreaProps) => {
  return <Breadcrumb>
    
  </Breadcrumb>;
};
