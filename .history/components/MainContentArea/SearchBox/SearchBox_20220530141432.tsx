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
      boxShadow="0 1px 3px 0 #B5B5B5"
      borderRadius="3px"
      placeholder={props.placeholderTxt}
    />
  );
};
