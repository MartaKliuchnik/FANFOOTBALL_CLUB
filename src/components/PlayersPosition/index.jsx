import style from './index.module.css';

export default function PlayersPosition() {
    return (
        <div className={style.wrapper}>
            <div className={style.playersPosition}>
                <div className={style.playerPosition}>
                    <div className={style.playerName}>ВР</div>
                    <div className={style.playerPositionName}>Вратари</div>
                </div>
                <div className={style.playerPosition}>
                    <div className={style.playerName}>ЗЩ</div>
                    <div className={style.playerPositionName}>Защитники</div>
                </div>
                <div className={style.playerPosition}>
                    <div className={style.playerName}>ПЗ</div>
                    <div className={style.playerPositionName}>Полузащитники</div>
                </div>
                <div className={style.playerPosition}>
                    <div className={style.playerName}>НП</div>
                    <div className={style.playerPositionName}>Нападающие</div>
                </div>
            </div>
            <div className={style.buttonContainer}>
                <button>Убрать</button>
                <button>Применить</button>
            </div>
        </div>
    )
}