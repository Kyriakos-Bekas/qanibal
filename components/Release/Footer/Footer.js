import Link from "next/link";

import styles from "@/components/Release/Footer/Footer.module.css";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.logo}>qanibal</div>

				<section className={styles.section}>
					<ul>
						<li>
							<Link href='#'>
								<a>Release Athens</a>
							</Link>
						</li>
						<li>
							<Link href='#'>
								<a>Wikodid</a>
							</Link>
						</li>
						<li>
							<Link href='#'>
								<a>Help</a>
							</Link>
						</li>
					</ul>
				</section>
			</div>

			<p className={styles.small}>
				&copy; Copyright 2022 - All rights reserved - Wikodid
			</p>
		</footer>
	);
};

export default Footer;
