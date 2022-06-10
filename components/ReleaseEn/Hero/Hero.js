import styles from "@/components/Release/Hero/Hero.module.css";

const Hero = () => {
	return (
		<section className={styles.hero}>
			<img
				src='/en/banner.png'
				alt='Banner'
				className={`${styles.banner} ${styles["banner-mobile"]}`}
			/>
			<img
				src='/en/banner-tablet.png'
				alt='Banner'
				className={`${styles.banner} ${styles["banner-tablet"]}`}
			/>
			<img
				src='/en/banner-desktop.png'
				alt='Banner'
				className={`${styles.banner} ${styles["banner-desktop"]}`}
			/>
		</section>
	);
};

export default Hero;
