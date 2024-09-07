import { tournamentData } from '../../data/tournamentData';
import styles from './index.module.css';

export default function TournamentStats() {
	return (
		<div className={styles.container}>
			<ul className={styles.statsList}>
				{Object.entries(tournamentData).map(([key, value]) => (
					<li key={key} className={styles.statItem}>
						<span className={styles.statLabel}>{key}:</span>
						<span>{value}</span>
					</li>
				))}
			</ul>
		</div>
	);
}
