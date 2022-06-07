import Link from "next/link";

import styles from "@/components/Release/Transport/TransportLink/TransportLink.module.css";

const TransportLink = (props) => {
	return (
		<Link href={props.url}>
			<a className={styles.link} target='_blank' rel='noopener'>
				<img src={props.img.src} alt={props.img.alt} className={styles.logo} />
				<span>{props.title}</span>
				<img src='/other/link.png' alt='link' className={styles.icon} />
			</a>
		</Link>
	);
};

export default TransportLink;
