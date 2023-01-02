import * as React from 'react';

function RightNavIcon(props) {
	return (
		<svg
			width={19}
			height={15}
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<g clipPath='url(#prefix__clip0)' stroke={props.color}>
				<path d='M0 7h17.873M11 0l7 7.07L11 14' />
			</g>
			<defs>
				<clipPath id='prefix__clip0'>
					<path fill='#fff' d='M0 0h19v15H0z' />
				</clipPath>
			</defs>
		</svg>
	);
}

export default RightNavIcon;
