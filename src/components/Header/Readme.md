### Basic Usage

```jsx
initialState = { theme: 'white' };

<div>
	<Header
		title="Title"
		icon="logo.svg"
		theme={state.theme}
		backButton={true}
		forwardButton={{
			onClick() {
				alert('click forward button');
			}
		}}
	/>
	<div style={{ marginTop: '16px' }}>
		Change theme:
		{['white', 'blue'].map(v => (
			<label style={{ margin: '0 5px', cursor: 'pointer' }} key={v}>
				{v}{' '}
				<input
					type="radio"
					name="theme"
					onChange={e => setState({ theme: v })}
					value={v}
					checked={v === state.theme}
				/>
			</label>
		))}
	</div>
</div>;
```

### Customize elements

```jsx
<Header
	title="Title"
	icon="logo.svg"
	backButton={<button>&lt;-back</button>}
	forwardButton={<button>forward-&gt;</button>}
/>
```

### Buttons

_Note: buttons aside wasn't implemented_

```jsx
import { Button } from '@tradeshift/react-components';
<Header
	title="Title"
	icon="logo.svg"
	buttons={[<Button type="primary">primary</Button>, <Button>default</Button>]}
/>;
```

### Tabs

_Note: TabPane shouldn't has children when working together with Header_

```jsx
import { Tabs } from '@tradeshift/react-components';
const { TabPane } = Tabs;
initialState = { activeTab: '2' };

<div>
	<Header
		title="Title"
		icon="logo.svg"
		tabs={
			<Tabs onChange={key => setState({ activeTab: key })} activeKey={state.activeTab}>
				<TabPane tab="One" key="1" />
				<TabPane tab="Two" key="2" />
				<TabPane tab="Three" key="3" />
			</Tabs>
		}
	/>
	<p style={{ marginTop: '16px' }}>active tab key: {state.activeTab}</p>
</div>;
```

### Search

```jsx
import { Search } from '@tradeshift/react-components';

<Header
	title="Title"
	icon="logo.svg"
	search={
		<Search onSearch={v => alert(`Your input is '${v}'`)} placeholder="Press enter to search" />
	}
/>;
```
