/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useReducer } from "react";
import recipeData from "../data/RecipeData";

const RecipeContext = createContext(null);
const initialState = {
  recipes: [],
};

const recipeReducer = (state, action) => {
  switch (action.type) {
    case "SAVE_RECIPE": {
      localStorage.setItem("recipes", JSON.stringify(action.payload));
      return {
        ...state,
        recipes: [],
      };
    }
    case "GET_RECIPE": {
      return {
        ...state,
        recipes: action.payload,
      };
    }

    case "SAVE__NEW__RECIPE": {
      const newRecipe = [
        ...state.recipes,
        {
          id: state.recipes.length + 1,
          name: action.payload.title,
          img: action.payload.img,
          instruction: action.payload.instruction,
          ingredients: action.payload.ingredients.split(" "),
          tags: action.payload.Cusine.split(" "),
        },
      ];
      localStorage.setItem("recipes", JSON.stringify(newRecipe));
      return {
        ...state,
        recipes: newRecipe,
      };
    }

    default:
      return state;
  }
};

const RecipeProvider = ({ children }) => {
  const [recipe, dispatch] = useReducer(recipeReducer, initialState);
  useEffect(() => {
    dispatch({ type: "SAVE_RECIPE", payload: recipeData });
    dispatch({
      type: "GET_RECIPE",
      payload: JSON.parse(localStorage.getItem("recipes")),
    });
  }, []);

  const addNewRecipe = (newRecipe) => {
    dispatch({ type: "SAVE__NEW__RECIPE", payload: newRecipe });
    dispatch({
      type: "GET_RECIPE",
      payload: JSON.parse(localStorage.getItem("recipes")),
    });
  };

  return (
    <RecipeContext.Provider value={{ recipe, dispatch, addNewRecipe }}>
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipe = () => useContext(RecipeContext);

export default RecipeProvider;
