import React, { Component } from 'react';
import cx from 'classnames';
import _ from 'lodash';
import PropTypes from 'prop-types';

export type SearchProps = React.HTMLProps<HTMLInputElement> &
	React.HTMLAttributes<HTMLInputElement> & {
		value?: string;
		defaultValue?: string;
		onChange?(value: string): void;
		onSearch?(value: string): void;
		idleTime?: number;
		className?: string;
	};

type SearchState = {
	value: string;
	prevPropsValue: string;
};

const prefixCls = 'ts-rc-search';

class Search extends Component<SearchProps, SearchState> {
	static propTypes = {
		value: PropTypes.string,
		defaultValue: PropTypes.string,
		/** (value: string)=> void */
		onChange: PropTypes.func,
		/** (value: string)=> void */
		onSearch: PropTypes.func,
		/** call onSearch when triggered input event and idleTime as delay */
		idleTime: PropTypes.number,
		className: PropTypes.string
	};
	public state: SearchState;
	private inputRef?: HTMLInputElement | null;
	private debounceSubmit?: ReturnType<typeof _.debounce>;
	constructor(props: SearchProps) {
		super(props);
		const value = !_.isNil(props.value) ? props.value : props.defaultValue || '';
		this.state = {
			value,
			prevPropsValue: value
		};
		this.updateDebounceSubmit(props.onSearch, props.idleTime);
	}
	render() {
		const { className } = this.props;
		const inputProps = _.omit(this.props, [
			'value',
			'defaultValue',
			'onChange',
			'onSearch',
			'idleTime',
			'className'
		]);
		const { value } = this.state;

		return (
			<div className={cx(prefixCls, className)}>
				<i className={`ts-icon-search ${prefixCls}-search-icon`}></i>
				<input
					type="text"
					value={value}
					onChange={this.handleChange}
					onKeyDown={this.handleKeyDown}
					ref={ref => (this.inputRef = ref)}
					{...inputProps}
				/>
				{!!value && (
					<i
						className={`ts-icon-remove ${prefixCls}-remove-icon`}
						onClick={this.handleClickRemoveBtn}
					></i>
				)}
			</div>
		);
	}

	// FIXME: support react v15
	public componentWillReceiveProps(nextProps: SearchProps) {
		const { value = '' } = nextProps;
		if (value !== this.state.prevPropsValue) {
			this.setState({
				value,
				prevPropsValue: value
			});
		}

		if (this.props.onSearch !== nextProps.onSearch || this.props.idleTime !== nextProps.idleTime) {
			this.updateDebounceSubmit(nextProps.onSearch, nextProps.idleTime);
		}
	}

	private updateValue(value: string) {
		const { onChange } = this.props;

		this.setState({
			value
		});

		if (onChange) {
			onChange(value);
		}

		if (this.debounceSubmit) {
			this.debounceSubmit(value);
		}
	}

	private manualSearch(value: string) {
		if (this.props.onSearch) {
			this.props.onSearch(value);
			if (this.debounceSubmit) {
				this.debounceSubmit.cancel();
			}
		}
	}

	private handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.updateValue(e.currentTarget.value);
	};

	private handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (this.props.onKeyDown) {
			this.props.onKeyDown(e);
		}
		if (e.keyCode === 13) {
			e.preventDefault();
			this.manualSearch(e.currentTarget.value);
		}
	};

	private handleClickRemoveBtn = () => {
		this.updateValue('');
		this.focusInput();
	};

	private focusInput() {
		if (this.inputRef) {
			this.inputRef.focus();
		}
	}

	private updateDebounceSubmit(onSearch?: (value: string) => void, idleTime?: number) {
		if (onSearch && idleTime) {
			this.debounceSubmit = _.debounce((v: string) => {
				onSearch(v);
			}, idleTime);
		} else {
			this.debounceSubmit = undefined;
		}
	}
}

export default Search;
