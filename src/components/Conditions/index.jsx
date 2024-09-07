import DeadlineTimer from '../DeadlineTimer';
import ActiveButton from '../UI/ActiveButton';
import styles from './index.module.css';

const buttonData = [
	{
		id: 1,
		title: 'Создать команду',
		width: '253px',
		className: styles.createTeam,
	},
	{
		id: 2,
		title: 'Призы',
		width: '147px',
		className: styles.mainButton,
	},
	{
		id: 3,
		title: 'Правила',
		width: '147px',
		className: styles.mainButton,
	},
	{
		id: 4,
		title: 'Отзывы',
		width: '147px',
		className: styles.mainButton,
	},
];

export default function Conditions() {
	return (
		<section className={styles.conditions}>
			<div className={styles.container}>
				<div className={styles.conditionsWrapper}>
					<div className={styles.leftGroup}>
						{buttonData.slice(0, 1).map(({ title, id, width, className }) => (
							<ActiveButton key={id} className={className} style={{ width }}>
								{title}
							</ActiveButton>
						))}
					</div>
					<div className={styles.centerGroup}>
						{buttonData.slice(1).map(({ title, id, width, className }) => (
							<ActiveButton key={id} className={className} style={{ width }}>
								{title}
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
