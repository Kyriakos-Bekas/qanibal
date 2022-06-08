import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";
import { useEffect } from "react";

import * as ga from "@/lib/google-analytics/index";

import "@/styles/globals.css";

function MyApp({ Component, pageProps }) {
	const router = useRouter();

	useEffect(() => {
		const handleRouteChange = (url) => {
			ga.pageview(url);
		};

		router.events.on("routeChangeComplete", handleRouteChange);

		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [router.events]);

	return (
		<>
			<Head>
				<link rel='icon' type='image/svg+xml' href='/favicon.svg' />
				<link rel='icon' type='image/png' href='/favicon.png' />
			</Head>
			<Script
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
				strategy='afterInteractive'
			/>

			<Script id='google-analytics-script' strategy='afterInteractive'>
				{`
							window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());
						  
							gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
						`}
			</Script>

			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
