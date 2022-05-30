import { VStack, Heading } from "@chakra-ui/react";
import CitiesList from "./CitiesList";
import ProvincesList from "./ProvincesList";

export const QuickNavigationArea = () => {
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
      <ProvincesList
        provincesList={[
          {
            provinceName: "القاهرة",
            url: "#",
            children: <a href="#">Hello, World</a>,
          },
        ]}
      />
    </VStack>
  );
};
