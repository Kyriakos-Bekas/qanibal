import Link from "next/link";

import styles from "@/components/Release/Menus/MenuItem/MenuItem.module.css";

const MenuItem = ({ category }) => {
	return (
		<Link href={category.url}>
			<a className={styles.category} target='_blank' rel='noopener,noreferrer'>
				<h1 className={styles.title}>
					<span>
						{category.title}
						<span>{category.additional}</span>
					</span>
				</h1>

				<img
					src={category.img.src}
					alt={category.img.alt}
					className={styles.thumbnail}
				/>
			</a>
		</Link>
	);
};

export default MenuItem;
