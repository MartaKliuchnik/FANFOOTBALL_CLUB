import React from 'react';
import TeamPlayerMap from '../../components/TeamPlayerMap';
import styles from './index.module.css';

export default function HomePage() {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<TeamPlayerMap />
			</div>
		</div>
	);
}
