import React, { Component } from 'react';
import cx from 'classnames';
import _ from 'lodash';
import PropTypes from 'prop-types';

export type PaginationProps = {
	defaultPage?: number;
	/** current page */
	page?: number;
	/** total pages number */
	pages?: number;
	className?: string;
	onChange?(page: number): void;
};

type PaginationState = {
	internalPage?: number;
	prevPropsPage?: number;
	numbers: number[];
};

const prefixCls = 'ts-rc-pagination';

class Pagination extends Component<PaginationProps, PaginationState> {
	static propTypes = {
		defaultPage: PropTypes.number,
		/** current page */
		page: PropTypes.number,
		/** total pages number */
		pages: PropTypes.number,
		className: PropTypes.string,
		/** (index: number)=> void */
		onChange: PropTypes.func
	};
	state: PaginationState = {
		internalPage: this.props.defaultPage,
		prevPropsPage: this.props.page,
		numbers: []
	};

	render() {
		const { pages, className } = this.props;
		const { numbers } = this.state;
		const current = this.page;

		if (!numbers.length) {
			return null;
		}

		const hasPrev = current !== 1;
		const hasNext = current !== pages;
		const hasHiddenPrev = numbers[0] !== 1;
		const hasHiddenNext = numbers[numbers.length - 1] !== pages;

		return (
			<div className={cx(prefixCls, className)}>
				<button type="button" disabled={!hasPrev} onClick={this.goFirst}>
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
						<path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"></path>
					</svg>
				</button>
				<button type="button" disabled={!hasPrev} onClick={this.goPrev}>
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
						<path d="M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z"></path>
					</svg>
				</button>
				<span
					className={cx(`${prefixCls}-pages`, {
						[`${prefixCls}-pages--more`]: hasHiddenNext,
						[`${prefixCls}-pages--less`]: hasHiddenPrev
					})}
				>
					{numbers.map(page => (
						<button
							key={page}
							type="button"
							onClick={() => current !== page && this.setCurrent(page)}
							className={cx({
								[`${prefixCls}-btn--active`]: current === page
							})}
						>
							<span>{page}</span>
						</button>
					))}
				</span>
				<button type="button" disabled={!hasNext} onClick={this.goNext}>
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
						<path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z"></path>
					</svg>
				</button>
				<button type="button" disabled={!hasNext} onClick={this.goLast}>
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
						<path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"></path>
					</svg>
				</button>
			</div>
		);
	}

	componentDidMount() {
		this.updateNumbers();
	}

	// TODO: use `getDerivedStateFromProps` when we don't support react v15 no longer
	componentDidUpdate(prevProps: PaginationProps) {
		if (prevProps.pages !== this.props.pages) {
			// always update number
			this.updateNumbers();
		} else if (prevProps.page !== this.props.page) {
			// updated page by user instead of onChange, page possible out of numbers
			if (this.state.numbers.indexOf(this.page) === -1) {
				this.updateNumbers();
			}
		}
	}

	private get page(): number {
		const { page } = this.props;
		return _.isNumber(page) ? page : this.state.internalPage || 0;
	}

	private updateNumbers() {
		const { pages } = this.props;
		if (!pages || pages < 1) {
			this.setState({ numbers: [] });
			return;
		}
		const page = this.page;
		let start: number | undefined, end: number | undefined;

		// e.g. page = 7 pages = 8, should generate 3 4 5 6 7
		if (page > 5) {
			end = page;
		} else {
			start = 1;
		}
		// init numbers
		const numbers = this.generateNumbers({ start, end });
		if (numbers.indexOf(page) === -1) {
			this.setCurrent(numbers[0]);
		}
	}

	private generateNumbers({ start, end }: { start?: number; end?: number }) {
		const { pages } = this.props;
		const numbers: number[] = [];

		if (!start && !end) {
			start = 1;
		}

		if (start) {
			for (let i = start; i < start + 5 && i <= pages!; i++) {
				numbers.push(i);
			}
		} else if (end) {
			for (let i = end; i > end - 5 && i >= 1; i--) {
				numbers.push(i);
			}
			numbers.reverse();
		}
		this.setState({ numbers });

		return numbers;
	}

	private setCurrent(current: number): Promise<boolean> {
		const page = this.page;
		return new Promise(resolve => {
			if (this.props.onChange) {
				this.props.onChange(current);
			}
			this.setState(
				{
					internalPage: current
				},
				() => {
					resolve(page !== this.page);
				}
			);
		});
	}

	private goFirst = async () => {
		const changed = await this.setCurrent(1);

		if (changed) {
			this.generateNumbers({ start: 1 });
		}
	};

	private goPrev = async () => {
		const { numbers } = this.state;
		const current = this.page;
		const changed = await this.setCurrent(this.page - 1);
		if (changed && numbers.indexOf(current - 1) === -1) {
			this.generateNumbers({ start: numbers[0] - 1 });
		}
	};

	private goNext = async () => {
		const { numbers } = this.state;
		const current = this.page;
		const changed = await this.setCurrent(current + 1);
		if (changed && numbers.indexOf(current + 1) === -1) {
			this.generateNumbers({ start: numbers[0] + 1 });
		}
	};

	private goLast = async () => {
		const changed = await this.setCurrent(this.props.pages!);
		if (changed) {
			this.generateNumbers({ end: this.props.pages });
		}
	};
}

export default Pagination;
