// Importing Styles
import styles from "@/styles/Release.module.css";

// Importing Components
import Head from "next/head";
import Navigation from "@/components/Release/Navigation/Navigation";
import Hero from "@/components/Release/Hero/Hero";
import TodaysEvents from "@/components/Release/TodaysEvents/TodaysEvents";
import UpcomingLineups from "@/components/Release/UpcomingLineups/UpcomingLineups";
import Transport from "@/components/Release/Transport/Transport";
import Sponsors from "@/components/Release/Sponsors/Sponsors";
import Footer from "@/components/Release/Footer/Footer";
import Map from "@/components/Release/Map/Map";

const events = [
	{
		id: 1,
		title: "Lorem ipsum 1",
		duration: "18:00-20:30",
		stage: "Stage XYZ",
		thumbnail: {
			url: "https://www.releaseathens.gr/wp-content/uploads/2022/04/Square-event-cover-PAROV-1024x1024.jpg",
			alt: "Band Thumbnail",
		},
	},
	{
		id: 2,
		title: "Lorem ipsum 2",
		duration: "18:00-20:30",
		stage: "Stage XYZ",
		thumbnail: {
			url: "https://www.releaseathens.gr/wp-content/uploads/2022/04/Square-event-cover-PAROV-1024x1024.jpg",
			alt: "Band Thumbnail",
		},
	},
	{
		id: 3,
		title: "Lorem ipsum 3",
		duration: "18:00-20:30",
		stage: "Stage XYZ",
		thumbnail: {
			url: "https://www.releaseathens.gr/wp-content/uploads/2022/04/Square-event-cover-PAROV-1024x1024.jpg",
			alt: "Band Thumbnail",
		},
	},
	{
		id: 4,
		title: "Lorem ipsum 4",
		duration: "18:00-20:30",
		stage: "Stage XYZ",
		thumbnail: {
			url: "https://www.releaseathens.gr/wp-content/uploads/2022/04/Square-event-cover-PAROV-1024x1024.jpg",
			alt: "Band Thumbnail",
		},
	},
	{
		id: 5,
		title: "Lorem ipsum 5",
		duration: "18:00-20:30",
		stage: "Stage XYZ",
		thumbnail: {
			url: "https://www.releaseathens.gr/wp-content/uploads/2022/04/Square-event-cover-PAROV-1024x1024.jpg",
			alt: "Band Thumbnail",
		},
	},
];

