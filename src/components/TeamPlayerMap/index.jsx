import FootballField from '../FootballField';
import PlayersInfoPanel from '../PlayersInfoPanel';
import ActiveButton from '../UI/ActiveButton';
import styles from './index.module.css';

const activeButtonTitle = [
	{
		id: 1,
		title: 'Игроки 0/15',
		backgroundColor: '#1C3486',
		hoverColor: '#1C3486',
		width: '203px',
	},
	{
		id: 2,
		title: 'Баланс: 100 млн',
		backgroundColor: '#1C3486',
		hoverColor: '#1C3486',
		width: '228px',
	},
	{
		id: 3,
		title: 'Не более 2 игроков из одного клуба',
		backgroundColor: '#1C3486',
		hoverColor: '#1C3486',
		width: '252px',
	},
];

export default function TeamPlayerMap() {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<div className={styles.containerField}>
					<FootballField />
					<PlayersInfoPanel />
				</div>

				<div className={styles.buttonsWrapper}>
					<div className={styles.buttonsPanel}>
						<ActiveButton
							style={{ backgroundColor: '#8897CC' }}
							hoverColor={'#394779'}
						>
							Назад
						</ActiveButton>
						<div className={styles.buttonContainer}>
							{activeButtonTitle.map(
								({ title, id, backgroundColor, hoverColor, width }) => (
									<div
										key={id}
										style={{
											textAlign: 'center',
										}}
									>
										<ActiveButton
											style={{
												backgroundColor: backgroundColor,
												width: width,
											}}
											hoverColor={hoverColor}
										>
											{title}
										</ActiveButton>
									</div>
								)
							)}
						</div>
						<ActiveButton
							style={{ backgroundColor: '#8897CC' }}
							hoverColor={'#394779'}
						>
							Сравнить
						</ActiveButton>
					</div>
					<ActiveButton
						style={{ backgroundColor: '#161C32' }}
						hoverColor={'#394779'}
					>
						Вперед!
					</ActiveButton>
				</div>
			</div>
		</div>
	);
}
