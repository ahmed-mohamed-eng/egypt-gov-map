import { Input } from "@chakra-ui/react";

export interface SearchBoxProps {
  placeholderTxt: string;
}

export const SearchBox = (props: SearchBoxProps) => {
  return (
    <Input
      w="full"
      borderColor="#F1F1F1"
      borderTopColor="#DDD"
      borderBottomColor="#DDD"
      borderRadius="3px"
      placeholder={props.placeholderTxt}
    />
  );
};
