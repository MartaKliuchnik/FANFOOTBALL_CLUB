import ActiveButton from "../UI/ActiveButton";
import styles from "./index.module.css";

const activeButtonTitle = [
  {
    id: 1,
    title: "Создать команду",
    width: "253px",
  },
  {
    id: 2,
    title: "Призы",
    width: "147px",
  },
  {
    id: 3,
    title: "Правила",
    width: "147px",
  },

  {
    id: 4,
    title: "Отзывы",
    width: "147px",
  },
];

export default function Conditions() {
  return (
    <section className={styles.conditions}>
      <div className={styles.container}>
        <div className={styles.conditionsWrapper}>
          {activeButtonTitle.map(({ title, id, width, backgroundColor }) => (
            <ActiveButton
              className={id == 1 ? styles.buttonLong : null}
              style={{ width, backgroundColor }}
              key={id}
            >
              {title}
            </ActiveButton>
          ))}
        </div>
      </div>
    </section>
  );
}
