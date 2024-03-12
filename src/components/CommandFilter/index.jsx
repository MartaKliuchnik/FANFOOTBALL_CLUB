import styles from './index.module.css';
import logo from '../../assets/logo_arsenal.png';
import { teams } from '../../data/commands';

export default function CommandFilter() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.filterHeader}>
				<p>Команда</p>
				<p>Соперник</p>
			</div>

			<div className={styles.filterExamplesContainer}>
				{teams.map(({ id, team1, team2 }) => (
					<div key={id} className={styles.filterRow}>
						<div className={styles.teamContainer}>
							<div className={styles.round}>
								<input type='checkbox' checked id='checkbox' />
								<label for='checkbox'></label>
							</div>

							<div className={styles.logoContainer}>
								<img src={logo} alt='logo_team' />
							</div>
							<p>{team1}</p>
						</div>
						<p>{team2}</p>
					</div>
				))}
			</div>

			<div className={styles.buttonContainer}>
				<button>Убрать</button>
				<button>Применить</button>
			</div>
		</div>
	);
}
