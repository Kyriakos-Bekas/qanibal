import styles from "@/components/Release/Ad/Ad.module.css";

import Link from "next/link";

const Ad = () => {
	return (
		<aside className={styles.ad}>
			<Link href='#'>
				<a rel='noopener' target='_blank'>
					<img
						// src='https://mir-s3-cdn-cf.behance.net/project_modules/fs/e7fca864210705.5ade4ccb15c70.gif'
						// src='https://www.celli.com/public/Magazzino/Categorie/Immagini/90_S_cocacola.jpg'
						src='https://acegif.com/wp-content/gif/beer-10.gif'
						alt='Advertisement'
					/>
				</a>
			</Link>
		</aside>
	);
};

export default Ad;
