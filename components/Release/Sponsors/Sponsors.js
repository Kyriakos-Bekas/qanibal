import SponsorLink from "@/components/Release/Sponsors/SponsorLink/SponsorLink";

import styles from "@/components/Release/Sponsors/Sponsors.module.css";

const Sponsors = ({ sponsors }) => {
	return (
		<section className={styles.sponsors} id='sponsors'>
			<h1>Μια χορηγία των</h1>

			<div className={styles.container}>
				{sponsors.map((sponsor) => (
					<div className={styles.sponsor} key={sponsor.img.alt}>
						<SponsorLink img={sponsor.img} />
					</div>
				))}
			</div>
		</section>
	);
};

export default Sponsors;
