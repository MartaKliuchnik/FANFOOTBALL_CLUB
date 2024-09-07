import { useState } from 'react';
import TeamPlayerMap from '../../components/TeamPlayerMap';
import AuthForm from '../../components/AuthForm';

import styles from './index.module.css';

export default function HomePage() {
	const [isAuthFormVisible, setIsAuthFormVisible] = useState(false);
	const [authFormType, setAuthFormType] = useState();

	const openAuthForm = (type) => {
		setAuthFormType(type);
		setIsAuthFormVisible(true);
	};

	const closeAuthForm = () => {
		setIsAuthFormVisible(false);
	};

	return (
		<div>
			{isAuthFormVisible && (
				<AuthForm
					type={authFormType}
					openAuthForm={openAuthForm}
					closeAuthForm={closeAuthForm}
				/>
			)}
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<TeamPlayerMap />
				</div>
			</div>
		</div>
	);
}
