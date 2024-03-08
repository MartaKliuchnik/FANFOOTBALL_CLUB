import React from 'react';
import styles from './index.module.css';
import { tableHeader, filterList } from '../../data/index';
import FootballField from '../FootballField';

export default function TeamPlayerMap() {
	return (
		<div className={styles.wrapper}>
			<FootballField />

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
