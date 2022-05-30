import type { NextPage } from "next";

// Custom Components
import Header from "../components/Header";
import PageContainer from "../components/PageContainer";
import MainContentArea from "../components/MainContentArea";

const Home: NextPage = () => {
  return (
    <PageContainer>
      <Header headerTitle="اقاليم مصر" />
      <MainContentArea />
    </PageContainer>
  );
};

export default Home;
