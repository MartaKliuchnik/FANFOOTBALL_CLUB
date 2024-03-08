import footballField from '../../assets/football_field.jpeg';
import player from '../../assets/t_shirt_1.png';
import styles from './index.module.css';

const playerPositions = [
	{ left: '35%', top: '27%' },
	{ left: '47%', top: '27%' },
	{ left: '59%', top: '27%' },
	{ left: '23%', top: '43%' },
	{ left: '35%', top: '43%' },
	{ left: '47%', top: '43%' },
	{ left: '59%', top: '43%' },
	{ left: '71%', top: '43%' },
	{ left: '23%', top: '60%' },
	{ left: '35%', top: '60%' },
	{ left: '47%', top: '60%' },
	{ left: '59%', top: '60%' },
	{ left: '71%', top: '60%' },
	{ left: '28%', top: '75%' },
	{ left: '65%', top: '75%' },
];

export default function FootballField() {
	return (
		<div className={styles.img_container}>
			<img
				className={styles.img_field}
				src={footballField}
				alt='football_field'
			/>

			{playerPositions.map((position, index) => (
				<img
					src={player}
					alt='player'
					key={index}
					style={{ left: position.left, top: position.top }}
					className={styles.img_player}
				/>
			))}
		</div>
	);
}
