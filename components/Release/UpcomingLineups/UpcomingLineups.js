import Link from "next/link";
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
				Σε ενδιαφέρει κάποια από τις παρακάτω συναυλίες; Προλαβαίνεις ακόμη να
				κλείσεις εισητήριο!
			</p>

			<Link href='https://www.releaseathens.gr/tickets/'>
				<a className={styles.btn} target='_blank' rel='noopener,noreferrer'>
					Buy tickets
				</a>
			</Link>

			<LineupCarousel lineups={lineups} />
		</section>
	);
};

export default UpcomingLineups;
