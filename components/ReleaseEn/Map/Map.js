import Link from "next/link";

import styles from "@/components/Release/Map/Map.module.css";

const Map = () => {
	return (
		<section className={styles.section} id='location-map'>
			<Link href='https://www.google.com/maps/d/u/5/edit?mid=15M3d_kYuAwvhAp34OnV9G0mgD2r9H4Y&usp=sharing'>
				<a target='_blank' rel='noopener,noreferrer'>
					<img className={styles.map} src='/map/map.png' alt='Location Map' />
					<p>Click to see the map</p>
				</a>
			</Link>
		</section>
	);
};

export default Map;
