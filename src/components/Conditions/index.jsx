import DeadlineTimer from '../DeadlineTimer';
import ActiveButton from '../UI/ActiveButton';
import styles from './index.module.css';
import { routes } from '../../routes';

export default function Conditions() {
	return (
		<section className={styles.conditions}>
			<div className={styles.container}>
				<div className={styles.conditionsWrapper}>
					<div className={styles.leftGroup}>
						<ActiveButton
							to={routes[0].path}
							className={styles[routes[0].className]}
							style={{ width: routes[0].width }}
						>
							{routes[0].label}
						</ActiveButton>
					</div>
					<div className={styles.centerGroup}>
						{routes.slice(1).map((route) => (
							<ActiveButton
								key={route.path}
								to={route.path}
								className={styles[route.className]}
								style={{ width: route.width }}
							>
								{route.label}
							</ActiveButton>
						))}
					</div>
					<div className={styles.rightGroup}>
						<DeadlineTimer initialTime='3:45:58' />
					</div>
				</div>
			</div>
		</section>
	);
}
