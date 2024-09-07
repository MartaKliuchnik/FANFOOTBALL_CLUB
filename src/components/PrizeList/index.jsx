import styles from './index.module.css';

export default function PrizeList({ items }) {
	return (
		<ul className={styles.list}>
			{items.map((item, index) => (
				<li key={index}>{item}</li>
			))}
		</ul>
	);
}
