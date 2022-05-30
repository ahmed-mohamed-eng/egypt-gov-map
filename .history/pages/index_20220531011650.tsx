import type { NextPage } from "next";

// Custom Components
import Header from "../components/Header";
import PageContainer from "../components/PageContainer";
import MainContentArea from "../components/MainContentArea";

// Constants.
import provincesList from "../constants/provincesList";

const Home: NextPage = () => {
  return (
    <PageContainer>
      <Header headerTitle="الخرائط الجغرافية" />
      <MainContentArea
        quickNavTitle="اقاليم مصر"
        placeholderTxt="للبحث, أدخل الكلمة ثم إضغط إنتر"
        list={provincesList}
      />
    </PageContainer>
  );
};

export default Home;
