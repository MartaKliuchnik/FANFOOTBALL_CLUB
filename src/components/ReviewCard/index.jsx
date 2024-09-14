import styles from './index.module.css';
import quoteBottom from '../../assets/frame_bottom.png';
import quoteTop from '../../assets/frame_top.png';

export default function ReviewCard({ content, backgroundColor }) {
	const { title, text, author } = content;

	return (
		<div className={styles.card} style={{ backgroundColor }}>
			<img src={quoteTop} alt='quoteTop' className={styles.quoteTop} />
			<div className={styles.content}>
				{title && <p>{title}</p>}
				<p className={styles.text}>{text}</p>
			</div>
			<div className={styles.footer}>
				<img
					src={quoteBottom}
					alt='quoteBottom'
					className={styles.quoteBottom}
				/>
				<p className={styles.author}>{author}</p>
			</div>
		</div>
	);
}
