import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Ingredients from "./pages/Ingredients";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/ingredients" element={<Ingredients />} />
    </Routes>
  );
};

export default App;
