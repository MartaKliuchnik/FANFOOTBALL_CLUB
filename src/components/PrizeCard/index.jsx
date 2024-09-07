import styles from './index.module.css';

export default function PrizeCard({ content, backgroundColor }) {
	return (
		<div className={styles.cardContainer} style={{ backgroundColor }}>
			<p className={styles.text}>{content}</p>
		</div>
	);
}
