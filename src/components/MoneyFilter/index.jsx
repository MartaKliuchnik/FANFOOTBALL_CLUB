import { useState } from "react";

import styles from "./index.module.css";

export default function MoneyFilter() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10);
  const [isTogglerChecked, setIsTogglerChecked] = useState(false);

  const steps = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className={styles.tab}>
      <div className={styles.inputWrapper}>
        <input
          onChange={(e) => {
            setMinPrice(e.target.value);
          }}
          type="range"
          value={minPrice}
          step={1}
          min="0"
          max="10"
        />
        <input
          onChange={(e) => {
            setMaxPrice(e.target.value);
          }}
          type="range"
          value={maxPrice}
          step={1}
          min="0"
          max="10"
        />
      </div>
      <div className={styles.inputSteps}>
        {steps.map((step) => {
          return (
            <span style={{ fontSize: "1.1rem", color: "#161C32" }} key={step}>
              {step}
            </span>
          );
        })}
      </div>
      <div className={styles.togglerWrapper}>
        <p>Только те, кто мне по карману</p>
        <div
          onClick={() => setIsTogglerChecked((isChecked) => !isChecked)}
          className={
            isTogglerChecked
              ? `${styles.toggler} ${styles.checked}`
              : `${styles.toggler} ${styles.unchecked}`
          }
        >
          <div></div>
        </div>
      </div>
      <div className={styles.confirmButton}>
        <button>Применить</button>
      </div>
    </div>
  );
}
