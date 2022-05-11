import { useRef } from "react";

// Importing Styles
import styles from "@/components/Release/Navigation/Navigation.module.css";

// Importing Components
import Link from "next/link";

const ReleaseNav = () => {
	const navigation = useRef();
	const overlay = useRef();

	const navOpenClass = styles["nav-open"];

	const handleClick = () => {
		navigation.current.classList.toggle(navOpenClass);

		navigation.current.classList.contains(navOpenClass)
			? (overlay.current.style.pointerEvents = "all")
			: (overlay.current.style.pointerEvents = "none");
	};

	return (
		<nav className={styles.navigation} ref={navigation}>
			<div className={styles.logo}>naviQ</div>

			<div className={styles.overlay} ref={overlay} onClick={handleClick}></div>

			<ul className={styles["nav-links"]}>
				<li>
					<Link href='/events/release'>
						<a>Something</a>
					</Link>
				</li>
				<li>
					<Link href='/events/release'>
						<a>Something</a>
					</Link>
				</li>
				<li>
					<Link href='/events/release'>
						<a>Something</a>
					</Link>
				</li>
				<li>
					<Link href='/events/release'>
						<a>Something</a>
					</Link>
				</li>
				<li>
					<Link href='/events/release'>
						<a>Something</a>
					</Link>
				</li>
			</ul>

			<div className={styles.burger} onClick={handleClick}>
				<div className={styles["line-1"]}></div>
				<div className={styles["line-2"]}></div>
				<div className={styles["line-3"]}></div>
			</div>
		</nav>
	);
};

export default ReleaseNav;
