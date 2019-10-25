import * as React from 'react';
import cx from 'classnames';

export interface SpinIconProps {
	size: number;
	prefixCls: string;
	tip?: string;
	className?: string;
	style?: React.CSSProperties;
}

export default function SpinIcon(props: SpinIconProps) {
	const strips = [];
	const { size } = props;
	const stripWidth = size * 0.28;
	const stripHeight = size * 0.06;
	const duration = 0.08 * 12;
	for (let i = 0; i < 12; i++) {
		strips.push(
			<div
				className={`${props.prefixCls}__strip`}
				key={i}
				style={{
					width: stripWidth,
					height: stripHeight,
					transformOrigin: `${size / 2}px 0px`,
					transform: `rotate(${i * 30}deg) translateY(-50%)`,
					animationDelay: `${0.08 * i}s`,
					animationDuration: `${duration}s`
				}}
			/>
		);
	}
	return (
		<div className={cx(props.prefixCls, props.className)} style={props.style}>
			<div
				className={`${props.prefixCls}__strips`}
				style={{
					width: size,
					height: size
				}}
			>
				{strips}
			</div>
			{props.tip && <div className={`${props.prefixCls}__tip`}>{props.tip}</div>}
		</div>
	);
}
