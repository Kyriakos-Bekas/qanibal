import Link from "next/link";

import styles from "@/components/Release/Footer/Footer.module.css";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.logo}>
					<img src='/logos/qanibal/logo-full.svg' alt='Qanibal Logo' />
				</div>

				<section className={styles.section}>
					<ul>
						<li>
							<Link href='https://www.releaseathens.gr/'>
								<a>Release Athens</a>
							</Link>
						</li>
						<li>
							<Link href='https://www.wikodid.com/'>
								<a>Wikodid</a>
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
