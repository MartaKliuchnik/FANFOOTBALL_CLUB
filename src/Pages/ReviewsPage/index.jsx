import ReviewCard from '../../components/ReviewCard';
import styles from './index.module.css';
import { reviewsData } from '../../data/reviews.js';

export default function ReviewsPage() {
	return (
		<div className={styles.container}>
			<div className={styles.reviewsContainer}>
				{reviewsData.map((review) => (
					<ReviewCard
						key={review.id}
						backgroundColor={review.backgroundColor}
						color={review.color}
						content={review}
					/>
				))}
			</div>

			<div className={styles.infoContainer}>
				<p className={styles.title}>Отзывы победителей принимаются здесь</p>
				<div className={styles.contactDate}>
					<a
						href='https://t.me/+VzMz4q8h4SM1ZDEy'
						target='_blank'
						rel='noopener noreferrer'
					>
						Канал в Телеграмм
					</a>
					<a href='mailto:fanfootballclub@protonmail.com'>Наша почта</a>
				</div>
			</div>
		</div>
	);
}
