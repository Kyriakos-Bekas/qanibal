import Link from "next/link";
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
			<h1>Upcoming Lineups</h1>

			<p>
				Are you interested in any upcoming concerts? You can still buy a ticket
				by clicking on the lineup of your choice!
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
