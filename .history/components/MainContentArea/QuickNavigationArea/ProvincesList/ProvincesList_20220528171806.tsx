import { v4 as uuidV4 } from "uuid";

import { BiCircle } from "react-icons/bi";

import { List, ListIcon, ListItem } from "@chakra-ui/react";

export type province = {
  provinceName: string;
  url: string;
  children: JSX.Element | JSX.Element[];
};

export interface ProvincesListProps {
  provincesList: Array<province>;
}

export const ProvincesList = (props: ProvincesListProps) => {
  const items = props.provincesList.map((item, parentIndex) => {
    return (
      <List key={uuidV4()}>
        <ListItem as="a" href={item.url}>
          <ListIcon as={BiCircle} color="red.500" />
          {item.provinceName}
        </ListItem>
        {item.children}
      </List>
    );
  });
  return <>{items}</>;
};
