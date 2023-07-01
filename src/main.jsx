import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import RecipeProvider from "./Context/RecipeContext.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <RecipeProvider>
      <App />
    </RecipeProvider>
  </BrowserRouter>
);
