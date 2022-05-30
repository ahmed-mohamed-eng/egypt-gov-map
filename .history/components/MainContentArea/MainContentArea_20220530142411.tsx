import { VStack } from "@chakra-ui/react";

// Custom Components.
import MapArea from "./MapArea";
import SearchBox from "./SearchBox";
import StripeSeparator from "./StripeSeparator";
import QuickNavigationArea from "./QuickNavigationArea";

export const MainContentArea = () => {
  return (
    <VStack as="main" w="full" p="0.5rem" spacing="1rem" flex="14">
      <MapArea />
      <SearchBox placeholderTxt="للبحث, أدخل الكلمة ثم إضغط إنتر" />
      <StripeSeparator />
      <QuickNavigationArea />
    </VStack>
  );
};
