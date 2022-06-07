import LineupCarousel from "@/components/Release/LineupCarousel/LineupCarousel";

import styles from "@/components/Release/UpcomingLineups/UpcomingLineups.module.css";

const UpcomingLineups = ({ lineups }) => {
	if (lineups.length === 0)
		return (
			<div id='upcoming-lineups' className={`${styles.end} ${styles.upcoming}`}>
				<p>There will be no more lineups. See you next year!</p>
			</div>
		);

	return (
		<section id='upcoming-lineups' className={styles.upcoming}>
			<h1>Discover the rest of the festival days</h1>

			<p>
				Learn the full lineup of the entire 12 days of the festival & book your
				ticket now!
			</p>

			<LineupCarousel lineups={lineups} />
		</section>
	);
};

export default UpcomingLineups;
