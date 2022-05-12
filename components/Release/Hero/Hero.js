import styles from "@/components/Release/Hero/Hero.module.css";

const Hero = () => {
	return (
		<section className={styles.hero}>
			<h1 className={styles.headline}>
				<span className={styles.container}>
					Release <span className={styles["the-earth"]}>the earth</span>
				</span>
				<span className={styles["from-plastic"]}>from plastic</span>
			</h1>

			<p className={styles.date}>8 Ιουνίου - 23 Ιουλίου 2022</p>

			<img src='/overlay-var-2.png' alt='overlay' className={styles.overlay} />
			<img
				src='/hero-overlay-tablet.png'
				alt='overlay'
				className={styles["overlay-tablet"]}
			/>
			<img src='/hero-banner.jpg' alt='Banner' className={styles.banner} />
		</section>
	);
};

export default Hero;
