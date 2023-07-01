/* eslint-disable react/prop-types */
import styles from "./AddRecipe.module.css";
import { MdOutlineAddCircle } from "react-icons/md";
const AddRecipe = ({ openModelHandler }) => {
  return (
    <>
      <section>
        <div className="container">
          <div
            className={styles.recipe__add}
            onClick={() => openModelHandler()}
          >
            <MdOutlineAddCircle className={styles.recipe__add__icon} />
            <p className={styles.recipe__add__text}>Add Recipe</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddRecipe;
