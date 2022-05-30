import { List, ListItem, ListIcon, UnorderedList } from "@chakra-ui/react";

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

export const CitiesList = () => {
  return <div>CitiesList</div>;
};
