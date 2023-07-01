import { useRecipe } from "../../Context/RecipeContext";
import RecipeCard from "../RecipeCard/RecipeCard";
import styles from "./Recipe.module.css";

const Recipe = () => {
  const { recipe } = useRecipe();
  console.log("🚀 ~ file: Recipe.jsx:7 ~ Recipe ~ recipe:", recipe);
  return (
    <section>
      <div className="container">
        <div className={styles.grid}>
          {recipe?.recipes?.map((item) => (
            <RecipeCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recipe;
