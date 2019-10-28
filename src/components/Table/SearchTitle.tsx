import React, { Component } from 'react';
import cx from 'classnames';
import _ from 'lodash';
import { Column, Key } from './interface';

type SearchTitleProps<T> = {
	column: Column<T>;
	prefixCls: string;
	isActive: boolean;
	columnKey: Key;
	setActiveColumn(key?: Key): void;
	value: string;
	/** 用于和上层传入的 value 双向绑定 */
	onChange(text: string): void;
	onSearch(text: string): void;
};

type SearchTitleState = {
	debounceSearch?(text: string): void;
};

type EventCallback = (e: Event) => void;

class SearchTitle<T> extends Component<SearchTitleProps<T>, SearchTitleState> {
	static defaultTriggers = ['enter'];
	public rootRef?: HTMLDivElement | null;

	state: SearchTitleState = {};

	render() {
		const { column, prefixCls, setActiveColumn, isActive, columnKey, value } = this.props;
		const events = this.generateEventProps();
		const showInput = isActive || !!value;
		const activeEvents: { [key: string]: () => void } = {};

		if (!showInput) {
			activeEvents.onClick = () => {
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
				<span className={`${prefixCls}-search-title__text`}>{column.title}</span>
				{showInput && (
					<input
						value={value}
						type="text"
						autoFocus
						onBlur={() => {
							if (this.props.isActive) {
								this.props.setActiveColumn();
							}
						}}
						{...events}
					/>
				)}
				{!!value && (
					<i
						className={cx('ts-icon-remove', `${prefixCls}-search-title-clear-icon`)}
						onClick={() => {
							this.props.onChange('');
							(this.state.debounceSearch || this.search)('');
						}}
					></i>
				)}
			</div>
		);
	}

	componentDidMount() {
		this.updateDebounceSearch();
	}

	componentDidUpdate(prevProps: SearchTitleProps<T>) {
		if (prevProps.column.searchDebounceTime !== this.props.column.searchDebounceTime) {
			this.updateDebounceSearch();
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
					v = (e: Event) => {
						const text = (e.target as HTMLInputElement).value;
						if (this.props.isActive) {
							this.props.setActiveColumn();
						}
						callback(text);
					};
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
