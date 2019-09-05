### Basic Usage

```jsx
<Button type="primary">Primary</Button>
<Button type="warning">Warning</Button>
<Button type="danger">Danger</Button>
<Button>Default</Button>
```

### Icons

```jsx
<Button type="primary" icon="download"></Button>
<Button icon="download">Download</Button>
<Button icon="arrowleft" label="Go back"></Button>
<Button>Go forward <i className="ts-icon-arrowright"/></Button>
```

### Size

_Note: Don't use **small** size with **icon**_

```jsx
<Button type="primary" size="small">Primary</Button>
<Button size="small">Default</Button>
```

### Loading

```jsx
initialState = { loading: false };
<Button
	type="primary"
	loading={state.loading}
	onClick={() => {
		setState({ loading: true });
		setTimeout(() => {
			setState({ loading: false });
		}, 5000);
	}}
>
	Click me
</Button>;
```
