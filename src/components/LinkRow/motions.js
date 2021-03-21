export const itemMotions = {
	variants: {
		hidden: { opacity: 0, y: -25 },
		show: {
			opacity: 1,
			y: 0,
			transition: {
				type: "spring",
				duration: 0.2,
				damping: 10,
			},
		},
		exit: { opacity: 0, y: 25 },
	},
};
