import styles from './index.module.css';
import { tableHeader, filterList } from '../../data/index';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { playersList } from '../../data/players';
import player_img from '../../assets/player_img.png';
import CommandFilter from '../CommandFilter';

export default function PlayersInfoPanel() {
	return (
		<div className={styles.filterContainer}>
			<div className={styles.filterPanel}>
				{filterList.map(({ title, option, id }) => (
					<div className={styles.filterPosition} key={id}>
						<div className={styles.titleContainer}>
							<label htmlFor='filterDropdown'>{title}</label>
							<DownOutlined />
							{/* <UpOutlined /> */}
						</div>
						{/* <select value='position'>
							<option>{option}</option>
						</select> */}
					</div>
				))}
			</div>

			{/* TABLE */}
			<div className={styles.tableContainer}>
				<table>
					<thead>
						<tr>
							{tableHeader.map(({ id, title }) => (
								<th key={id}>{title}</th>
							))}
						</tr>
					</thead>
					<tbody>
						{playersList.map((player) => (
							<tr key={player.id}>
								<td className={styles.playerInfoContainer}>
									<img src={player_img} alt={player.name} />
									<div className={styles.nameContainer}>
										<p>{player.name}</p>
										<p>{player.team}</p>
									</div>
								</td>
								<td>
									{player.price} {player.title}
								</td>
								<td>{player.all_point}</td>
								<td>{player.last_round_point}</td>
								<td>{player.match_point}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			<div className={styles.chosenFilterContainer}>
				<CommandFilter />
			</div>
		</div>
	);
}
