import React from 'react';
import styles from './index.module.css';
import { tableHeader, filterList } from '../../data/index';
import FootballField from '../FootballField';
import ActiveButton from '../UI/ActiveButton';

const activeButtonTitle = [
	{
		id: 1,
		title: 'Игроки 0/15',
	},
	{
		id: 2,
		title: 'Баланс: 100 млн',
	},
	{
		id: 3,
		title: 'Не более 2 игроков из одного клуба',
	},
];

export default function TeamPlayerMap() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.containerField}>
				<FootballField />

				<div className={styles.buttonContainer}>
					{activeButtonTitle.map(({ title, id }) => (
						<ActiveButton key={id}>{title}</ActiveButton>
					))}
				</div>
			</div>

			{/*FILTER CONTAINER*/}
			{/* <div className={styles.filter_container}> */}
			{/* <div className={styles.filter_panel}>
					{filterList.map(({ title, option, id }) => (
						<div className={styles.filter_position} key={id}>
							<label htmlFor='filterDropdown'>{title}</label>
							<select value='position'>
								<option>{option}</option>
							</select>
						</div>
					))}
				</div> */}

			{/* TABLE */}
			{/* <table>
					<tr>
						{tableHeader.map(({ id, title }) => (
							<th key={id}>{title}</th>
						))}
					</tr>
				</table> */}
			{/* </div> */}
		</div>
	);
}
