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
    <VStack
      as="main"
      w="full"
      p="0.5rem"
      flex="14"
      alignItems={[null, null, null, null, "flex-start"]}
      spacing={["1rem", null, null, null, "0rem"]}
      flexDirection={{
        base: "column",
        xl: "row-reverse",
      }}
    >
      <MapArea
        breadcrumbItems={props.breadcrumbItems}
        mapImageHeight={props.mapImageHeight}
        mapImageWidth={props.mapImageWidth}
        mapAreas={props.mapAreas}
        mapImageSrc={props.mapImageSrc}
      />
      <VStack
        w={["full", null, null, null, "40%"]}
        spacing="1rem"
        marginLeft={[null, null, null, null, "2rem !important"]}
      >
        <SearchBox placeholderTxt="للبحث, أدخل الكلمة ثم إضغط إنتر" />
        <StripeSeparator />
        <QuickNavigationArea
          list={props.list}
          quickNavTitle={props.quickNavTitle}
        />
      </VStack>
    </VStack>
  );
};
