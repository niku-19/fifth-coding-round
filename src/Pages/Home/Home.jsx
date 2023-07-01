import { useState } from "react";
import AddRecipe from "../../Components/Add Recipe/AddRecipe";
import Header from "../../Components/Header/Header";
import Recipe from "../../Components/Recipe/Recipe";
import Model from "../../Components/Add Recipe Model/Model";

const Home = () => {
  const [openModel, setOpenModel] = useState(false);
  const openModelHandler = () => {
    setOpenModel(true);
  };

  const closeModelHandler = () => {
    setOpenModel(false);
  };

  return (
    <>
      <div>
        <Header />
        <AddRecipe openModelHandler={openModelHandler} />
        <Recipe />
      </div>
      {openModel && <Model closeModelHandler={closeModelHandler} />}
    </>
  );
};

export default Home;
