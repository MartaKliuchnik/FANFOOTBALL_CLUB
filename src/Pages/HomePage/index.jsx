import React from 'react';
import Conditions from '../../components/Conditions';
import Header from '../../components/Header';
import TeamPlayerMap from '../../components/TeamPlayerMap';
import styles from './index.module.css';

export default function HomePage() {
	return (
		<div>
			<Header/>
			<Conditions/>
			<div className={styles.wrapper}>
				<TeamPlayerMap />
			</div>
		</div>
	);
}
