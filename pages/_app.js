import Head from "next/head";

import "@/styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link rel='icon' type='image/svg+xml' href='/favicon.svg' />
				<link rel='icon' type='image/png' href='/favicon.png' />
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
