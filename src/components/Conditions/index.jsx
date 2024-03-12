import '../../fonts/fonts.css';
import styles from './index.module.css';

// const activeButtonTitle = [
// 	{
// 		id: 1,
// 		title: 'Создать команду',
// 	},
// 	{
// 		id: 2,
// 		title: 'Призы',
// 	},
// 	{
// 		id: 3,
// 		title: 'Правила',
// 	},

//     {
// 		id: 4,
// 		title: 'Отзывы',
// 	},
// ];

export default function Conditions() {
    return (
        <section class={styles.conditions}>
            <div class={styles.container}>
                <div class={styles.conditionsWrapper}>
                {/* {activeButtonTitle.map(({ title, id }) => (
						<ActiveButton key={id}>{title}</ActiveButton>
                ))} */}
                    <button class={styles.buttonLong}>Создать команду</button>
                    <button class={styles.btn}>Призы</button>
                    <button class={styles.btn}>Правила</button>
                    <button class={styles.btn}>Отзывы</button>
                </div>
            </div>
        </section>
    )
}