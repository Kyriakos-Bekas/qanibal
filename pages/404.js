import Link from "next/link";

import styles from "@/styles/404.module.css";

const NotFound = () => {
	return (
		<div className={styles.container}>
			<h1>404</h1>
			<h2>
				Oops... Seems like the page you are looking for doesn&apos;t exist
			</h2>

			<Link href='/'>
				<a>Go to Home</a>
			</Link>
		</div>
	);
};

export default NotFound;
