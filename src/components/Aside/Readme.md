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
