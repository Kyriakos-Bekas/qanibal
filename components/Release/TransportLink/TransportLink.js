// Importing styles
import styles from "@/components/Release/TransportLink/TransportLink.module.css";

// Importing Components
import Link from "next/link";

const TransportLink = (props) => {
	return (
		<Link href={props.url}>
			<a className={styles.link} target='_blank' rel='noopener'>
				<img src={props.img.src} alt={props.img.alt} className={styles.logo} />
				<span>{props.title}</span>
				<img
					src='https://cdn-icons-png.flaticon.com/512/154/154843.png'
					alt='link'
					className={styles.icon}
				/>
			</a>
		</Link>
	);
};

export default TransportLink;
