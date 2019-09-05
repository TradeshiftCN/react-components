### Basic Usage

_Note: Normally onSearch callback will be called when press enter key and click clear btn_

```jsx
<Search
	placeholder="Search amongst all the things"
	onSearch={value => alert(`Your input is '${value}'`)}
/>
```

### Debounce

_Note: That will listen input/change event additionally and call onSearch after delay_

```jsx
initialState = { value: '' };
<div>
	<Search onSearch={value => setState({ value })} idleTime={500} />
	{state.value && (
		<p
			style={{
				marginTop: 16
			}}
		>
			Your input is '{state.value}'
		</p>
	)}
</div>;
```
