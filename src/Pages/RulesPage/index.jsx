import { NavLink } from 'react-router-dom';
import styles from './index.module.css';
import GameProcessRules from '../../components/GameProcessRules';

export default function RulesPage() {
	const checkClass = ({ isActive }) => (isActive ? styles.active : '');

	return (
		<div className={styles.container}>
			<div className={styles.navContainer}>
				<NavLink to='/game-process' className={checkClass}>
					Игровой процесс
				</NavLink>
				{/* <NavLink to='/legal-information' className={checkClass}>
					Юридическая информация
				</NavLink> */}
			</div>
			<div className={styles.panelsContainer}>
				<GameProcessRules />

				{/* <LegalInformation /> */}
			</div>
		</div>
	);
}
