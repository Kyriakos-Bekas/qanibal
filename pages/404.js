import styles from "@/styles/404.module.css";

const NotFound = () => {
	return (
		<div className={styles.container}>
			<h1>404</h1>
			<h2>The page you are looking for doesn't exist</h2>
		</div>
	);
};

export default NotFound;
