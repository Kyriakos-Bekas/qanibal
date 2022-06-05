import LineupCarousel from "@/components/Release/LineupCarousel/LineupCarousel";

import styles from "@/components/Release/UpcomingLineups/UpcomingLineups.module.css";

const UpcomingLineups = ({ lineups }) => {
	if (lineups.length === 0)
		return (
			<div id='upcoming-lineups' className={`${styles.end} ${styles.upcoming}`}>
				<p>Δεν θα υπάρξουν άλλα lineups. Θα τα πούμε του χρόνου!</p>
			</div>
		);

	return (
		<section id='upcoming-lineups' className={styles.upcoming}>
			<h1>Upcoming Lineups</h1>

			<p>
				Σε ενδιαφέρει κάποια από τις επόμενες συναυλίες; Προλαβαίνεις ακόμη να
				κλείσεις εισητήριο πατώντας επάνω στο lineup που θες!
			</p>

			<LineupCarousel lineups={lineups} />
		</section>
	);
};

export default UpcomingLineups;
