import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

import styles from "@/styles/404.module.css";

const NotFound = () => {
	const router = useRouter();
	const text = useRef();

	useEffect(() => {
		if (router.asPath.substring(1, 3) === "en") {
			text.current.textContent =
				"Oops... Seems like the page you are looking for doesn't exist";
		} else {
			text.current.textContent = "Η σελίδα που ψάχνεις δεν υπάρχει...";
		}
	}, []);

	return (
		<div className={styles.container}>
			<h1>404</h1>
			<h2 ref={text}></h2>
		</div>
	);
};

export default NotFound;
