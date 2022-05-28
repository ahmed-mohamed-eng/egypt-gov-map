import { VStack } from "@chakra-ui/react";

// Custom Components.
import MapArea from "./MapArea";
import QuickNavigationArea from "./QuickNavigationArea";

export const MainContentArea = () => {
  return (
    <VStack
      as="main"
      w="full"
      p="0.5rem"
      spacing="1rem"
      borderWidth="medium"
      borderColor="gray.400"
    >
      <MapArea />
      <QuickNavigationArea
        breadcrumbItems={[
          {
            text: "اقاليم مصر",
            url: "#",
          },
          {
            text: "اقاليم مصر",
            url: "#",
          },
        ]}
      />
    </VStack>
  );
};
