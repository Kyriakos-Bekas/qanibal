import { useRef, useEffect } from "react";

// Importing Styles
import styles from "@/components/Release/EventCarousel/backup/EventCarousel copy";

// Importing Components
import Event from "@/components/Release/Event/Event";

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

const TodaysEvents = () => {
	const slider = useRef();
	const sliderInner = useRef();

	let pressed = false;
	let startX;
	let x;

	useEffect(() => {
		window.addEventListener("mouseup", () => (pressed = false));

		window.addEventListener("touchend", () => (pressed = false));
	}, []);

	const checkBoundary = () => {
		let outer = slider.current.getBoundingClientRect();
		let inner = sliderInner.current.getBoundingClientRect();

		if (parseInt(sliderInner.current.style.left) > 0)
			sliderInner.current.style.left = "0px";
		else if (inner.right > outer.right)
			sliderInner.current.style.left = `-${inner.width - outer.width}px`;
	};

	// Desktop
	const handleMouseDown = (e) => {
		pressed = true;
		startX = e.nativeEvent.offsetX - sliderInner.current.offsetLeft;
		slider.current.style.cursor = "grabbing";
	};

	const handleMouseEnter = () => (slider.current.style.cursor = "grab");
	const handleMouseUp = () => (slider.current.style.cursor = "grab");

	const handleMouseMove = (e) => {
		if (!pressed) return;

		e.preventDefault();

		x = e.nativeEvent.offsetX;
		sliderInner.current.style.left = `${x - startX}px`;

		checkBoundary();
	};

	// Mobile
	const handleTouchStart = (e) => {
		pressed = true;
		startX = e.targetTouches[0].clientX - sliderInner.current.offsetLeft;
	};

	const handleTouchMove = (e) => {
		if (!pressed) return;

		e.preventDefault();

		x = e.touches[0].clientX;

		sliderInner.current.style.left = `${x - startX}px`;

		checkBoundary();
	};

	return (
		<div
			className={styles.slider}
			ref={slider}
			onMouseDown={(e) => handleMouseDown(e)}
			onMouseEnter={handleMouseEnter}
			onMouseUp={handleMouseUp}
			onMouseMove={(e) => handleMouseMove(e)}
			onTouchStart={(e) => handleTouchStart(e)}
			onTouchMove={(e) => handleTouchMove(e)}
			style={{ gridTemplateColumns: `repeat(${events.length}, 280px)` }}>
			<div className={styles["slider-inner"]} ref={sliderInner}>
				{events.map((event) => (
					<Event
						key={event.id}
						title={event.title}
						duration={event.duration}
						stage={event.stage}
						thumbnail={event.thumbnail}
					/>
				))}
			</div>
		</div>
		// <div className={styles["carousel-container"]}>
		// 	{events.map((event) => (
		// 		<Event
		// 			key={event.id}
		// 			title={event.title}
		// 			duration={event.duration}
		// 			stage={event.stage}
		// 			thumbnail={event.thumbnail}
		// 		/>
		// 	))}
		// </div>
	);
};

export default TodaysEvents;
