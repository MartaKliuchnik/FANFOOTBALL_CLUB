import { useEffect, useState } from 'react';
import styles from './index.module.css';

// eslint-disable-next-line react/prop-types
export default function DeadlineTimer({ initialTime }) {
	const [time, setTime] = useState(initialTime);

	useEffect(() => {
		const timer = setInterval(() => {
			setTime((prevTime) => {
				const [hours, minutes, seconds] = prevTime.split(':').map(Number);
				let newSeconds = seconds - 1;
				let newMinutes = minutes;
				let newHours = hours;

				if (newSeconds < 0) {
					newSeconds = 59;
					newMinutes -= 1;
				}
				if (newMinutes < 0) {
					newMinutes = 59;
					newHours -= 1;
				}
				if (newHours < 0) {
					clearInterval(timer);
					return '00:00:00';
				}

				return `${String(newHours).padStart(2, '0')}:${String(
					newMinutes
				).padStart(2, '0')}:${String(newSeconds).padStart(2, '0')}`;
			});
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	return (
		<div className={styles.deadlineTimer}>
			<div style={{ textAlign: 'center' }}>
				До дедлайна осталось:
				<br /> {time}
			</div>
		</div>
	);
}
