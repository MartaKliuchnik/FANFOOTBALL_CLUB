import logo from '../../assets/logo.svg';
import styles from './index.module.css';

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
                        <button className={styles.button}>Войти</button>
                        <button className={styles.buttonLong}>Присоединиться</button>
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