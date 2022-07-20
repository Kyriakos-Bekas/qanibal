import Head from "next/head";
import Navigation from "@/components/Release/Navigation/Navigation";
import Hero from "@/components/Release/Hero/Hero";
import Menus from "@/components/Release/Menus/Menus";
import TodaysEvents from "@/components/Release/TodaysEvents/TodaysEvents";
import UpcomingLineups from "@/components/Release/UpcomingLineups/UpcomingLineups";
import Map from "@/components/Release/Map/Map";
import Transport from "@/components/Release/Transport/Transport";
import Footer from "@/components/Release/Footer/Footer";

import styles from "@/styles/Home.module.css";

import { lineups, transportLinks, catalogues } from "@/data/data";

let counter = 10;

const Home = () => {
	return (
		<>
			<Head>
				<link rel='icon' type='image/svg+xml' href='/favicon.svg' />
				<link rel='icon' type='image/png' href='/favicon.png' />

				<title>Release Athens 2022 - Φεστιβάλ | Qanibal</title>
				<meta
					name='description'
					content='This is the Release Athens Event webpage. Powered by Wikodid: Qanibal.'
				/>
				<meta
					name='keywords'
					content='Release, Athens, Festival, Event, Qanibal, Wikodid, Metal, Rock'
				/>
			</Head>
			<Navigation locale='gr' />
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
