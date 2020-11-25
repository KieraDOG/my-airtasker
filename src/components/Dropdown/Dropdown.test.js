import React from 'react';
import { shallow } from 'enzyme';
import Dropdown from './Dropdown';

// Maintainable, Reusable
// Readable!!!!

describe('<Dropdown />', () => {
  it('renders dropdown children', () => {
    const wrapper = shallow((
      <Dropdown
        items={[{
          key: 'MY_ITEM',
          content: (<div id="item">My Item</div>)
        }]}
      >
        <div id="children">My Dropdown</div>
      </Dropdown>
    ));

    expect(wrapper.find('#children')).toHaveLength(1);
  });

  it('skips dropdown items when not visible', () => {
    const wrapper = shallow((
      <Dropdown
        items={[{
          key: 'MY_ITEM',
          content: (<div id="item">My Item</div>)
        }]}
      >
        <div id="children">My Dropdown</div>
      </Dropdown>
    ));

    expect(wrapper.find('#item')).toHaveLength(0);
  });

  it('renders dropdown items when visible', () => {
    const wrapper = shallow((
      <Dropdown
        visible
        items={[{
          key: 'MY_ITEM',
          content: (<div id="item">My Item</div>)
        }]}
      >
        <div id="children">My Dropdown</div>
      </Dropdown>
    ));

    expect(wrapper.find('#item')).toHaveLength(1);
  });
});
