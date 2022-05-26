import Link from "next/link";
import MenuItem from "@/components/Release/Menus/MenuItem/MenuItem";

import styles from "@/components/Release/Menus/Menus.module.css";

const Menus = ({ catalogues }) => {
	return (
		<section id='catalogue' className={styles.catalogue}>
			<div className={styles.container}>
				<div className={styles.details}>
					<h1>Food & Drinks</h1>
					<p>
						Ό,τι κι αν χρειαστείς είναι εδώ! Πάτα πάνω στην κατηγορία που θες
						για να δεις το αντίστοιχο μενού
					</p>
				</div>

				<div className={styles["catalogues-container"]}>
					{catalogues.map((catalogue) => (
						<MenuItem key={catalogue.title} category={catalogue} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Menus;
