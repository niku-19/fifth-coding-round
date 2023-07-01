/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./Model.module.css";
import { useRecipe } from "../../Context/RecipeContext";

const Model = ({ closeModelHandler }) => {
  const [addRecipe, setAddRecipe] = useState({
    title: "",
    img: "/src/assets/r-8.jpg",
    instruction: "",
    ingredients: "",
    Cusine: "",
  });

  const { addNewRecipe } = useRecipe();

  const handleAddToRecipe = (event, newRecipe) => {
    event.preventDefault();
    addNewRecipe(newRecipe);
  };

  return (
    <>
      <div
        className={styles.model__wrapper}
        onClick={() => closeModelHandler()}
      ></div>
      <div className={styles.model__container}>
        <div className={styles.model__header}>
          <p>Add Recipe</p>
        </div>
        <form action="" className={styles.form}>
          <div className={styles.model__form__group}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              value={addRecipe.title}
              name="title"
              id="title"
              onChange={(e) =>
                setAddRecipe({ ...addRecipe, title: e.target.value })
              }
            />
          </div>
          <div className={styles.model__form__group}>
            <label htmlFor="image">Image</label>
            <input
              type="file"
              onChange={(e) =>
                setAddRecipe({ ...addRecipe, img: e.target.value })
              }
              name="image"
              id="image"
            />
          </div>
          <div className={styles.model__form__group}>
            <label htmlFor="description">Instruction</label>
            <textarea
              name="description"
              value={addRecipe.instruction}
              id="description"
              onChange={(e) =>
                setAddRecipe({ ...addRecipe, instruction: e.target.value })
              }
            ></textarea>
          </div>
          <div className={styles.model__form__group}>
            <label htmlFor="ingredients">Ingredients</label>
            <textarea
              name="ingredients"
              placeholder="add your Ingredients here... (separate by single space)"
              value={addRecipe.ingredients}
              onChange={(e) =>
                setAddRecipe({ ...addRecipe, ingredients: e.target.value })
              }
              id="ingredients"
            ></textarea>
          </div>
          <div className={styles.model__form__group}>
            <label htmlFor="steps">Cusine Type</label>
            <textarea
              name="steps"
              value={addRecipe.Cusine}
              onChange={(e) =>
                setAddRecipe({ ...addRecipe, Cusine: e.target.value })
              }
              placeholder="add your Cusine Type here... (separate by single space)"
              id="steps"
            ></textarea>
          </div>
          <button
            onClick={(e) => handleAddToRecipe(e, addRecipe)}
            className={styles.add__recipe__button}
          >
            Add Recipe
          </button>
        </form>
      </div>
    </>
  );
};

export default Model;
