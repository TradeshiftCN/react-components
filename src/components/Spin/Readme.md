### Basic Usage

```jsx
<Spin size="small"/>
<Spin />
<Spin size="large"/>
```

### Embedded mode

```jsx
initialState = { spinning: false, blocking: false };
<div>
	<Spin
		spinning={state.spinning}
		blocking={state.blocking}
		tip="Loading..."
		style={{
			border: '1px solid red'
		}}
	>
		<p>content...</p>
		<p>content...</p>
		<p>content...</p>
		<p>content...</p>
		<p>content...</p>
		<p>content...</p>
		<p>content...</p>
	</Spin>
	<label style={{ lineHeight: '30px' }}>
		Loading state:
		<input
			type="checkbox"
			checked={state.spinning}
			onChange={e => setState({ spinning: e.target.checked })}
		/>
	</label>
	<br />
	<label style={{ lineHeight: '30px' }}>
		Blocking state:
		<input
			type="checkbox"
			checked={state.blocking}
			onChange={e => setState({ blocking: e.target.checked })}
		/>
	</label>
</div>;
```
