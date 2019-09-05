### Basic Usage

```jsx
const { TabPane } = Tabs;
const onChange = key => {
	console.log(key);
};

<Tabs defaultActiveKey="2" onChange={onChange}>
	<TabPane tab="One" key="1">
		first
	</TabPane>
	<TabPane tab="Two" key="2">
		second
	</TabPane>
	<TabPane tab="Three" key="3">
		third
	</TabPane>
</Tabs>;
```

For more options, please view [rc-tabs](https://github.com/react-component/tabs)