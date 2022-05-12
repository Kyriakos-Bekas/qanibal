import styles from "@/components/Release/TodaysEvents/TodaysEvents.module.css";

import EventCarousel from "@/components/Release/EventCarousel/EventCarousel";

const TodaysEvents = ({ bands, date }) => {
	return (
		<section className={styles.events} id='current-events'>
			<p className={styles.date}>{date}</p>
			<h1>Today's Event</h1>

			<EventCarousel bands={bands} />
		</section>
	);
};

export default TodaysEvents;
