import type { NextPage } from "next";

// Custom Components
import Header from "components/Header";
import PageContainer from "components/PageContainer";
import MainContentArea from "components/MainContentArea";

// Constants.
import provincesList from "constants/provincesList";
import mainAreaCoords from "constants/provinces/mainArea";

// Images Sources.
import mainAreaImage from "images/provinces/alexandra/alex_region.jpg";

// Constants.
import AlexGovList from "constants/provinces/alexandra";

const AlexProvince: NextPage = () => {
  return (
    <PageContainer>
      <Header headerTitle="اقليم الاسكندرية" />
      <MainContentArea
        breadcrumbItems={AlexGovList}
        list={provincesList}
        mapAreas={mainAreaCoords}
        mapImageSrc={mainAreaImage.src}
        mapImageWidth={235}
        mapImageHeight={166.383}
        quickNavTitle="اقاليم مصر"
      />
    </PageContainer>
  );
};

export default AlexProvince;
