import Link from "next/link";

import styles from "@/components/Release/Map/Map.module.css";

const Map = () => {
	return (
		<section className={styles.section} id='location-map'>
			<Link href='https://www.google.com/maps/d/u/0/embed?mid=14z_afsp6RehbaoqFzvjweyBgQkHixOXV&ehbc=2E312F'>
				<a target='_blank' rel='noopener,noreferrer'>
					<img className={styles.map} src='/map.png' alt='Location Map' />
					<p>Click to see the map</p>
				</a>
			</Link>
		</section>
	);
};

export default Map;
