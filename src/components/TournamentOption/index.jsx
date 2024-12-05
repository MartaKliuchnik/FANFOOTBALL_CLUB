import styles from './index.module.css';

// eslint-disable-next-line react/prop-types
export default function TournamentOption({ imageUrl }) {
	return (
		<div
			className={styles.tournamentOption}
			style={{ backgroundImage: `url(${imageUrl})` }}
		></div>
	);
}
