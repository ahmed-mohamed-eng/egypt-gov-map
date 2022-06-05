import { VStack, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";

import CitiesList from "./CitiesList";

// Interfaces
import { CitiesListProps } from "./CitiesList/CitiesList";

export interface QuickNavigationAreaProps extends CitiesListProps {
  quickNavTitle: string;
}

export const QuickNavigationArea = (props: QuickNavigationAreaProps) => {
  const router = useRouter();

  const onGoToHomePage = () => {
    router.push("/");
  };

  return (
    <VStack w="full" spacing="1rem" px="0.25rem" onClick={onGoToHomePage}>
      <Heading
        w="full"
        h="fit-content"
        borderRadius="0.25rem"
        color="white"
        bg="red.500"
        p="0.25rem"
        textAlign="center"
      >
        {props.quickNavTitle}
      </Heading>
      <CitiesList list={props.list} />
    </VStack>
  );
};
