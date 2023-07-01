import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className="container">
      <header className={styles.header}>
        <div className={styles.search__bar}>
          <input
            type="text"
            className={styles.input}
            placeholder="please search your food recipe herer"
          />
        </div>
        <div className={styles.radio__filter}>
          <p className={styles.filters__name}>Filters :</p>
          <div className={styles.radio__filter__item}>
            <input type="radio" name="filter" id="filter1" />
            <label htmlFor="filter1">Name</label>

            <input type="radio" name="filter" id="filter2" />
            <label htmlFor="filter2">Ingerdients</label>

            <input type="radio" name="filter" id="filter3" />
            <label htmlFor="filter3">Cusine</label>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