const lineups = [
	{
		date: "Τετάρτη 8/6/2022",
		thumbnail: {
			src: "https://www.releaseathens.gr/wp-content/uploads/2022/02/Square-event-cover-Bauhaus-JAMC-Deus-300x300.jpg",
			alt: "thumbnail",
		},
		bands: [
			{
				title: "Bauhaus",
				img: {
					src: "https://www.releaseathens.gr/wp-content/uploads/2021/12/bauhaus-450x450.jpg",
					alt: "thumbnail",
				},
			},
			{
				title: "The Jesus And mary Chain",
				img: {
					src: "https://www.releaseathens.gr/wp-content/uploads/2022/02/JAMC1-1-450x450.jpg",
					alt: "thumbnail",
				},
			},
			{
				title: "Deus",
				img: {
					src: "https://www.releaseathens.gr/wp-content/uploads/2022/02/deus-450x450.jpg",
					alt: "thumbnail",
				},
			},
		],
	},
	{
		date: "Τετάρτη 15/6/2022",
		thumbnail: {
			src: "https://www.releaseathens.gr/wp-content/uploads/2021/12/Square-event-cover-Cave-Mog-Font-300x300.jpg",
			alt: "thumbnail",
		},
		bands: [
			{
				title: "Nick Cave & The Bad Seeds",
				img: {
					src: "https://www.releaseathens.gr/wp-content/uploads/2021/11/preview-gallery-nick-cave-the-bad-seeds-450x450.jpg",
					alt: "thumbnail",
				},
			},
			{
				title: "Mogwai",
				img: {
					src: "https://www.releaseathens.gr/wp-content/uploads/2021/11/mogwai2022-1-450x450.jpg",
					alt: "thumbnail",
				},
			},
			{
				title: "Fontaines D.C.",
				img: {
					src: "https://www.releaseathens.gr/wp-content/uploads/2021/12/a18e33c3_Paul-Good-Night-Films-450x450.jpg",
					alt: "thumbnail",
				},
			},
		],
	},
	{
		date: "Σάββατο 18/6/2022",
		thumbnail: {
			src: "https://www.releaseathens.gr/wp-content/uploads/2022/04/Square-event-cover-PAROV-300x300.jpg",
			alt: "thumbnail",
		},
		bands: [
			{
				title: "Parov Stelar",
				img: {
					src: "https://www.releaseathens.gr/wp-content/uploads/2021/11/Wuschelkopf-c-Parov-Stelar-450x450.jpg",
					alt: "thumbnail",
				},
			},
			{
				title: "ARTBAT",
				img: {
					src: "https://www.releaseathens.gr/wp-content/uploads/2022/04/artist-450x450.jpg",
					alt: "thumbnail",
				},
			},
		],
	},
	{
		date: "Τετάρτη 22/6/2022",
		thumbnail: {
			src: "https://www.releaseathens.gr/wp-content/uploads/2021/11/Square-event-cover-manowar-300x300.jpg",
			alt: "thumbnail",
		},
		bands: [
			{
				title: "Manowar",
				img: {
					src: "https://www.releaseathens.gr/wp-content/uploads/2021/11/TFB2019-FR_5107-band_APPR-450x450.jpg",
					alt: "thumbnail",
				},
			},
			{
				title: "Rotting Christ",
				img: {
					src: "https://www.releaseathens.gr/wp-content/uploads/2021/12/preview-full-RC-image-450x450.jpg",
					alt: "thumbnail",
				},
			},
			{
				title: "Rhapsody of Fire",
				img: {
					src: "https://www.releaseathens.gr/wp-content/uploads/2022/02/BAND-151-Edit-Final-low-450x450.jpg",
					alt: "thumbnail",
				},
			},
		],
	},
	{
		date: "Σάββατο 25/6/2022",
		thumbnail: {
			src: "https://www.releaseathens.gr/wp-content/uploads/2022/05/Square-event-cover-pavlidis-aggelakas-300x300.jpg",
			alt: "thumbnail",
		},
		bands: [
			{
				title: "Γιάννης Αγγελάκας & 100°C",
				img: {
					src: "https://www.releaseathens.gr/wp-content/uploads/2022/05/apogiortisegiorti_016-450x450.jpg",
					alt: "thumbnail",
				},
			},
			{
				title: "Παύλος Παυλίδης & Hotel Alaska",
				img: {
					src: "https://www.releaseathens.gr/wp-content/uploads/2022/05/PAVLOS-450x450.jpg",
					alt: "thumbnail",
				},
			},
			{
				title: "Παιδί Τραύμα",
				img: {
					src: "https://www.releaseathens.gr/wp-content/uploads/2022/05/%CE%A0%CE%B1%CE%B9%CE%B4%CE%B9-%CE%A4%CF%81%CE%B1%CF%85%CE%BC%CE%B1_Eftychia-Vlachou_web-res_19-450x450.jpg",
					alt: "thumbnail",
				},
			},
		],
	},
	{
		date: "Δευτέρα 27/6/2022",
		thumbnail: {
			src: "https://www.releaseathens.gr/wp-content/uploads/2022/03/Square-event-cover-LGLPHP-300x300.jpg",
			alt: "thumbnail",
		},
		bands: [
			{
				title: "London Grammar",
				img: {
					src: "https://www.releaseathens.gr/wp-content/uploads/2021/12/preview-full-LG_artist_image_1000x1000-450x450.jpg",
					alt: "thumbnail",
				},
			},
			{
				title: "LP",
				img: {
					src: "https://www.releaseathens.gr/wp-content/uploads/2022/03/IMG_3589-450x450.jpeg",
					alt: "thumbnail",
				},
			},
			{
				title: "Hooverphonic",
				img: {
					src: "https://www.releaseathens.gr/wp-content/uploads/2022/03/HVpress3_%C2%A9-Willy-Vanderperre-450x450.jpg",
					alt: "thumbnail",
				},
			},
		],
	},
	{
		date: "Πέμπτη 30/6/2022",
		thumbnail: {
			src: "https://www.releaseathens.gr/wp-content/uploads/2022/05/Square-event-cover-PSBTCKB-300x300.jpg",
			alt: "thumbnail",
		},
		bands: [
			{
				title: "Pet Shop Boys",
				img: {
					src: "https://www.releaseathens.gr/wp-content/uploads/2021/11/pet-shop-boys-2-450x450.jpg",
					alt: "thumbnail",
				},
			},
			{
				title: "Thievery Corporation",
				img: {
					src: "https://www.releaseathens.gr/wp-content/uploads/2022/04/thieverycorporation-450x450.jpg",
					alt: "thumbnail",
				},
			},
			{
				title: "K. BHTA",
				img: {
					src: "https://www.releaseathens.gr/wp-content/uploads/2022/05/%CE%9A%CE%92-release-450x450.jpg",
					alt: "thumbnail",
				},
			},
		],
	},
	{
		date: "Σάββατο 2/7/2022",
		thumbnail: {
			src: "https://www.releaseathens.gr/wp-content/uploads/2022/01/Square-event-cover-iggy-liam-300x300.jpg",
			alt: "thumbnail",
		},
		bands: [
			{
				title: "Iggy Pop",
				img: {
					src: "https://www.releaseathens.gr/wp-content/uploads/2021/11/preview-full-iggypop-21-450x450.jpg",
					alt: "thumbnail",
				},
			},
			{
				title: "Liam Gallagher",
				img: {
					src: "https://www.releaseathens.gr/wp-content/uploads/2021/11/preview-full-Liam_Gallagher-450x450.jpg",
					alt: "thumbnail",
				},
			},
			{
				title: "Sleaford Mods",
				img: {
					src: "https://www.releaseathens.gr/wp-content/uploads/2021/12/6b64f59a_OP20088_AM_Sleaford_Mods_5166_06_sRGB-450x450.jpg",
					alt: "thumbnail",
				},
			},
			{
				title: "The K's",
				img: {
					src: "https://www.releaseathens.gr/wp-content/uploads/2021/12/Photo-Sep-23-6-46-02-PM-450x450.jpg",
					alt: "thumbnail",
				},
			},
		],
	},
	{
		date: "Παρασκευή 15/7/2022",
		thumbnail: {
			src: "https://www.releaseathens.gr/wp-content/uploads/2022/02/Square-event-cover-Judas-1-300x300.jpg",
			alt: "thumbnail",
		},
		bands: [
			{
				title: "Judas Priest",
				img: {
					src: "https://www.releaseathens.gr/wp-content/uploads/2021/11/Judas-priest-promo-shot-450x450.jpg",
					alt: "thumbnail",
				},
			},
			{
				title: "Cradle of Filth",
				img: {
					src: "https://www.releaseathens.gr/wp-content/uploads/2022/02/CRADLE-OF-FILTH_HIGH-RES-SHARROCK-_MG_4093-1-450x450.jpeg",
					alt: "thumbnail",
				},
			},
			{
				title: "The Dead Daisies",
				img: {
					src: "https://www.releaseathens.gr/wp-content/uploads/2022/02/The-Dead-Daisies-Band-Pic-2-Hi-Res-450x450.jpg",
					alt: "thumbnail",
				},
			},
		],
	},
	{
		date: "Τρίτη 19/7/2022",
		thumbnail: {
			src: "https://www.releaseathens.gr/wp-content/uploads/2021/11/Clutch-Square-event-cover-300x300.jpg",
			alt: "thumbnail",
		},
		bands: [
			{
				title: "Clutch",
				img: {
					src: "https://www.releaseathens.gr/wp-content/uploads/2021/11/17-4-Clutch-by-Dave-Brodsky-450x450.jpg",
					alt: "thumbnail",
				},
			},
		],
	},
	{
		date: "Πέμπτη 21/7/2022",
		thumbnail: {
			src: "https://www.releaseathens.gr/wp-content/uploads/2021/12/Square-event-cover-sabaton-blind-epica-300x300.jpg",
			alt: "thumbnail",
		},
		bands: [
			{
				title: "Sabaton",
				img: {
					src: "https://www.releaseathens.gr/wp-content/uploads/2021/11/SABATON-PRESS-01-450x450.jpg",
					alt: "thumbnail",
				},
			},
			{
				title: "Blind Guardian",
				img: {
					src: "https://www.releaseathens.gr/wp-content/uploads/2021/11/0-450x450.jpg",
					alt: "thumbnail",
				},
			},
			{
				title: "Epica",
				img: {
					src: "https://www.releaseathens.gr/wp-content/uploads/2021/12/Epica-band-1-by-Tim-Tronckoe-450x450.jpg",
					alt: "thumbnail",
				},
			},
		],
	},
	{
		date: "Σάββατο 23/7/2022",
		thumbnail: {
			src: "https://www.releaseathens.gr/wp-content/uploads/2021/12/Square-event-cover-SlipknotSepultura-300x300.jpg",
			alt: "thumbnail",
		},
		bands: [
			{
				title: "Slipknot",
				img: {
					src: "https://www.releaseathens.gr/wp-content/uploads/2021/11/slipknot-450x450.jpg",
					alt: "thumbnail",
				},
			},
			{
				title: "Sepultura",
				img: {
					src: "https://www.releaseathens.gr/wp-content/uploads/2021/12/sepultura01-450x450.jpg",
					alt: "thumbnail",
				},
			},
		],
	},
];

export default function Release() {
	return (
		<>
			<Head>
				<title>Release Athens | Qoncept</title>
				<meta
					name='description'
					content='This is the Release Athens Event webpage. Powered by Wikodid: Qoncept.'
				/>
				<meta
					name='keywords'
					content='Release, Athens, Festival, Event, Qoncept, Wikodid, Metal, Rock'
				/>
			</Head>
			<Navigation />
			<Hero />

			<main className={styles.main}>
				<TodaysEvents bands={lineups[3].bands} date={lineups[3].date} />
				<UpcomingLineups lineups={lineups} />

				<Map />
				<Transport />
				<Sponsors />
			</main>

			<Footer />
		</>
	);
}
