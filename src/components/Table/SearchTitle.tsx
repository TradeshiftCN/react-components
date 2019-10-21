import React, { Component } from 'react';
import cx from 'classnames';
import _ from 'lodash';
import { Column, Key } from './interface';

type SearchTitleProps<T> = {
	column: Column<T>;
	prefixCls: string;
	activeColumn?: Key;
	isActive: boolean;
	columnKey: Key;
	setActiveColumn(key?: Key): void;
	value: string;
	/** 用于和上层传入的 value 双向绑定 */
	onChange(text: string): void;
	onSearch(text: string): void;
};

type SearchTitleState = {
	originTitleWidth: number;
	debounceSearch?(text: string): void;
};

type EventCallback = (e: Event) => void;

let activeSearchTitle: SearchTitle<any>;

document.addEventListener('click', (e: MouseEvent) => {
	const el = e.target;
	if (
		el &&
		activeSearchTitle &&
		activeSearchTitle.rootRef &&
		!activeSearchTitle.rootRef.contains(el as Node)
	) {
		activeSearchTitle.props.setActiveColumn();
	}
});

class SearchTitle<T> extends Component<SearchTitleProps<T>, SearchTitleState> {
	static defaultTriggers = ['enter'];
	private titleTextRef?: HTMLSpanElement | null;
	private inputRef?: HTMLInputElement | null;
	public rootRef?: HTMLDivElement | null;

	state: SearchTitleState = {
		originTitleWidth: 80
	};

	render() {
		const { column, prefixCls, setActiveColumn, isActive, columnKey, value } = this.props;
		const events = this.generateEventProps();
		const showInput = isActive || !!value;
		const activeEvents: { [key: string]: () => void } = {};

		if (!showInput) {
			activeEvents.onClick = () => {
				activeSearchTitle = this;
				setActiveColumn(columnKey);
			};
		}

		return (
			<div
				ref={ref => (this.rootRef = ref)}
				className={cx({
					[`${prefixCls}-search-title`]: true,
					[`${prefixCls}-search-title--input`]: showInput
				})}
				{...activeEvents}
			>
				<i className={cx('ts-icon-search', `${prefixCls}-search-title-search-icon`)}></i>
				<span ref={ref => (this.titleTextRef = ref)}>
					{showInput ? (
						<input
							style={{ width: this.state.originTitleWidth }}
							ref={ref => (this.inputRef = ref)}
							value={value}
							autoFocus
							{...events}
						/>
					) : (
						column.title
					)}
				</span>
				{!!value && (
					<i
						className={cx('ts-icon-remove', `${prefixCls}-search-title-clear-icon`)}
						onClick={() => {
							this.props.onChange('');
							(this.state.debounceSearch || this.search)('');
							setActiveColumn();
						}}
					></i>
				)}
			</div>
		);
	}

	componentDidMount() {
		this.updateOriginTitleWidth();
		this.updateDebounceSearch();
	}

	componentDidUpdate(prevProps: SearchTitleProps<T>) {
		if (prevProps.isActive && !this.props.isActive) {
			this.updateOriginTitleWidth();
		}

		if (prevProps.column.searchDebounceTime !== this.props.column.searchDebounceTime) {
			this.updateDebounceSearch();
		}
	}

	private updateOriginTitleWidth() {
		const titleText = this.titleTextRef;
		const columnWidth = this.props.column.width;
		let width = 80;

		if (columnWidth && _.isNumber(columnWidth)) {
			width = (this.props.column.width as number) - 20 - 30; // parent padding and search btn
		} else if (titleText && !this.props.isActive) {
			width = titleText.getBoundingClientRect().width;
		}

		width -= 30; // clear btn

		if (width > 0) {
			this.setState({
				originTitleWidth: width
			});
		}
	}

	private search = (text: string) => {
		this.props.onSearch(text);
	};

	private updateDebounceSearch() {
		const debounceTime = this.props.column.searchDebounceTime;
		this.setState({
			debounceSearch: debounceTime ? _.debounce(this.search, debounceTime) : undefined
		});
	}

	private generateEventProps() {
		const events: { [key: string]: EventCallback } = {};
		const { column } = this.props;
		const callback = this.state.debounceSearch || this.search;
		const updateValue = this.props.onChange;
		const triggers =
			column.searchTriggers === true ? SearchTitle.defaultTriggers : column.searchTriggers;

		(triggers as string[]).forEach(trigger => {
			let k: string,
				v: EventCallback = (e: Event) => callback((e.target as HTMLInputElement).value);
			switch (trigger) {
				case 'input':
					k = 'onChange';
					v = (e: Event) => {
						const text = (e.target as HTMLInputElement).value;
						updateValue(text);
						callback(text);
					};
					break;
				case 'blur':
					k = 'onBlur';
					break;
				case 'enter':
					k = 'onKeyDown';
					v = (e: Event) => {
						if ((e as KeyboardEvent).keyCode === 13) {
							const text = (e.target as HTMLInputElement).value;
							callback(text);
						}
					};
					break;
				default:
					return;
			}
			events[k] = v;
		});

		if (!events.onChange) {
			events.onChange = (e: Event) => updateValue((e.target as HTMLInputElement).value);
		}

		return events;
	}
}

export default SearchTitle;
