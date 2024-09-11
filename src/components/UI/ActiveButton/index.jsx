import { Link } from 'react-router-dom';
import styles from './index.module.css';

export default function ActiveButton({ children, ...props }) {
	return (
		<Link {...props} className={styles.buttonLink}>
			{children}
		</Link>
	);
}
