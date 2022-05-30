import { List, ListItem, ListIcon, VStack } from "@chakra-ui/react";

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
      <List>
        <ListItem key={item.headerTitle}>
          <ListIcon icon="map-marker-outline" />
          {item.headerTitle}
        </ListItem>
      </List>
    );
  });
  return <VStack></VStack>;
};
