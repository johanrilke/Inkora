import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import styles from "./style.module.css";

interface PreloaderProps {
	onFinish: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onFinish }) => {
	const [stage, setStage] = useState(0);
	const [imageIndex, setImageIndex] = useState(0);
	const images = [
		"/loader/0.jpg",
		"/loader/1.jpg",
		"/loader/2.jpg",
		"/loader/3.jpg",
		"/loader/4.jpg",
	];
	const minDisplayTime = 1500;
	const slideUpDelay = 500;

	useEffect(() => {
		if (stage === 1 && imageIndex < images.length) {
			const delay = minDisplayTime / images.length;
			setTimeout(() => {
				setImageIndex(imageIndex + 1);
			}, delay);
		} else if (stage === 1 && imageIndex === images.length) {
			setTimeout(() => {
				setStage(2);
			}, slideUpDelay);
		}
	}, [stage, imageIndex, images.length]);

	const handleExitComplete = () => {
		onFinish();
	};

	const handleClick = () => {
		if (stage === 0) {
			setStage(1);
		}
	};

	return (
		<AnimatePresence onExitComplete={handleExitComplete}>
			{stage < 2 && (
				<motion.div
					initial={{ y: 0 }}
					animate={{ y: stage === 2 ? "-100%" : 0 }}
					exit={{ y: "-100%" }}
					transition={{ duration: 1 }}
					className={styles.preloader}
					onClick={handleClick}
				>
					{stage === 0 && (
						<div className={styles.textWrapper}>
							<motion.h1
								initial={{ opacity: 0, y: -50 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 1 }}
								className={styles.title}
							>
								Ashes to Art
							</motion.h1>
							<motion.p
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 1, delay: 1 }}
								className={styles.subtitle}
							>
								Click anywhere to continue
							</motion.p>
						</div>
					)}
					{stage === 1 && (
						<AnimatePresence>
							{imageIndex > 0 && (
								<motion.div
									key={imageIndex}
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									transition={{ duration: 0.25 }}
									className={styles.imageContainer}
								>
									<Image
										src={images[imageIndex - 1]}
										fill={true}
										alt=""
										className={styles.imageLoad}
									/>
								</motion.div>
							)}
						</AnimatePresence>
					)}
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Preloader;
