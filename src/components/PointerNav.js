import styled from 'styled-components';
import { Link } from 'react-scroll';

const PointerWrap = styled.section`
	.content {
		background: rgba(4, 58, 91, 0.6);
	}

	.active-vis,
	.active-ind {
		display: none;
	}

	.main-active:hover > .active-vis,
	.main-active:hover > .active-ind {
		display: flex;
	}

	.active {
		.active-vis,
		.active-ind {
			display: flex !important;
		}
		.pointer-ind {
			border: 1px solid #e5bd5c;
            width: 0.3rem;
            border-radius: 0.3rem
		}
	}

	.indicator {
		border-top: 1px solid #e5bd5c;
	}
`;

const data = [
	{ title: 'Home', to: 'home' },
	{ title: 'About', to: 'about' },
	{ title: 'Work', to: 'projects' },
	{ title: 'Skills', to: 'skills' },
	{ title: 'Contact', to: 'contact' },
];

const PointerNav = () => {
	return (
		<PointerWrap className='fixed z-20 hidden lg:block right-8 top-1/3'>
			{data.map((story, i) => (
				<Link
					key={i}
					className='w-28 flex cursor-pointer h-8 items-center mb-1'
					to={story.to}
					spy={true}
					smooth={true}
					offset={-70}
					duration={1000}
				>
					<div className='w-full h-full relative main-active'>
						<div
							className={`content capitalize w-full h-full text-white flex pl-3 items-center text-xs active-vis`}
						>
							{story.title}
						</div>
						<span
							className={`indicator w-4 absolute right-0 top-2/4 active-ind`}
						></span>
					</div>
					<span className='border border-white h-full pointer-ind'></span>
				</Link>
			))}
		</PointerWrap>
	);
};

export default PointerNav;
