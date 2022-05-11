// Importing Styles
import styles from "@/components/Release/Event/Event.module.css";

const Event = (props) => {
	return (
		<article className={styles.event}>
			<img
				className={styles.thumbnail}
				src={props.img.src}
				alt={props.img.alt}
			/>

			<div className={styles.details}>
				<h4 className={styles.title}>{props.title}</h4>
			</div>
		</article>
	);
};

export default Event;
