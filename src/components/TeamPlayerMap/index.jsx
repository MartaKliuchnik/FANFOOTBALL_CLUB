import React from 'react';
import styles from './index.module.css';
import FootballField from '../FootballField';
import ActiveButton from '../UI/ActiveButton';
import PlayersInfoPanel from '../PlayersInfoPanel';

const activeButtonTitle = [
	{
		id: 1,
		title: 'Игроки 0/15',
	},
	{
		id: 2,
		title: 'Баланс: 100 млн',
	},
	{
		id: 3,
		title: 'Не более 2 игроков из одного клуба',
	},
];

export default function TeamPlayerMap() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.containerField}>
				<FootballField />

				<div className={styles.buttonContainer}>
					{activeButtonTitle.map(({ title, id }) => (
						<ActiveButton key={id}>{title}</ActiveButton>
					))}
				</div>
			</div>

			{/*FILTER CONTAINER*/}
			<PlayersInfoPanel />
		</div>
	);
}
