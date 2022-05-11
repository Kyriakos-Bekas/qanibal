import styles from "@/components/Release/Lineup/Lineup.module.css";

const Lineup = (props) => {
	return (
		<article className={styles.lineup}>
			<img
				className={styles.thumbnail}
				src={props.thumbnail.src}
				alt={props.thumbnail.alt}
			/>

			<div className={styles.details}>
				<p className={styles.date}>{props.date}</p>
			</div>
		</article>
	);
};

export default Lineup;
