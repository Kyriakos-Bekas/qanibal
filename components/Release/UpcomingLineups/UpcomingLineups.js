import LineupCarousel from "@/components/Release/LineupCarousel/LineupCarousel";

import styles from "@/components/Release/UpcomingLineups/UpcomingLineups.module.css";

const UpcomingLineups = ({ lineups }) => {
	if (lineups.length === 0)
		return (
			<div id='upcoming-lineups' className={`${styles.end} ${styles.upcoming}`}>
				<p>Δεν θα υπάρξουν άλλα lineups. Θα σε δούμε του χρόνου!</p>
			</div>
		);

	return (
		<section id='upcoming-lineups' className={styles.upcoming}>
			<h1>Ανακάλυψε τις υπόλοιπες φεστιβαλικές ημέρες</h1>

			<p>
				Μάθε το full lineup των 12 ημερών του φεστιβάλ & κλείσε τώρα το
				εισιτήριό σου!
			</p>

			<LineupCarousel lineups={lineups} />
		</section>
	);
};

export default UpcomingLineups;
