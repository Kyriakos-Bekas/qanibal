import styles from "@/components/Release/Hero/Hero.module.css";

const Hero = () => {
	return (
		<section className={styles.hero}>
			{/* <img
				src='/hero/release-logo.png'
				alt='Release Athens Logo'
				className={styles.logo}
			/>

			<h1 className={styles["hero-title"]}>
				Returns
				<span>bigger</span>
				than ever
			</h1>

			<p className={styles.date}>June 8th - July 23rd 2022</p>

			<img src='/hero/banner.jpg' alt='Banner' className={styles.banner} /> */}

			<img
				src='/banner.png'
				alt='Banner'
				className={`${styles.banner} ${styles["banner-mobile"]}`}
			/>
			<img
				src='/banner-tablet.png'
				alt='Banner'
				className={`${styles.banner} ${styles["banner-tablet"]}`}
			/>
			<img
				src='/banner-desktop.png'
				alt='Banner'
				className={`${styles.banner} ${styles["banner-desktop"]}`}
			/>
		</section>
	);
};

export default Hero;
