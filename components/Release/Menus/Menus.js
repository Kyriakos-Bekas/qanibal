import styles from "@/components/Release/Menus/Menus.module.css";

import Link from "next/link";

const Menus = () => {
	return (
		<section id='catalogue' className={styles.catalogue}>
			<div className={styles.container}>
				<div className={styles.details}>
					<h1 className={styles["section-title"]}>Δίψασες;</h1>
					<p>Διάλεξε ένα από τα πολλά δροσιστικά ποτά του καταλόγου μας</p>
				</div>

				<div className={styles["img-container"]}>
					<img
						src='https://freepikpsd.com/file/2020/10/Cocktail-Drink-PNG-File-534x1024.png'
						alt='drink'
						className={styles.img}
					/>
				</div>
			</div>

			<button className={styles.cta}>
				<Link href='#'>
					<a className={styles.link}>View catalogue</a>
				</Link>
			</button>
		</section>
	);
};

export default Menus;
