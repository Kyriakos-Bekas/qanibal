import TransportLink from "@/components/Release/Transport/TransportLink/TransportLink";

import styles from "@/components/Release/Transport/Transport.module.css";

const Transport = ({ transportLinks }) => {
	return (
		<section className={styles.transport} id='transport'>
			<div className={styles.details}>
				<h1>Τελείωσε η σημερινή φεστιβαλική ημέρα;</h1>
				<p>Κανένα πρόβλημα!</p>
				<p>Διάλεξε τον ευκολότερο τρόπο για να επιστρέψεις</p>
			</div>

			<ul className={styles["link-container"]}>
				{transportLinks.map((link) => (
					<li key={link.title}>
						<TransportLink title={link.title} img={link.img} url={link.url} />
					</li>
				))}
			</ul>
		</section>
	);
};

export default Transport;
