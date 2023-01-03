import Aos from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import styled from 'styled-components';

const SkewWrap = styled.div`
	&[data-aos='example-anim1'] {
		transform: skewX(45deg);
		opacity: 0;
		transition-property: transform, opacity;
		&.aos-animate {
			transform: skewX(0);
			opacity: 1;
		}
	}
`;

const SkewWraper = ({ children, data_attr = 'example-anim1' }) => {
	useEffect(() => {
		Aos.init({ duration: 2000 });
		return () => {};
	}, []);
	return (
		<div className='overflow-hidden'>
			<SkewWrap data-aos={data_attr}>{children}</SkewWrap>
		</div>
	);
};

export default SkewWraper;
