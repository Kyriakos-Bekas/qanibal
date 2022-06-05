import { useRef } from "react";
import Event from "@/components/Release/EventCarousel/Event/Event";

import styles from "@/components/Release/EventCarousel/EventCarousel.module.css";

const EventsCarousel = ({ bands }) => {
	const slider = useRef();

	let sliderGrabbed = false;

	const handleMouseDown = () => {
		sliderGrabbed = true;
		slider.current.style.cursor = "grabbing";
	};

	const handleMouseUp = () => {
		sliderGrabbed = false;
		slider.current.style.cursor = "grab";
	};

	const handleMouseLeave = () => {
		sliderGrabbed = false;
		slider.current.style.cursor = "grab";
	};

	const handleMouseMove = (e) => {
		if (sliderGrabbed) slider.current.scollLeft -= e.movementX;
	};

	const handleWheel = (e) => (slider.current.scrollLeft += e.deltaY);

	return (
		<div className={styles["slider-wrapper"]}>
			<div className={styles.slider} ref={slider}>
				<div
					className={styles["slider-inner"]}
					onMouseDown={handleMouseDown}
					onMouseUp={handleMouseUp}
					onMouseLeave={handleMouseLeave}
					onMouseMove={(e) => handleMouseMove(e)}
					onWheel={(e) => handleWheel(e)}>
					{bands.map((band) => (
						<Event key={band.title} title={band.title} img={band.img} />
					))}
				</div>
			</div>
		</div>
	);
};

export default EventsCarousel;
