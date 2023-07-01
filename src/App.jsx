import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import RecipeDetails from "./Pages/RecipeDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
