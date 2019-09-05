import React from 'react';
import { shallow } from 'enzyme';
import Header from '..';
import Button from '../../Button';
import Search from '../../Search';
import Tabs from '../../Tabs';

describe('Header', () => {
	it('basic', () => {
		const wrapper = shallow(
			<Header
				title="title"
				tabs={<Tabs />}
				search={<Search />}
				buttons={[<Button>btn 1</Button>, <Button>btn 2</Button>]}
				backButton={true}
				forwardButton={<button>forward</button>}
			/>
		);

		expect(wrapper).toMatchSnapshot();
	});
});
