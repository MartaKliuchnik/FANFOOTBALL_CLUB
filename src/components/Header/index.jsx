import title_logo from '../../assets/title_logo.png';
import TournamentStats from '../TournamentStats';
import ActiveButton from '../UI/ActiveButton';
import styles from './index.module.css';
const activeButtonTitle = [
	{
		id: 1,
		title: 'Войти',
		width: '147px',
	},
	{
		id: 2,
		title: 'Присоединиться',
		width: '253px',
		backgroundColor: '#8897CC',
		buttonLong: 'buttonLong',
	},
];

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.headerWrapper}>
					<TournamentStats />
					<div className={styles.headerLogo}>
						<img src={title_logo} alt='title_logo' />
						<p className={styles.title}>Your game. Your team. Your win.</p>
					</div>
					<div className={styles.headerRight}>
						{activeButtonTitle.map(({ title, id, width }) => (
							<ActiveButton
								className={id == 2 ? styles.buttonLong : null}
								style={{ width }}
								key={id}
							>
								{title}
							</ActiveButton>
						))}
					</div>
				</div>
				<div className={styles.advantages}>
					<div className={styles.advantagesItem}>Выигрывай денежные призы</div>
					<div className={styles.advantagesItem}>
						Необязательно финишировать первым
					</div>
					<div className={styles.advantagesItem}>
						Сумму взноса выбираешь
						<br /> ты сам
					</div>
					<div className={styles.advantagesItem}>
						До 5 команд от каждого участника
					</div>
				</div>
			</div>
		</header>
	);
}
