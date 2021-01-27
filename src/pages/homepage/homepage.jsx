import React from "react";
import Directory from "../../components/directory";

import "./homepage.scss";
import HomePageContainer from "./homepage.styles";

function HomePage() {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
}

export default HomePage;
