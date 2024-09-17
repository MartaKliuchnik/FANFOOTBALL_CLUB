import { Link } from 'react-router-dom';
import styles from './index.module.css';

export default function ActiveButton({ children, hoverColor, ...props }) {
	return (
		<Link
			{...props}
			className={styles.buttonLink}
			style={{
				...props.style,
				'--hover-color': hoverColor || '#94ABFA',
			}}
		>
			{children}
		</Link>
	);
}
