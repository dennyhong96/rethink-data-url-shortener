export const mainMotions = {
	initial: "initial",
	animate: "animate",
	exit: "exit",
	variants: {
		initial: { opacity: 0, scale: 0.95, y: -15 },
		animate: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				type: "spring",
				duration: 1,
			},
		},
		exit: { opacity: 0, scale: 0.95, y: 15 },
	},
};
