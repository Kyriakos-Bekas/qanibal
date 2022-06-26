import Head from "next/head";
import Navigation from "@/components/Release/Navigation/Navigation";
import Hero from "@/components/ReleaseEn/Hero/Hero";
import Menus from "@/components/ReleaseEn/Menus/Menus";
import TodaysEvents from "@/components/ReleaseEn/TodaysEvents/TodaysEvents";
import UpcomingLineups from "@/components/ReleaseEn/UpcomingLineups/UpcomingLineups";
import Map from "@/components/ReleaseEn/Map/Map";
import Transport from "@/components/ReleaseEn/Transport/Transport";
import Footer from "@/components/ReleaseEn/Footer/Footer";

import styles from "@/styles/Home.module.css";

import { lineups, transportLinks, catalogues } from "@/data/en/data";

let counter = 5;

const Home = () => {
	return (
		<>
			<Head>
				<link rel='icon' type='image/svg+xml' href='/favicon.svg' />
				<link rel='icon' type='image/png' href='/favicon.png' />

				<title>Release Athens 2022 - Festival | Qanibal</title>
				<meta
					name='description'
					content='This is the Release Athens Event webpage. Powered by Wikodid: Qanibal.'
				/>
				<meta
					name='keywords'
					content='Release, Athens, Festival, Event, Qanibal, Wikodid, Metal, Rock'
				/>
			</Head>

			<Navigation locale='en' />

			<Hero />

			<main className={styles.main}>
				<Menus catalogues={catalogues} />
				<TodaysEvents
					bands={lineups[counter].bands}
					date={lineups[counter].date}
				/>
				<UpcomingLineups
					lineups={
						counter + 1 <= lineups.length
							? lineups.filter((lineup, index) => index > counter)
							: []
					}
				/>
				<Map />
				<Transport transportLinks={transportLinks} />
			</main>

			<Footer />
		</>
	);
};

export default Home;
