export const containerMotions = {
	initial: "hidden",
	animate: "show",
	exit: "exit",
	variants: {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				type: "spring",
				staggerChildren: 0.125,
			},
		},
		exit: { opacity: 0 },
	},
};
