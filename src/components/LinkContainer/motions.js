export const containerVariants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			type: "spring",
			staggerChildren: 0.125,
		},
	},
	exit: { opacity: 0 },
};
