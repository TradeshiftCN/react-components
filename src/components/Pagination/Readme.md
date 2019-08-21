### Basic Usage

```jsx
<Pagination
	pages={10}
	defaultPage={2}
	onChange={page => {
		console.log(page);
	}}
/>
```

### Two-way binding

#### Fixed
```jsx
<Pagination page={4} pages={13} />
```
#### Update with callback
```jsx
initialState = { page: 3 };
<Pagination
	page={state.page}
	pages={13}
	onChange={page => {
		setState({ page: page });
	}}
/>;
```
