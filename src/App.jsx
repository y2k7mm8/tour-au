import { BrowserRouter } from "react-router-dom";
import { MyRoutes } from "../src/assets/router/MyRoutes";

function App() {
  return (
    <BrowserRouter>
      <MyRoutes />
    </BrowserRouter>
  );
}

export default App;
