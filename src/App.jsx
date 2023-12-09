import { BrowserRouter } from "react-router-dom";
import { Tech } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
          <Tech />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
