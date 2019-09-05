import React from 'react';
import PropTypes from 'prop-types';
import RcTabs, { TabPane } from 'rc-tabs';
import TabContent from 'rc-tabs/lib/TabContent';
import InkTabBar from 'rc-tabs/lib/InkTabBar';

type TabsProps = {
	activeKey?: string;
	defaultActiveKey?: string;
	renderTabBar?(): React.ReactNode;
	renderTabContent?(): React.ReactNode;
	onChange?(key: string): void;
	destroyInactiveTabPane?: boolean;
};

const prefixCls = 'ts-rc-tabs';

function Tabs(props: TabsProps) {
	return <RcTabs prefixCls={prefixCls} {...props} />;
}

Tabs.propTypes = {
	defaultActiveKey: PropTypes.string,
	/** ()=> React.ReactNode */
	renderTabBar: PropTypes.func,
	/** ()=> React.ReactNode */
	renderTabContent: PropTypes.func,
	/** (key: string)=> void */
	onChange: PropTypes.func,
	/** whether destroy inactive tabpane when change tab */
	destroyInactiveTabPane: PropTypes.bool
};

Tabs.defaultProps = {
	destroyInactiveTabPane: true,
	renderTabBar: () => <InkTabBar />,
	renderTabContent: () => <TabContent animated={false} />
};

Tabs.TabPane = TabPane;

export default Tabs;
