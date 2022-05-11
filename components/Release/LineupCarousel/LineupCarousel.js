import { useRef } from "react";

// Importing Styles
import styles from "@/components/Release/LineupCarousel/LineupCarousel.module.css";

// Importing Components
import Lineup from "@/components/Release/Lineup/Lineup";

const LineupCarousel = ({ lineups }) => {
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
					{lineups.map((lineup) => (
						<Lineup
							key={lineup.date}
							date={lineup.date}
							thumbnail={lineup.thumbnail}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default LineupCarousel;
