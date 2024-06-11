/**
 * Entry Point for the application.
 * This is where the routing is setup.
 */
import MapCanvas from "../../pages/MapCanvas/MapCanvas";
import { Snowfall } from "react-snowfall";

const App = () => {
  return (
    <>
      <MapCanvas />
      <Snowfall />
    </>
  );
};

export default App;
