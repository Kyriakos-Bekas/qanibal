// Importing Styling
import styles from "@/components/Release/Sponsors/Sponsors.module.css";

// Importing Components
import SponsorLink from "@/components/Release/SponsorLink/SponsorLink";

const sponsors = [
	{
		img: {
			src: "/logos/coca-cola.png",
			alt: "Coca Cola Logo",
		},
	},
	{
		img: {
			src: "/logos/ab.png",
			alt: "AB Logo",
		},
	},
	{
		img: {
			src: "/logos/schwepps.png",
			alt: "Schwepp's Logo",
		},
	},
	{
		img: {
			src: "/logos/sklavenitis.png",
			alt: "Sklavenitis Logo",
		},
	},
	// {
	// 	img: {
	// 		src: "/logos/nestle.png",
	// 		alt: "Nestle Logo",
	// 	},
	// },
];

const Sponsors = () => {
	return (
		<section className={styles.sponsors} id='sponsors'>
			<h1>Χορηγοί</h1>

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
