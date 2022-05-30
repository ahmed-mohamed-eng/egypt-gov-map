import { VStack } from "@chakra-ui/react";

// Custom Components.
import MapArea from "./MapArea";
import SearchBox from "./SearchBox";
import StripeSeparator from "./StripeSeparator";
import QuickNavigationArea from "./QuickNavigationArea";

// Interfaces.
import { SearchBoxProps } from "./SearchBox/SearchBox";
import { QuickNavigationAreaProps } from "./QuickNavigationArea/QuickNavigationArea";

export interface MainContentAreaProps
  extends QuickNavigationAreaProps,
    SearchBoxProps {}

export const MainContentArea = (props: MainContentAreaProps) => {
  return (
    <VStack as="main" w="full" p="0.5rem" spacing="1rem" flex="14">
      <MapArea />
      <SearchBox placeholderTxt={props.placeholderTxt} />
      <StripeSeparator />
      <QuickNavigationArea
        list={props.list}
        quickNavTitle={props.quickNavTitle}
      />
    </VStack>
  );
};
