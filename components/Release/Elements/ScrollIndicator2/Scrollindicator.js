// Importing Styling
import styles from "@/components/Release/Elements/ScrollIndicator2/Scrollindicator.module.css";

const Scrollindicator = () => {
	return (
		<div className={styles.container}>
			<span>Scroll to events</span>
			<div className={styles.button}>
				<div className={styles.arrow}></div>
			</div>
		</div>
	);
};

export default Scrollindicator;
