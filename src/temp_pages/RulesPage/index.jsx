import styles from './index.module.css';
import GameProcessRules from '../../components/GameProcessRules';
import { useState } from 'react';
import LegalInformation from '../../components/LegalInformation';

export default function RulesPage() {
	const [activePanel, isActivePanel] = useState('gameRules');
	const checkClass = (panel) => {
		return activePanel === panel ? styles.active : '';
	};

	return (
		<div className={styles.container}>
			<div className={styles.navContainer}>
				<button
					onClick={() => isActivePanel('gameRules')}
					className={checkClass('gameRules')}
				>
					Игровой процесс
				</button>
				<button
					onClick={() => isActivePanel('legalInfo')}
					className={checkClass('legalInfo')}
				>
					Юридическая информация
				</button>
			</div>
			<div className={styles.panelsContainer}>
				{activePanel === 'gameRules' && <GameProcessRules />}
				{activePanel === 'legalInfo' && <LegalInformation />}
			</div>
		</div>
	);
}
