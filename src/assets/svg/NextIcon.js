import * as React from 'react';

function NextIcon(props) {
	return (
		<svg
			width={7}
			height={12}
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				d='M.292.294a.996.996 0 000 1.41l3.88 3.88-3.88 3.88a.997.997 0 001.41 1.41l4.59-4.59a.996.996 0 000-1.41L1.702.284c-.38-.38-1.02-.38-1.41.01z'
				fill={props.color}
			/>
		</svg>
	);
}

export default NextIcon;