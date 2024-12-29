import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import RoutesViews from "./components/routes/RoutesViews";

const App = () => {

  return (
    <>
      <BrowserRouter>
        <RoutesViews />
      </BrowserRouter>
    </>
  );
};

export default App;