import styles from "@/components/Release/UpcomingLineups/UpcomingLineups.module.css";

import LineupCarousel from "@/components/Release/LineupCarousel/LineupCarousel";

const UpcomingLineups = ({ lineups }) => {
	return (
		<section>
			<h1>Upcoming Lineups</h1>

			<LineupCarousel lineups={lineups} />
		</section>
	);
};

export default UpcomingLineups;
