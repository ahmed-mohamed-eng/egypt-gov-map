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
import MatroohDepartmentList from "constants/provinces/alexandra/matroh";

const AlexProvince: NextPage = () => {
  return (
    <PageContainer>
      <Header headerTitle="محافظة مطروح" />
      <MainContentArea
      breadcrumbItems={MatroohDepartmentList}
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
