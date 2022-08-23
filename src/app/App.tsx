import { useState } from "react";
import { GlobalStyle } from "./globalStyles";
import { artistsAPI } from "../service/artistsAPI";
import { Header } from "../widgets/header";

export const App: React.FC = () => {
  
  // artistsAPI.getTopArtists()

  return <>
    <GlobalStyle />
    <Header />
  </>;
};
