// Importing Styling
import styles from "@/components/Release/Elements/ScrollIndicator/Scrollindicator.module.css";

const Scrollindicator = () => {
	return (
		<div className={styles.container}>
			<span>Scroll to see the events</span>
			<div className={styles.wrapper}>
				<div className={styles.dot}></div>
			</div>
		</div>
	);
};

export default Scrollindicator;
