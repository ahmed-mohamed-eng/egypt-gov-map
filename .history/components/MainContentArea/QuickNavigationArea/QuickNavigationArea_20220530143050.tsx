import { VStack, Heading } from "@chakra-ui/react";

import CitiesList from "./CitiesList";

export interface QuickNavigationAreaProps {
  quickNavTitle: string;
}

export const QuickNavigationArea = (props: QuickNavigationAreaProps) => {
  return (
    <VStack w="full" spacing="1rem" px="0.25rem">
      <Heading
        w="full"
        h="fit-content"
        borderRadius="0.25rem"
        color="white"
        bg="red.500"
        p="0.25rem"
        textAlign="center"
      >
        اقاليم مصر
      </Heading>
      <CitiesList
        list={[
          {
            provinceName: "القاهرة",
            url: "https://www.google.com",
            childItems: [
              {
                cityName: "القاهرة",
                url: "https://www.google.com/",
              },
              {
                cityName: "القاهرة",
                url: "https://www.google.com/",
              },
              {
                cityName: "القاهرة",
                url: "https://www.google.com/",
              },
            ],
          },
        ]}
      />
    </VStack>
  );
};
