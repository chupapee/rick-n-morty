import { GlobalStyle } from "./globalStyles";
import { Header } from "../widgets/nav";
import { Routing } from "./routing";

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routing />
    </>
  );
};
