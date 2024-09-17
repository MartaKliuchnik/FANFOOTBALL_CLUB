import React from 'react';
import FootballField from '../FootballField';
import PlayersInfoPanel from '../PlayersInfoPanel';
import ActiveButton from '../UI/ActiveButton';
import styles from './index.module.css';

const activeButtonTitle = [
	{
		id: 1,
		title: 'Назад',
		backgroundColor: '#8897CC',
		hoverColor: '#394779',
	},
	{
		id: 2,
		title: 'Игроки 0/15',
		backgroundColor: '#1C3486',
		hoverColor: '#1C3486',
	},
	{
		id: 3,
		title: 'Баланс: 100 млн',
		backgroundColor: '#1C3486',
		hoverColor: '#1C3486',
	},
	{
		id: 4,
		title: 'Не более 2 игроков из одного клуба',
		backgroundColor: '#1C3486',
		hoverColor: '#1C3486',
	},
	{
		id: 5,
		title: 'Сравнить',
		backgroundColor: '#8897CC',
		hoverColor: '#394779',
	},
];

export default function TeamPlayerMap() {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<div className={styles.containerField}>
					<FootballField />

					<div className={styles.buttonContainer}>
						{activeButtonTitle.map(
							({ title, id, backgroundColor, hoverColor }) => (
								<div
									key={id}
									style={{
										textAlign: 'center',
									}}
								>
									<ActiveButton
										style={{
											backgroundColor: backgroundColor,
										}}
										hoverColor={hoverColor}
									>
										{title}
									</ActiveButton>
								</div>
							)
						)}
					</div>
				</div>
				{/*FILTER CONTAINER*/}
				<div className={styles.containerFilterPlayer}>
					<PlayersInfoPanel />
					<ActiveButton
						style={{ width: '187px', backgroundColor: '#161C32' }}
						hoverColor={'#394779'}
					>
						Вперед!
					</ActiveButton>
				</div>
			</div>
		</div>
	);
}
