import { v4 as uuidV4 } from "uuid";

import { List, ListItem, ListIcon } from "@chakra-ui/react";

import { BiCircle } from "react-icons/bi";

export type childItem = {
  name: string;
  url: string;
};

export type parentItem = {
  headerTitle: string;
  childItems: Array<childItem>;
};

export interface CitiesListProps {
  list: Array<parentItem>;
}

export const CitiesList = (props: CitiesListProps) => {
  const items = props.list.map((item) => {
    return (
      <List key={uuidV4()}>
        <ListIcon as={BiCircle} />
        <ListItem>{item.headerTitle}</ListItem>
      </List>
    );
  });
  return <List></List>;
};
