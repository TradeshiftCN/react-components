### Basic Usage

```jsx
import { Button } from '@tradeshift/react-components';

initialState = {
	visible: false
};

<div>
	<Button type="primary" onClick={() => setState({ visible: true })}>
		Open
	</Button>
	<Aside
		visible={state.visible}
		onClose={() => setState({ visible: false })}
		title="Aside"
		style={{ whiteSpace: 'pre' }}
	>
		{new Array(100).fill('row\n\r')}
	</Aside>
</div>;
```

### Multi-level Aside

```jsx
import { Button } from '@tradeshift/react-components';

const level1 = React.createRef();
const level2 = React.createRef();

initialState = {
	level1Visible: false,
	level2Visible: false,
	level3Visible: false
};

<div>
	<Button type="primary" onClick={() => setState({ level1Visible: true })}>
		Open level 1
	</Button>
	<Aside
		ref={level1}
		visible={state.level1Visible}
		onClose={() => setState({ level1Visible: false })}
		title="Level 1"
	>
		<Button type="primary" onClick={() => setState({ level2Visible: true })}>
			Open level 2
		</Button>
		<Aside
			ref={level2}
			visible={state.level2Visible}
			onClose={() => setState({ level2Visible: false })}
			title="Level 2"
			parent={level1}
		>
			<Button type="primary" onClick={() => setState({ level3Visible: true })}>
				Open level 3
			</Button>
			<Aside
				visible={state.level3Visible}
				onClose={() => setState({ level3Visible: false })}
				title="Level 3"
				parent={[level1, level2]}
			>
				Level 3
			</Aside>
		</Aside>
	</Aside>
</div>;
```
