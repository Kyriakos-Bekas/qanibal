import TransportLink from "@/components/Release/Transport/TransportLink/TransportLink";

import styles from "@/components/Release/Transport/Transport.module.css";

const Transport = ({ transportLinks }) => {
	return (
		<section className={styles.transport} id='transport'>
			<div className={styles.details}>
				<h1>Is today's festival day over?</h1>
				<p>No problem!</p>
				<p>Choose the quickest way to leave</p>
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
