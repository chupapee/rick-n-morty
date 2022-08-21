import { artistsAPI } from "./service/artistsAPI";

export const App: React.FC = () => {
  
  artistsAPI.getTopArtists()

  return <></>;
};
