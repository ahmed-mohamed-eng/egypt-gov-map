import type { NextPage } from "next";

// Custom Components
import Header from "../components/Header";
import PageContainer from "../components/PageContainer";
import MainContentArea from "../components/MainContentArea";

// Constants.
import provincesList from "../constants/provincesList";
import mainAreaCoords from "../constants/provinces/mainArea";

// Images Sources.
import mainAreaImage from "../images/Egypt_Provinces.jpg";

// Constants.
import provinces from "../constants/provinces";

const Home: NextPage = () => {
  return (
    <PageContainer>
      <Header headerTitle="الخرائط الجغرافية" />
      <MainContentArea
        breadcrumbItems={provinces}
        list={provincesList}
        mapAreas={mainAreaCoords}
        mapImageSrc={mainAreaImage.src}
        mapImageWidth={235}
        mapImageHeight={204.25}
        quickNavTitle="اقاليم مصر"
      />
    </PageContainer>
  );
};

export default Home;
