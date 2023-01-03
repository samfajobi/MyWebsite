import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const FaderWrap = ({ children }) => {
	const controls = useAnimation();
	const [ref, inView] = useInView();

	useEffect(() => {
		if (inView) {
			controls.start('visible');
		}
	}, [controls, inView]);

	return (
		<motion.div
			ref={ref}
			animate={controls}
			initial='hidden'
			transition={{ duration: 0.6 }}
			variants={{
				visible: { opacity: 1, y: 0 },
				hidden: { opacity: 0, y: 100, },
			}}
		>
			{children}
		</motion.div>
	);
};

export default FaderWrap;
