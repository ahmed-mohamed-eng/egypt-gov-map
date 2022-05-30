import { VStack } from "@chakra-ui/react";

// Custom Components.
import MapArea from "./MapArea";
import SearchBox from "./SearchBox";
import StripeSeparator from "./StripeSeparator";
import QuickNavigationArea from "./QuickNavigationArea";

// Interfaces.
import { MapAreaProps } from "./MapArea/MapArea";
import { QuickNavigationAreaProps } from "./QuickNavigationArea/QuickNavigationArea";

export interface MainContentAreaProps
  extends QuickNavigationAreaProps,
    MapAreaProps {}

export const MainContentArea = (props: MainContentAreaProps) => {
  return (
    <VStack as="main" w="full" p="0.5rem" spacing="1rem" flex="14">
      <MapArea mapAreas={props.mapAreas} mapImageSrc={props.mapImageSrc} />
      <SearchBox placeholderTxt="للبحث, أدخل الكلمة ثم إضغط إنتر" />
      <StripeSeparator />
      <QuickNavigationArea
        list={props.list}
        quickNavTitle={props.quickNavTitle}
      />
    </VStack>
  );
};
