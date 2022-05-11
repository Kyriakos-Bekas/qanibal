// Importing Styling
import styles from "@/components/Release/SponsorLink/SponsorLink.module.css";

// Importing Components
import Link from "next/link";

const SponsorLink = ({ img }) => {
	return (
		<Link href='#'>
			<a className={styles.link} rel='noopener'>
				<img src={img.src} alt={img.alt} className={styles["logo-img"]} />
			</a>
		</Link>
	);
};

export default SponsorLink;
