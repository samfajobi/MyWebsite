import styled from 'styled-components';
import { Link } from 'react-scroll';

const ArrowWrap = styled(Link)`
	.arrowContainer {
		position: relative;
		right: 0;
		display: inline-block;
		-webkit-transform: translate(0, -50%);
		-moz-transform: translate(0, -50%);
		-ms-transform: translate(0, -50%);
		-o-transform: translate(0, -50%);
		transform: translate(0, -50%);
		color: #fff;
		transition: opacity 0.3s;
	}

	.arrowSection .arrowContainer span:nth-of-type(1) {
		-webkit-animation-delay: 1s;
		-moz-animation-delay: 1s;
		animation-delay: 1s;
	}

	.arrowContainer span:nth-of-type(2) {
		top: 16px;
		-webkit-animation-delay: 0.2s;
		-moz-animation-delay: 0.2s;
		animation-delay: 0.2s;
	}

	.arrowContainer span:nth-of-type(3) {
		top: 32px;
		-webkit-animation-delay: 0.3s;
		-moz-animation-delay: 0.3s;
		animation-delay: 0.3s;
	}

	.arrowContainer span:nth-of-type(4) {
		top: 48px;
		-webkit-animation-delay: 0.4s;
		-moz-animation-delay: 0.4s;
		animation-delay: 0.4s;
	}
	span {
		position: absolute;
		display: inline-block;
		top: 0;
		right: 0;
		width: 1.2rem;
		height: 1.2rem;
		border-left: 0.2rem solid #fff;
		border-bottom: 0.2rem solid #fff;
		-webkit-transform: rotate(-45deg);
		transform: rotate(-45deg);
		-webkit-animation: arrowDown 1s infinite;
		-moz-animation: arrowDown 1s infinite;
		-ms-animation: arrowDown 1s infinite;
		-o-animation: arrowDown 1s infinite;
		animation: arrowDown 1s infinite;
		opacity: 0.5;
		box-sizing: border-box;
	}

	@keyframes arrowDown {
		0% {
			opacity: 0.2;
		}

		50% {
			opacity: 0.5;
		}

		100% {
			opacity: 1;
		}
	}
`;

const ArrowNavigation = ({to}) => {
	return (
		<ArrowWrap
			className='absolute z-20 cursor-pointer right-6 lg:right-36 bottom-20 2xl:right-1/4'
			to={to}
			spy={true}
			smooth={true}
			offset={-70}
			duration={1000}
		>
			<div className='arrowSection arrowContainer r'>
				<span className=''></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</ArrowWrap>
	);
};

export default ArrowNavigation;