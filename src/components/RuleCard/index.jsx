import styles from './index.module.css';

export default function RuleCard({ title, children, backgroundColor }) {
	return (
		<div className={styles.card} style={{ backgroundColor }}>
			<h2 className={styles.title}>{title}</h2>
			<div className={styles.content}>{children}</div>
		</div>
	);
}
