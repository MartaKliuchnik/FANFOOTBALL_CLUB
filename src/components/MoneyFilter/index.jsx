import styles from './index.module.css';

export default function MoneyFilter() {
    return (
        <div className={styles.wrapper}>
            <input type="range" list="tickMarks" min="0" max="100" />
            <datalist id="tickMarks">
                <option value="0"></option>
                <option value="10"></option>
                <option value="20"></option>
                <option value="30"></option>
            </datalist>
        </div>
    )
}