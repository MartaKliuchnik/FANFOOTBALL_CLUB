import logo from '../../assets/logo.svg';
import ActiveButton from '../UI/ActiveButton';
import styles from './index.module.css';
const activeButtonTitle = [
    {
        id: 1,
        title: 'Войти',
        width: '147px'
    },
	{
        id: 2,
        title: 'Присоединиться',
        width: '253px',
        backgroundColor: '#8897CC',
        buttonLong: 'buttonLong'
	}
];


export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.headerWrapper}>
                    <div className={styles.headerLeft}>
                        <img src={logo} alt="logo"/>
                        <h1 className={styles.title}>FANFOOTBALL CLUB</h1>
                    </div>
                    <div className={styles.headerRight}>
                        {activeButtonTitle.map(({ title, id, width }) => (
                            <ActiveButton className={id == 2 ? styles.buttonLong : null} style={{width}} key={id}>{title}</ActiveButton>
                        ))}
                    </div>
                </div>
                <div className={styles.advantages}>
                    <div className={styles.advantagesItem}>Выигрывай денежные призы</div>
                    <div className={styles.advantagesItem}>Необязательно финишировать первым</div>
                    <div className={styles.advantagesItem}>Сумму взноса выбираешь<br/> ты сам</div>
                    <div className={styles.advantagesItem}>Неограниченное количество команд от каждого<br/> участника</div>
                </div>
            </div>
    </header>
    )
}