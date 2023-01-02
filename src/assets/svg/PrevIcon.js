import * as React from 'react';

function PrevIcon(props) {
	return (
		<svg
			width={7}
			height={12}
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				d='M6.292 10.872a.996.996 0 000-1.41l-3.88-3.88 3.88-3.88a.997.997 0 00-1.41-1.41l-4.59 4.59a.996.996 0 000 1.41l4.59 4.59c.38.38 1.02.38 1.41-.01z'
				fill={props.color}
			/>
		</svg>
	);
}

export default PrevIcon;
