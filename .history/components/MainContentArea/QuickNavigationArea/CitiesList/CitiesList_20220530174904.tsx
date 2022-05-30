import { v4 as uuidV4 } from "uuid";

import { List, ListItem, ListIcon } from "@chakra-ui/react";

import { BiCircle } from "react-icons/bi";

export type city = {
  cityName: string;
  url: string;
};

export type province = {
  provinceName: string;
  url: string;
  childItems: Array<city>;
};

export interface CitiesListProps {
  list: Array<province>;
}

export const CitiesList = (props: CitiesListProps) => {
  const items = props.list.map((item, parentIndex) => {
    return (
      <List key={uuidV4()}>
        <ListItem as="a" href={item.url}>
          <ListIcon as={BiCircle} color="red.500" fill="red.500" />
          {item.provinceName}
        </ListItem>
        {item.childItems.map((childItem) => {
          return (
            <List key={uuidV4()} pr={`1rem`}>
              <ListItem as="a" href={childItem.url}>
                <ListIcon as={BiCircle} />
                {childItem.cityName}
              </ListItem>
            </List>
          );
        })}
      </List>
    );
  });
  return <List w="full">{items}</List>;
};
