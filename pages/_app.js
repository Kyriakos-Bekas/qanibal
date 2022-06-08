import Head from "next/head";
import Script from "next/script";

import "@/styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Script
				src={`https://www.googletagmanager.com/gtag/js?id=G-1TV854HGBM`}
				strategy='afterInteractive'
			/>

			<Script id='google-analytics-script' strategy='afterInteractive'>
				{`
							window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());
						  
							gtag('config', 'G-1TV854HGBM');
						`}
			</Script>

			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
