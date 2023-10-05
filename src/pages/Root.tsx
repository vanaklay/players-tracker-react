import Layer from "../components/Layer";
import TodayPlayers from "../features/TodayPlayers";
import Navigation from "../features/Navigation";

const Root = () => {
  return (
    <Layer>
      <Navigation option="root" />
      <TodayPlayers />
    </Layer>
  );
};

export default Root;
