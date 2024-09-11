import styles from './index.module.css';
import { scoringData } from '../../data/scortingData.js';

export default function ScoringTable() {
	return (
		<div className={styles.tableContainer}>
			<p className={styles.tableTitle}>Таблица начисления баллов</p>
			<table className={styles.table}>
				<thead className={styles.tableHead}>
					<tr>
						<th scope='col'>Действие</th>
						<th scope='col'>Вратарь</th>
						<th scope='col'>Защитник</th>
						<th scope='col'>Полузащитник</th>
						<th scope='col'>Нападающий</th>
					</tr>
				</thead>
				<tbody>
					{scoringData.map((row, index) => (
						<tr
							key={index}
							className={index % 2 === 0 ? styles.rowEven : styles.rowOdd}
						>
							<th scope='row'>{row.action}</th>
							<td>{row.goalkeeper}</td>
							<td>{row.defender}</td>
							<td>{row.midfielder}</td>
							<td>{row.forward}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
