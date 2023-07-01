/* eslint-disable react/prop-types */
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

import styles from "./RecipeCard.module.css";
import { NavLink } from "react-router-dom";

const RecipeCard = ({ item }) => {
  return (
    <NavLink to={`/recipe/${item.id}`}>
      <div className={styles.card}>
        <div className={styles.card__image}>
          <img src={item.img} alt="" />
        </div>
        <div className={styles.card__details}>
          <h3 className={styles.recipe__name}>{item?.name}</h3>
          <h3>Cusine Type: </h3>
          <div className={styles.tags}>
            {item?.tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                <h4>{tag}</h4>
              </span>
            ))}
          </div>
          <div className={styles.Ingredients}>
            <h3 className={styles.option__name}>Ingredients</h3>
            <h4>see Recipe</h4>
          </div>
          <div className={styles.instructions}>
            <h3 className={styles.option__name}>Instructions</h3>
            <h4>see Instruction</h4>
          </div>
        </div>
        <div className={styles.icons__container}>
          <AiFillEdit className={styles.icon} />
          <AiFillDelete className={styles.icon} />
        </div>
      </div>
    </NavLink>
  );
};

export default RecipeCard;
