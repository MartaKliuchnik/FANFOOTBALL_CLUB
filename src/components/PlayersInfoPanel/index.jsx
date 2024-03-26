import { DownOutlined } from '@ant-design/icons';
import { useEffect, useRef, useState } from 'react';
import player_img from '../../assets/player_img.png';
import { filterList, tableHeader } from '../../data/index';
import { playersList } from '../../data/players';
import CommandFilter from '../CommandFilter';
import MoneyFilter from '../MoneyFilter';
import PlayersPosition from '../PlayersPosition';
import styles from './index.module.css';

export default function PlayersInfoPanel() {
	const [active, setActive] = useState(null);
	const tabRef = useRef(null)
	
	const openTab = (e) => {
        const id = +e.target.getAttribute('my_key');
        setActive((prevActive) => (prevActive === id ? null : id));
    };
	
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (tabRef.current && !tabRef.current.contains(e.target)) {
                setActive(null);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);
	
	return (
			<div className={styles.filterContainer} ref={tabRef}>
			<div className={styles.filterPanel}>
				{filterList.map(({ title, option, id }) => (
					<div className={styles.filterPosition} 
					key={id}
					my_key={id}
					onClick={openTab}>
						<div className={styles.titleContainer}>
							<label htmlFor='filterDropdown'>{title}</label>
							<div className={active === id ? styles.iconActive : styles.icon}>
								<DownOutlined />
							</div>
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
				<div className={active === 1 ? styles.contentActive : styles.content}>
					<PlayersPosition/>
				</div>
				<div className={active === 2 ? styles.contentActive : styles.content}>
					<CommandFilter />
				</div>
				<div className={active === 3 ? styles.contentActive : styles.content}>
					<MoneyFilter />
				</div>
			</div>
		</div>
	);
}
