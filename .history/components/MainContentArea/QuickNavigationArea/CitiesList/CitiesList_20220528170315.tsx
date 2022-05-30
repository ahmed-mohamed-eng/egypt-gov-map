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
        <ListItem>
          <ListIcon as={BiCircle} color="red.500" />
          {item.headerTitle}
          {item.childItems.map((childItem) => {
            return (
              // <List key={uuidV4()}>
              <ListItem key={uuidV4()} as="a" href={childItem.url}>
                <ListIcon as={BiCircle} />
                {childItem.name}
              </ListItem>
              // </List>
            );
          })}
        </ListItem>
      </List>
    );
  });
  return <List w="full">{items}</List>;
};
