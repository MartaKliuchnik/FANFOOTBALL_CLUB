import TournamentOption from '../../components/TournamentOption';
import styles from './index.module.css';
import england from '../../assets/england.png';
import france from '../../assets/france.png';
import germany from '../../assets/germany.png';
import italy from '../../assets/italy.png';
import spain from '../../assets/spain.png';

const tournamentOption = [
	{ image: england, name: 'England' },
	{ image: france, name: 'France' },
	{ image: germany, name: 'Germany' },
	{ image: italy, name: 'Italy' },
	{ image: spain, name: 'Spain' },
];

export default function LobbyPage() {
	return (
		<section className={styles.lobbyPage}>
			<div className={styles.title}>Выбери турнир</div>
			<div className={styles.tournamentContainer}>
				{tournamentOption.map((opt) => (
					<TournamentOption key={opt.name} imageUrl={opt.image} />
				))}
			</div>
		</section>
	);
}
