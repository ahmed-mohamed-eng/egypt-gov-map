import { Flex, Heading } from "@chakra-ui/react";

export interface HeaderProps {
    headerTitle: string;
}

export const Header = (props: HeaderProps) => {
  return (
    <Flex
      as="header"
      justifyContent="center"
      alignItems="center"
      fontSize="1.5rem"
    >
      <Heading as="h1">اقاليم مصر</Heading>
    </Flex>
  );
};
