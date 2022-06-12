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
						Everything you need is here! Click on the category of your choice to
						see the available menu
					</p>
				</div>

				<div className={styles["catalogues-container"]}>
					{catalogues.map((catalogue) => (
						<MenuItem key={catalogue.title} category={catalogue} />
					))}
				</div>
			</div>

			<Link href='https://www.wikodid.gr/release-2022/general-pricelist/en'>
				<a target='_blank' className={styles["general-pricelist"]}>
					Pricelist with Marks
				</a>
			</Link>
		</section>
	);
};

export default Menus;
