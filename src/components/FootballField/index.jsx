import footballField from '../../assets/football_field.jpeg';
import player from '../../assets/t_shirt_1.png';
import styles from './index.module.css';

const playerPositions = [
	{ left: '31%', top: '30%' },
	{ left: '50%', top: '30%' },
	{ left: '69%', top: '30%' },
	{ left: '14%', top: '48%' },
	{ left: '31%', top: '48%' },
	{ left: '50%', top: '48%' },
	{ left: '69%', top: '48%' },
	{ left: '86%', top: '48%' },
	{ left: '14%', top: '66%' },
	{ left: '31%', top: '66%' },
	{ left: '50%', top: '66%' },
	{ left: '69%', top: '66%' },
	{ left: '86%', top: '66%' },
	{ left: '31%', top: '85%' },
	{ left: '69%', top: '85%' },
];

function removePlayer(index) {
	console.log(`Remove player at index: ${index}`);
}

function showPlayerInfo(index) {
	console.log(`Show info for player at index: ${index}`);
}

export default function FootballField() {
	return (
		<div className={styles.imgContainer}>
			<img
				className={styles.imgField}
				src={footballField}
				alt='football field'
			/>

			{playerPositions.map((position, index) => (
				<div
					key={index}
					className={styles.playerContainer}
					style={{ left: position.left, top: position.top }}
				>
					<img src={player} alt='player' className={styles.imgPlayer} />

					<div className={styles.playerInfo}>
						<div className={styles.playerName}>Холланд</div>
						<div className={styles.playerCost}>8.0 млн</div>
					</div>

					<div className={styles.iconRemove}>
						<button onClick={() => removePlayer(index)}>×</button>
					</div>

					<div className={styles.iconInfo}>
						<button onClick={() => showPlayerInfo(index)}>i</button>
					</div>
				</div>
			))}
		</div>
	);
}
