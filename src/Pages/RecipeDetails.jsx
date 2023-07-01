import { useParams } from "react-router-dom";
import { useRecipe } from "../Context/RecipeContext";
import { useEffect, useState } from "react";

import styles from "./RecipeDetails.module.css";

const RecipeDetails = () => {
  const { id } = useParams();
  const { recipe } = useRecipe();
  const [recipeDetails, setRecipeDetails] = useState({});

  useEffect(() => {
    const recipeDetails = recipe.recipes.find((item) => item.id.includes(id));
    setRecipeDetails(recipeDetails);
  }, [id, recipe]);

  console.log(
    "🚀 ~ file: RecipeDetails.jsx:7 ~ RecipeDetails ~ recipeDetails",
    recipeDetails
  );

  return (
    <section>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.image__container}>
            <img src={recipeDetails?.img} alt="" />
          </div>
          <div className={styles.details__container}>
            <h3 className="recipe__name">Recipe Name</h3>
            <h3 className="recipe__name">{recipeDetails?.name}</h3>
            <p> Instructions : {recipeDetails?.instructions}</p>
            <div className="ingredient">
              <h3 className="recipe__name">Ingredients</h3>
              {recipeDetails?.ingredients?.map((item) => (
                <p key={item.id}>{item}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecipeDetails;
