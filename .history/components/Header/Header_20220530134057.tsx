import { Flex, Heading } from "@chakra-ui/react";

export interface HeaderProps {
  headerTitle: string;
}

export const Header = (props: HeaderProps) => {
  return (
    <Flex
      as="header"
      w="full"
      justifyContent="center"
      alignItems="center"
      fontSize="1.5rem"
      fontFamily="arabic"
      flex="1"
    >
      <Heading w="full" textAlign="right" as="h1">{props.headerTitle}</Heading>
    </Flex>
  );
};
